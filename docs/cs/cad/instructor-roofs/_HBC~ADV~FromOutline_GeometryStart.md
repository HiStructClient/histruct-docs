# Geometrie
Umožňuje měnit geometrické parametry modelu, tedy rozměry budovy a střechy včetně sklonu a přesahů. Rovněž je zde možné nastavit typ skladby střechy.

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
<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/ImportDxfIcon64x64.png" alt="ImportDxfIcon64x64.png" width="64" height="64">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
      Podklad
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px;">
      Podklad
    </td>
  </tr>
</table>

Tlačítko <u>Podklad</u> slouží k importu podkladu pro rychlejší kreslení obrysu střechy.

<b>Po importu pokladu je třeba zkontrolovat jeho rozměry a případně upravit měřítko.</b>

* Nastavení měřítka je možné změnit po importu podkladu kliknutím na šedé obdélníkové tlačítko v modelovacím prostoru.

#
<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/RoofBoundaryIcon64x64.png" alt="RoofBoundaryIcon64x64.png" width="64" height="64">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
      Obrys
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px;">
      Obrys
    </td>
  </tr>
</table>

Tlačítko <u>Obrys</u> slouží k zakreslení půdorysného obrysu střechy. Pro zadání délky a směru jednotlivých okapových hran je možné využít:

<b><u>Volné kreslení pomocí kurzoru</u></b>

* Hrany lze kreslit volným klikáním do modelovacího prostoru. 

* Během kreslení hran je možné využít funkce zarovnávání kurzoru podle směrů os X a Y, případně zarovnávání kurzoru kolmo k poslední zadané hraně.

<p>
<!-- Tlačítko pro otevření modálního videa -->
<button onclick="document.getElementById('modal0').style.display='flex';" class="btn">
  &#9654; Videoukázka
</button>
</p>

<!-- Modální okno (skryté) -->
<div id="modal0" style="
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
  <video id="modalVideo0" controls autoplay style="max-width: 90%; max-height: 80vh;">
    <source src="img/VideoOutlineFree.mp4" type="video/mp4">
    Váš prohlížeč nepodporuje přehrávání videa.
  </video>
  <br>
  <button onclick="
    document.getElementById('modal0').style.display='none';
    const vid = document.getElementById('modalVideo0');
    vid.pause();
    vid.currentTime = 0;
  " class="btn">
    Zavřít video
  </button>
</div>

<!-- Skript -->
<script>
  function openModal0() {
    const modal = document.getElementById("modalVideo0");
    modal.style.display = "flex";
    const video = document.getElementById("modalVideo0");
    video.muted = true;
    video.play();
  }

  function closeModal0() {
    const modal = document.getElementById("modalVideo0");
    modal.style.display = "none";
    const video = document.getElementById("modalVideo0");
    video.pause();
    video.currentTime = 0;
  }
</script>


<b><u>Globální souřadnice vrcholů polygonu</u></b>

* Globální souřadnice pro následující vrchol se zapíší ve formátu "X;Y", tedy např. <b>2;4</b>

<p>
<!-- Tlačítko pro otevření modálního videa -->
<button onclick="document.getElementById('modal1').style.display='flex';" class="btn">
  &#9654; Videoukázka
</button>
</p>

<!-- Modální okno (skryté) -->
<div id="modal1" style="
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
  <video id="modalVideo1" controls autoplay style="max-width: 90%; max-height: 80vh;">
    <source src="img/VideoOutlineGlobal.mp4" type="video/mp4">
    Váš prohlížeč nepodporuje přehrávání videa.
  </video>
  <br>
  <button onclick="
    document.getElementById('modal1').style.display='none';
    const vid = document.getElementById('modalVideo1');
    vid.pause();
    vid.currentTime = 0;
  " class="btn">
    Zavřít video
  </button>
</div>

<!-- Skript -->
<script>
  function openModal1() {
    const modal = document.getElementById("modalVideo1");
    modal.style.display = "flex";
    const video = document.getElementById("modalVideo1");
    video.muted = true;
    video.play();
  }

  function closeModal1() {
    const modal = document.getElementById("modalVideo1");
    modal.style.display = "none";
    const video = document.getElementById("modalVideo1");
    video.pause();
    video.currentTime = 0;
  }
</script>

<b><u>Relativní souřadnice vrcholů polygonu</u></b>

* Relativní souřadnice pro následující vrchol se zapíší ve formátu "@X;Y", tedy např. <b>@2;4</b>

<p>
<!-- Tlačítko pro otevření modálního videa -->
<button onclick="document.getElementById('modal2').style.display='flex';" class="btn">
  &#9654; Videoukázka
</button>
</p>

<!-- Modální okno (skryté) -->
<div id="modal2" style="
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
  <video id="modalVideo2" controls autoplay style="max-width: 90%; max-height: 80vh;">
    <source src="img/VideoOutlineRelative.mp4" type="video/mp4">
    Váš prohlížeč nepodporuje přehrávání videa.
  </video>
  <br>
  <button onclick="
    document.getElementById('modal2').style.display='none';
    const vid = document.getElementById('modalVideo2');
    vid.pause();
    vid.currentTime = 0;
  " class="btn">
    Zavřít video
  </button>
</div>

<!-- Skript -->
<script>
  function openModal2() {
    const modal = document.getElementById("modalVideo2");
    modal.style.display = "flex";
    const video = document.getElementById("modalVideo2");
    video.muted = true;
    video.play();
  }

  function closeModal2() {
    const modal = document.getElementById("modalVideo2");
    modal.style.display = "none";
    const video = document.getElementById("modalVideo2");
    video.pause();
    video.currentTime = 0;
  }
</script>

<b><u>Polární souřadnice vrcholů polygonu</u></b>

* Polární souřadnice pro následující vrchol se zapíší ve formátu ">alfa;L", tedy např. <b>>135;6</b>
* Zadávaný úhel se odměřuje o kladného směru globální osy X proti směru hodinových ručiček.

<p>
<!-- Tlačítko pro otevření modálního videa -->
<button onclick="document.getElementById('modal3').style.display='flex';" class="btn">
  &#9654; Videoukázka
</button>
</p>

<!-- Modální okno (skryté) -->
<div id="modal3" style="
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
  <video id="modalVideo3" controls autoplay style="max-width: 90%; max-height: 80vh;">
    <source src="img/VideoOutlinePolar.mp4" type="video/mp4">
    Váš prohlížeč nepodporuje přehrávání videa.
  </video>
  <br>
  <button onclick="
    document.getElementById('modal3').style.display='none';
    const vid = document.getElementById('modalVideo3');
    vid.pause();
    vid.currentTime = 0;
  " class="btn">
    Zavřít video
  </button>
</div>

<!-- Skript -->
<script>
  function openModal3() {
    const modal = document.getElementById("modalVideo3");
    modal.style.display = "flex";
    const video = document.getElementById("modalVideo3");
    video.muted = true;
    video.play();
  }

  function closeModal3() {
    const modal = document.getElementById("modalVideo3");
    modal.style.display = "none";
    const video = document.getElementById("modalVideo3");
    video.pause();
    video.currentTime = 0;
  }
</script>

Poslední vložený bod je možné smazat pomocí klávesy <b><u>DELETE</u></b>.

#
<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/ClassRectLoopIcon64x64.png" alt="ClassRectLoopIcon64x64.png" width="64" height="64">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
      Otvor
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px;">
      Otvor
    </td>
  </tr>
</table>

Tlačítkem <u>Otvor</u> je možné do vygenerované střešní roviny vsadit otvor, zakresluje se jako půdorysný průmět.

Otvor může být obdélníkový či obecného tvaru a lze mu přiřadit typ otvoru pro komín.

#
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
    <td style="vertical-align: middle; font-size: 20px;">
      Vlastnosti
    </td>
  </tr>
</table>

Umožňuje upravit způsob zadání geometrie, podle nastavení je možné kreslit obrys střechy nebo stěn.

#
<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/DeleteIcon64x64.png" alt="DeleteIcon64x64.png" width="64" height="64">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
      Smazat
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px;">
      Smazat
    </td>
  </tr>
</table>

Smaže všechny importované podklady a konstrukce zakreslené pomocí funkce <u>Obrys</u>.

#
<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/DimensionLinearIcon64x64.png" alt="DimensionLinearIcon64x64.png" width="64" height="64">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
      Anotace
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px;">
      Anotace
    </td>
  </tr>
</table>

Tlačítko <u>Anotace</u> umožňuje do modelu přidávat libovolné půdorysné kóty.

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
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/MainInsert64x64.png" alt="MainInsert64x64.png" width="64" height="64">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
      Přidat
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px;">
      Přidat
    </td>
  </tr>
</table>

Tlačítkem <u>Přidat</u> je možné do modelového prostoru přidat další konstrukce.

* Objekt s pultovou střechou na obdélníkovém půdorysu
* Objekt se sedlovou střechou na obdélníkovém půdorysu
* Další objekt definovaný obrysem
* Objekt určenou pomocí 3D souboru typu ".obj"

#

<style>
    .btn {
      margin-top: 0px;
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