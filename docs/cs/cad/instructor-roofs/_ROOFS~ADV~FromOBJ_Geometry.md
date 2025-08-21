<!DOCTYPE html>
<html lang="cs">
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
<p>Menu <u><i>Geometrie</i></u> v prvním kroku umožňuje importovat soubor typu "<b>.obj</b>" pro rychlé generování střešních rovin.</p>

<p><b>Pro přehlednější práci s programem se obsah menu <u>Geometrie</u> liší pro fázi před importem modelu ve formátu .obj a fázi po importu.</b></p>

<p>Po importu 3D objektu umožňuje v dalších krocích změnit nastavení generátoru hran a ploch, upravit rozměry a sklony vygenerovaných hran a ploch pomocí řešiče ROSOL.</p>
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
    <span>FÁZE 1: Chci importovat soubor .obj</span>
  </summary>
  <div class="panel">
  <h1>Geometrie</h1>

<h2>Převod souboru do formátu ".obj"</h2>
<p>Pokud máte data k dispozici v komprimované složce (například ".zip"), je třeba z ní tento soubor extrahovat a případně převést na typ ".obj".</p>

<p>Přesný návod jak převést soubor do formátu ".obj" si můžete přečíst na našem blogu.</p>

<table>
  <tr>
    <td>
      <a href="https://docs.histruct.com/cs/" target="_blank" rel="noopener noreferrer"> 
        <button class="btn">
        Navštívit blog
        </button>
      </a>
    </td>
  </tr>
</table>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/ImportObjIcon64x64.png" alt="ImportObjIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
        SoCol*.obj
        </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Import ze služby SoCol
    </td>
  </tr>
</table>

<p>Umožňuje importovat soubor typu .obj získaný ze služby SoCol.</p>
<p>Vložení souboru do modelu je třeba potvrdit klinutím nebo klávesou ENTER.</p> 

<p>Po importu pokladu je třeba zkontrolovat jeho rozměry a případně upravit měřítko.</p>

<p><b><u>Úprava měřítka importovaného podkladu</u></b></p>

<ul>
<p><li>
Po kliknutí na tlačítko <u><i>Import > Nastavení</i></u> je možné měřítko změnit přímo v příslušné buňce v otevřené tabulce. 
</li></p>

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
    <source src="img/VideoImportOBJ.mp4" type="video/mp4">
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

<p><li>
Pro úpravu měřítka je taktéž možné použít tlačítko <u>Měřítko</u>, které je umístěno v horní části otevřené tabulky. Pomocí tohoto tlačítka je možné nastavit měřítko podkladu pomocí zvolené hrany, u které známe její skutečné rozměry.
</li></p>

<p>
  <button onclick="document.getElementById('modal1').style.display='flex';" class="btn">
    &#9654; Videoukázka pro DXF
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
    <source src="img/VideoImportDXF.mp4" type="video/mp4">
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


</ul>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/ImportObjIcon64x64.png" alt="ImportObjIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
        Rexplorer*.obj
        </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Import ze služby Rexplorer
    </td>
  </tr>
</table>

<p>Umožňuje importovat soubor typu .obj získaný ze služby Rexplorer.</p>
<p>Vložení souboru do modelu je třeba potvrdit klinutím nebo klávesou ENTER.</p>

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
    <span>FÁZE 2: Po importu souboru .obj</span>
  </summary>
  <div class="panel">
  <h1>Geometrie</h1>


<h2>Úprava geometrie modelu po importu</h2>
<p>Ihned po vložení modelu je možné v tabulce vlevo upravit měřítko importovaného modelu a změnit nastavení generovaných hran a ploch. Tytéž úpravy je možné později provést přes tlačítko <b><u>Import &gt; Nastavení</u></b>.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/Sheated_Building_Page_Building.png" alt="Sheated_Building_Page_Building.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Import</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Import</td>
  </tr>
</table>
<p>Umožňuje upravit měřítko importovaného modelu a přizpůsobit parametry generátoru střešních rovin.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<!--<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/RoofSketchIcon64x64.png" alt="RoofSketchIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Střecha</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Střecha</td>
  </tr>
</table>
<p>Tlačítko <u>Střecha</u> umožňuje nastavit typ skladby střechy. Typ krytiny a rozměry sekundární střešní konstrukce lze měnit přes tlačítko <u>Opláštění</u>.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/ImportObjIcon64x64.png" alt="ImportObjIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Rosol</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Rosol</td>
  </tr>
</table>
<p>Umožňuje upravit rozměry a sklony vygenerovaných hran a ploch, změnit výšku a případně excentricitu střechy.</p>

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
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Anotace</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Anotace</td>
  </tr>
</table>
<p>Tlačítko <u>Anotace</u> umožňuje do modelu přidávat libovolné půdorysné kóty.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/TapeMeasureIcon64x64.png" alt="TapeMeasureIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Měření</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Měření</td>
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
