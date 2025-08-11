# Lemovky
Umožňuje měnit jednotlivé lemovací prvky včetně typu materiálu nebo barvy.

Tyto vlastnosti lze upravit pomocí tlačítek vlevo pro všechny lemovací prvky z dané skupiny. 

Vlastnosti jednotlivých prvků je možné měnit přímo kliknutím na jednotlivé prvky v modelu. Pro jednotlivé prvky je možné měnit i typ hrany.

<b><u>Počet skupin editovatelných lemovacích prvků se může měnit podle možností jednotlivých modelů.</u></b>

#
<style>
h2{
  border-bottom: none;
  margin-top: 10px;
  margin-bottom: 0px;
}
p{
  border-bottom: none;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>

## Editace skupin prvků pomocí tlačítek vlevo
Kliknutím na tlačítko lemovacího prvku na levé straně je možné editovat vlastnosti celé příslušné skupiny lemovacích prvků. 

<table>
  <tr>
    <td>
      <div style="position: relative; width: 55px; height: 55px;">
        <img src="img/FlashingGableTrimIcon64x64.png" alt="FlashingGableTrimIcon64x64.png" width="55" height="55">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
      Štít
      </div>
      </div>
    </td>
    <td>
      <div style="position: relative; width: 55px; height: 55px;">
        <img src="img/FlashingGutterIcon64x64.png" alt="FlashingGutterIcon64x64.png" width="55" height="55">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
      Okap
      </div>
      </div>
    </td>
    <td>
      <div style="position: relative; width: 55px; height: 55px;">
        <img src="img/FlashingGutterApronIcon64x64.png" alt="FlashingGutterApronIcon64x64.png" width="55" height="55">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
      Okapnice
      </div>
      </div>
    </td>
    <td>
      <div style="position: relative; width: 55px; height: 55px;">
        <img src="img/FlashingRidgeRidgeIcon64x64.png" alt="FlashingRidgeRidgeIcon64x64.png" width="55" height="55">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
      Hřeben
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px;">
      ... a další
    </td>
  </tr>
</table>

Provedené změny vlastností se propíší na všechny prvky spadající do určené skupiny.
#
## Editace jednotlivých prvků
Vlastnosti jednotlivých prvků je možné měnit přímo kliknutím na jednotlivé prvky v modelu. 

Pro jednotlivé prvky je možné měnit i typ hrany nebo prvky prodloužit o příslušnou délku.

<!-- Tlačítko pro otevření modálního videa -->
<button onclick="document.getElementById('modal').style.display='flex';" class="btn">
  Přehrát videoukázku
</button>

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
    <source src="img/VideoEditFlashing.mp4" type="video/mp4">
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
    const modal = document.getElementById("modalVideo");
    modal.style.display = "flex";
    const video = document.getElementById("modalVideo");
    video.muted = true;
    video.play();
  }

  function closeModal() {
    const modal = document.getElementById("modalVideo");
    modal.style.display = "none";
    const video = document.getElementById("modalVideo");
    video.pause();
    video.currentTime = 0;
  }
</script>

#
<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/TapeMeasureIcon64x64.png" alt="TapeMeasureIcon64x64.png" width="64" height="64">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
      Měření
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px;">
      Měření
    </td>
  </tr>
</table>
Tlačítkem <u>Měření</u> je možné zkontrolovat rozměry modelu.

#
<table>
  <tr>
    <td>
      <img src="img/AddButton.png" alt="AddButton.png" width="64">
    </td>
    <td style="vertical-align: middle; font-size: 20px;">
      Přidat
    </td>
  </tr> 
</table>

Tlačítko <u>Přidat</u> umožňuje přidat k příslušnému okapovému žlabu další okapový svod.

#

<style>
    .btn {
      margin-top: 0px;
      margin-bottom: 10px;
      padding: 12px 20px;
      background-color: rgb(27,122,187);
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
    }
    .btn:hover {
      background-color: rgb(20,90,140);
</style>

### Nepomohla Vám nápověda?
Pro více informací o funkcích HiStruct Building Configurator můžete navštívit náš blog nebo zaslat dotaz na naší podporu. 
<table>
  <tr>
    <td>
      <a href="https://docs.histruct.com/cs/"> 
        <button class="btn">
        Navštívit blog
        </button>
      </a>
    </td>
    <td>
      <a href="mailto:support@histruct.com?subject=Dotaz na Support HiStruct">
         <button class="btn">
         Zaslat dotaz
         </button>
      </a>
    </td>
  </tr>
</table>