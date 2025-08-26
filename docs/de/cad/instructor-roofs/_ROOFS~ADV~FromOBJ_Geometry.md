---
sourceLang: cs
sourceHash: 424ea263a1f29c7b8149ffef45cb902b
autoTranslated: true
---

# Geometrie
<p>Das Menü <u><i>Geometrie</i></u> ermöglicht im ersten Schritt den Import einer Datei des Typs "<b>.obj</b>" für die schnelle Generierung von Dachflächen.</p>

<p><b>Für eine übersichtlichere Arbeit mit dem Programm unterscheidet sich der Inhalt des Menüs <u>Geometrie</u> je nach Phase vor und nach dem Import eines Modells im .obj-Format.</b></p>

<p>Nach dem Import eines 3D-Objekts kann man in weiteren Schritten die Einstellungen des Kantengenerators und der Flächen ändern, sowie mit dem ROSOL-Löser die Maße und Neigungen der generierten Kanten und Flächen anpassen.</p>
<p><b><u>Bedienknöpfe</u> passen die Eigenschaften der Dachkonstruktion nur auf die ausgewählte Dachfläche an.</b></p>

<hr class="main">

//// details | PHASE 1: Ich möchte eine .obj-Datei importieren

# Geometrie

<h2>Konvertierung der Datei in das ".obj"-Format</h2>
<p>Wenn Ihre Daten in einem komprimierten Ordner (z. B. ".zip") vorliegen, müssen Sie diese Datei extrahieren und gegebenenfalls in das ".obj"-Format konvertieren.</p>

<p>Eine genaue Anleitung zur Konvertierung einer Datei ins ".obj"-Format finden Sie auf unserem Blog.</p>

<h2>Vermissen Sie eine Dachdeckung in der Galerie? Schreiben Sie uns, wir fügen sie hinzu.</h2>
<a href="" target="_blank" rel="noopener noreferrer" class="btn">
  Blog besuchen
</a>

<hr class="main">

{{ box_icon("img/ImportObjIcon64x64.png", "SoCol*.obj", "Import aus dem Dienst SoCol") }}

<p>Ermöglicht den Import einer .obj-Datei, die über den Dienst SoCol erhalten wurde.</p>
<p>Das Einfügen der Datei in das Modell muss per Mausklick oder mit der ENTER-Taste bestätigt werden.</p> 

<p>Nach dem Import des Untergrunds müssen die Maße überprüft und gegebenenfalls der Maßstab angepasst werden.</p>

<p><b><u>Anpassen des Maßstabs des importierten Untergrunds</u></b></p>

<ul>
<p><li>
Nach einem Klick auf den Schalter <u><i>Import > Einstellungen</i></u> kann der Maßstab direkt in der entsprechenden Zelle der geöffneten Tabelle geändert werden. 
</li></p>

{{ modal_video_button("img/VideoImportOBJ.mp4") }}

<p><li>
Zur Anpassung des Maßstabs kann auch die Schaltfläche <u>Maßstab</u> verwendet werden, die sich im oberen Teil der geöffneten Tabelle befindet. Mit dieser Schaltfläche kann der Maßstab des Untergrunds mittels einer gewählten Kante, deren tatsächliche Abmessungen bekannt sind, eingestellt werden.
</li></p>

{{ modal_video_button("img/VideoImportDXF.mp4") }}

</ul>

<hr class="main">

{{ box_icon("img/ImportObjIcon64x64.png", "Rexplorer*.obj", "Import aus dem Dienst Rexplorer", fontSize=10) }}

<p>Ermöglicht den Import einer .obj-Datei, die über den Dienst Rexplorer bezogen wurde.</p>
<p>Das Einfügen der Datei in das Modell muss per Mausklick oder mit der ENTER-Taste bestätigt werden.</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Annotationen", "Annotationen") }}

<p>Mit der Schaltfläche <u>Annotationen</u> können beliebige Grundrissbemaßungen zum Modell hinzugefügt werden.</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Messen", "Messen") }}

<p>Mit der Schaltfläche <u>Messen</u> können die Maße des Modells überprüft werden.</p>

////

<hr class="main">

//// details | PHASE 2: Nach dem Import der .obj-Datei

# Geometrie


<h2>Anpassung der Geometrie des Modells nach dem Import</h2>
<p>Unmittelbar nach dem Einfügen des Modells lässt sich in der Tabelle links der Maßstab des importierten Modells sowie die Einstellungen der generierten Kanten und Flächen anpassen. Dieselben Anpassungen sind später über den Schalter <b><u>Import &gt; Einstellungen</u></b> möglich.</p>

<hr class="main">

{{ box_icon("img/Sheated_Building_Page_Building.png", "Import", "Import") }}
<p>Ermöglicht das Anpassen des Maßstabs des importierten Modells und die Einstellung der Parameter des Dachflächengenerators.</p>

<hr class="main">

<!--{{ box_icon("img/RoofSketchIcon64x64.png", "Dach", "Dach") }}
<p>Mit der Schaltfläche <u>Dach</u> kann der Dachaufbautyp eingestellt werden. Der Dachdeckungs-Typ und die Abmessungen der Sekundär-Dachkonstruktion können über die Schaltfläche <u>Verkleidung</u> geändert werden.</p>

<hr class="main">

{{ box_icon("img/ImportObjIcon64x64.png", "Rosol", "Rosol") }}
<p>Ermöglicht das Anpassen der Maße und Neigungen der generierten Kanten und Flächen sowie das Ändern der Höhe und ggf. der Exzentrizität des Dachs.</p>

<hr class="main">

{{ box_icon("img/PvgisIcon64x64.png", "Leistung", "Leistung") }}

<p>
Ermöglicht die Bewertung der potenziellen Leistung der Sonneneinstrahlung auf die einzelnen Dachflächen.
</p>

<p>
...Die Funktionalität der Schaltfläche <u>Leistung</u> wird für eine zukünftige Version des Programms vorbereitet...
</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Annotationen", "Annotationen") }}
<p>Mit der Schaltfläche <u>Annotationen</u> können beliebige Grundrissbemaßungen zum Modell hinzugefügt werden.</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Messen", "Messen") }}
<p>Mit der Schaltfläche <u>Messen</u> können die Maße des Modells überprüft werden.</p>

////

<hr class="main">

<!-- product: HiStruct Roofs -->