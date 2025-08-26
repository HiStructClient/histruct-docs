---
sourceLang: cs
sourceHash: eca69d56ebba7bc370fd2f8ba99edc28
autoTranslated: true
---

# Geometrie
<p>
Ermöglicht das Zeichnen von Dachflächen, deren Formen, Abmessungen oder Neigungen zu ändern.
</p>

<p><b>Für eine übersichtlichere Arbeit mit dem Programm unterscheidet sich der Inhalt des Menüs <u>Geometrie</u> je nach Phase vor oder nach dem Zeichnen der ersten Fläche.</b></p>

<p>
<b><u>Steuerungsschaltflächen</u> passen die Eigenschaften der Dachkonstruktion nur auf der ausgewählten Dachfläche an.</b>
</p>

<hr class="main">

//// details | PHASE 1: Ich möchte die erste Fläche zeichnen

# Geometrie
<p>
Ermöglicht das Zeichnen von Dachflächen, das Ändern ihrer Formen, Abmessungen oder Neigungen, sowie das Festlegen des Dachaufbaus.
</p>

<hr class="main">
{{ box_icon("img/ImportDxfIcon64x64.png", "Grundlage", "Grundlage") }}

<p>Die Schaltfläche <u>Grundlage</u> dient zum Importieren einer Vorlage für das schnellere Zeichnen des Dachumrisses.</p> 

<p>Nach dem Import der Vorlage sollten deren Abmessungen kontrolliert und gegebenenfalls der Maßstab angepasst werden.</p>

<p><b><u>Anpassung des Maßstabs der importierten Vorlage</u></b></p>

<ul>
<p><li>
Nach dem Anklicken des Rasters der importierten Vorlage kann der Maßstab direkt in der entsprechenden Zelle der geöffneten Tabelle geändert werden.
</li></p>

<p><li>
Zur Maßstabsanpassung kann auch die Schaltfläche <u>Maßstab</u> verwendet werden, die sich im oberen Bereich der geöffneten Tabelle befindet. Mit dieser Schaltfläche kann der Maßstab der Vorlage anhand einer ausgewählten Kante eingestellt werden, deren reale Länge bekannt ist.
</li></p>
</ul>

{{ modal_video_button("img/VideoImportDXF.mp4") }}

<hr class="main">

{{ box_icon("img/TiledAreaGeneralIcon64x64.png", "Fläche", "Fläche") }}

<p>
Die Schaltfläche <u>Fläche</u> dient zum Zeichnen des Grundrissumrisses einer Dachfläche. Dachflächen können mithilfe vordefinierter Flächenformen gezeichnet werden:
</p>

{{ box_icons([
  ("img/GeneralLoopIcon64x64.png", "Allgemein"),
  ("img/ClassRectLoopIcon64x64.png", "Rechteck"),
  ("img/ClassTriangleLoopIcon64x64.png", "Dreieck"),
  ("img/ClassTrapezoidLoopIcon64x64.png", "Trapez"),
], "... und weitere", width=55, height=55, fontSize=10) }}

<p>
Nach dem Zeichnen oder Einfügen der Fläche können – je nach Flächentyp – Maße und Neigung sowie die Höhe und Richtung der Traufkante in der entsprechenden, geöffneten Tabelle angepasst werden.
</p>

<hr>

{{ box_icon("img/GeneralLoopIcon64x64.png", "Allgemein", "Allgemein") }}

  <p>Mit der Schaltfläche <u>Allgemein</u> kann eine Dachfläche beliebiger Form gezeichnet werden; das Zeichnen ist sowohl in der Grundrissebene als auch im 3D-Raum möglich. Dafür können folgende Optionen genutzt werden:</p>

  <p><b><u>Freies Zeichnen mit dem Cursor (auch im 3D-Raum möglich)</u></b></p>
  <ul>
    <li><p>Kanten können durch freies Anklicken des Modellierungsraums gezeichnet werden.</p></li>
    <li><p>Beim Zeichnen der Kanten in der Grundrissebene können Funktionen zur Ausrichtung des Cursors entlang der X- und Y-Achsen genutzt werden, alternativ kann der Cursor rechtwinklig zur zuletzt eingegebenen Kante ausgerichtet werden.</p></li>
    <li><p><b>Beim Zeichnen der Dachfläche im 3D-Raum sollten die Endpunkte bereits modellierter Dachflächen genutzt und der Flächentyp anschließend von PROJEKTION auf ALLGEMEIN geändert werden.</b></p></li>
  </ul>

{{ modal_video_button("img/VideoPlanes3D.mp4") }}

  <p><b><u>Globale Koordinaten der Polygonpunkte</u></b></p>
  <ul>
    <li><p>Globale Koordinaten für den nächsten Punkt werden im Format "X;Y" eingetragen, z. B. <b>2;4</b></p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesGlobal.mp4") }}

  <p><b><u>Relative Koordinaten der Polygonpunkte</u></b></p>
  <ul>
    <li><p>Relative Koordinaten für den nächsten Punkt werden im Format "@X;Y" eingetragen, z. B. <b>@2;4</b></p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesRelative.mp4") }}

  <p><b><u>Polarkoordinaten der Polygonpunkte</u></b></p>
  <ul>
    <li><p>Polarkoordinaten für den nächsten Punkt werden im Format "&gt;alfa;L" eingetragen, z. B. <b>&gt;135;6</b></p></li>
    <li><p>Der eingegebene Winkel wird von der positiven Richtung der globalen X-Achse gegen den Uhrzeigersinn gemessen.</p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesPolar.mp4") }}

  <p>Der zuletzt eingefügte Punkt kann mit der Taste <b><u>DELETE</u></b> gelöscht werden.</p>

<hr>

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Rechteck", "Rechteck") }}

<p>
Eine rechteckige Dachfläche kann durch freies Anklicken der Grundrissebene oder durch Eingabe der Abmessungen im Format "X;Y", z. B. <b>2;4</b>, definiert werden.
</p>

<hr>

{{ box_icons([
  ("img/ClassTriangleLoopIcon64x64.png", "Dreieck"),
  ("img/ClassTrapezoidLoopIcon64x64.png", "Trapez"),
], "... und weitere", width=55, height=55, fontSize=10) }}

<p>
Dachflächen anderer Formen können direkt durch Anklicken des Modellierungsraums eingegeben und anschließend in der Bearbeitungstabelle angepasst werden.
</p>

<hr class="main">

<h2>Bearbeitung der Dachflächen</h2>

<p><b><u>Die Bearbeitungstabelle für eine Fläche kann durch Anklicken der gewünschten Fläche geöffnet werden.</u></b></p>

<p>
Eine Fläche kann mit den Schaltflächen im oberen Bereich der Tabelle kopiert, gelöscht, in der Grundrissebene oder der Flächenebene gedreht und in alle drei Raumrichtungen verschoben werden.
</p>

{{ modal_video_button("img/VideoEditPlanes.mp4") }}

/// details | Weitere Bearbeitungsmöglichkeiten für Dachflächen
{{ include_md("__sub_Geometry_Dimension_Plane.md") }}
///

<hr class="main">

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Öffnung", "Öffnung") }}

<p>
Mit der Schaltfläche <u>Öffnung</u> kann in eine generierte Dachfläche eine Öffnung eingefügt werden; diese wird als Grundrissprojektion gezeichnet.
</p>

<p>
Die Öffnung kann rechteckig oder von allgemeiner Form sein, und ihr kann ein Öffnungstyp für einen Schornstein zugewiesen werden.
</p>

<p>
Eine rechteckige Öffnung kann durch freies Anklicken der Grundrissebene oder durch Eingabe der Abmessungen im Format "X;Y", z. B. <b>2;4</b>, definiert werden. Eine Öffnung beliebiger Form kann durch freies Anklicken oder mit Hilfe des Koordinatensystems ähnlich dem Dachumriss gezeichnet werden.
</p>

<p>
Nach dem Anklicken der entsprechenden Öffnung kann deren Typ, Position oder Löschen über die Schaltflächen im oberen Bereich der geöffneten Tabelle angepasst werden.
</p>

{{ modal_video_button("img/VideoEditOpenings.mp4") }}

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Anmerkung", "Anmerkung") }}

<p>
Mit der Schaltfläche <u>Anmerkung</u> können beliebige Grundrissbemaßungen zum Modell hinzugefügt werden.
</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Messen", "Messen") }}

<p>
Mit der Schaltfläche <u>Messen</u> können die Abmessungen des Modells kontrolliert werden.
</p>

<hr class="main">

{{ box_icon("img/MainInsert64x64.png", "Hinzufügen", "Hinzufügen") }}

<p>
Mit der Schaltfläche <u>Hinzufügen</u> können weitere (sekundäre) Dachkonstruktionen zum Modellraum hinzugefügt werden.
</p>

<ul>
  <li>
    <p>Dach definiert durch Umriss</p>
  </li>
  <li>
    <p>Weiteres Dach, modelliert nach Flächen</p>
  </li>
</ul>

////

<hr class="main">

//// details | PHASE 2: Nach dem Zeichnen der ersten Fläche
  
# Geometrie

{{ box_icon("img/Sheated_Building_Page_Building.png", "Abmessungen", "Abmessungen") }}

<p>
Die Schaltfläche <u>Abmessungen</u> dient zum Zeichnen und Einfügen von Dachflächen. Für diese Flächen kann die Geometrie weiter angepasst, Öffnungen erstellt und Parameter für eine korrekte Verbindung der Flächen gesetzt werden.
</p>
<p>

<hr class="main">

<!--{{ box_icon("img/RoofSketchIcon64x64.png", "Dach", "Dach") }}

Die Schaltfläche <u>Dach</u> ermöglicht das Festlegen des Dachaufbaus. Der Typ der Eindeckung und die Abmessungen der sekundären Dachkonstruktion können über die Schaltfläche <u>Verkleidung</u> geändert werden.

<hr class="main">

{{ box_icon("img/ImportObjIcon64x64.png", "Rosol", "Rosol") }}

<p>
Ermöglicht das Anpassen der Abmessungen und Neigungen der generierten Kanten und Flächen, das Ändern der Höhe und ggf. der Exzentrizität des Dachs.
</p>

<hr class="main">

{{ box_icon("img/PvgisIcon64x64.png", "Leistung", "Leistung") }}

<p>
Ermöglicht die Auswertung der potenziellen Solarstrahlungsleistung auf einzelnen Dachflächen.
</p>

<p>
...Die Funktion der Schaltfläche <u>Leistung</u> wird für eine zukünftige Version des Programms vorbereitet...
</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Anmerkung", "Anmerkung") }}

<p>
Mit der Schaltfläche <u>Anmerkung</u> können beliebige Grundrissbemaßungen zum Modell hinzugefügt werden.
</p>

<hr class="main">

{{ box_icon("img/Tape