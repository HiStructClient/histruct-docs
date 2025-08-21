
<h1>Geometrie &gt; Pole</h1>
  <p>Umožňuje nastavit počet rámů primární nosné kosntrukce a rozteče polí mezi nimi při zachování nastavených půdorysných rozměrů.</p>

  <p><b><u>Ovládací tlačítka</u> upravují vlastnosti konstrukce pouze na vybrané stěnové rovině.</b></p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <h2>Editace jednotlivých polí</h2>
  <p><b>Délky a počty polí je možné upravovat po kliknutí na příslušný segment v otevřené tabulce.</b></p>

  <p>
  <!-- Tlačítko pro otevření modálního videa -->
  <button onclick="document.getElementById('modal').style.display='flex';" class="btn">
    Přehrát videoukázku
  </button>
</p>

<!-- Modální okno (skryté) -->
<div id="modal" style="
  display: none;
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 10000;
  justify-content: center;
  align-items: center;
  flex-direction: column;
">
  <video id="modalVideo" controls autoplay style="max-width: 90%; max-height: 80vh;">
    <source src="img/VideoEditBays.mp4" type="video/mp4">
    Váš prohlížeč nepodporuje přehrávání videa.
  </video>
  <br>
  <button onclick="
    document.getElementById('modal').style.display='none';
    const vid = document.getElementById('modalVideo');
    vid.pause();
    vid.currentTime = 0;
  " class="btn">
    Zavřít video
  </button>
</div>

<!-- Skript -->
<script>
  function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
    const video = document.getElementById("modalVideo");
    video.muted = true;
    video.play();
  }

  function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
    const video = document.getElementById("modalVideo");
    video.pause();
    video.currentTime = 0;
  }
</script>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <table>
    <tr>
      <td>
        <div style="position: relative; width: 64px; height: 64px;">
          <img src="img/EditPropertiesIcon64x64.png" alt="EditPropertiesIcon64x64.png" width="64" height="64">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
            Vlastnosti
          </div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
        Vlastnosti
      </td>
    </tr>
  </table>
  <p>Tlačítkem <u>Vlastnosti</u> je možné nastavit pravidla pro generování polí mezi rámy primární nosné konstrukce.</p>
  <p>Tytéž vlastnosti lze upravit pomocí <u>Ovládacího tlačítka</u> umístěného ve středu modelu.</p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <table>
    <tr>
      <td><img src="img/BayEditButton64.png" alt="BayEditButton64.png" width="64"></td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Rozteče</td>
    </tr> 
  </table>
  <p>Tlačítko <u>Rozteče</u> umožňuje upravit počet a délku polí mezi rámy hlavní nosné konstrukce.</p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <table>
    <tr>
      <td><img src="img/ControlButton.png" alt="ControlButton.png" width="64"></td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Ovládací tlačítko</td>
    </tr> 
  </table>
  <p><u>Ovládací tlačítko</u> umožňuje přidání a nastavení portálových rámů v rámci jednotlivých polí.</p>
  <p>Portálovým rámům je možné nastavit umístění pomocí vzdálenosti od konce pole a pomocí délky rámu. Rámu lze také nastavit vlastní výšku a případně vypnout jednotlivé sloupy.</p>
  <p>Rám je možné ve stejné tabulce také smazat, toto lze provést pomocí tlačítka vpravo nahoře.</p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <h2>Nepomohla Vám nápověda?</h2>
  <p>Pro více informací o funkcích HiStruct Building Configurator můžete navštívit náš blog nebo zaslat dotaz na naší podporu.</p>

  <table>
    <tr>
      <td>
        <a href="https://docs.histruct.com/cs/" target="_blank" rel="noopener noreferrer"> 
          <button class="btn">Navštívit blog</button>
        </a>
      </td>
      <td>
        <a href="mailto:support@histruct.com?subject=Dotaz na Support HiStruct">
          <button class="btn">Zaslat dotaz</button>
        </a>
      </td>
    </tr>
  </table>
