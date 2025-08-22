import re
import string
import random
from pathlib import Path
from markupsafe import Markup
# from mkdocs_macros import MacrosPlugin

def id_generator(size=6, chars=string.ascii_uppercase + string.digits):
   return ''.join(random.choice(chars) for _ in range(size))

def render_icon(img_src, text, width, height, fontSize):
    img_tag = f'<img src="{img_src}" width="{width}" height="{height}">'
    if text:
      return f'''
    <div style="position: relative; width: {width}px; height: {height}px;">
      {img_tag}
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: {fontSize}px; text-align: center;">
        {text}
      </div>
    </div>'''.strip()
    return img_tag


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


    # vlastní snippet pro ikonu s textem
    @env.macro
    def box_icon(img, text, title, fontSize=12, width=0, height=0):
        if width == 0 and height == 0:
            width, height = 64, 64

        img = f"""<img src="{img}" {"width=" + str(width) + "\"" if width > 0 else ""} {"height=" + str(height) + "\"" if height > 0 else ""}>"""
        # if text is not null or empty
        if text:
            img = f"""
      <div style="position: relative; {"width: " + str(width) + "px;" if width > 0 else ""} {"height: " + str(height) + "px;" if height > 0 else ""}">
        {img}
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: {fontSize}px; text-align: center;">
          {text}
        </div>
      </div>
"""
        return f"""
<table>
  <tr>
    <td>
      {img}
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      {title}
    </td>
  </tr>
</table>
"""

    @env.macro
    def box_icons(items, title, fontSize=12, width=0, height=0, title_size=20, gap_px=1):
        if width == 0 and height == 0:
            width, height = 64, 64

        tds = []
        for it in items:
            if isinstance(it, (list, tuple)):
                img, text = (it + ("",))[:2]
            elif isinstance(it, dict):
                img = it.get("img") or it.get("src")
                text = it.get("text") or it.get("label") or ""
            else:
                img, text = str(it), ""
            tds.append(
                f'<td style="padding-right:{gap_px}px;">{render_icon(img, text, width, height, fontSize)}</td>'
            )

        title_td = f'<td style="vertical-align: middle; font-size:{title_size}px; padding-left:30px;">{title}</td>'
        cells = "\n    ".join(tds + [title_td])

        return f'''<table>
  <tr>
    {cells}
  </tr>
</table>'''


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