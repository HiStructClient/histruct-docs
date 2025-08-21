
<h1>Geometrie &gt; Import</h1>
<p>V menu <u><i>Geometrie &gt; Import</i></u> je možné změnit nastavení generátoru hran a ploch, upravit rozměry a sklony vygenerovaných hran a ploch pomocí řešiče ROSOL.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Nastavení generovaných hran a ploch</h2>
<p>Generátor vytvoří 3D model z trojúhelníkových ploch, které jsou ohraničeny hranami.</p>

<p>Zaměřený model však nemusí být přesný, proto je přímo v modelu možné upravit parametry jednotlivých vygenerovaných hran a ploch - výběr se provádí kliknutím na zvolený prvek.</p>

<h3><u>Plochy</u></h3>
<p>Podle orientace jednotlivých ploch v modelu je určeno, zda se jedná o střešní plochu či nikoliv.</p>

<p>Jednotlivé vygenerované plochy je možné zapnout či vypnout, zapnuté plochy budou dále považovány ze střešní plochy a bude na nich generována krytina, sekundární konstrukce i lemovací prvky.</p>

<h3><u>Hrany</u></h3>
<p>Hranám je podle jejich geometrie v modelu určena jedna z následujících funkcí:</p>

<p><span style="color: rgba(40,100,255,255);"><b>Štítová</b></span></p>
<ul>
  <li><p>Hrana na kraji střešní plochy, ve sklonu</p></li>
  <li><p>Je hranou ukončující střešní plochu</p></li>
</ul>

<p><span style="color: rgba(20,255,20,255);"><b>Okapová</b></span></p>
<ul>
  <li><p>Hrana na kraji střešní plochy, vodorovná</p></li>
  <li><p>Je hranou ukončující střešní plochu</p></li>
</ul>

<p><span style="color: rgba(187,120,62,255);"><b>Vnitřní</b></span></p>
<ul>
  <li><p>Hrana mezi střešními plochami, vypnutá</p></li>
  <li><p>Pouze rozděluje vygenerované střešní roviny</p></li>
</ul>

<p>Jednotlivé hrany v rámci aktivních střešních ploch je možné zapnout nebo vypnout a dále jim nastavit, zda je má generátor dále považovat za vodorovné či nikoliv.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/MainSettings64x64.png" alt="MainSettings64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
        Nastavení
        </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Nastavení
    </td>
  </tr>
</table>

<p>Umožňuje upravit měřítko importovaného modelu a přizpůsobit parametry generátoru střešních rovin.</p>

<p><b><u>Měřítko</u></b></p>
<ul>
  <li><p>Upravením hodnoty je možné model zvětšit nebo zmenšit, vhodné měřítko je třeba nastavit tak, aby rozměry objektu v modelu odpovídaly jeho rozměrům ve skutečnosti.</p></li>
  <li><p>Správné nastavení měřítka lze ověřit změřením libovolného známého rozměru pomocí tlačítka <u>Měření</u>.</p></li>
</ul>

<p><b><u>Svislé povrchy</u></b></p>
<ul>
  <li><p>Svislé povrchy je možné z modelu zcela vypustit, případně je možné nastavit těmto povrchům maximální přípustnou úhlovou odchylku od svislého směru, po jakou budou považovány za svislé.</p></li>
</ul>

<p><b><u>Vodorovné povrchy</u></b></p>
<ul>
  <li><p>Vodorovné povrchy je možné z modelu taktéž zcela vypustit, případně je možné nastavit těmto povrchům maximální přípustnou úhlovou odchylku od vodorovného směru, po jakou budou považovány za vodorovné.</p></li>
</ul>

<p><b><u>Max. vzdálenost bodů ke sloučení</u></b></p>
<ul>
  <li><p>Slouží k nastavení maximální vzdálenosti bodů, které lze považovat za totožné. Generátor následně body splňující nastavenou maximální vzdálenost sloučí.</p></li>
</ul>

<p><b><u>Max. úhel mezi normálami ploch ke sloučení</u></b></p>
<ul>
  <li><p>Slouží k nastavení maximálního úhlu, který mohou normály dvou sousedních rovin svírat, aby byly tyto roviny považovány za rovnoběžné. Generátor následně tyto roviny sloučí.</p></li>
</ul>

<p><b><u>Max. sklon čáry s požadavkem na vodorovnost</u></b></p>
<ul>
  <li><p>Slouží k nastavení maximálního sklonu hrany, při kterém bude hrana stále považována za vodorovnou.</p></li>
</ul>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/PreviewGeometry64x64.png" alt="PreviewGeometry64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
        Náhled
        </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Náhled
    </td>
  </tr>
</table>

<p>Tlačítkem <u>Náhled</u> je možné v modelovém prostoru zkontrolovat vygenerované střešní plochy a hrany, včetně jejich délek a sklonů.</p>

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
