import re
import string
import random
from pathlib import Path
from markupsafe import Markup
# from mkdocs_macros import MacrosPlugin

def id_generator(size=6, chars=string.ascii_uppercase + string.digits):
   return ''.join(random.choice(chars) for _ in range(size))

def define_env(env):
    DOCS_DIR = Path(env.project_dir) / env.conf['docs_dir']
    
    @env.macro
    def modal_video_button(videoUrl, format = "mp4"):
      lang = env.conf['theme']['language']
      t = env.conf['extra']['ui'][lang]
    
      modalVideoId = "video-modal" + id_generator()

      return f"""
<button onclick="openVideoModal('{modalVideoId}')" class="btn">
  {t['open_video']}
</button>

<!-- Modální okno (skryté) -->
<div id="{modalVideoId}" class="video-modal">
  <video id="modalVideo" controls autoplay>
    <source src="{videoUrl}" type="video/{format}">
    {t['unsupported_video']}
  </video>
  <br>
  <button onclick="closeVideoModal('{modalVideoId}')" class="btn">
    {t['close_video']}
  </button>
</div>
"""
    

    @env.macro
    def include_md(rel_path, start=None, end=None, heading_offset=0, as_html=False):
        """
        Vloží obsah jiného .md souboru.
        - rel_path: relativní cesta k souboru. 
          Pokud není nalezen v DOCS_DIR, hledá se relativně k souboru, kde je makro použito.
        - start/end: volitelné markery (řádek, např. "<!-- @snippet:start -->")
        - heading_offset: posun úrovně nadpisů (# -> ## atd.)
        """

        # 1) pokus najít podle DOCS_DIR
        candidate = DOCS_DIR / rel_path
        if not candidate.exists():
            # 2) fallback – relativně k aktuálnímu souboru
            current_page = Path(env.variables.page.file.abs_src_path)
            candidate = current_page.parent / rel_path

        if not candidate.exists():
            return f"**[include_md] file not found: {rel_path}**"

        src = candidate.read_text(encoding="utf-8")

        if start:
            # useknout vše před markerem start (včetně něj)
            m = re.search(rf"^[ \t]*{re.escape(start)}[ \t]*$", src, flags=re.MULTILINE)
            if not m:
                return f"**[include_md] start marker not found: {start} in {rel_path}**"
            src = src[m.end():]

        if end:
            # useknout vše za end markerem (včetně něj)
            m = re.search(rf"^[ \t]*{re.escape(end)}[ \t]*$", src, flags=re.MULTILINE)
            if not m:
                return f"**[include_md] end marker not found: {end} in {rel_path}**"
            src = src[:m.start()]

        if heading_offset:
            def bump(match):
                hashes = match.group(1)
                return "#" * (len(hashes) + heading_offset) + " "
            # Zvedne úroveň všech Markdown nadpisů
            src = re.sub(r"^(#{1,6})\s+", bump, src, flags=re.MULTILINE)

        # ↓ KLÍČOVÉ: převeď Markdown -> HTML
        # - Markdown necháme zpracovat MkDocs (vracíme prostý text)
        # - hotové HTML vrátíme jako Markup, aby se neescapovalo
        return Markup(src) if as_html else src