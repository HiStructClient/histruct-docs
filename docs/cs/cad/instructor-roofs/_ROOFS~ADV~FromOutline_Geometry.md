<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Geometrie</title>
</head>

<style>
    body{ /* Nastavení okrajů a řádkování pro celý dokument */
      line-height: 1.8;
      padding-top: 30px;
      padding-right: 30px;
      padding-bottom: 30px;
      padding-left: 30px;
    }
    h1{ /* Styl hlavního nadpisu */
      font-size: 28px;
      border-bottom: none;
      margin-top: 10px;
      margin-bottom: 0px;
    }
    h2{ /* Styl podnadpisů */
      font-size: 22px;
      border-bottom: none;
      margin-top: 10px;
      margin-bottom: 0px;
    }
    h3{ /* Styl podnadpisů */
      font-size: 18px;
      border-bottom: none;
      margin-top: 10px;
      margin-bottom: 0px;
    }
    p{ /* Styl odstavců */
      border-bottom: none;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    hr.main{ /* Hlavní oddělovací čára */
      border: none;
      border-top: 2px solid #555; /* čárkovaná čára */
      height: 1px; /* zruší výšku, protože border se použije místo background */
      margin-top: 20px;
      margin-bottom: 20px;
    }
    hr{ /* Běžná oddělovací čára */
      all: unset; /* zruší úplně veškeré defaultní styly */
      display: block;
      width: 100%;
      border-top: 2px dashed #555;
      margin: 20px 0;
    }
    .btn { /* Styl tlačítek */
      margin-top: 0px;
      padding: 12px 20px;
      background-color: rgb(27,122,187);
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
    }
    .btn:hover { /* Styl tlačítek při najetí myší */
      background-color: rgb(20,90,140);
    }
</style>

<body>

<h1>Geometrie</h1>
<p>Umožňuje měnit geometrické parametry modelu, tedy rozměry budovy a střechy včetně sklonu a přesahů. Rovněž je zde možné nastavit typ skladby střechy.</p>

<p><b>Pro přehlednější práci s programem se obsah menu <u>Geometrie</u> liší pro fázi před nakreslením obrysu a fázi po nakreslení prvního obrysu.</b></p>

<p><b><u>Ovládací tlačítka</u> upravují vlastnosti střešní konstrukce pouze na vybrané střešní rovině.</b></p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<details>
<style>
  details summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    list-style: none; /* skryje defaultní trojúhelník v některých prohlížečích */
    padding: 6px 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
  /* vlastní šipka */
  details summary::after {
    content: "▶"; /* trojúhelník */
    transition: transform 0.25s ease;
  }
  /* při otevření se otočí */
  details[open] summary::after {
    transform: rotate(90deg);
  }
  /* rámeček pro obsah */
  details .panel {
    margin-top: 8px;
    padding: 10px 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
</style>
  <summary>
    <span>FÁZE 1: Chci vytvořit první střechu z obrysu</span>
  </summary>
  <div class="panel">
  <h1>Geometrie</h1>
<p>Umožňuje měnit geometrické parametry modelu, tedy rozměry budovy a střechy včetně sklonu a přesahů.</p>

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
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
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
        <img src="img/RoofBoundaryIcon64x64.png" alt="RoofBoundaryIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
        Obrys
        </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Obrys
    </td>
  </tr>
</table>

<p>Tlačítko <u>Obrys</u> slouží k zakreslení půdorysného obrysu střechy. Pro zadání délky a směru jednotlivých okapových hran je možné využít:</p>

<p><b><u>Volné kreslení pomocí kurzoru</u></b></p>
<ul>
  <li><p>Hrany lze kreslit volným klikáním do modelovacího prostoru.</p></li>
  <li><p>Během kreslení hran je možné využít funkce zarovnávání kurzoru podle směrů os X a Y, případně zarovnávání kurzoru kolmo k poslední zadané hraně.</p></li>
</ul>

<p>
  <button onclick="document.getElementById('modal0').style.display='flex';" class="btn">
    &#9654; Videoukázka
  </button>
</p>

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
  <li><p>Globální souřadnice pro následující vrchol se zapíší ve formátu &quot;X;Y&quot;, tedy např. <b>2;4</b></p></li>
</ul>

<p>
  <button onclick="document.getElementById('modal1').style.display='flex';" class="btn">
    &#9654; Videoukázka
  </button>
</p>

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
  <li><p>Relativní souřadnice pro následující vrchol se zapíší ve formátu &quot;@X;Y&quot;, tedy např. <b>@2;4</b></p></li>
</ul>

<p>
  <button onclick="document.getElementById('modal2').style.display='flex';" class="btn">
    &#9654; Videoukázka
  </button>
</p>

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
  <li><p>Polární souřadnice pro následující vrchol se zapíší ve formátu &quot;&gt;alfa;L&quot;, tedy např. <b>&gt;135;6</b></p></li>
  <li><p>Zadávaný úhel se odměřuje o kladného směru globální osy X proti směru hodinových ručiček.</p></li>
</ul>

<p>
  <button onclick="document.getElementById('modal3').style.display='flex';" class="btn">
    &#9654; Videoukázka
  </button>
</p>

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
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Otvor
    </td>
  </tr>
</table>

<p>Tlačítkem <u>Otvor</u> je možné do vygenerované střešní roviny vsadit otvor, zakresluje se jako půdorysný průmět.</p>
<p>Otvor může být obdélníkový či obecného tvaru a lze mu přiřadit typ otvoru pro komín.</p>

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

<p>Umožňuje upravit způsob zadání geometrie, podle nastavení je možné kreslit obrys střechy nebo stěn.</p>
<p>Taktéž je zde možné nastavit prolínání střešních rovin mezi jednotlivými objekty.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

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
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Smazat
    </td>
  </tr>
</table>

<p>Smaže všechny importované podklady a střešní konstrukce zakreslené pomocí funkce <u>Obrys</u>.</p>

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
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Anotace
    </td>
  </tr>
</table>

<p>Tlačítko <u>Anotace</u> umožňuje do modelu přidávat libovolné půdorysné kóty.</p>

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
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Měření
    </td>
  </tr>
</table>

<p>Tlačítkem <u>Měření</u> je možné zkontrolovat rozměry modelu.</p>

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
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Přidat
    </td>
  </tr>
</table>

<p>Tlačítkem <u>Přidat</u> je možné do modelového prostoru přidat další (vedlejší) střešní konstrukce.</p>
<ul>
  <li><p>Další střechu definovanou obrysem</p></li>
  <li><p>Střechu zakreslenou pomocí střešních ploch</p></li>
</ul>


</div>
</details>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->


<details>
<style>
  details summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    list-style: none; /* skryje defaultní trojúhelník v některých prohlížečích */
    padding: 6px 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
  /* vlastní šipka */
  details summary::after {
    content: "▶"; /* trojúhelník */
    transition: transform 0.25s ease;
  }
  /* při otevření se otočí */
  details[open] summary::after {
    transform: rotate(90deg);
  }
  /* rámeček pro obsah */
  details .panel {
    margin-top: 8px;
    padding: 10px 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
</style>
  <summary>
    <span>FÁZE 2: Po vytvoření první střechy z obrysu</span>
  </summary>
  <div class="panel">
  <h1>Geometrie</h1>

<p>
<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/Sheated_Building_Page_Building.png" alt="Sheated_Building_Page_Building.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
        Rozměry
        </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Rozměry
    </td>
  </tr>
</table>
</p>

<p>Tlačítko <u>Rozměry</u> slouží k zakreslení půdorysného tvaru objektu, k nastavení výšky objektu a sklonu střechy a také k doplnění otvorů ve střešní konstrukci.</p>
<p>Základní půdorysné rozměry je možné zadávat buď pro střešní konstrukci nebo pro svislé stěny.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<!--<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/RoofSketchIcon64x64.png" alt="RoofSketchIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
        Střecha
        </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Střecha
    </td>
  </tr>
</table>

<p>Tlačítko <u>Střecha</u> umožňuje nastavit typ skladby střechy. Typ krytiny a rozměry sekundární střešní konstrukce lze měnit přes tlačítko <u>Opláštění</u>.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/PvgisIcon64x64.png" alt="PvgisIcon64x64.png" width="64" height="64">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
      Výkon
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Výkon
    </td>
  </tr>
</table>

<p>
Umožňuje vyhodnotit potenciální výkon solárního záření na jednotlivé střešní plochy.
</p>

<p>
...Funkcionalita tlačítka <u>Výkon</u> se připravuje pro budoucí verzi programu...
</p>

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
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Anotace
    </td>
  </tr>
</table>

<p>Tlačítko <u>Anotace</u> umožňuje do modelu přidávat libovolné půdorysné kóty.</p>

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
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Měření
    </td>
  </tr>
</table>

<p>Tlačítkem <u>Měření</u> je možné zkontrolovat rozměry modelu.</p>

</div>
</details>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Nepomohla Vám nápověda?</h2>
<p>Pro více informací o funkcích HiStruct Roofs můžete navštívit náš blog nebo zaslat dotaz na naší podporu.</p> 
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

</body>
</html>
