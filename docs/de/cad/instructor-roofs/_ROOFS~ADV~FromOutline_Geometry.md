---
sourceLang: cs
sourceHash: 6b10ec1ca4e509722a11e998e9233a82
autoTranslated: true
---

# Geometrie
<p>Ermöglicht es, die geometrischen Parameter des Modells zu ändern, also die Abmessungen des Gebäudes und des Dachs einschließlich Neigung und Überstände. Hier kann auch der Typ des Dachaufbaus eingestellt werden.</p>

<p><b>Für eine übersichtlichere Arbeit mit dem Programm unterscheidet sich der Inhalt des Menüs <u>Geometrie</u> je nach Phase vor dem Zeichnen des Umrisses und nach dem Zeichnen des ersten Umrisses.</b></p>

<p><b><u>Bedienelemente</u> ändern die Eigenschaften der Dachkonstruktion nur auf der ausgewählten Dachfläche.</b></p>

<hr class="main">

//// details | PHASE 1: Ich möchte das erste Dach aus einem Umriss erstellen

# Geometrie
<p>Ermöglicht es, die geometrischen Parameter des Modells zu ändern, also die Abmessungen des Gebäudes und des Dachs einschließlich Neigung und Überstände.</p>

<hr class="main">

{{ box_icon("img/ImportDxfIcon64x64.png", "Unterlage", "Unterlage") }}

<p>Die Schaltfläche <u>Unterlage</u> dient zum Import einer Unterlage, um das Zeichnen des Dachumrisses zu beschleunigen.</p>

<p>Nach dem Import der Unterlage sollten deren Maße überprüft und gegebenenfalls der Maßstab angepasst werden.</p>

<p><b><u>Anpassung des Maßstabs der importierten Unterlage</u></b></p>

<ul>
<p><li>
Nach dem Anklicken des Rasters der importierten Unterlage kann der Maßstab direkt in der entsprechenden Zelle der geöffneten Tabelle geändert werden.
</li></p>

<p><li>
Zur Anpassung des Maßstabs kann auch die Schaltfläche <u>Maßstab</u> verwendet werden, die sich im oberen Bereich der geöffneten Tabelle befindet. Mit diesem Knopf kann der Maßstab der Unterlage mit Hilfe einer gewählten Kante, deren tatsächliche Maße bekannt sind, eingestellt werden.
</li></p>
</ul>

{{ modal_video_button("img/VideoImportDXF.mp4") }}

<hr class="main">

{{ box_icon("img/RoofBoundaryIcon64x64.png", "Umriss", "Umriss") }}

<p>Die Schaltfläche <u>Umriss</u> dient zum Zeichnen des Grundrissumrisses des Daches. Um Länge und Richtung der einzelnen Traufkanten einzugeben, können Sie verwenden:</p>

<p><b><u>Freies Zeichnen mit dem Cursor</u></b></p>
<ul>
  <li><p>Kanten können durch freies Klicken in den Modellierungsraum gezeichnet werden.</p></li>
  <li><p>Während des Zeichnens der Kanten kann die Funktion zur Ausrichtung des Cursors entlang der X- und Y-Achse oder die rechtwinklige Ausrichtung zur letzten eingegebenen Kante genutzt werden.</p></li>
</ul>

{{ modal_video_button("img/VideoOutlineFree.mp4") }}

<p><b><u>Globale Koordinaten der Polygonpunkte</u></b></p>
<ul>
  <li><p>Die globalen Koordinaten für den nächsten Punkt werden im Format "X;Y" eingegeben, z. B. <b>2;4</b></p></li>
</ul>

{{ modal_video_button("img/VideoOutlineGlobal.mp4") }}

<p><b><u>Relative Koordinaten der Polygonpunkte</u></b></p>
<ul>
  <li><p>Die relativen Koordinaten für den nächsten Punkt werden im Format "@X;Y" eingegeben, z. B. <b>@2;4</b></p></li>
</ul>

{{ modal_video_button("img/VideoOutlineRelative.mp4") }}

<p><b><u>Polare Koordinaten der Polygonpunkte</u></b></p>
<ul>
  <li><p>Die Polarkoordinaten für den nächsten Punkt werden im Format "&gt;alpha;L" eingegeben, z. B. <b>&gt;135;6</b></p></li>
  <li><p>Der eingegebene Winkel wird vom positiven Verlauf der globalen X-Achse gegen den Uhrzeigersinn gemessen.</p></li>
</ul>

{{ modal_video_button("img/VideoOutlinePolar.mp4") }}

<p>Der zuletzt eingefügte Punkt kann mit der Taste <b><u>DELETE</u></b> gelöscht werden.</p>

<hr class="main">

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Öffnung", "Öffnung") }}

<p>Mit der Schaltfläche <u>Öffnung</u> kann eine Öffnung in die generierte Dachfläche eingefügt werden; sie wird als Grundrissprojektion eingezeichnet.</p>
<p>Die Öffnung kann rechteckig oder beliebig geformt sein und ihr kann ein Öffnungstyp für einen Schornstein zugewiesen werden.</p>

<hr class="main">

{{ box_icon("img/EditPropertiesIcon64x64.png", "Eigenschaften", "Eigenschaften") }}

<p>Ermöglicht die Art der Geometrieeingabe zu ändern; je nach Einstellung kann der Dach- oder Wandumriss gezeichnet werden.</p>
<p>Hier kann auch das Überlappen der Dachflächen zwischen einzelnen Objekten eingestellt werden.</p>

<hr class="main">

{{ box_icon("img/DeleteIcon64x64.png", "Löschen", "Löschen") }}

<p>Löscht alle importierten Unterlagen und Dachkonstruktionen, die mit der Funktion <u>Umriss</u> gezeichnet wurden.</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Bemaßung", "Bemaßung") }}

<p>Mit der Schaltfläche <u>Bemaßung</u> können beliebige Grundrissbemaßungen zum Modell hinzugefügt werden.</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Messen", "Messen") }}

<p>Mit der Schaltfläche <u>Messen</u> können die Abmessungen des Modells überprüft werden.</p>

<hr class="main">

{{ box_icon("img/MainInsert64x64.png", "Hinzufügen", "Hinzufügen") }}

<p>Mit der Schaltfläche <u>Hinzufügen</u> können dem Modellraum weitere (zweite) Dachkonstruktionen hinzugefügt werden.</p>
<ul>
  <li><p>Ein weiteres Dach, definiert durch einen Umriss</p></li>
  <li><p>Ein Dach, das mittels Dachflächen gezeichnet wurde</p></li>
</ul>

////

<hr class="main">


//// details | PHASE 2: Nach der Erstellung des ersten Dachs aus dem Umriss

# Geometrie

<p>
{{ box_icon("img/Sheated_Building_Page_Building.png", "Abmessungen", "Abmessungen") }}
</p>

<p>Die Schaltfläche <u>Abmessungen</u> dient zum Zeichnen der Grundrissform des Objekts, zum Einstellen der Gebäudehöhe und der Dachneigung sowie zum Hinzufügen von Öffnungen in die Dachkonstruktion.</p>
<p>Die grundlegenden Grundrissabmessungen können entweder für die Dachkonstruktion oder für die vertikalen Wände eingegeben werden.</p>

<hr class="main">

<!--{{ box_icon("img/RoofSketchIcon64x64.png", "Dach", "Dach") }}

<p>Die Schaltfläche <u>Dach</u> ermöglicht die Einstellung des Dachaufbaus. Der Typ der Eindeckung und die Abmessungen der Sekundärkonstruktion des Daches können über die Schaltfläche <u>Verkleidung</u> geändert werden.</p>

<hr class="main">

{{ box_icon("img/PvgisIcon64x64.png", "Leistung", "Leistung") }}

<p>
Ermöglicht die Bewertung der potenziellen Leistung der Sonneneinstrahlung auf die einzelnen Dachflächen.
</p>

<p>
...Die Funktionalität der Schaltfläche <u>Leistung</u> wird für eine zukünftige Version des Programms vorbereitet...
</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Bemaßung", "Bemaßung") }}

<p>Mit der Schaltfläche <u>Bemaßung</u> können beliebige Grundrissbemaßungen zum Modell hinzugefügt werden.</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Messen", "Messen") }}

<p>Mit der Schaltfläche <u>Messen</u> können die Abmessungen des Modells überprüft werden.</p>

////

<hr class="main">

<!-- product: HiStruct Roofs  -->