
# Geometrie
<p>Menu <u><i>Geometrie</i></u> v prvním kroku umožňuje importovat soubor typu "<b>.obj</b>" pro rychlé generování střešních rovin.</p>

<p><b>Pro přehlednější práci s programem se obsah menu <u>Geometrie</u> liší pro fázi před importem modelu ve formátu .obj a fázi po importu.</b></p>

<p>Po importu 3D objektu umožňuje v dalších krocích změnit nastavení generátoru hran a ploch, upravit rozměry a sklony vygenerovaných hran a ploch pomocí řešiče ROSOL.</p>
<p><b><u>Ovládací tlačítka</u> upravují vlastnosti střešní konstrukce pouze na vybrané střešní rovině.</b></p>

<hr class="main">

//// details | FÁZE 1: Chci importovat soubor .obj

# Geometrie

<h2>Převod souboru do formátu ".obj"</h2>
<p>Pokud máte data k dispozici v komprimované složce (například ".zip"), je třeba z ní tento soubor extrahovat a případně převést na typ ".obj".</p>

<p>Přesný návod jak převést soubor do formátu ".obj" si můžete přečíst na našem blogu.</p>

<a href="" target="_blank" rel="noopener noreferrer" class="btn">
  Navštívit blog
</a>

<hr class="main">

{{ box_icon("img/ImportObjIcon64x64.png", "SoCol*.obj", "Import ze služby SoCol") }}

<p>Umožňuje importovat soubor typu .obj získaný ze služby SoCol.</p>
<p>Vložení souboru do modelu je třeba potvrdit klinutím nebo klávesou ENTER.</p> 

<p>Po importu pokladu je třeba zkontrolovat jeho rozměry a případně upravit měřítko.</p>

<p><b><u>Úprava měřítka importovaného podkladu</u></b></p>

<ul>
<p><li>
Po kliknutí na tlačítko <u><i>Import > Nastavení</i></u> je možné měřítko změnit přímo v příslušné buňce v otevřené tabulce. 
</li></p>

{{ modal_video_button("img/VideoImportOBJ.mp4") }}

<p><li>
Pro úpravu měřítka je taktéž možné použít tlačítko <u>Měřítko</u>, které je umístěno v horní části otevřené tabulky. Pomocí tohoto tlačítka je možné nastavit měřítko podkladu pomocí zvolené hrany, u které známe její skutečné rozměry.
</li></p>

{{ modal_video_button("img/VideoImportDXF.mp4") }}

</ul>

<hr class="main">

{{ box_icon("img/ImportObjIcon64x64.png", "Rexplorer*.obj", "Import ze služby Rexplorer", fontSize=10) }}

<p>Umožňuje importovat soubor typu .obj získaný ze služby Rexplorer.</p>
<p>Vložení souboru do modelu je třeba potvrdit klinutím nebo klávesou ENTER.</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Anotace", "Anotace") }}

<p>Tlačítko <u>Anotace</u> umožňuje do modelu přidávat libovolné půdorysné kóty.</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Měření", "Měření") }}

<p>Tlačítkem <u>Měření</u> je možné zkontrolovat rozměry modelu.</p>

////

<hr class="main">

//// details | FÁZE 2: Po importu souboru .obj

# Geometrie


<h2>Úprava geometrie modelu po importu</h2>
<p>Ihned po vložení modelu je možné v tabulce vlevo upravit měřítko importovaného modelu a změnit nastavení generovaných hran a ploch. Tytéž úpravy je možné později provést přes tlačítko <b><u>Import &gt; Nastavení</u></b>.</p>

<hr class="main">

{{ box_icon("img/Sheated_Building_Page_Building.png", "Import", "Import") }}
<p>Umožňuje upravit měřítko importovaného modelu a přizpůsobit parametry generátoru střešních rovin.</p>

<hr class="main">

<!--{{ box_icon("img/RoofSketchIcon64x64.png", "Střecha", "Střecha") }}
<p>Tlačítko <u>Střecha</u> umožňuje nastavit typ skladby střechy. Typ krytiny a rozměry sekundární střešní konstrukce lze měnit přes tlačítko <u>Opláštění</u>.</p>

<hr class="main">-->

{{ box_icon("img/ImportObjIcon64x64.png", "Rosol", "Rosol") }}
<p>Umožňuje upravit rozměry a sklony vygenerovaných hran a ploch, změnit výšku a případně excentricitu střechy.</p>

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

<!-- product: HiStruct Roofs -->
