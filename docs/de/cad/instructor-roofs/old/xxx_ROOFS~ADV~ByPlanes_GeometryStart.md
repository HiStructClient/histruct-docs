---
sourceLang: cs
sourceHash: fd57f0d9a4f9785440b37749a0afddf0
autoTranslated: true
---

<h1>Geometrie</h1>
<p>
Ermöglicht das Zeichnen von Dachflächen, das Ändern ihrer Formen, Abmessungen oder Neigungen sowie das Festlegen des Dachaufbaus.
</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->
{{ box_icon("img/ImportDxfIcon64x64.png", "Unterlage", "Unterlage") }}

<p>Die Schaltfläche <u>Unterlage</u> dient zum Importieren einer Unterlage für das schnellere Zeichnen des Dachumrisses.</p> 

<p>Nach dem Import der Unterlage müssen deren Maße überprüft und gegebenenfalls der Maßstab angepasst werden.</p>

<p><b><u>Anpassen des Maßstabs der importierten Unterlage</u></b></p>

<ul>
<p><li>
Nach dem Anklicken des Rasters der importierten Unterlage kann der Maßstab direkt in der entsprechenden Zelle in der geöffneten Tabelle geändert werden. 
</li></p>

<p><li>
Zum Anpassen des Maßstabs kann auch die Schaltfläche <u>Maßstab</u> verwendet werden, die sich im oberen Teil der geöffneten Tabelle befindet. Mit dieser Schaltfläche kann der Maßstab der Unterlage mithilfe einer ausgewählten Kante, deren tatsächliches Maß bekannt ist, festgelegt werden.
</li></p>
</ul>

{{ modal_video_button("img/VideoImportDXF.mp4") }}

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/TiledAreaGeneralIcon64x64.png", "Fläche", "Fläche") }}

<p>
Die Schaltfläche <u>Fläche</u> dient zum Einzeichnen des Grundrissumrisses einer Dachfläche. Dachflächen können mithilfe vordefinierter Flächenformen gezeichnet werden:
</p>

{{ box_icons([
  ("img/GeneralLoopIcon64x64.png", "Allgemein"),
  ("img/ClassRectLoopIcon64x64.png", "Rechteck"),
  ("img/ClassTriangleLoopIcon64x64.png", "Dreieck"),
  ("img/ClassTrapezoidLoopIcon64x64.png", "Trapez"),
], "... und mehr", width=55, height=55, fontSize=10) }}

<p>
Nach dem Zeichnen oder Einfügen der Fläche können je nach Typ der Fläche deren Maße und Neigung sowie die Höhe und Richtung der Traufkante in der entsprechenden geöffneten Tabelle angepasst werden.
</p>

<hr> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/GeneralLoopIcon64x64.png", "Allgemein", "Allgemein") }}

  <p>Mit der Schaltfläche <u>Allgemein</u> kann eine Dachfläche beliebiger Form gezeichnet werden, wobei das Zeichnen sowohl in der Grundriss-Ebene als auch im 3D-Raum möglich ist. Dazu kann verwendet werden:</p>

  <p><b><u>Freies Zeichnen mit dem Cursor (auch im 3D-Raum möglich)</u></b></p>
  <ul>
    <li><p>Kanten können durch freies Klicken im Modellbereich gezeichnet werden.</p></li>
    <li><p>Beim Zeichnen von Kanten in der Grundriss-Ebene können Ausrichtungsfunktionen des Cursors entlang der X- und Y-Achse oder senkrecht zur zuletzt eingegebenen Kante genutzt werden.</p></li>
    <li><p><b>Beim Zeichnen einer Dachfläche im 3D-Raum müssen Endpunkte bereits modellierter Dachflächen verwendet werden und anschließend der Flächentyp von PROJEKTION → ALLGEMEIN geändert werden.</b>
  </ul>

{{ modal_video_button("img/VideoPlanes3D.mp4") }}

  <p><b><u>Globale Koordinaten der Polygonpunkte</u></b></p>
  <ul>
    <li><p>Globale Koordinaten für den nächsten Punkt werden im Format „X;Y“ eingegeben, also z. B. <b>2;4</b></p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesGlobal.mp4") }}

  <p><b><u>Relative Koordinaten der Polygonpunkte</u></b></p>
  <ul>
    <li><p>Relative Koordinaten für den nächsten Punkt werden im Format „@X;Y“ eingegeben, also z. B. <b>@2;4</b></p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesRelative.mp4") }}

  <p><b><u>Polarkoordinaten der Polygonpunkte</u></b></p>
  <ul>
    <li><p>Polarkoordinaten für den nächsten Punkt werden im Format „&gt;alfa;L“ eingegeben, also z. B. <b>&gt;135;6</b></p></li>
    <li><p>Der eingegebene Winkel wird vom positiven Verlauf der globalen X-Achse gegen den Uhrzeigersinn gemessen.</p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesPolar.mp4") }}

  <p>Der zuletzt eingefügte Punkt kann mit der Taste <b><u>DELETE</u></b> gelöscht werden.</p>

<hr> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Rechteck", "Rechteck") }}

<p>
Eine rechteckige Dachfläche kann durch freies Klicken in die Grundriss-Ebene oder über ihre Maße im Format „X;Y“, also z. B. <b>2;4</b>, eingegeben werden.
</p>

<hr> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icons([
  ("img/ClassTriangleLoopIcon64x64.png", "Dreieck"),
  ("img/ClassTrapezoidLoopIcon64x64.png", "Trapez"),
], "... und mehr", width=55, height=55, fontSize=10) }}

<p>
Dachflächen anderer Formen können direkt durch Klicken im Modellierungsbereich eingegeben werden; die Maße können anschließend in der Editiertabelle angepasst werden.
</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Editieren der Dachflächen</h2>

<p><b><u>Die Bearbeitungstabelle für eine Fläche kann durch Klick auf die gewählte Fläche geöffnet werden.</u></b></p>

<p>
Mit den Schaltflächen im oberen Teil der Tabelle kann die Fläche kopiert, gelöscht, im Grundriss oder in der Flächenebene gedreht sowie in allen drei Raumrichtungen verschoben werden.
</p>

{{ modal_video_button("img/VideoEditPlanes.mp4") }}

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Öffnung", "Öffnung") }}

<p>
Mit der Schaltfläche <u>Öffnung</u> kann eine Öffnung in die generierte Dachfläche eingefügt werden, die als Grundrissprojektion eingezeichnet wird.
</p>

<p>
Die Öffnung kann rechteckig oder beliebig geformt sein, und es kann ein Öffnungstyp für einen Schornstein zugewiesen werden.
</p>

<p>
Eine rechteckige Öffnung kann durch freies Klicken in den Grundriss oder mithilfe ihrer Maße im Format „X;Y“, also z. B. <b>2;4</b>, eingegeben werden. Eine Öffnung beliebiger Form kann durch freies Klicken oder mithilfe von Koordinatensystemen ähnlich wie der Umriss der Dachkonstruktion eingezeichnet werden.
</p>

<p>
Nach dem Klick auf die entsprechende Öffnung kann mit den Schaltflächen im oberen Teil der geöffneten Tabelle ihr Typ, ihre Lage geändert oder sie gelöscht werden.
</p>

{{ modal_video_button("img/VideoEditOpenings.mp4") }}

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/DimensionLinearIcon64x64.png", "Annotation", "Annotation") }}

<p>
Mit der Schaltfläche <u>Annotation</u> können beliebige Grundrissmaße zum Modell hinzugefügt werden.
</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/TapeMeasureIcon64x64.png", "Messen", "Messen") }}

<p>
Mit der Schaltfläche <u>Messen</u> können die Maße des Modells überprüft werden.
</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/MainInsert64x64.png", "Hinzufügen", "Hinzufügen") }}

<p>
Mit der Schaltfläche <u>Hinzufügen</u> kann dem Modellbereich eine weitere (sekundäre) Dachkonstruktion hinzugefügt werden.
</p>

<ul>
  <li>
    <p>Ein Dach, das durch seinen Umriss definiert ist</p>
  </li>
  <li>
    <p>Ein weiteres Dach, das flächenweise modelliert wird</p>
  </li>
</ul>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<!-- product: HiStruct Roofs -->