<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Lemovky</title>
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

<h1>Lemovky</h1>

<p>Umožňuje měnit barvu jednotlivých lemovacích prvků.</p>

<p>Barvu lze upravit pomocí tlačítek vlevo pro všechny lemovací prvky z dané skupiny, případně je možné kliknout přímo na jednotlivé prvky v modelu a upravit jim barvu jednotlivě.</p>

<p><b><u>Počet skupin editovatelných lemovacích prvků se může měnit podle možností jednotlivých modelů.</u></b></p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Editace skupin prvků pomocí tlačítek vlevo</h2>
<p>Kliknutím na tlačítko lemovacího prvku na levé straně je možné editovat vlastnosti celé příslušné skupiny lemovacích prvků.</p>

<table>
  <tr>
    <td>
      <div style="position: relative; width: 55px; height: 55px;">
        <img src="img/ColorsIcon64x64.png" alt="ColorsIconIcon64x64.png" width="55" height="55">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
          Lemovky
        </div>
      </div>
    </td>
    <td>
      <div style="position: relative; width: 55px; height: 55px;">
        <img src="img/ColorsIcon64x64.png" alt="ColorsIcon64x64.png" width="55" height="55">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
          Svod
        </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      ... a další
    </td>
  </tr>
</table>

<p>Provedené změny vlastností se propíší na všechny prvky spadající do určené skupiny.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Editace jednotlivých prvků</h2>
<p>Vlastnosti jednotlivých prvků je možné měnit přímo kliknutím na jednotlivé prvky v modelu.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <img src="img/AddButton.png" alt="AddButton.png" width="64">
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Přidat
    </td>
  </tr> 
</table>

<p>Tlačítko <u>Přidat</u> umožňuje přidat k příslušnému okapovému žlabu další okapový svod.</p>

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

</body>
</html>
