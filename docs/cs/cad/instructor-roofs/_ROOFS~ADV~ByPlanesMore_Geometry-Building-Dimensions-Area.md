<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8" />
  <title>Geometrie &gt; Budova &gt; Rozměry &gt; Plocha</title>
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

  <h1>Geometrie &gt; Budova &gt; Rozměry &gt; Plocha</h1>

  <p> Menu <u><i>Geometrie &gt; Budova &gt; Rozměry &gt; Plocha</i></u> přístupné přes kliknutí na zvolenou plochu umožňuje provádět editace střešních rovin přes otevřenou tabulku.

  <p>
  U jednotlivých střešních ploch lze upravovat typ geometrického promítání plochy, rozměry některých tvarů ploch, dále sklon a směr sklonu a také výšku okapové hrany nad půdorysným průmětem roviny.
  </p>
  
  <p>
  Plochu lze pomocí tlačítek v horní části tabulky kopírovat, smazat, otáčet v půdorysné rovině nebo v rovině plochy, a také posouvat ve všech 3 směrech.
  </p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <table>
    <tr>
      <td>
        <div style="position: relative; width: 64px; height: 64px;">
          <img src="img/ActionEditIcon64x64.png" alt="ActionEditIcon64x64.png" width="64" height="64">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
            Upravit
          </div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
        Upravit
      </td>
    </tr>
  </table>

  <p>
  Tlačítkem <u>Upravit</u> je možné zobrazit půdorysné kóty příslušné střešní roviny, umožňuje taktéž provádět některé další úpravy geometrie.
  </p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <table>
    <tr>
      <td>
        <div style="position: relative; width: 64px; height: 64px;">
          <img src="img/ActionsIcon64x64.png" alt="ActionsIcon64x64.png" width="64" height="64">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
            Akce
          </div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
        Akce
      </td>
    </tr>
  </table>

  <p>
  Tlačítkem <u>Akce</u> je možné provádět úpravu pozice a orientace střešní roviny.
  </p>

  <p>
  Roviny je možné otáčet kolem hlavních os X,Y a Z, dále je možné upravit jejich pozici nebo je převrátit.
  </p>

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
