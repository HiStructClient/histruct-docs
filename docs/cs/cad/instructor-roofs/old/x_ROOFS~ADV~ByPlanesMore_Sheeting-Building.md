<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Opláštění &gt; Budova</title>
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

<h1>Opláštění &gt; Budova</h1>

<p>Menu <u><i>Opláštění &gt; Budova</i></u> umožňuje nastavit typ skladby střechy, typ střešní krytiny a rozměry sekundární střešní konstrukce.</p>

<p>V rámci jednotlivých střešních rovin je navíc možné měnit směr kladení střešní krytiny, generovat kusovník s položkami střešní krytiny a také generovat půdorys střešní konstrukce ve formě editovatelného výkresu.</p>

<p><b>Nastavení a úpravy jednotlivých střešních rovin je možné provést pomocí <u>Ovládacích a Editačních tlačítek</u>.</b></p>

<hr class="main"> <!-- Hlavní oddělovací čára -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/RoofSketchIcon64x64.png" alt="RoofSketchIcon64x64.png" width="64" height="64">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
      Střecha
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Střecha
    </td>
  </tr>
</table>

<p>Tlačítko <u>Střecha</u> umožňuje nastavit typ skladby střechy, typ střešní krytiny a rozměry sekundární střešní konstrukce pro celou střechu.</p>

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

<details>
<style>
  details summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    list-style: none; /* skryje defaultní trojúhelník v některých prohlížečích */
    padding: 6px 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
  /* vlastní šipka */
  details summary::after {
    content: "▶"; /* trojúhelník */
    transition: transform 0.25s ease;
  }
  /* při otevření se otočí */
  details[open] summary::after {
    transform: rotate(90deg);
  }
  /* rámeček pro obsah */
  details .panel {
    margin-top: 8px;
    padding: 10px 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
</style>
  <summary>
    <span>Funkce přístupné přes Ovládací tlačítko</span>
  </summary>
  <div class="panel">
  <h1>Opláštění > Střešní rovina</h1>

<p>V menu <u><i>Opláštění > Střešní rovina</i></u> přístupném přes <u>Ovládací tlačítko</u> je pro jednotlivé střešní roviny možné :</p>

<ul>
  <li><p>Nastavení typu skladby střechy - typu krytiny a sekundární konstrukce.</p></li>
  <li><p>Generování kusovníku s položkami střešní krytiny a také generování půdorysu střešní konstrukce se všemi vrstvami ve formě editovatelného výkresu.</p></li>
</ul>

<p><b><u>Ovládací a Editační tlačítka</u> upravují vlastnosti střešní konstrukce pouze na vybrané střešní rovině.</b></p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/EditPropertiesIcon64x64.png" alt="EditPropertiesIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Vlastnosti</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Vlastnosti</td>
  </tr>
</table>

<p>Tlačítko <u>Vlastnosti</u> umožňuje pojmenovat určenou střešní rovinu a upravit excentricitu střechy, tedy odsazení vygenerované střešní roviny od její skutečné polohy.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/WallPartIcon64x64.png" alt="WallPartIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Materiály</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Materiály</td>
  </tr>
</table>

<p>Nastavení skladby střešní konstrukce se provádí pomocí tlačítek:</p>

<ul>
  <li><p><u>Vrchní vrstva</u></p></li>
  <li><p><u>Nižší vrstvy</u></p></li>
</ul>

<p>
Pro některé krytiny může být v defaultním stavu tlačítko <u>Nižší vrstvy</u> schované a sekundární konstrukce pak pro takovou krytinu není generována.
</p> 

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
  <li><p>Umožňuje výběr střešní krytiny z připravené galerie výrobků.</p></li>
</ul>

<hr> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/RoofLowerLayers_64x64.png" alt="RoofLowerLayers_64x64.png" width="64" height="64">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
      Nižší vrstvy
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Nižší vrstvy
    </td>
  </tr>
</table>

<ul>
  <li><p>Umožňuje výběr typu skladby sekundární konstrukce z připravené galerie výrobků.</p></li>
</ul>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/BomIcon64x64.png" alt="BomIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Kusovník</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Kusovník</td>
  </tr>
</table>

<p>Generuje soupis položek střešní krytiny pro příslušnou střešní rovinu do přehledné tabulky.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/MainDrawings64x64.png" alt="MainDrawings64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Výkres</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Výkres</td>
  </tr>
</table>

<p>Generuje výkres určené střešní roviny včetně celé skladby střešní konstrukce. Výkres je možné dále editovat, doplnit popisky a kótami.</p>
</div>
</details>


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

<details>
<style>
  details summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    list-style: none; /* skryje defaultní trojúhelník v některých prohlížečích */
    padding: 6px 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
  /* vlastní šipka */
  details summary::after {
    content: "▶"; /* trojúhelník */
    transition: transform 0.25s ease;
  }
  /* při otevření se otočí */
  details[open] summary::after {
    transform: rotate(90deg);
  }
  /* rámeček pro obsah */
  details .panel {
    margin-top: 8px;
    padding: 10px 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
</style>
  <summary>
    <span>Funkce přístupné přes Editační tlačítko</span>
  </summary>
  <div class="panel">
  <h1>Opláštění &gt; Střešní vrstva</h1>

<p>
  Menu <u><i>Opláštění &gt; Střešní vrstva</i></u> přístupném přes <u>Editační tlačítko</u> umožňuje pro jednotlivé vrstvy skladby střechy na určené střešní rovině:</p>

<ul>
  <li><p>Nastavení typu krytiny nebo jednotlivých vrstev sekundární konstrukce včetně rozměrů, směru kladení, taktéž úpravu pozice a úhlu kladení.</p></li>
  <li><p>Generování půdorysu příslušné vrstvy střešní konstrukce ve formě editovatelného výkresu.</p></li>
  <li><p>Pro střešní krytinu je možné také vygenerovat výkaz materiálu s položkami střešní krytiny.</p></li>
</ul>

<p>
  Možnosti nastavení se liší v závislosti na typu střešní krytiny či sekundární konstrukce.
</p>

<p>
  <b><u>Ovládací a Editační tlačítka</u> upravují vlastnosti střešní konstrukce pouze na vybrané střešní rovině.</b>
</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/TilingEditIcon64x64.png" alt="TilingEditIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Kladení</div>
      </div>
    </td>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/TilingEditIcon64x64.png" alt="TilingEditIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Síť</div>
      </div>
    </td>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/TilingEditIcon64x64.png" alt="TilingEditIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Rámy</div>
      </div>
    </td>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/TilingEditIcon64x64.png" alt="TilingEditIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Vrstva</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Kladení / Síť / Rámy / Vrstva
    </td>
  </tr>
</table>

<h3>Kladení</h3>

<ul>
<li><p>
  Tlačítko <u>Kladení</u> umožňuje výběr materiálu pro danou vrstvu střešní konstrukce z připravené galerie výrobků.
  </p></li>
<li><p>Dále umožňuje nastavit směr, úhel a posun kladení prvků střešní krytiny od okraje střechy.
</p></li>

<li><p>
  Po kliknutí na zvolený prvek střešní krytiny je možné prvek prodloužit na začátku i na konci o zvolenou délku, případně editovat jeho barvu.
  Taktéž umožňuje nastavení přesahů a barvy jednotlivých kusů krytiny.
</p></li>

<li><p>
<table>
  <tr>
    <td>
      <img src="img/AddOffsetButton.png" alt="AddOffsetButton.png" width="50">
    </td>
    <td style="vertical-align: middle; font-size: 15px; padding-left: 30px;">
      Přesah
    </td>
  </tr> 
</table>
</p></li>

<ul><li><p>
  Tlačítko <u>Přesah</u> v modelu umožňuje nastavit přesah krytiny přes danou střešní hranu.
</p></li></ul>
</ul>

<h3>Síť</h3>

<ul>
<li><p>Tlačítko <u>Síť</u> umožňuje výběr materiálu pro danou vrstvu střešní konstrukce z připravené galerie výrobků, zde je možné vybrat požadovaný průřez latí včetně jejich rozteče.
</p></li>

<li><p>Dále umožňuje nastavit rozteče mezi prvky laťování, upravit úhel kladené vrstvy laťování a odsazení prvního prvku od kraje střechy.
</p></li>
</ul>

<h3>Rámy</h3>

<ul>
<li><p>
  Tlačítko <u>Rámy</u> umožňuje výběr materiálu pro danou vrstvu střešní konstrukce z připravené galerie výrobků, zde je možné vybrat požadovaný průřez prvků sekundární konstrukce.
  </p></li>
</ul>

<h3>Vrstva</h3>
<ul>
<li><p>
  ...Funkcionalita tlačítka <u>Vrstva</u> se připravuje pro budoucí verzi programu...
</p></li>
</ul>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/BomIcon64x64.png" alt="BomIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Kusovník</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Kusovník
    </td>
  </tr>
</table>

<p>
  Generuje soupis položek dané vrstvy skladby střešní konstrukcepro příslušnou střešní rovinu do přehledné tabulky.
</p>

<p>
Funckionalita nemusí být dočasně přístupná pro všechny vrstvy sklaby střechy
</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/MainDrawings64x64.png" alt="MainDrawings64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Výkres</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Výkres
    </td>
  </tr>
</table>

<p>
  Generuje výkres určené vrstvy střešní roviny. Výkres je možné dále editovat, doplnit popisky a kótami.
</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/TapeMeasureIcon64x64.png" alt="TapeMeasureIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Měření</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Měření
    </td>
  </tr>
</table>

<p>
  Tlačítkem <u>Měření</u> je možné zkontrolovat rozměry modelu.
</p>
</div>
</details>

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
