<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Hlavní menu</title>
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

<h1>Hlavní menu</h1>

  <p>V <u><i>Hlavním menu</i></u> naleznete přehled hlavních modelovacích funkcí platformy HiStruct. 
  
  <p><b>Pro aktualizaci nápovědy klikněte na libovolné tlačítko vlevo.</b></p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <table>
    <tr>
      <td>
        <div style="position: relative; width: 64px; height: 64px;">
          <img src="img/Sheated_Building_Page_Building.png" alt="Sheated_Building_Page_Building.png" width="64" height="64">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Geometrie</div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Geometrie</td>
    </tr>
  </table>

  <p>Tlačítko <u>Geometrie</u> umožňuje měnit geometrické parametry modelu, tedy rozměry budovy a střechy včetně sklonu a přesahů. Rovněž je zde možné nastavit typ skladby střechy.</p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <table>
    <tr>
      <td>
        <div style="position: relative; width: 64px; height: 64px;">
          <img src="img/Sheated_Building_Page_Sheeting.png" alt="Sheated_Building_Page_Sheeting.png" width="64" height="64">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Opláštění</div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Opláštění</td>
    </tr>
  </table>

  <p>Tlačítko <u>Opláštění</u> umožňuje měnit typ skladby opláštění pro celý objekt i pro jednotlivé střešní či stěnové roviny.</p>
  <p>V menu <u>Opláštění</u> je v <b>ZÁKLADNÍM</b> módu možné nastavit typ skladby střechy, upravit typ krytiny a rozměry sekundární střešní konstrukce. Pro stěnové konstrukce je možné nastavit typ skladby opláštění a pro jednotlivé vrstvy upravit typ materiálu.</p>
  <p>V <b>ROZŠÍŘENÉM</b> módu je možné provádět pokročilou editaci – dle typu opláštění střechy a stěn je možné upravit typ krytiny a sekundární konstrukci včetně směru kladení a také vygenerovat výkazy materiálů i editovatelné výkresy jednotlivých vrstev střešní či stěnové konstrukce.</p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <table>
    <tr>
      <td>
        <div style="position: relative; width: 64px; height: 64px;">
          <img src="img/FlashingGutterApronIcon64x64.png" alt="FlashingGutterApronIcon64x64.png" width="64" height="64">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Lemovky</div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Lemovky</td>
    </tr>
  </table>

  <p>Tlačítko <u>Lemovky</u> umožňuje přidávání a úpravu jednotlivých lemovacích prvků a nastavení okapového systému.</p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <table>
    <tr>
      <td>
        <div style="position: relative; width: 64px; height: 64px;">
          <img src="img/Sheated_Building_Page_Openings.png" alt="Sheated_Building_Page_Openings.png" width="64" height="64">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Otvory</div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Otvory</td>
    </tr>
  </table>

  <p>Přes tlačítko <u>Otvory</u> je možné do konstrukce přidávat otvory pro okna, komíny či jiné překážky.</p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <table>
    <tr>
      <td>
        <div style="position: relative; width: 64px; height: 64px;">
          <img src="img/MainDrawings64x64.png" alt="MainDrawings64x64.png" width="64" height="64">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Výkresy</div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Výkresy</td>
    </tr>
  </table>

  <p>Přes tlačítko <u>Výkresy</u> je možné vygenerovat a upravit výkresy střešní či stěnové konstrukce, například půdorys nebo boční pohledy. Výkresy lze v nově otevřeném okně dodatečně upravit a doplnit libovolnými popisky či kótami.</p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <table>
    <tr>
      <td>
        <div style="position: relative; width: 64px; height: 64px;">
          <img src="img/QuoteIcon64x64.png" alt="QuoteIcon64x64.png" width="64" height="64">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Výkazy</div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Výkazy</td>
    </tr>
  </table>

  <p>Tlačítkem <u>Výkazy</u> je možné vygenerovat pohledy na vymodelovanou konstrukci, výkazy materiálů pro poptávku a editovatelný dokument pro celkové shrnutí nabídky s možností nastavení cen pro jednotlivé prvky.</p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <table>
    <tr>
      <td>
        <div style="position: relative; width: 64px; height: 64px;">
          <img src="img/MainSettings64x64.png" alt="MainSettings64x64.png" width="64" height="64">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Nastavení</div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Nastavení</td>
    </tr>
  </table>

  <p>V <u>Nastavení</u> lze upravit možnosti modelování a vzhled modelovací scény.</p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

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
