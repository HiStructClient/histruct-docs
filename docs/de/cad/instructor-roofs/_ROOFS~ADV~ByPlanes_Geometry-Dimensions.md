---
sourceLang: cs
sourceHash: 47cfce003d878a8e5f9e2846364ae42b
autoTranslated: true
---

# Geometrie > Abmessungen

  <p>Ermöglicht das Zeichnen von Dachflächen, das Ändern ihrer Formen, Abmessungen oder Neigungen sowie das Festlegen ihrer Verbindungen.</p>

  <hr class="main">

{{ box_icon("img/ImportDxfIcon64x64.png", "Vorlage", "Vorlage") }}

  <p>Die Schaltfläche <u>Vorlage</u> dient zum Importieren einer Vorlage für schnelleres Zeichnen des Umrisses der Dachflächen. Nach dem Import der Vorlage sollten deren Abmessungen überprüft und gegebenenfalls der Maßstab angepasst werden.</p>

  <p><b><u>Anpassen des Maßstabs der importierten Vorlage</u></b></p>

<ul>
<p><li>
Nach dem Klicken auf das Raster der importierten Vorlage kann der Maßstab direkt in der entsprechenden Zelle in der geöffneten Tabelle geändert werden.
</li></p>

<p><li>
Für die Anpassung des Maßstabs kann auch die Schaltfläche <u>Maßstab</u> verwendet werden, die sich im oberen Teil der geöffneten Tabelle befindet. Mit dieser Schaltfläche kann der Maßstab der Vorlage anhand einer ausgewählten Kante festgelegt werden, deren tatsächliche Abmessungen bekannt sind.
</li></p>
</ul>

{{ modal_video_button("img/VideoImportDXF.mp4") }}

  <hr class="main">

{{ box_icon("img/TiledAreaGeneralIcon64x64.png", "Fläche", "Fläche") }}

  <p>Die Schaltfläche <u>Fläche</u> dient zum Zeichnen des Grundrissumrisses einer Dachfläche. Dachflächen können mit vordefinierten Flächenformen gezeichnet werden:</p>

{{ box_icons([
  ("img/GeneralLoopIcon64x64.png", "Allgemein"),
  ("img/ClassRectLoopIcon64x64.png", "Rechteck"),
  ("img/ClassTriangleLoopIcon64x64.png", "Dreieck"),
  ("img/ClassTrapezoidLoopIcon64x64.png", "Trapez"),
], "... und weitere", width=55, height=55, fontSize=10) }}

  <p>Nach dem Zeichnen oder Einfügen der Fläche können je nach Flächentyp deren Abmessungen und Neigung sowie die Höhe und Richtung der Traufkante in der entsprechenden geöffneten Tabelle angepasst werden.</p>

  <hr>

{{ box_icon("img/GeneralLoopIcon64x64.png", "Allgemein", "Allgemein") }}

  <p>Mit der Schaltfläche <u>Allgemein</u> kann eine Dachfläche beliebiger Form gezeichnet werden, wobei das Zeichnen sowohl in der Grundrissfläche als auch im 3D-Raum möglich ist. Dazu können Sie Folgendes nutzen:</p>

  <p><b><u>Freies Zeichnen mit dem Cursor (auch im 3D-Raum möglich)</u></b></p>
  <ul>
    <li><p>Kanten können durch freies Klicken in den Modellierungsraum gezeichnet werden.</p></li>
    <li><p>Beim Zeichnen von Kanten in der Grundrissfläche kann die Ausrichtung des Cursors entlang der X- und Y-Achse oder die rechtwinklige Ausrichtung zum zuletzt eingegebenen Rand genutzt werden.</p></li>
    <li><p><b>Beim Zeichnen einer Dachfläche im 3D-Raum müssen als Endpunkte bereits modellierte Dachflächen verwendet und anschließend der Flächentyp von PROJEKTION -> ALLGEMEIN geändert werden</b>.
  </ul>

{{ modal_video_button("img/VideoPlanes3D.mp4") }}

  <p><b><u>Globale Koordinaten der Polygonecken</u></b></p>
  <ul>
    <li><p>Die globalen Koordinaten für den nächsten Eckpunkt werden im Format "X;Y" eingetragen, z.&nbsp;B. <b>2;4</b></p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesGlobal.mp4") }}

  <p><b><u>Relative Koordinaten der Polygonecken</u></b></p>
  <ul>
    <li><p>Die relativen Koordinaten für den nächsten Eckpunkt werden im Format "@X;Y" eingetragen, z.&nbsp;B. <b>@2;4</b></p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesRelative.mp4") }}

  <p><b><u>Polare Koordinaten der Polygonecken</u></b></p>
  <ul>
    <li><p>Die polaren Koordinaten für den nächsten Eckpunkt werden im Format "&gt;alfa;L" eingetragen, z.&nbsp;B. <b>&gt;135;6</b></p></li>
    <li><p>Der einzugebende Winkel wird gegen den Uhrzeigersinn vom positiven Richtung der globalen X-Achse aus gemessen.</p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesPolar.mp4") }}

  <p>Der zuletzt eingefügte Punkt kann mit der Taste <b><u>DELETE</u></b> gelöscht werden.</p>

  <hr>

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Rechteck", "Rechteck") }}

  <p>Eine rechteckige Dachfläche kann durch freies Klicken in der Grundrissfläche oder durch Eingabe ihrer Abmessungen im Format "X;Y" spezifiziert werden, z.&nbsp;B. <b>2;4</b>.</p>

  <hr>

{{ box_icons([
  ("img/ClassTriangleLoopIcon64x64.png", "Dreieck"),
  ("img/ClassTrapezoidLoopIcon64x64.png", "Trapez"),
], "... und weitere", width=55, height=55, fontSize=10) }}

  <p>Eine Dachfläche in anderen Formen kann direkt durch Klicken im Modellierungsraum eingegeben werden. Anschließend können die Abmessungen in der Bearbeitungstabelle geändert werden.</p>

  <hr class="main">

  <h2>Bearbeiten von Dachflächen</h2>

  <p><b><u>Die Bearbeitungstabelle einer Fläche kann im Menü Geometrie > Abmessungen durch Klicken auf die gewählte Fläche geöffnet werden.</u></b></p>

  <p>Die Fläche kann mit den Schaltflächen im oberen Teil der Tabelle kopiert, gelöscht, im Grundriss oder in der Flächenebene gedreht und in allen drei Richtungen verschoben werden.</p>

{{ modal_video_button("img/VideoEditPlanes.mp4") }}

/// details | Weitere Bearbeitungsmöglichkeiten für Dachflächen
{{ include_md("__sub_Geometry_Dimension_Plane.md") }}
///

  <hr class="main">

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Öffnung", "Öffnung") }}

  <p>Mit der Schaltfläche <u>Öffnung</u> kann in die generierte Dachfläche eine Öffnung eingesetzt werden, die als Grundrissprojektion gezeichnet wird.</p>
  <p>Die Öffnung kann rechteckig oder allgemeiner Form sein und es kann ein Öffnungstyp für einen Schornstein zugewiesen werden.</p>
  <p>Eine rechteckige Öffnung kann durch freies Klicken in der Grundrissfläche oder durch Eingabe ihrer Abmessungen im Format "X;Y", z.&nbsp;B. <b>2;4</b>, angegeben werden. Eine Öffnung allgemeiner Form kann durch freies Klicken oder mittels Koordinatensystemen ähnlich wie der Umriss der Dachkonstruktion gezeichnet werden.</p>
  <p>Nach dem Klicken auf die entsprechende Öffnung kann mit den Schaltflächen im oberen Teil der geöffneten Tabelle ihr Typ oder ihre Position geändert oder sie gelöscht werden.</p>

{{ modal_video_button("img/VideoEditOpenings.mp4") }}



  <hr class="main">

{{ box_icon("img/PreviewGeometry64x64.png", "Verbinden", "Verbinden") }}

  <p>Die Schaltfläche <u>Verbinden</u> dient zum Einstellen des maximalen Abstands von Punkten, die als identisch betrachtet werden können. Der Generator fasst anschließend alle Punkte zusammen, die den eingestellten maximalen Abstand erfüllen.</p>

  <p><b><u>Anpassen des Maßstabs der importierten Vorlage</u></b></p>
  <ul>
    <li><p>Nach dem Klicken auf die importierte Vorlage kann der Maßstab direkt in der entsprechenden Zelle in der geöffneten Tabelle geändert werden.</p></li>
    <li><p>Für die Anpassung des Maßstabs kann auch die Schaltfläche <u>Maßstab</u> verwendet werden, die sich im oberen Teil der geöffneten Tabelle befindet. Mit dieser Schaltfläche kann der Maßstab der Vorlage anhand einer ausgewählten Kante festgelegt werden, deren tatsächliche Abmessungen bekannt sind.</p></li>
  </ul>

  <hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Bemaßung", "Bemaßung") }}

  <p>Mit der Schaltfläche <u>Bemaßung</u> können beliebige Grundrissmaßketten zum Modell hinzugefügt werden.</p>

  <hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Messen", "Messen") }}

  <p>Mit der Schaltfläche <u>Messen</u> können die Abmessungen des Modells überprüft werden.</p>

  <hr class="main">

{{ box_icon("img/MainInsert64x64.png", "Hinzufügen", "Hinzufügen") }}

  <p>Mit der Schaltfläche <u>Hinzufügen</u> können weitere (sekundäre) Dachkonstruktionen in den Modellierungsraum eingefügt werden.</p>
  <ul>
    <li><p>Ein Dach, das durch seinen Umriss definiert ist</p></li>
    <li><p>Ein weiteres Dach, das aus Einzelflächen modelliert wird</p></li>
  </ul>

  <hr class="main">

<!-- product: HiStruct Roofs -->