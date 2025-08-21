
<h1>Geometrie</h1>
<p>
Umožňuje kreslit střešní roviny, měnit jejich tvary, rozměry či sklony.
</p>

<p><b>Pro přehlednější práci s programem se obsah menu <u>Geometrie</u> liší pro fázi před nakreslením první plochy a fázi po nakreslení první plochy.</b></p>

<p>
<b><u>Ovládací tlačítka</u> upravují vlastnosti střešní konstrukce pouze na vybrané střešní rovině.</b>
</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<details>  <summary>
    <span>FÁZE 1: Chci nakreslit první plochu</span>
  </summary>
  <div class="panel">

<h1>Geometrie</h1>
<p>
Umožňuje kreslit střešní roviny, měnit jejich tvary, rozměry či sklony, taktéž umožňuje nastavit typ skladby střechy.
</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->
<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/ImportDxfIcon64x64.png" alt="ImportDxfIcon64x64.png" width="64" height="64">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
      Podklad
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Podklad
    </td>
  </tr>
</table>

<p>Tlačítko <u>Podklad</u> slouží k importu podkladu pro rychlejší kreslení obrysu střechy.</p> 

<p>Po importu pokladu je třeba zkontrolovat jeho rozměry a případně upravit měřítko.</p>

<p><b><u>Úprava měřítka importovaného podkladu</u></b></p>

<ul>
<p><li>
Po kliknutí na mřížku importovaného podkladu je možné měřítko změnit přímo v příslušné buňce v otevřené tabulce. 
</li></p>

<p><li>
Pro úpravu měřítka je taktéž možné použít tlačítko <u>Měřítko</u>, které je umístěno v horní části otevřené tabulky. Pomocí tohoto tlačítka je možné nastavit měřítko podkladu pomocí zvolené hrany, u které známe její skutečné rozměry.
</li></p>
</ul>

{{ modal_video_button("img/VideoImportDXF.mp4") }}

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/TiledAreaGeneralIcon64x64.png" alt="TiledAreaGeneralIcon64x64.png" width="64" height="64">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
      Plocha
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Plocha
    </td>
  </tr>
</table>

<p>
Tlačítko <u>Plocha</u> slouží k zakreslení půdorysného obrysu střešní roviny. Střešní roviny lze kreslit pomocí předdefinovaných tvarů ploch:
</p>

<table>
  <tr>
    <td>
      <div style="position: relative; width: 55px; height: 55px;">
        <img src="img/GeneralLoopIcon64x64.png" alt="GeneralLoopIcon64x64.png" width="55" height="55">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
      Obecný
      </div>
      </div>
    </td>
    <td>
      <div style="position: relative; width: 55px; height: 55px;">
        <img src="img/ClassRectLoopIcon64x64.png" alt="ClassRectLoopIcon64x64.png" width="55" height="55">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
      Obdélník
      </div>
      </div>
    </td>
    <td>
      <div style="position: relative; width: 55px; height: 55px;">
        <img src="img/ClassTriangleLoopIcon64x64.png" alt="ClassTriangleLoopIcon64x64.png" width="55" height="55">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
      Trojúhelník
      </div>
      </div>
    </td>
    <td>
      <div style="position: relative; width: 55px; height: 55px;">
        <img src="img/ClassTrapezoidLoopIcon64x64.png" alt="ClassTrapezoidLoopIcon64x64.png" width="55" height="55">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
      Lichoběžník
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      ... a další
    </td>
  </tr>
</table>

<p>
Po zakreslení či vložení plochy je možné v závislosti na typu plochy upravovat její rozměry a sklon, a také výšku i směr okapové hrany v příslušné otevřené tabulce.
</p>

<hr> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
    <tr>
      <td>
        <div style="position: relative; width: 64px; height: 64px;">
          <img src="img/GeneralLoopIcon64x64.png" alt="GeneralLoopIcon64x64.png" width="64" height="64">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
            Obecný
          </div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
        Obecný
      </td>
    </tr>
  </table>

  <p>Tlačítkem <u>Obecný</u> je možné kreslit střešní rovinu libovolného tvaru, přičemž kreslení je možné jednak v půdorysné rovině, ale také ve 3D prostoru. K tomu lze využít:</p>

  <p><b><u>Volné kreslení pomocí kurzoru (lze i ve 3D prostoru)</u></b></p>
  <ul>
    <li><p>Hrany lze kreslit volným klikáním do modelovacího prostoru.</p></li>
    <li><p>Během kreslení hran v půdorysné rovině je možné využít funkce zarovnávání kurzoru podle směrů os X a Y, případně zarovnávání kurzoru kolmo k poslední zadané hraně.</p></li>
    <li><p><b>Při kreslení střešní plochy ve 3D prostoru je třeba využít koncových bodů již namodelovaných střešních ploch a poté změnit typ plochy PROMÍTÁNÍ -> OBECNÝ</b>.
  </ul>

{{ modal_video_button("img/VideoPlanes3D.mp4") }}

  <p><b><u>Globální souřadnice vrcholů polygonu</u></b></p>
  <ul>
    <li><p>Globální souřadnice pro následující vrchol se zapíší ve formátu "X;Y", tedy např. <b>2;4</b></p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesGlobal.mp4") }}

  <p><b><u>Relativní souřadnice vrcholů polygonu</u></b></p>
  <ul>
    <li><p>Relativní souřadnice pro následující vrchol se zapíší ve formátu "@X;Y", tedy např. <b>@2;4</b></p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesRelative.mp4") }}

  <p><b><u>Polární souřadnice vrcholů polygonu</u></b></p>
  <ul>
    <li><p>Polární souřadnice pro následující vrchol se zapíší ve formátu "&gt;alfa;L", tedy např. <b>&gt;135;6</b></p></li>
    <li><p>Zadávaný úhel se odměřuje o kladného směru globální osy X proti směru hodinových ručiček.</p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesPolar.mp4") }}

  <p>Poslední vložený bod je možné smazat pomocí klávesy <b><u>DELETE</u></b>.</p>

<hr> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/ClassRectLoopIcon64x64.png" alt="ClassRectLoopIcon64x64.png" width="64" height="64">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
      Obdélník
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Obdélník
    </td>
  </tr>
</table>

<p>
Střešní rovinu obdélníkového tvaru lze zadat volným klikáním do půdorysné roviny nebo pomocí jeho rozměrů ve tvaru "X;Y", tedy např. <b>2;4</b>.
</p>

<hr> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 55px; height: 55px;">
        <img src="img/ClassTriangleLoopIcon64x64.png" alt="ClassTriangleLoopIcon64x64.png" width="55" height="55">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
      Trojúhelník
      </div>
      </div>
    </td>
    <td>
      <div style="position: relative; width: 55px; height: 55px;">
        <img src="img/ClassTrapezoidLoopIcon64x64.png" alt="ClassTrapezoidLoopIcon64x64.png" width="55" height="55">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
      Lichoběžník
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      ... a další
    </td>
  </tr>
</table>

<p>
Střešní rovinu dalších tvarů lze zadat přímo kliknutím do modelovacího prostoru, následně lze v editační tabulce upravit rozměry.
</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Editace střešních rovin</h2>

<p><b><u>Tabulku pro editaci roviny je možné otevřít kliknutím na zvolenou rovinu.</u></b></p>

<p>
Plochu lze pomocí tlačítek v horní části tabulky kopírovat, smazat, otáčet v půdorysné rovině nebo v rovině plochy, a také posouvat ve všech 3 směrech.
</p>

{{ modal_video_button("img/VideoEditPlanes.mp4") }}

<details>  <summary>
    <span>Další možnosti editace střešních rovin</span>
  </summary>
  <div class="panel">
<h1>Geometrie &gt; Rozměry &gt; Plocha</h1>

  <p> Menu <u><i>Geometrie &gt; Rozměry &gt; Plocha</i></u> přístupné přes kliknutí na zvolenou plochu umožňuje provádět editace střešních rovin přes otevřenou tabulku.

  <p>
  U jednotlivých střešních ploch lze upravovat typ geometrického promítání plochy, rozměry některých tvarů ploch, dále sklon a směr sklonu a také výšku okapové hrany nad půdorysným průmětem roviny.
  </p>
  
  <p>
  Plochu lze pomocí tlačítek v horní části tabulky kopírovat, smazat, otáčet v půdorysné rovině nebo v rovině plochy, a také posouvat ve všech 3 směrech.
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

  <p>
  <b>
  Úpravy je možné provádět po kliknutí na hranu přislušné plochy, u rovin zakreslených pomocí Obecného tvaru je možné využít i některá ze žlutých tlačítek zobrazených u hran.
  </b>
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

  <table>
    <tr>
      <td>
        <div style="position: relative; width: 64px; height: 64px;">
          <img src="img/ActionsIcon64x64.png" alt="ActionsIcon64x64.png" width="64" height="64">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
            Akce
          </div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
        Akce
      </td>
    </tr>
  </table>

  <p>
  Tlačítkem <u>Akce</u> je možné provádět úpravu pozice a orientace střešní roviny.
  </p>

  <p>
  Roviny je možné otáčet kolem hlavních os X,Y a Z, dále je možné upravit jejich pozici nebo je převrátit.
  </p>
  </div>
  </details>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/ClassRectLoopIcon64x64.png" alt="ClassRectLoopIcon64x64.png" width="64" height="64">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
      Otvor
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Otvor
    </td>
  </tr>
</table>

<p>
Tlačítkem <u>Otvor</u> je možné do vygenerované střešní roviny vsadit otvor, zakresluje se jako půdorysný průmět.
</p>

<p>
Otvor může být obdélníkový či obecného tvaru a lze mu přiřadit typ otvoru pro komín.
</p>

<p>
Otvor obdélníkového tvaru lze zadat volným klikáním do půdorysné roviny nebo pomocí jeho rozměrů ve tvaru "X;Y", tedy např. <b>2;4</b>. Otvor obecného tvaru lze zakreslit volným klikáním nebo pomocí souřadnicových systémů podobně jako obrys střešní konstrukce.
</p>

<p>
Po kliknutí na příslušný otvor lze pomocí tlačítek v horní části otevřené tabulky měnit jeho typ, polohu či jej smazat.
</p>

{{ modal_video_button("img/VideoEditOpenings.mp4") }}

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
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Anotace
    </td>
  </tr>
</table>

<p>
Tlačítko <u>Anotace</u> umožňuje do modelu přidávat libovolné půdorysné kóty.
</p>

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
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Měření
    </td>
  </tr>
</table>

<p>
Tlačítkem <u>Měření</u> je možné zkontrolovat rozměry modelu.
</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/MainInsert64x64.png" alt="MainInsert64x64.png" width="64" height="64">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
      Přidat
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Přidat
    </td>
  </tr>
</table>

<p>
Tlačítkem <u>Přidat</u> je možné do modelového prostoru přidat další (vedlejší) střešní konstrukce.
</p>

<ul>
  <li>
    <p>Střechu definovanou obrysem</p>
  </li>
  <li>
    <p>Další střechu modelovanou po plochách</p>
  </li>
</ul>

</div>
</details>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<details>  <summary>
    <span>FÁZE 2: Po nakreslení první plochy</span>
  </summary>
  <div class="panel">
  <h1>Geometrie</h1>

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/Sheated_Building_Page_Building.png" alt="Sheated_Building_Page_Building.png" width="64" height="64">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
      Rozměry
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Rozměry
    </td>
  </tr>
</table>

<p>
Tlačítko <u>Rozměry</u> slouží ke kreslení a vkládání střešních rovin. Pro tyto roviny je možné dále upravovat jejich geometrii, vytvářet v nich otvory a nastavit parametry pro správné propojení rovin.
</p>
<p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<!--<table>
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

Tlačítko <u>Střecha</u> umožňuje nastavit typ skladby střechy. Typ krytiny a rozměry sekundární střešní konstrukce lze měnit přes tlačítko <u>Opláštění</u>.

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/ImportObjIcon64x64.png" alt="ImportObjIcon64x64.png" width="64" height="64">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
      Rosol
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Rosol
    </td>
  </tr>
</table>

<p>
Umožňuje upravit rozměry a sklony vygenerovaných hran a ploch, změnit výšku a případně excentricitu střechy.
</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/PvgisIcon64x64.png" alt="PvgisIcon64x64.png" width="64" height="64">
      <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
      Výkon
      </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Výkon
    </td>
  </tr>
</table>

<p>
Umožňuje vyhodnotit potenciální výkon solárního záření na jednotlivé střešní plochy.
</p>

<p>
...Funkcionalita tlačítka <u>Výkon</u> se připravuje pro budoucí verzi programu...
</p>

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
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
      Anotace
    </td>
  </tr>
</table>

<p>
Tlačítko <u>Anotace</u> umožňuje do modelu přidávat libovolné půdorysné kóty.
</p>

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
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
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

<!-- product: HiStruct Roofs -->


