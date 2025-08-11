# Geometrie > Import
V menu <u><i>Geometrie > Import</i></u> je možné změnit nastavení generátoru hran a ploch, upravit rozměry a sklony vygenerovaných hran a ploch pomocí řešiče ROSOL a také nastavit typ skladby střechy.

#
## Nastavení generovaných hran a ploch
Generátor vytvoří 3D model z trojúhelníkových ploch, které jsou ohraničeny hranami. 

Zaměřený model však nemusí být přesný, proto je přímo v modelu možné upravit parametry jednotlivých vygenerovaných hran a ploch - výběr se provádí kliknutím na zvolený prvek.

### <u>Plochy</u>
Podle orientace jednotlivých ploch v modelu je určeno, zda se jedná o střešní plochu či nikoliv.

Jednotlivé vygenerované plochy je možné zapnout či vypnout, zapnuté plochy budou dále považovány ze střešní plochy a bude na nich generována krytina, sekundární konstrukce i lemovací prvky.

### <u>Hrany</u>
Hranám je podle jejich geometrie v modelu určena jedna z následujících funkcí:

<span style="color: rgba(40,100,255,255);">
<b>Štítová</b>
</span>

* Hrana na kraji střešní plochy, ve sklonu
* Je hranou ukončující střešní plochu

<span style="color: rgba(20,255,20,255);">
<b>Okapová</b>
</span>

* Hrana na kraji střešní plochy, vodorovná
* Je hranou ukončující střešní plochu

<span style="color: rgba(187,120,62,255);">
<b>Vnitřní</b>
</span>

* Hrana mezi střešními plochami, vypnutá
* Pouze rozděluje vygenerované střešní roviny

Jednotlivé hrany v rámci aktivních střešních ploch je možné zapnout nebo vypnout a dále jim nastavit, zda je má generátor dále považovat za vodorovné či nikoliv.

#
<style>
h2{
  border-bottom: none;
  margin-top: 10px;
  margin-bottom: 0px;
}
p{
  border-bottom: none;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
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
    <td style="vertical-align: middle; font-size: 20px;">
      Nastavení
    </td>
  </tr>
</table>

Umožňuje upravit měřítko importovaného modelu a přizpůsobit parametry generátoru střešních rovin.

<b><u>Měřítko</u></b>

* Upravením hodnoty je možné model zvětšit nebo zmenšit, vhodné měřítko je třeba nastavit tak, aby rozměry objektu v modelu odpovídaly jeho rozměrům ve skutečnosti.
* Správné nastavení měřítka lze ověřit změřením libovolného známého rozměru pomocí tlačítka <u>Měření</u>.

<b><u>Svislé povrchy</u></b>

* Svislé povrchy je možné z modelu zcela vypustit, případně je možné nastavit těmto povrchům maximální přípustnou úhlovou odchylku od svislého směru, po jakou budou považovány za svislé.

<b><u>Vodorovné povrchy</u></b>

* Vodorovné povrchy je možné z modelu taktéž zcela vypustit, případně je možné nastavit těmto povrchům maximální přípustnou úhlovou odchylku od vodorovného směru, po jakou budou považovány za vodorovné.

<b><u>Max. vzdálenost bodů ke sloučení</u></b>

* Slouží k nastavení maximální vzdálenosti bodů, které lze považovat za totožné. Generátor následně tyto roviny sloučí.

<b><u>Max. úhel mezi normálami ploch ke sloučení</u></b>

* Slouží k nastavení maximálního úhlu, který mohou normály dvou sousedních rovin svírat, aby byly tyto roviny považovány za rovnoběžné. Generátor následně tyto roviny sloučí.

<b><u>Max. sklon čáry s požadavkem na vodorovnost</u></b>

* Slouží k nastavení maximálního sklonu hrany, při kterém bude hrana stále považována za vodorovnou.

#
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
    <td style="vertical-align: middle; font-size: 20px;">
      Náhled
    </td>
  </tr>
</table>

Tlačítkem <u>Náhled</u> je možné v modelovém prostoru zkontrolovat vygenerované střešní plochy a hrany, včetně jejich délek a sklonů.

#
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
    <td style="vertical-align: middle; font-size: 20px;">
      Anotace
    </td>
  </tr>
</table>

Tlačítko <u>Anotace</u> umožňuje do modelu přidávat libovolné půdorysné kóty.

#
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
    <td style="vertical-align: middle; font-size: 20px;">
      Měření
    </td>
  </tr>
</table>

Tlačítkem <u>Měření</u> je možné zkontrolovat rozměry modelu.

#

<style>
    .btn {
      margin-top: 0px;
      padding: 12px 20px;
      background-color: rgb(27,122,187);
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
    }
    .btn:hover {
      background-color: rgb(20,90,140);
</style>

### Nepomohla Vám nápověda?
Pro více informací o funkcích HiStruct Roofs můžete navštívit náš blog nebo zaslat dotaz na naší podporu. 
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