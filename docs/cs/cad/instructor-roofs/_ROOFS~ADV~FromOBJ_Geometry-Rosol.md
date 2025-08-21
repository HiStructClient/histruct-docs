<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Geometrie &gt; Rosol</title>
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

<h1>Geometrie &gt; Rosol</h1>
<p>V menu <u><i>Geometrie &gt; Rosol</i></u> je možné upravit rozměry a sklony vygenerovaných hran a ploch pomocí řešiče ROSOL.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Úprava geometrie střešních hran a ploch pomocí řešiče ROSOL</h2>
<p>Po úpravě nastavení generátoru v menu <u><i>Geometrie &gt; Import</i></u> máme nyní vygenerované střešní hrany a roviny s příslušnými rozměry a sklony.</p>
<p>Přímo v modelu je nyní možné upravit typ, délku a případně vynutit vodorovnost střešních hran, u střešních ploch lze provést úpravu jejich sklonu.</p>
<p><b>Úpravy je možné provádět v tabulce, která se otevře po kliknutí na příslušnou hranu či plochu.</b></p>
<p><b>Některé úpravy mohou být neslučitelné s přípustnými výsledky z řešiče, takové pak nelze provést.</b></p>
<p>Úpravou geometrie jednotlivých hran a ploch dojde ke změně geometrie celého modelu. Rozměry, které chcete zachovat je možné uzamknout pomocí symbolu zámečku.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<p>
<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/RoofLiftIcon64x64.png" alt="RoofLiftIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Zvednout</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Zvednout</td>
  </tr>
</table>
</p>
<p>Tlačítkem <u>Zvednout</u> je možné upravit výšku stěn modelovaného objektu.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<p>
<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/RoofEccentricityIcon64x64.png" alt="RoofEccentricityIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Excentricita</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Excentricita</td>
  </tr>
</table>
</p>
<p>Tlačítkem <u>Excentricita</u> je možné odsadit skladbu střechy mimo generovanou střešní rovinu o určenou hodnotu.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<p>
<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/LockIcon64x64.png" alt="LockIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Zámky</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Zámky</td>
  </tr>
</table>
</p>
<p>Tlačítkem <u>Zámky</u> je možné uzamknout či odemknout sklony všech střešních rovin.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<p>
<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/StartOverIcon64x64.png" alt="StartOverIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Znovu</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Znovu</td>
  </tr>
</table>
</p>
<p>Tlačítkem <u>Znovu</u> je možné smazat všechny uživatelské úpravy geometrie a vrátit se zpět k původnímu výsledku řešiče.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<p>
<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/TapeMeasureIcon64x64.png" alt="TapeMeasureIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Měření</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Měření</td>
  </tr>
</table>
</p>
<p>Tlačítkem <u>Měření</u> je možné zkontrolovat rozměry modelu.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Nepomohla Vám nápověda?</h2>
<p>Pro více informací o funkcích HiStruct Roofs můžete navštívit náš blog nebo zaslat dotaz na naší podporu.</p>

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
