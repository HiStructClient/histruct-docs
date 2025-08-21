<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Opláštění</title>
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

<h1>Opláštění</h1>

<p>Menu <u><i>Opláštění</i></u> umožňuje nastavit typ skladby střechy, typ střešní krytiny a rozměry sekundární střešní konstrukce.</p>
<p>U stěn pak lze nastavit typ výroby stěny a materiál jednotlivých vrstev stěny.</p>
<p><b>Nastavení a úpravy jednotlivých střešních a stěnových rovin je možné provést pomocí <u>Ovládacích a Editačních tlačítek</u>.</b></p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
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

<p>Tlačítko <u>Střecha</u> umožňuje nastavit typ skladby střechy, typ střešní krytiny a rozměry sekundární střešní konstrukce pro celou střechu.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/WallIcon64x64.png" alt="WallIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
          Stěny #.#
        </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Stěny #.#
    </td>
  </tr>
</table>

<p>Tlačítko <u>Stěny #.#</u> umožňuje nastavit typ výroby stěny, způsob kladení řad opláštění a výšku soklu.</p>

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

<p>Tlačítko <u>Měření</u> umožňuje zkontrolovat rozměry modelu.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td><img src="img/ControlButton.png" alt="ControlButton.png" width="64"></td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Ovládací tlačítko</td>
  </tr>
</table>

<p><b><u>Pro jednotlivé střešní roviny umožňuje:</u></b></p>
<ul>
<li><p>Nastavení typu skladby střechy, typu krytiny a rozměry sekundární konstrukce.</p></li>
<li><p>Generování kusovníku s položkami střešní krytiny a také generování půdorysu střešní konstrukce se všemi vrstvami ve formě editovatelného výkresu.</p></li>
</ul>

<p><b><u>Pro jednotlivé stěnové roviny umožňuje:</u></b></p>
<ul>
<li><p>Nastavení typu výroby stěny, způsobu kladení řad opláštění, výšku soklu nebo barevné schéma.</p></li>
<li><p>Nastavení materiálu stěny a úpravu jednotlivých vrstev opláštění podle typu výroby stěny.</p></li>
<li><p>Generování kusovníku s položkami opláštění stěny a pohledu na stěnu ve formě editovatelného výkresu.</p></li>
</ul>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td><img src="img/EditButton.png" alt="EditButton.png" width="64"></td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Editační tlačítko</td>
  </tr>
</table>

<p><b><u>Pro jednotlivé vrstvy skladby střechy na určené střešní rovině umožňuje:</u></b></p>
<ul>
<li><p>Nastavení směru kladení, taktéž úpravu pozice a úhlu kladení.</p></li>
<li><p>Generování půdorysu příslušné vrstvy střešní konstrukce ve formě editovatelného výkresu.</p></li>
<li><p>Pro střešní krytinu je možné také vygenerovat výkaz materiálu s položkami střešní krytiny.</p></li>
</ul>

<p><b><u>Pro jednotlivé vrstvy skladby opláštění na určené stěnové rovině umožňuje:</u></b></p>
<ul>
<li><p>Nastavení směru kladení, taktéž úpravu pozice a úhlu kladení.</p></li>
<li><p>Generování pohledu na stěnu ve formě editovatelného výkresu.</p></li>
<li><p>Pro opláštění stěny je možné také vygenerovat výkaz materiálu s položkami.</p></li>
</ul>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Chybí vám v galerii některá krytina? Napište nám, doplníme ji.</h2>
<p>
<table>
  <tr>
    <td>
      <a href="mailto:jiri.podval@histruct.com?subject=Dotaz na HiStruct konfigurátor budov">
        <button class="btn">Chci doplnit</button>
      </a>
    </td>
  </tr>
</table>
</p>

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

</body>
</html>
