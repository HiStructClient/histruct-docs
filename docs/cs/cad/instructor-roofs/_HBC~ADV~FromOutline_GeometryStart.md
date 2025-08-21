
<h1>Geometrie</h1>

<p>Umožňuje měnit geometrické parametry modelu, tedy rozměry budovy a střechy včetně sklonu a přesahů. Rovněž je zde možné nastavit typ skladby střechy.</p>

<hr class="main">

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/ImportDxfIcon64x64.png" alt="ImportDxfIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Podklad</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Podklad
    </td>
  </tr>
</table>

<p>Tlačítko <u>Podklad</u> slouží k importu podkladu pro rychlejší kreslení obrysu střechy.</p>
<p><b>Po importu pokladu je třeba zkontrolovat jeho rozměry a případně upravit měřítko.</b></p>

<ul>
  <li><p>Nastavení měřítka je možné změnit po importu podkladu kliknutím na šedé obdélníkové tlačítko v modelovacím prostoru.</p></li>
</ul>

<hr class="main">

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/RoofBoundaryIcon64x64.png" alt="RoofBoundaryIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Obrys</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Obrys
    </td>
  </tr>
</table>

<p>Tlačítko <u>Obrys</u> slouží k zakreslení půdorysného obrysu střechy. Pro zadání délky a směru jednotlivých okapových hran je možné využít:</p>

<p><b><u>Volné kreslení pomocí kurzoru</u></b></p>
<ul>
  <li><p>Hrany lze kreslit volným klikáním do modelovacího prostoru.</p></li>
  <li><p>Během kreslení hran je možné využít funkce zarovnávání kurzoru podle směrů os X a Y, případně zarovnávání kurzoru kolmo k poslední zadané hraně.</p></li>
</ul>

{{ modal_video_button("img/VideoOutlineFree.mp4") }}

<p><b><u>Globální souřadnice vrcholů polygonu</u></b></p>
<ul>
  <li><p>Globální souřadnice pro následující vrchol se zapíší ve formátu "X;Y", tedy např. <b>2;4</b></p></li>
</ul>

{{ modal_video_button("img/VideoOutlineGlobal.mp4") }}

<p><b><u>Relativní souřadnice vrcholů polygonu</u></b></p>
<ul>
  <li><p>Relativní souřadnice pro následující vrchol se zapíší ve formátu "@X;Y", tedy např. <b>@2;4</b></p></li>
</ul>

{{ modal_video_button("img/VideoOutlineRelative.mp4") }}

<p><b><u>Polární souřadnice vrcholů polygonu</u></b></p>
<ul>
  <li><p>Polární souřadnice pro následující vrchol se zapíší ve formátu "&gt;alfa;L", tedy např. <b>&gt;135;6</b></p></li>
  <li><p>Zadávaný úhel se odměřuje o kladného směru globální osy X proti směru hodinových ručiček.</p></li>
</ul>

{{ modal_video_button("img/VideoOutlinePolar.mp4") }}

Poslední vložený bod je možné smazat pomocí klávesy <b><u>DELETE</u></b>.

<hr class="main">

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/ClassRectLoopIcon64x64.png" alt="ClassRectLoopIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Otvor</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Otvor
    </td>
  </tr>
</table>

<p>Tlačítkem <u>Otvor</u> je možné do vygenerované střešní roviny vsadit otvor, zakresluje se jako půdorysný průmět.</p>
<p>Otvor může být obdélníkový či obecného tvaru a lze mu přiřadit typ otvoru pro komín.</p>

<hr class="main">

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/EditPropertiesIcon64x64.png" alt="EditPropertiesIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Vlastnosti</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Vlastnosti
    </td>
  </tr>
</table>

<p>Umožňuje upravit způsob zadání geometrie, podle nastavení je možné kreslit obrys střechy nebo stěn.</p>

<hr class="main">

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/DeleteIcon64x64.png" alt="DeleteIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Smazat</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Smazat
    </td>
  </tr>
</table>

<p>Smaže všechny importované podklady a konstrukce zakreslené pomocí funkce <u>Obrys</u>.</p>

<hr class="main">

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/DimensionLinearIcon64x64.png" alt="DimensionLinearIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Anotace</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Anotace
    </td>
  </tr>
</table>

<p>Tlačítko <u>Anotace</u> umožňuje do modelu přidávat libovolné půdorysné kóty.</p>

<hr class="main">

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

<p>Tlačítkem <u>Měření</u> je možné zkontrolovat rozměry modelu.</p>

<hr class="main">

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/MainInsert64x64.png" alt="MainInsert64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">Přidat</div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Přidat
    </td>
  </tr>
</table>

<p>Tlačítkem <u>Přidat</u> je možné do modelového prostoru přidat další konstrukce.</p>
<ul>
  <li><p>Objekt s pultovou střechou na obdélníkovém půdorysu</p></li>
  <li><p>Objekt se sedlovou střechou na obdélníkovém půdorysu</p></li>
  <li><p>Další objekt definovaný obrysem</p></li>
  <li><p>Objekt určenou pomocí 3D souboru typu „.obj“</p></li>
</ul>

<hr class="main">

<!-- product: HiStruct Building Configurator -->
