---
sourceLang: cs
sourceHash: 085041fc63495250220b06474ee9733d
autoTranslated: true
---

# Geometrie > Abmessungen

<p>Ermöglicht das Ändern der geometrischen Parameter des Modells, also der Abmessungen des Gebäudes und des Daches, einschließlich Neigung und Überständen.</p>

<p>Der Inhalt des Menüs <u><i>Geometrie &gt; Abmessungen</i></u> unterscheidet sich je nach verwendetem Vorlagentyp:</p>

<ul>
<li>NACH FLÄCHEN MODELLIEREN</li>
<li>AUS KONTUR GENERIEREN</li>
</ul>

{{ box_icon("img/StartRosolAreas_thumbnail.128x128.png", "", "NACH FLÄCHEN MODELLIEREN") }}

///// details | Ich verwende die Vorlage NACH FLÄCHEN MODELLIEREN
{{ include_md("_ROOFS~ADV~ByPlanes_Geometry-Dimensions.md") }}
/////

{{ box_icon("img/StartRosol_thumbnail.128x128.png", "", "AUS KONTUR GENERIEREN") }}

///// details | Ich verwende die Vorlage AUS KONTUR GENERIEREN
{{ include_md("_ROOFS~ADV~FromOutline_Geometry-Dimensions.md") }}
/////

  <p>Ermöglicht das Zeichnen von Dachflächen, das Ändern ihrer Form, Abmessungen oder Neigung und das Festlegen ihrer Verbindung.</p>

  <hr class="main">

{{ box_icon("img/ImportDxfIcon64x64.png", "Unterlage", "Unterlage") }}

  <p>Die Schaltfläche <u>Unterlage</u> dient zum Importieren einer Unterlage für ein schnelleres Zeichnen der Kontur der Dachflächen. Nach dem Import der Unterlage sollte deren Maßstab überprüft und ggf. angepasst werden.</p>

  <p><b><u>Anpassung des Maßstabs der importierten Unterlage</u></b></p>

<ul>
<p><li>
Nach Klick auf das Gitternetz der importierten Unterlage kann der Maßstab direkt in der entsprechenden Zelle der geöffneten Tabelle geändert werden.
</li></p>

<p><li>
Zur Anpassung des Maßstabs kann auch die Schaltfläche <u>Maßstab</u> verwendet werden, die sich im oberen Bereich der geöffneten Tabelle befindet. Mit dieser Schaltfläche kann der Maßstab der Unterlage anhand einer gewählten Kante eingestellt werden, deren tatsächliche Länge bekannt ist.
</li></p>
</ul>

{{ modal_video_button("img/VideoImportDXF.mp4") }}

  <hr class="main">

{{ box_icon("img/TiledAreaGeneralIcon64x64.png", "Fläche", "Fläche") }}

  <p>Die Schaltfläche <u>Fläche</u> dient zum Einzeichnen des Grundrissumrisses der Dachfläche. Dachflächen können mit vordefinierten Flächenformen gezeichnet werden:</p>

{{ box_icons([
  ("img/GeneralLoopIcon64x64.png", "Allgemein"),
  ("img/ClassRectLoopIcon64x64.png", "Rechteck"),
  ("img/ClassTriangleLoopIcon64x64.png", "Dreieck"),
  ("img/ClassTrapezoidLoopIcon64x64.png", "Trapez"),
], "... und mehr", width=55, height=55, fontSize=10) }}

  <p>Nach dem Zeichnen oder Einfügen einer Fläche können je nach Flächentyp deren Maße und Neigung sowie die Höhe und Richtung der Traufkante in der entsprechenden geöffneten Tabelle angepasst werden.</p>

  <hr>

{{ box_icon("img/GeneralLoopIcon64x64.png", "Allgemein", "Allgemein") }}

  <p>Mit der Schaltfläche <u>Allgemein</u> kann eine Dachfläche beliebiger Form gezeichnet werden, das Zeichnen ist sowohl in der Grundriss-Ebene als auch im 3D-Raum möglich. Dazu kann Folgendes genutzt werden:</p>

  <p><b><u>Freies Zeichnen mit dem Cursor (auch im 3D-Raum möglich)</u></b></p>
  <ul>
    <li><p>Kanten können durch freies Klicken in den Modellierungsraum gezeichnet werden.</p></li>
    <li><p>Während des Zeichnens von Kanten in der Grundriss-Ebene können Funktionen zur Ausrichtung des Cursors entlang der X- und Y- Achse sowie zur Ausrichtung senkrecht zur zuletzt eingegebenen Kante genutzt werden.</p></li>
    <li><p><b>Beim Zeichnen der Dachfläche im 3D-Raum müssen Endpunkte bereits modellierter Dachflächen verwendet und anschließend der Flächentyp von PROJEKTION → ALLGEMEIN geändert werden</b>.</p></li>
  </ul>

{{ modal_video_button("img/VideoPlanes3D.mp4") }}

  <p><b><u>Globale Koordinaten der Polygoneckpunkte</u></b></p>
  <ul>
    <li><p>Globale Koordinaten für den nächsten Eckpunkt werden im Format "X;Y" eingegeben, z.B. <b>2;4</b></p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesGlobal.mp4") }}

  <p><b><u>Relative Koordinaten der Polygoneckpunkte</u></b></p>
  <ul>
    <li><p>Relative Koordinaten für den nächsten Eckpunkt werden im Format "@X;Y" eingegeben, z.B. <b>@2;4</b></p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesRelative.mp4") }}

  <p><b><u>Polarkoordinaten der Polygoneckpunkte</u></b></p>
  <ul>
    <li><p>Polarkoordinaten für den nächsten Eckpunkt werden im Format "&gt;alfa;L" eingegeben, z.B. <b>&gt;135;6</b></p></li>
    <li><p>Der eingegebene Winkel wird von der positiven Richtung der globalen X-Achse entgegen dem Uhrzeigersinn abgetragen.</p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesPolar.mp4") }}

  <p>Der zuletzt eingefügte Punkt kann mit der Taste <b><u>DELETE</u></b> gelöscht werden.</p>

  <hr>

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Rechteck", "Rechteck") }}

  <p>Eine rechteckige Dachfläche kann durch freies Klicken in die Grundriss-Ebene oder mithilfe ihrer Maße im Format "X;Y", z.B. <b>2;4</b>, definiert werden.</p>

  <hr>

{{ box_icons([
  ("img/ClassTriangleLoopIcon64x64.png", "Dreieck"),
  ("img/ClassTrapezoidLoopIcon64x64.png", "Trapez"),
], "... und mehr", width=55, height=55, fontSize=10) }}

  <p>Dachflächen anderer Formen können direkt durch Klicken in den Modellierungsraum definiert und anschließend in der Bearbeitungstabelle angepasst werden.</p>

  <hr class="main">

  <h2>Editieren von Dachflächen</h2>

  <p><b><u>Die Tabelle zur Bearbeitung der Fläche kann im Menü Geometrie > Abmessungen durch Klick auf die ausgewählte Fläche geöffnet werden.</u></b></p>

  <p>Die Fläche kann mit den Schaltflächen im oberen Bereich der Tabelle kopiert, gelöscht, im Grundriss oder in der Flächenebene gedreht oder in allen 3 Richtungen verschoben werden.</p>

{{ modal_video_button("img/VideoEditPlanes.mp4") }}

/// details | Weitere Bearbeitungsmöglichkeiten der Dachflächen
{{ include_md("__sub_Geometry_Dimension_Plane.md") }}
///

  <hr class="main">

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Aussparung", "Aussparung") }}

  <p>Mit der Schaltfläche <u>Aussparung</u> kann in der generierten Dachfläche eine Aussparung platziert werden; sie wird als Grundrissprojektion gezeichnet.</p>
  <p>Die Aussparung kann rechteckig oder beliebig geformt sein und es kann ein Öffnungstyp für einen Schornstein zugewiesen werden.</p>
  <p>Eine rechteckige Aussparung kann durch freies Klicken in die Grundriss-Ebene oder mithilfe ihrer Maße im Format "X;Y", z.B. <b>2;4</b>, definiert werden. Eine beliebig geformte Aussparung kann durch freies Klicken oder mit Hilfe der Koordinatensysteme ähnlich wie für den Umriss des Dachaufbaus gezeichnet werden.</p>
  <p>Nach Klick auf die entsprechende Aussparung können deren Typ und Position sowie das Löschen mit den Schaltflächen im oberen Bereich der geöffneten Tabelle geändert werden.</p>

{{ modal_video_button("img/VideoEditOpenings.mp4") }}



  <hr class="main">

{{ box_icon("img/PreviewGeometry64x64.png", "Verbinden", "Verbinden") }}

  <p>Die Schaltfläche <u>Verbinden</u> dient zum Festlegen des maximalen Abstands von Punkten, die als identisch betrachtet werden. Der Generator fusioniert anschließend Punkte, die den festgelegten Maximalabstand erfüllen.</p>

  <p><b><u>Anpassung des Maßstabs der importierten Unterlage</u></b></p>
  <ul>
    <li><p>Nach Klick auf die importierte Unterlage kann der Maßstab direkt in der entsprechenden Zelle der geöffneten Tabelle geändert werden.</p></li>
    <li><p>Zur Anpassung des Maßstabs kann auch die Schaltfläche <u>Maßstab</u> verwendet werden, die sich im oberen Bereich der geöffneten Tabelle befindet. Mit dieser Schaltfläche kann der Maßstab der Unterlage anhand einer gewählten Kante eingestellt werden, deren tatsächliche Länge bekannt ist.</p></li>
  </ul>

  <hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Bemaßung", "Bemaßung") }}

  <p>Die Schaltfläche <u>Bemaßung</u> ermöglicht das Hinzufügen beliebiger Grundriss-Bemaßungen zum Modell.</p>

  <hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Messen", "Messen") }}

  <p>Mit der Schaltfläche <u>Messen</u> können die Maße des Modells überprüft werden.</p>

  <hr class="main">

{{ box_icon("img/MainInsert64x64.png", "Hinzufügen", "Hinzufügen") }}

  <p>Mit der Schaltfläche <u>Hinzufügen</u> können weitere (sekundäre) Dachkonstruktionen in den Modellraum eingefügt werden.</p>
  <ul>
    <li><p>Dach definiert durch Kontur</p></li>
    <li><p>Weitere nach Flächen modellierte Dächer</p></li>
  </ul>

  <hr class="main">

<!-- Produkt: HiStruct Roofs -->