<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Otvory</title>
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

<h1>Otvory</h1>
<p>Menu <u><i>Otvory</i></u> umožňuje vytvořit a editovat otvory na jednotlivých střešních rovinách. Každému dostupnému typu otvoru lze přiřadit také barvu.</p>
<p><b>Nastavení a úpravy otvorů na jednotlivých střešních rovinách je možné provést pomocí <u>Ovládacích tlačítek</u>.</b></p>
<p>Otvory vytvořené v části <u><i>Geometrie > Rozměry > Otvor</i></u> je možné editovat pouze v menu <u><i>Geometrie > Rozměry</i></u>, týká se zejména modelů střešních konstrukcí typu FROM OUTLINE vytvořených pomocí půdorysného obrysu střechy nebo modelů typu BY PLANES vytvořených pomocí střešních rovin.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<p>
<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/ColorsIcon64x64.png" alt="ColorsIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
          Výchozí barvy
        </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Výchozí barvy
    </td>
  </tr>
</table>
</p>

<p>Tlačítkem <u>Výchozí barvy</u> je možné nastavit výchozí barvy pro vybrané typy otvorů.</p>

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

<p>
<table>
  <tr>
    <td>
      <img src="img/ControlButton.png" alt="ControlButton.png" width="64">
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Ovládácí tlačítko
    </td>
  </tr> 
</table>
</p>

<p><u>Ovládací tlačítko</u> umožňuje na zvolenou střešní rovinu přidat otvor a zvolit jeho typ.</p>
<p>Po kliknutí na nový otvor v modelu je možné provádět následující úpravy:</p>
<ul>
  <li>Měnit jeho rozměry, barvu a polohu v rámci dané roviny přepsáním příslušných hodnot v otevřené tabulce.</li>
  <li>Pomocí myši lze rozměry a polohu taktéž měnit přímo v modelu.</li>
</ul>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Nepomohla Vám nápověda?</h2>
<p>Pro více informací o funkcích HiStruct Building Configurator můžete navštívit náš blog nebo zaslat dotaz na naší podporu.</p>

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
    <td style="padding-left: 30px;">
      <a href="mailto:support@histruct.com?subject=Dotaz na Support HiStruct">
        <button class="btn">
          Zaslat dotaz
        </button>
      </a>
    </td>
  </tr>
</table>
</p>

</body>
</html>
