<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8" />
  <title>Geometrie &gt; Rozměry &gt; Plocha &gt; Upravit</title>
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

  <h1>Geometrie &gt; Rozměry &gt; Plocha &gt; Upravit</h1>

  <p> Menu <u><i>Geometrie &gt; Rozměry &gt; Plocha &gt; Upravit</i></u> umožňuje zobrazit půdorysné kóty příslušné střešní roviny a taktéž umožňuje provádět některé další úpravy geometrie.

  <p>
  U jednotlivých střešních ploch lze upravovat typ geometrického promítání plochy, rozměry některých tvarů ploch, dále sklon a směr sklonu a také výšku okapové hrany nad půdorysným průmětem roviny.
  </p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <table>
    <tr>
      <td>
        <div style="position: relative; width: 64px; height: 64px;">
          <img src="img/LoopEditIcon64x64.png" alt="LoopEditIcon64x64.png" width="64" height="64">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
            Geometrie
          </div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
        Geometrie
      </td>
    </tr>
  </table>

  <p>
  Tlačítko <u>Geometrie</u> umožňuje u příslušné střešní roviny provádět další úpravy geometrie. 
  </p>

  <p><b><u>Roviny zakreslenené pomocí předdefinovaných tvarů</u></b></p>
  
  <ul>
  <li>
  <p>
  U rovin zakreselných pomocí předdefinovaných tvarů (Obdélník, Trojúhelník, Lichoběžník, ...) je možné změnit typ geometrického tvaru a rozměry, případně plochu otáčet kolem roviny Z.
  </p>
  </li>
  </ul>

  <p><b><u>Roviny zakreslené pomocí Obecného tvaru</u></b></p>

  <ul>
  <li>
  <p>
  U rovin zakreselných pomocí Obecného tvar je možné po kliknutí na hranu plochy změnit typ jejího geometrického tvaru (a následně upravovat rozměry), případně plochu otáčet kolem roviny Z.
  </p>
  </li>
  <li>
  <p>
  Po kliknutí na jeden z rohových bodů (zobrazeny červeným křížkem) je možné tomuto bodu v příslušné tabulce upravit pozici v Globálních souřadnicích.
  Tyto body lze na hranu také přidávat pomocí žlutého tlačítka Přidat 
  <img src="img/AddButtonRound.png" alt="AddButtonRound.png" width="20">.

  </ul>

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
