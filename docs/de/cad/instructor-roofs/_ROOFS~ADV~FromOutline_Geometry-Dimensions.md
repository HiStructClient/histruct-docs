---
sourceLang: cs
sourceHash: 80b59c59256a13add2b72bccd07fecfd
autoTranslated: true
---

# Geometrie &gt; Maße
<p>Ermöglicht die Änderung der geometrischen Parameter des Modells, d.h. die Abmessungen der Traufkanten, die Neigung und den Überstand des Dachs. Es ist auch möglich, die Höhe der gesamten Dachkonstruktion zu ändern.</p>

<hr class="main">

<h2>Bearbeitung einzelner Kanten</h2>
<p><b>Nach dem Klick auf die entsprechende Traufkante kann der Kanten-Typ eingestellt, ihre Länge angepasst, die Neigung des jeweiligen Dachbereichs sowie der Überstand festgelegt werden.</b></p>

{{ modal_video_button("img/VideoEditEdges.mp4") }}

<hr class="main">

{{ box_icon("img/ImportDxfIcon64x64.png", "Grundlage", "Grundlage") }}

<p>Die Schaltfläche <u>Grundlage</u> dient dem Import einer Vorlage für schnelleres Zeichnen des Dachumrisses.</p>

<p>Nach dem Import der Unterlage sollte deren Größe überprüft und ggf. der Maßstab angepasst werden.</p>

<p><b><u>Anpassung des Maßstabs der importierten Vorlage</u></b></p>

<ul>
<p><li>
Nach dem Klicken auf das Raster der importierten Vorlage kann der Maßstab direkt in der entsprechenden Zelle in der geöffneten Tabelle geändert werden.
</li></p>

<p><li>
Für die Anpassung des Maßstabs kann auch die Schaltfläche <u>Maßstab</u> verwendet werden, die sich im oberen Teil der geöffneten Tabelle befindet. Mit dieser Schaltfläche kann der Maßstab des Untergrunds anhand einer ausgewählten Kante eingestellt werden, deren tatsächliche Maße bekannt sind.
</li></p>
</ul>

{{ modal_video_button("img/VideoImportDXF.mp4") }}

<hr class="main">

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Öffnung", "Öffnung") }}

<p>Mit der Schaltfläche <u>Öffnung</u> kann in die generierte Dachebene eine Öffnung eingesetzt werden, die als Grundrissprojektions gezeichnet wird.</p>
<p>Die Öffnung kann rechteckig oder von beliebiger Form sein, und ihr kann ein Typ "Schornsteinöffnung" zugewiesen werden.</p>
<p>Eine rechteckige Öffnung kann durch freies Klicken in die Grundrissebene oder per Maßangabe im Format "X;Y", z. B. <b>2;4</b>, eingegeben werden. Eine Öffnung beliebiger Form kann durch freies Klicken oder mit Koordinatensystemen ähnlich wie der Umriss der Dachkonstruktion gezeichnet werden.</p>
<p>Nach dem Klick auf die entsprechende Öffnung kann ihr Typ, Position oder das Löschen über die Schaltflächen im oberen Bereich der geöffneten Tabelle gesteuert werden.</p>

{{ modal_video_button("img/VideoEditOpenings.mp4") }}

<hr class="main">

{{ box_icon("img/SetSlopeIcon64x64.png", "Neigung", "Neigung") }}

<p>Mit der Schaltfläche <u>Neigung</u> kann für alle Dachflächen die gleiche Dachneigung eingestellt werden.</p>

<hr class="main">

{{ box_icon("img/RoofLiftIcon64x64.png", "Anheben", "Anheben") }}

<p>Mit der Schaltfläche <u>Anheben</u> kann die Wandhöhe des modellierten Objekts geändert werden.</p>

<hr class="main">

{{ box_icon("img/EditPropertiesIcon64x64.png", "Eigenschaften", "Eigenschaften") }}

<p>Ermöglicht die Bearbeitung der Eingabemethode für die Geometrie; je nach Einstellung kann der Umriss des Dachs oder der Wände gezeichnet werden.</p>
<p>Hier kann ebenfalls die Überlappung von Dachflächen zwischen einzelnen Objekten eingestellt werden.</p>

<hr class="main">

{{ box_icon("img/DeleteIcon64x64.png", "Löschen", "Löschen") }}

<p>Löscht alle importierten Grundlagen und Dachkonstruktionen, die mit der Funktion <u>Umriss</u> gezeichnet wurden.</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Annotation", "Annotation") }}

<p>Die Schaltfläche <u>Annotation</u> ermöglicht die beliebige Platzierung von Grundrissbemaßungen im Modell.</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Messen", "Messen") }}

<p>Mit der Schaltfläche <u>Messen</u> können die Maße des Modells überprüft werden.</p>

<hr class="main">

{{ box_icon("img/MainInsert64x64.png", "Hinzufügen", "Hinzufügen") }}

<p>Mit der Schaltfläche <u>Hinzufügen</u> kann dem Modellraum eine weitere (Neben-)Dachkonstruktion hinzugefügt werden.</p>
<ul>
  <li><p>Ein weiteres Dach, das durch Umriss definiert ist</p></li>
  <li><p>Dach, das mit Dachflächen gezeichnet wird</p></li>
</ul>

<hr class="main">

<!-- product: HiStruct Roofs -->