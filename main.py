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
