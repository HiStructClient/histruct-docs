<!DOCTYPE html>
<html lang="cs">
<head>
<meta charset="UTF-8">
<title>Opláštění > Budova > Střecha</title>
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

<h1>Opláštění &gt; Budova &gt; Střecha</h1>

<p>V menu <u><i>Opláštění &gt; Budova &gt; Střecha</i></u> je možné nastavit typ skladby střechy, typ střešní krytiny a rozměry sekundární střešní konstrukce.</p>

<p>V rámci jednotlivých střešních rovin je navíc možné měnit směr kladení střešní krytiny, generovat kusovník s položkami střešní krytiny a také generovat půdorys střešní konstrukce ve formě editovatelného výkresu.</p>

<p><b>Nastavení a úpravy jednotlivých střešních rovin je možné provést pomocí <u>Ovládacích a Editačních tlačítek</u>.</b></p>

<ul>
<li>Přes <u>Ovládací tlačítka</u> v modelu je možné nastavit typ skladby střechy, typ krytiny a rozměry prvků sekundární konstrukce zvlášť pro jednotlivé střešní roviny, taktéž umožňují vytvářet výkazy materiálů a výkresy střešní konstrukce.</li>
<li>Přes <u>Editační tlačítka</u> v modelu je možné editovat vlastnosti jednotlivých vrstev střešní konstrukce na určené střešní rovině, taktéž umožňují vytvářet výkazy materiálů a výkresy příslušných vrstev střešní konstrukce.</li>
</ul>

<hr class="main"> <!-- Hlavní oddělovací čára -->

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

<p>Tlačítko <u>Rozvržení</u> umožňuje nastavit typ skladby střechy, typ střešní krytiny a rozměry sekundární střešní konstrukce pro celou střechu.</p>

<hr class="main"> <!-- Hlavní oddělovací čára -->

<h2>Nastavení vrstev střešní konstrukce</h2>
<p>Nastavení jednotlivých vrstev se liší podle typu skladby střešní konstrukce následovně:</p>

<p>Pro typ skladby <u>Jednovrstvá střecha</u> se nastavuje:</p>
<ul>
<li>Krytina</li>
</ul>

<p>Pro typ skladby <u>Střecha s lehkou ocelovou konstrukcí</u> se nastavuje:</p>
<ul>
<li>Krytina</li>
<li>Sekundární konstrukce</li>
</ul>

<p>Pro typ skladby <u>Střecha s kontralatěmi</u> se nastavuje:</p>
<ul>
<li>Krytina</li>
<li>Laťování (ve směru sklonu střechy)</li>
<li>Laťování (kolmo na směr sklonu střechy)</li>
</ul>

<hr> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/WallPartIcon64x64.png" alt="WallPartIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
        .
        </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Krytina
    </td>
  </tr>
</table>

<ul>
<li>Umožňuje výběr střešní krytiny z připravené galerie výrobků.</li>
</ul>

<hr>

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/WallPartIcon64x64.png" alt="WallPartIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
        Sekundární k.
        </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Sekundární konstrukce
    </td>
  </tr>
</table>

<ul>
<li>V nastavení sekundární konstrukce lze editovat průřezy jednotlivých prvků z připravené galerie.</li>
<li>Taktéž je možné nastavit umístění konstrukce a vzdálenosti mezi prvky, a také odsazení krajních prvků od hřebene, respektive od okapové hrany.</li>
</ul>

<hr> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/WallPartIcon64x64.png" alt="WallPartIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
        Laťování
        </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Laťování
    </td>
  </tr>
</table>

<ul>
<li>V nastavení laťování je možné upravit materiál a dimenze průřezů, rozteče mezi jednotlivými prvky laťování a vzdálenost prvního prvku od okraje střechy.</li>
<li>Směr jednotlivých vrstev laťování lze otáčet o 90°, tedy rovnoběžně nebo kolmo se směrem sklonu střechy.</li>
</ul>

<hr class="main"> <!-- Hlavní oddělovací čára -->

<table>
  <tr>
    <td><img src="img/ControlButton.png" alt="ControlButton.png" width="64"></td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Ovládácí tlačítko</td>
  </tr>
</table>

<ul>
<li>Nastavení typu skladby střechy, typu krytiny a rozměry sekundární konstrukce.</li>
<li>Generování kusovníku s položkami střešní krytiny a také generování půdorysu střešní konstrukce se všemi vrstvami ve formě editovatelného výkresu.</li>
</ul>

<hr class="main"> <!-- Hlavní oddělovací čára -->

<table>
  <tr>
    <td><img src="img/EditButton.png" alt="EditButton.png" width="64"></td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Editační tlačítko</td>
  </tr>
</table>

<ul>
<li>Nastavení směru kladení, taktéž úpravu pozice a úhlu kladení.</li>
<li>Generování půdorysu příslušné vrstvy střešní konstrukce ve formě editovatelného výkresu.</li>
<li>Pro střešní krytinu je možné také vygenerovat výkaz materiálu s položkami střešní krytiny.</li>
</ul>

<hr class="main"> <!-- Hlavní oddělovací čára -->
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
      <a href="https://docs.histruct.com/cs/">
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
