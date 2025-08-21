<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Opláštění &gt; Stěna</title>
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

<h1>Opláštění &gt; Stěna</h1>

<p>V menu <u><i>Opláštění > Stěna</i></u> je možné nastavit typ výroby stěny, kladení řad opláštění a výšku soklu. Taktéž je zde možné upravit jednotlivé vrstvy opláštění.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/EditPropertiesIcon64x64.png" alt="EditPropertiesIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
          Rozvržení
        </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Rozvržení
    </td>
  </tr>
</table>

<p>Tlačítko <u>Rozvržení</u> umožňuje nastavit typ výroby, kladení řad opláštění a výšku soklu.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Nastavení vrstev opláštění stěny</h2>

<p>Nastavení skladby střešní konstrukce se provádí pomocí tlačítek:</p>

<ul>
  <li><p><u>Vrchní vrstva</u></p></li>
  <li><p><u>Vnitřní vrstvy</u></p></li>
  <li><p><u>Sokl</u></p></li>
</ul>

<p>
Pro některé typy opláštění může být v defaultním stavu tlačítko <u>Vnitřní vrstvy</u> schované a sekundární konstrukce pak pro takový typ opláštění není generována.
</p>

<p>Tlačítko <u>Sokl</u> je dostupné podle typu výroby stěny nastavené v <u>Rozvržení</u>.

<hr> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/RoofTopLayer_64x64.png" alt="RoofTopLayer_64x64.png" width="64" height="64">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
      Vrchní vrstva
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Vrchní vrstva
    </td>
  </tr>
</table>

<ul>
  <li><p>Umožňuje výběr materiálu opláštění z připravené galerie výrobků.</p></li>
</ul>

<hr> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/RoofLowerLayers_64x64.png" alt="RoofLowerLayers_64x64.png" width="64" height="64">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
      Vnitřní vrstvy
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Vnitřní vrstvy
    </td>
  </tr>
</table>

<ul>
  <li><p>Umožňuje výběr typu skladby sekundární konstrukce z připravené galerie výrobků.</p></li>
</ul>

<hr> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/WallPartLayerIcon64x64.png" alt="WallPartLayerIcon64x64.png" width="64" height="64">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
      Sokl
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Sokl
    </td>
  </tr>
</table>

<ul>
  <li><p>Umožňuje výběr materiálu soklu z připravené galerie výrobků.</p></li>
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
<p>Pro více informací o funkcích HiStruct Building Configurator můžete navštívit náš blog nebo zaslat dotaz na naši podporu.</p>
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
