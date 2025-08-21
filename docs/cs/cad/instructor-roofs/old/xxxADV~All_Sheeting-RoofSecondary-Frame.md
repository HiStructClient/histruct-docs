<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Opláštění > Sekundární konstrukce > Rámy</title>
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

<h1>Opláštění > Sekundární konstrukce > Rámy</h1>

<p>...V menu <u><i>Opláštění > Sekundární konstrukce > Rámy</i></u> přístupném přes <u>Editační tlačítko</u> je možné nastavit průřezy sekundární konstrukce.</p>

<p><b><u>Ovládací a Editační tlačítka</u> upravují vlastnosti střešní konstrukce pouze na vybrané střešní rovině.</b></p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/WallPartIcon64x64.png" alt="WallPartIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
          Materiál
        </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Materiál
    </td>
  </tr>
</table>

<p>
  Umožňuje výběr materiálu pro danou vrstvu střešní konstrukce z připravené galerie výrobků, zde je možné vybrat požadovaný průřez prvků sekundární konstrukce.
</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/EditPropertiesIcon64x64.png" alt="EditPropertiesIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
          Vlastnosti
        </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Vlastnosti
    </td>
  </tr>
</table>

<ul>
<li><p>...Funkcionalita tlačítka <u>Vlastnosti</u> se připravuje pro budoucí verze programu...</p></li>
</ul>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td><img src="img/ControlButton.png" alt="ControlButton.png" width="64"></td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">Ovládací tlačítko</td>
  </tr> 
</table>

<p>Pro jednotlivé střešní roviny umožňuje:</p>

<ul>
  <li><p>Nastavení typu skladby střechy - typu krytiny a sekundární konstrukce.</p></li>
  <li><p>Generování kusovníku s položkami střešní krytiny a také generování půdorysu střešní konstrukce se všemi vrstvami ve formě editovatelného výkresu.</p></li>
</ul>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td><img src="img/EditButton.png" alt="EditButton.png" width="64"></td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">Editační tlačítko</td>
  </tr> 
</table>

<p>Pro jednotlivé vrstvy skladby střechy na určené střešní rovině umožňuje:</p>

<ul>
  <li><p>Nastavení typu krytiny nebo jednotlivých vrstev sekundární konstrukce včetně rozměrů, směru kladení, taktéž úpravu pozice a úhlu kladení.</p></li>
  <li><p>Generování půdorysu příslušné vrstvy střešní konstrukce ve formě editovatelného výkresu.</p></li>
  <li><p>Pro střešní krytinu je možné také vygenerovat výkaz materiálu s položkami střešní krytiny.</p></li>
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
