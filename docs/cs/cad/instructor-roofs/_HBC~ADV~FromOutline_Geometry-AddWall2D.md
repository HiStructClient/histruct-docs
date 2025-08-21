<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Geometrie > Přidat stěnu 2D</title>
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

<h1>Geometrie &gt; Přidat stěnu 2D</h1>

<p>Umožňuje do konstrukce přidávat vnitřní svislé stěny a upravovat vlastnosti stěn.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<p>
<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/MainInsert64x64.png" alt="MainInsert64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 11px; text-align: center;">
          Přidat stěnu
        </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Přidat stěnu
    </td>
  </tr>
</table>
</p>

<p>Tlačítkem <u>Přidat stěnu</u> je možné do konstrukce přidat nové stěny, jejich kreslení lze provádět obdobně jako kreslení obrysu objektu pomocí volného kreslení nebo s využitím souřadnicových systémů.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<p>
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
</p>

<p>Tlačítko <u>Stěny #.#</u> umožňuje nastavit způsob zarovnání stěny, typ výroby stěny, způsob kladení řad opláštění a výšku soklu.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<p>
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
</p>

<p>Tlačítkem <u>Měření</u> je možné zkontrolovat rozměry modelu.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Nepomohla Vám nápověda?</h2>
<p>Pro více informací o funkcích HiStruct Building Configurator můžete navštívit náš blog nebo zaslat dotaz na naší podporu.</p>

<p>
<table>
  <tr>
    <td>
      <a href="https://docs.histruct.com/cs/" target="_blank" rel="noopener noreferrer">
        <button class="btn">Navštívit blog</button>
      </a>
    </td>
    <td style="padding-left: 30px;">
      <a href="mailto:support@histruct.com?subject=Dotaz na Support HiStruct">
        <button class="btn">Zaslat dotaz</button>
      </a>
    </td>
  </tr>
</table>
</p>

</body>
</html>
