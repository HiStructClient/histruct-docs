
# Geometrie
<p>
Umožňuje kreslit střešní roviny, měnit jejich tvary, rozměry či sklony.
</p>

<p><b>Pro přehlednější práci s programem se obsah menu <u>Geometrie</u> liší pro fázi před nakreslením první plochy a fázi po nakreslení první plochy.</b></p>

<p>
<b><u>Ovládací tlačítka</u> upravují vlastnosti střešní konstrukce pouze na vybrané střešní rovině.</b>
</p>

<hr class="main">

//// details | FÁZE 1: Chci nakreslit první plochu

# Geometrie
<p>
Umožňuje kreslit střešní roviny, měnit jejich tvary, rozměry či sklony, taktéž umožňuje nastavit typ skladby střechy.
</p>

<hr class="main">
{{ box_icon("img/ImportDxfIcon64x64.png", "Podklad", "Podklad") }}

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

<hr class="main">

{{ box_icon("img/TiledAreaGeneralIcon64x64.png", "Plocha", "Plocha") }}

<p>
Tlačítko <u>Plocha</u> slouží k zakreslení půdorysného obrysu střešní roviny. Střešní roviny lze kreslit pomocí předdefinovaných tvarů ploch:
</p>

{{ box_icons([
  ("img/GeneralLoopIcon64x64.png", "Obecný"),
  ("img/ClassRectLoopIcon64x64.png", "Obdélník"),
  ("img/ClassTriangleLoopIcon64x64.png", "Trojúhelník"),
  ("img/ClassTrapezoidLoopIcon64x64.png", "Lichoběžník"),
], "... a další", width=55, height=55, fontSize=10) }}

<p>
Po zakreslení či vložení plochy je možné v závislosti na typu plochy upravovat její rozměry a sklon, a také výšku i směr okapové hrany v příslušné otevřené tabulce.
</p>

<hr>

{{ box_icon("img/GeneralLoopIcon64x64.png", "Obecný", "Obecný") }}

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

<hr>

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Obdélník", "Obdélník") }}

<p>
Střešní rovinu obdélníkového tvaru lze zadat volným klikáním do půdorysné roviny nebo pomocí jeho rozměrů ve tvaru "X;Y", tedy např. <b>2;4</b>.
</p>

<hr>

{{ box_icons([
  ("img/ClassTriangleLoopIcon64x64.png", "Trojúhelník"),
  ("img/ClassTrapezoidLoopIcon64x64.png", "Lichoběžník"),
], "... a další", width=55, height=55, fontSize=10) }}

<p>
Střešní rovinu dalších tvarů lze zadat přímo kliknutím do modelovacího prostoru, následně lze v editační tabulce upravit rozměry.
</p>

<hr class="main">

<h2>Editace střešních rovin</h2>

<p><b><u>Tabulku pro editaci roviny je možné otevřít kliknutím na zvolenou rovinu.</u></b></p>

<p>
Plochu lze pomocí tlačítek v horní části tabulky kopírovat, smazat, otáčet v půdorysné rovině nebo v rovině plochy, a také posouvat ve všech 3 směrech.
</p>

{{ modal_video_button("img/VideoEditPlanes.mp4") }}

/// details | Další možnosti editace střešních rovin
{{ include_md("__sub_Geometry_Dimension_Plane.md") }}
///

<hr class="main">

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Otvor", "Otvor") }}

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

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Anotace", "Anotace") }}

<p>
Tlačítko <u>Anotace</u> umožňuje do modelu přidávat libovolné půdorysné kóty.
</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Měření", "Měření") }}

<p>
Tlačítkem <u>Měření</u> je možné zkontrolovat rozměry modelu.
</p>

<hr class="main">

{{ box_icon("img/MainInsert64x64.png", "Přidat", "Přidat") }}

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

////

<hr class="main">

//// details | FÁZE 2: Po nakreslení první plochy
  
# Geometrie

<p>
Umožňuje kreslit střešní roviny, měnit jejich tvary, rozměry či sklony, taktéž umožňuje nastavit typ skladby střechy.
</p>

<hr class="main">

{{ box_icon("img/Sheated_Building_Page_Building.png", "Rozměry", "Rozměry") }}

<p>
Tlačítko <u>Rozměry</u> slouží ke kreslení a vkládání střešních rovin. Pro tyto roviny je možné dále upravovat jejich geometrii, vytvářet v nich otvory a nastavit parametry pro správné propojení rovin.
</p>

<hr class="main">

<!--{{ box_icon("img/RoofSketchIcon64x64.png", "Střecha", "Střecha") }}

Tlačítko <u>Střecha</u> umožňuje nastavit typ skladby střechy. Typ krytiny a rozměry sekundární střešní konstrukce lze měnit přes tlačítko <u>Opláštění</u>.-->

{{ box_icon("img/ImportObjIcon64x64.png", "Rosol", "Rosol") }}

<p>
Umožňuje upravit rozměry a sklony vygenerovaných hran a ploch, změnit výšku a případně excentricitu střechy.
</p>

<hr class="main">

{{ box_icon("img/PvgisIcon64x64.png", "Výkon", "Výkon") }}

<p>
Umožňuje vyhodnotit potenciální výkon solárního záření na jednotlivé střešní plochy.
</p>

<p>
...Funkcionalita tlačítka <u>Výkon</u> se připravuje pro budoucí verzi programu...
</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Anotace", "Anotace") }}

<p>
Tlačítko <u>Anotace</u> umožňuje do modelu přidávat libovolné půdorysné kóty.
</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Měření", "Měření") }}

<p>
Tlačítkem <u>Měření</u> je možné zkontrolovat rozměry modelu.
</p>

////

<hr class="main">

<!-- product: HiStruct Roofs -->
