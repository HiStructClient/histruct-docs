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

<p>Po importu 3D objektu umožňuje v dalších krocích změnit nastavení generátoru hran a ploch, upravit rozměry a sklony vygenerovaných hran a ploch pomocí řešiče ROSOL a také nastavit typ skladby střechy.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Převod souboru do formátu ".obj"</h2>
<p>Pokud máte data k dispozici v komprimované složce (například ".zip"), je třeba z ní tento soubor extrahovat a případně převést na typ ".obj".</p>

<p>Přesný návod jak převést soubor do formátu ".obj" si můžete přečíst na našem blogu.</p>

<table>
  <tr>
    <td>
      <a href="https://docs.histruct.com/cs/"> 
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

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Nepomohla Vám nápověda?</h2>
<p>Pro více informací o funkcích HiStruct Roofs můžete navštívit náš blog nebo zaslat dotaz na naší podporu.</p>

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

</body>
</html>
