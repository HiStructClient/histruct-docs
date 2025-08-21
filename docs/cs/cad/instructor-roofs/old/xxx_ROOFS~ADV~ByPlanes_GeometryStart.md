
<h1>Geometrie</h1>
<p>
Umožňuje kreslit střešní roviny, měnit jejich tvary, rozměry či sklony, taktéž umožňuje nastavit typ skladby střechy.
</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->
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
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Podklad
    </td>
  </tr>
</table>

<p>Tlačítko <u>Podklad</u> slouží k importu podkladu pro rychlejší kreslení obrysu střechy.</p> 

<p>Po importu pokladu je třeba zkontrolovat jeho rozměry a případně upravit měřítko.</p>

<p><b><u>Úprava měřítka importovaného podkladu</u></b></p>

<ul>
<p><li>
Po kliknutí na mřížku importovaného podkladu je možné měřítko změnit přímo v příslušné buňce v otevřené tabulce. 
</li></p>

<p><li>
Pro úpravu měřítka je taktéž možné použít tlačítko <u>Měřítko</u>, které je umístěno v horní části otevřené tabulky. Pomocí tohoto tlačítka je možné nastavit měřítko podkladu pomocí zvolené hrany, u které známe její skutečné rozměry.
</li></p>
</ul>

<p>
  <button onclick="document.getElementById('modal5').style.display='flex';" class="btn">
    &#9654; Videoukázka
  </button>
</p>

<div id="modal5" style="
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
  <video id="modalVideo5" controls autoplay style="max-width: 90%; max-height: 80vh;">
    <source src="img/VideoImportDXF.mp4" type="video/mp4">
    Váš prohlížeč nepodporuje přehrávání videa.
  </video>
  <br>
  <button onclick="
    document.getElementById('modal5').style.display='none';
    const vid = document.getElementById('modalVideo5');
    vid.pause();
    vid.currentTime = 0;
  " class="btn">
    Zavřít video
  </button>
</div>

<script>
  function openModal5() {
    const modal = document.getElementById("modalVideo5");
    modal.style.display = "flex";
    const video = document.getElementById("modalVideo5");
    video.muted = true;
    video.play();
  }

  function closeModal5() {
    const modal = document.getElementById("modalVideo5");
    modal.style.display = "none";
    const video = document.getElementById("modalVideo5");
    video.pause();
    video.currentTime = 0;
  }
</script>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/TiledAreaGeneralIcon64x64.png" alt="TiledAreaGeneralIcon64x64.png" width="64" height="64">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
      Plocha
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Plocha
    </td>
  </tr>
</table>

<p>
Tlačítko <u>Plocha</u> slouží k zakreslení půdorysného obrysu střešní roviny. Střešní roviny lze kreslit pomocí předdefinovaných tvarů ploch:
</p>

<table>
  <tr>
    <td>
      <div style="position: relative; width: 55px; height: 55px;">
        <img src="img/GeneralLoopIcon64x64.png" alt="GeneralLoopIcon64x64.png" width="55" height="55">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
      Obecný
      </div>
      </div>
    </td>
    <td>
      <div style="position: relative; width: 55px; height: 55px;">
        <img src="img/ClassRectLoopIcon64x64.png" alt="ClassRectLoopIcon64x64.png" width="55" height="55">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
      Obdélník
      </div>
      </div>
    </td>
    <td>
      <div style="position: relative; width: 55px; height: 55px;">
        <img src="img/ClassTriangleLoopIcon64x64.png" alt="ClassTriangleLoopIcon64x64.png" width="55" height="55">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
      Trojúhelník
      </div>
      </div>
    </td>
    <td>
      <div style="position: relative; width: 55px; height: 55px;">
        <img src="img/ClassTrapezoidLoopIcon64x64.png" alt="ClassTrapezoidLoopIcon64x64.png" width="55" height="55">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
      Lichoběžník
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      ... a další
    </td>
  </tr>
</table>

<p>
Po zakreslení či vložení plochy je možné v závislosti na typu plochy upravovat její rozměry a sklon, a také výšku i směr okapové hrany v příslušné otevřené tabulce.
</p>

<hr> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
    <tr>
      <td>
        <div style="position: relative; width: 64px; height: 64px;">
          <img src="img/GeneralLoopIcon64x64.png" alt="GeneralLoopIcon64x64.png" width="64" height="64">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
            Obecný
          </div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
        Obecný
      </td>
    </tr>
  </table>

  <p>Tlačítkem <u>Obecný</u> je možné kreslit střešní rovinu libovolného tvaru, přičemž kreslení je možné jednak v půdorysné rovině, ale také ve 3D prostoru. K tomu lze využít:</p>

  <p><b><u>Volné kreslení pomocí kurzoru (lze i ve 3D prostoru)</u></b></p>
  <ul>
    <li><p>Hrany lze kreslit volným klikáním do modelovacího prostoru.</p></li>
    <li><p>Během kreslení hran v půdorysné rovině je možné využít funkce zarovnávání kurzoru podle směrů os X a Y, případně zarovnávání kurzoru kolmo k poslední zadané hraně.</p></li>
    <li><p><b>Při kreslení střešní plochy ve 3D prostoru je třeba využít koncových bodů již namodelovaných střešních ploch a poté změnit typ plochy PROMÍTÁNÍ -> OBECNÝ</b>.
  </ul>

  <p>
    <button onclick="document.getElementById('modal0').style.display='flex';" class="btn">
      &#9654; Videoukázka
    </button>
  </p>

  <!-- Modal 0 -->
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
      <source src="img/VideoPlanes3D.mp4" type="video/mp4">
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

  <p><b><u>Globální souřadnice vrcholů polygonu</u></b></p>
  <ul>
    <li><p>Globální souřadnice pro následující vrchol se zapíší ve formátu "X;Y", tedy např. <b>2;4</b></p></li>
  </ul>

  <p>
    <button onclick="document.getElementById('modal1').style.display='flex';" class="btn">
      &#9654; Videoukázka
    </button>
  </p>

  <!-- Modal 1 -->
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
      <source src="img/VideoPlanesGlobal.mp4" type="video/mp4">
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

  <p><b><u>Relativní souřadnice vrcholů polygonu</u></b></p>
  <ul>
    <li><p>Relativní souřadnice pro následující vrchol se zapíší ve formátu "@X;Y", tedy např. <b>@2;4</b></p></li>
  </ul>

  <p>
    <button onclick="document.getElementById('modal2').style.display='flex';" class="btn">
      &#9654; Videoukázka
    </button>
  </p>

  <!-- Modal 2 -->
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
      <source src="img/VideoPlanesRelative.mp4" type="video/mp4">
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

  <p><b><u>Polární souřadnice vrcholů polygonu</u></b></p>
  <ul>
    <li><p>Polární souřadnice pro následující vrchol se zapíší ve formátu "&gt;alfa;L", tedy např. <b>&gt;135;6</b></p></li>
    <li><p>Zadávaný úhel se odměřuje o kladného směru globální osy X proti směru hodinových ručiček.</p></li>
  </ul>

  <p>
    <button onclick="document.getElementById('modal3').style.display='flex';" class="btn">
      &#9654; Videoukázka
    </button>
  </p>

  <!-- Modal 3 -->
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
      <source src="img/VideoPlanesPolar.mp4" type="video/mp4">
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

  <p>Poslední vložený bod je možné smazat pomocí klávesy <b><u>DELETE</u></b>.</p>

<hr> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/ClassRectLoopIcon64x64.png" alt="ClassRectLoopIcon64x64.png" width="64" height="64">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
      Obdélník
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Obdélník
    </td>
  </tr>
</table>

<p>
Střešní rovinu obdélníkového tvaru lze zadat volným klikáním do půdorysné roviny nebo pomocí jeho rozměrů ve tvaru "X;Y", tedy např. <b>2;4</b>.
</p>

<hr> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 55px; height: 55px;">
        <img src="img/ClassTriangleLoopIcon64x64.png" alt="ClassTriangleLoopIcon64x64.png" width="55" height="55">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
      Trojúhelník
      </div>
      </div>
    </td>
    <td>
      <div style="position: relative; width: 55px; height: 55px;">
        <img src="img/ClassTrapezoidLoopIcon64x64.png" alt="ClassTrapezoidLoopIcon64x64.png" width="55" height="55">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
      Lichoběžník
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      ... a další
    </td>
  </tr>
</table>

<p>
Střešní rovinu dalších tvarů lze zadat přímo kliknutím do modelovacího prostoru, následně lze v editační tabulce upravit rozměry.
</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Editace střešních rovin</h2>

<p><b><u>Tabulku pro editaci roviny je možné otevřít kliknutím na zvolenou rovinu.</u></b></p>

<p>
Plochu lze pomocí tlačítek v horní části tabulky kopírovat, smazat, otáčet v půdorysné rovině nebo v rovině plochy, a také posouvat ve všech 3 směrech.
</p>

<p>
<!-- Tlačítko pro otevření modálního videa -->
<button onclick="document.getElementById('modal4').style.display='flex';" class="btn">
  &#9654; Videoukázka
</button>
</p>

<!-- Modální okno (skryté) -->
<div id="modal4" style="
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
  <video id="modalVideo4" controls autoplay style="max-width: 90%; max-height: 80vh;">
    <source src="img/VideoEditPlanes.mp4" type="video/mp4">
    Váš prohlížeč nepodporuje přehrávání videa.
  </video>
  <br>
  <button onclick="
    document.getElementById('modal4').style.display='none';
    const vid = document.getElementById('modalVideo4');
    vid.pause();
    vid.currentTime = 0;
  " class="btn">
    Zavřít video
  </button>
</div>

<!-- Skript -->
<script>
  function openModal4() {
    const modal = document.getElementById("modalVideo4");
    modal.style.display = "flex";
    const video = document.getElementById("modalVideo4");
    video.muted = true;
    video.play();
  }

  function closeModal4() {
    const modal = document.getElementById("modalVideo4");
    modal.style.display = "none";
    const video = document.getElementById("modalVideo4");
    video.pause();
    video.currentTime = 0;
  }
</script>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

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
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Otvor
    </td>
  </tr>
</table>

<p>
Tlačítkem <u>Otvor</u> je možné do vygenerované střešní roviny vsadit otvor, zakresluje se jako půdorysný průmět.
</p>

<p>
Otvor může být obdélníkový či obecného tvaru a lze mu přiřadit typ otvoru pro komín.
</p>

<p>
Otvor obdélníkového tvaru lze zadat volným klikáním do půdorysné roviny nebo pomocí jeho rozměrů ve tvaru "X;Y", tedy např. <b>2;4</b>. Otvor obecného tvaru lze zakreslit volným klikáním nebo pomocí souřadnicových systémů podobně jako obrys střešní konstrukce.
</p>

<p>
Po kliknutí na příslušný otvor lze pomocí tlačítek v horní části otevřené tabulky měnit jeho typ, polohu či jej smazat.
</p>

<p>
<!-- Tlačítko pro otevření modálního videa -->
<button onclick="document.getElementById('modal5').style.display='flex';" class="btn">
  &#9654; Videoukázka
</button>
</p>

<!-- Modální okno (skryté) -->
<div id="modal5" style="
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
  <video id="modalVideo5" controls autoplay style="max-width: 90%; max-height: 80vh;">
    <source src="img/VideoEditOpenings.mp4" type="video/mp4">
    Váš prohlížeč nepodporuje přehrávání videa.
  </video>
  <br>
  <button onclick="
    document.getElementById('modal5').style.display='none';
    const vid = document.getElementById('modalVideo5');
    vid.pause();
    vid.currentTime = 0;
  " class="btn">
    Zavřít video
  </button>
</div>

<!-- Skript -->
<script>
  function openModal5() {
    const modal = document.getElementById("modalVideo5");
    modal.style.display = "flex";
    const video = document.getElementById("modalVideo5");
    video.muted = true;
    video.play();
  }

  function closeModal5() {
    const modal = document.getElementById("modalVideo5");
    modal.style.display = "none";
    const video = document.getElementById("modalVideo5");
    video.pause();
    video.currentTime = 0;
  }
</script>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

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
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Anotace
    </td>
  </tr>
</table>

<p>
Tlačítko <u>Anotace</u> umožňuje do modelu přidávat libovolné půdorysné kóty.
</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

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
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Měření
    </td>
  </tr>
</table>

<p>
Tlačítkem <u>Měření</u> je možné zkontrolovat rozměry modelu.
</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

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
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Přidat
    </td>
  </tr>
</table>

<p>
Tlačítkem <u>Přidat</u> je možné do modelového prostoru přidat další (vedlejší) střešní konstrukce.
</p>

<ul>
  <li>
    <p>Střechu definovanou obrysem</p>
  </li>
  <li>
    <p>Další střechu modelovanou po plochách</p>
  </li>
</ul>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Nepomohla Vám nápověda?</h2>

<p>
Pro více informací o funkcích HiStruct Roofs můžete navštívit náš blog nebo zaslat dotaz na naší podporu.
</p>

<p>
<table>
  <tr>
    <td>
      <a href="https://docs.histruct.com/cs/" target="_blank" rel="noopener noreferrer"> 
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
</p>
