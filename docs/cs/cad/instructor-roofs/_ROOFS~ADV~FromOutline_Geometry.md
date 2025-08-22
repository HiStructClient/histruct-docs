
# Geometrie
<p>Umožňuje měnit geometrické parametry modelu, tedy rozměry budovy a střechy včetně sklonu a přesahů. Rovněž je zde možné nastavit typ skladby střechy.</p>

<p><b>Pro přehlednější práci s programem se obsah menu <u>Geometrie</u> liší pro fázi před nakreslením obrysu a fázi po nakreslení prvního obrysu.</b></p>

<p><b><u>Ovládací tlačítka</u> upravují vlastnosti střešní konstrukce pouze na vybrané střešní rovině.</b></p>

<hr class="main">

//// details | FÁZE 1: Chci vytvořit první střechu z obrysu

# Geometrie
<p>Umožňuje měnit geometrické parametry modelu, tedy rozměry budovy a střechy včetně sklonu a přesahů.</p>

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

{{ box_icon("img/RoofBoundaryIcon64x64.png", "Obrys", "Obrys") }}

<p>Tlačítko <u>Obrys</u> slouží k zakreslení půdorysného obrysu střechy. Pro zadání délky a směru jednotlivých okapových hran je možné využít:</p>

<p><b><u>Volné kreslení pomocí kurzoru</u></b></p>
<ul>
  <li><p>Hrany lze kreslit volným klikáním do modelovacího prostoru.</p></li>
  <li><p>Během kreslení hran je možné využít funkce zarovnávání kurzoru podle směrů os X a Y, případně zarovnávání kurzoru kolmo k poslední zadané hraně.</p></li>
</ul>

{{ modal_video_button("img/VideoOutlineFree.mp4") }}

<p><b><u>Globální souřadnice vrcholů polygonu</u></b></p>
<ul>
  <li><p>Globální souřadnice pro následující vrchol se zapíší ve formátu &quot;X;Y&quot;, tedy např. <b>2;4</b></p></li>
</ul>

{{ modal_video_button("img/VideoOutlineGlobal.mp4") }}

<p><b><u>Relativní souřadnice vrcholů polygonu</u></b></p>
<ul>
  <li><p>Relativní souřadnice pro následující vrchol se zapíší ve formátu &quot;@X;Y&quot;, tedy např. <b>@2;4</b></p></li>
</ul>

{{ modal_video_button("img/VideoOutlineRelative.mp4") }}

<p><b><u>Polární souřadnice vrcholů polygonu</u></b></p>
<ul>
  <li><p>Polární souřadnice pro následující vrchol se zapíší ve formátu &quot;&gt;alfa;L&quot;, tedy např. <b>&gt;135;6</b></p></li>
  <li><p>Zadávaný úhel se odměřuje o kladného směru globální osy X proti směru hodinových ručiček.</p></li>
</ul>

{{ modal_video_button("img/VideoOutlinePolar.mp4") }}

<p>Poslední vložený bod je možné smazat pomocí klávesy <b><u>DELETE</u></b>.</p>

<hr class="main">

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Otvor", "Otvor") }}

<p>Tlačítkem <u>Otvor</u> je možné do vygenerované střešní roviny vsadit otvor, zakresluje se jako půdorysný průmět.</p>
<p>Otvor může být obdélníkový či obecného tvaru a lze mu přiřadit typ otvoru pro komín.</p>

<hr class="main">

{{ box_icon("img/EditPropertiesIcon64x64.png", "Vlastnosti", "Vlastnosti") }}

<p>Umožňuje upravit způsob zadání geometrie, podle nastavení je možné kreslit obrys střechy nebo stěn.</p>
<p>Taktéž je zde možné nastavit prolínání střešních rovin mezi jednotlivými objekty.</p>

<hr class="main">

{{ box_icon("img/DeleteIcon64x64.png", "Smazat", "Smazat") }}

<p>Smaže všechny importované podklady a střešní konstrukce zakreslené pomocí funkce <u>Obrys</u>.</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Anotace", "Anotace") }}

<p>Tlačítko <u>Anotace</u> umožňuje do modelu přidávat libovolné půdorysné kóty.</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Měření", "Měření") }}

<p>Tlačítkem <u>Měření</u> je možné zkontrolovat rozměry modelu.</p>

<hr class="main">

{{ box_icon("img/MainInsert64x64.png", "Přidat", "Přidat") }}

<p>Tlačítkem <u>Přidat</u> je možné do modelového prostoru přidat další (vedlejší) střešní konstrukce.</p>
<ul>
  <li><p>Další střechu definovanou obrysem</p></li>
  <li><p>Střechu zakreslenou pomocí střešních ploch</p></li>
</ul>

////

<hr class="main">


//// details | FÁZE 2: Po vytvoření první střechy z obrysu

# Geometrie

<p>
{{ box_icon("img/Sheated_Building_Page_Building.png", "Rozměry", "Rozměry") }}
</p>

<p>Tlačítko <u>Rozměry</u> slouží k zakreslení půdorysného tvaru objektu, k nastavení výšky objektu a sklonu střechy a také k doplnění otvorů ve střešní konstrukci.</p>
<p>Základní půdorysné rozměry je možné zadávat buď pro střešní konstrukci nebo pro svislé stěny.</p>

<hr class="main">

<!--{{ box_icon("img/RoofSketchIcon64x64.png", "Střecha", "Střecha") }}

<p>Tlačítko <u>Střecha</u> umožňuje nastavit typ skladby střechy. Typ krytiny a rozměry sekundární střešní konstrukce lze měnit přes tlačítko <u>Opláštění</u>.</p>

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

<p>Tlačítko <u>Anotace</u> umožňuje do modelu přidávat libovolné půdorysné kóty.</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Měření", "Měření") }}

<p>Tlačítkem <u>Měření</u> je možné zkontrolovat rozměry modelu.</p>

////

<hr class="main">

<!-- product: HiStruct Roofs  -->
