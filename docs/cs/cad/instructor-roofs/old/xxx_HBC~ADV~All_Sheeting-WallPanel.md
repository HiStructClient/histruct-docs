<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Opláštění > Stěnové panely</title>
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

<h1>Opláštění &gt; Stěnové panely</h1>

<p>V menu <u><i>Opláštění &gt; Stěnové panely</i></u> přístupném přes <u>Editační tlačítko</u> je možné nastavit směr a posun kladení stěnových panelů, vytvářet výkazy materiálů a generovat editovatelné výkresy stěnových panelů.</p>
<p>Možnosti nastavení se liší v závislosti na typu použitého materiálu.</p>
<p><b><u>Ovládací a Editační tlačítka</u> upravují vlastnosti konstrukce pouze na vybrané stěnové rovině.</b></p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<p>
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
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Vrstva</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Kladení / Vrstva</td>
  </tr>
</table>
</p>

<h3>Kladení</h3>

<ul>
<li><p>
  Tlačítko <u>Kladení</u> umožňuje výběr materiálu pro danou vrstvu stěnové konstrukce z připravené galerie výrobků.
  </p></li>
<li><p>Dále umožňuje nastavit směr, úhel a posun kladení prvků opláštění od okraje budovy.
</p></li>

<li><p>
  Po kliknutí na zvolený prvek stěnového opláštění je možné prvek prodloužit na začátku i na konci o zvolenou délku, případně editovat jeho barvu.
  Taktéž umožňuje nastavení přesahů a barvy jednotlivých kusů opláštění.
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
  Tlačítko <u>Přesah</u> v modelu umožňuje nastavit přesah stěnového opláštění přes danou hranu budovy.
</p></li></ul>
</ul>

<h3>Vrstva</h3>
<ul>
<li><p>
  ...Funkcionalita tlačítka <u>Vrstva</u> se připravuje pro budoucí verzi programu...
</p></li>
</ul>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<p>
<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/ColorsIcon64x64.png" alt="ColorsIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Barvy</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Barvy</td>
  </tr>
</table>
</p>
<p>Tlačítko <u>Barvy</u> umožňuje nastavit barevné schéma pro danou stěnovou rovinu, podle typu schématu je možné nastavit barvy pro vybrané stěnové panely.</p>
<p>Stěnové panely jsou číslovány od 0.</p>

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
  Generuje soupis položek dané vrstvy skladby stěnové konstrukce pro příslušnou stěnovou rovinu do přehledné tabulky.
</p>

<p>
Funckionalita nemusí být dočasně přístupná pro všechny vrstvy sklaby opláštění.
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
  Generuje výkres určené vrstvy stěnové roviny. Výkres je možné dále editovat, doplnit popisky a kótami.
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

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<p>
<table>
  <tr>
    <td><img src="img/ControlButton.png" alt="ControlButton.png" width="64"></td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Ovládací tlačítko</td>
  </tr>
</table>
</p>

<p><b><u>Pro jednotlivé střešní roviny umožňuje:</u></b></p>
<ul>
  <li><p>Nastavení typu skladby střechy - typu krytiny a sekundární konstrukce.</p></li>
  <li><p>Generování kusovníku s položkami střešní krytiny a také generování půdorysu střešní konstrukce se všemi vrstvami ve formě editovatelného výkresu.</p></li>
</ul>

<p><b><u>Pro jednotlivé stěnové roviny umožňuje:</u></b></p>
<ul>
<li><p>Nastavení typu výroby stěny, způsobu kladení řad opláštění, výšku soklu nebo barevné schéma.</p></li>
<li><p>Nastavení materiálu stěny a úpravu jednotlivých vrstev opláštění podle typu výroby stěny.</p></li>
<li><p>Generování kusovníku s položkami opláštění stěny a pohledu na stěnu ve formě editovatelného výkresu.</p></li>
</ul>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<p>
<table>
  <tr>
    <td><img src="img/EditButton.png" alt="EditButton.png" width="64"></td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Editační tlačítko</td>
  </tr>
</table>
</p>

<p><b><u>Pro jednotlivé vrstvy skladby střechy na určené střešní rovině umožňuje:</u></b></p>
<ul>
  <li><p>Nastavení typu krytiny nebo jednotlivých vrstev sekundární konstrukce včetně rozměrů, směru kladení, taktéž úpravu pozice a úhlu kladení.</p></li>
  <li><p>Generování půdorysu příslušné vrstvy střešní konstrukce ve formě editovatelného výkresu.</p></li>
  <li><p>Pro střešní krytinu je možné také vygenerovat výkaz materiálu s položkami střešní krytiny.</p></li>
</ul>

<p><b><u>Pro jednotlivé vrstvy skladby opláštění na určené stěnové rovině umožňuje:</u></b></p>
<ul>
<li><p>Nastavení materiálu opláštění nebo jednotlivých vrstev sekundární konsturkce či soklu, dále nastavení směru kladení, taktéž úpravu pozice a úhlu kladení opláštění.</p></li>
<li><p>Úpravu barevného schématu opláštění, prodloužení přesahů opláštění.</p></li> 
<li><p>Generování výkresu příslušné vrstvy stěnové konstrukce ve formě editovatelného výkresu.</p></li>
<li><p>Pro vrstvu vnějšího opláštění je možné také vygenerovat výkaz materiálu s položkami.</p></li>
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
<p>Pro více informací o funkcích HiStruct Building Configurator můžete navštívit náš blog nebo zaslat dotaz na naší podporu.</p>

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
