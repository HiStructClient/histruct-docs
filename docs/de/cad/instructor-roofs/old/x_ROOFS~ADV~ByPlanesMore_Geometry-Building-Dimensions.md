---
sourceLang: cs
sourceHash: 7f6a19e267a0f328ff94ae7807f4d952
autoTranslated: true
---

<h1>Geometrie &gt; Gebäude &gt; Abmessungen</h1>

  <p>Ermöglicht das Zeichnen von Dachflächen, das Ändern ihrer Formen, Abmessungen oder Neigungen sowie das Einstellen ihrer Verbindungen.</p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/ImportDxfIcon64x64.png", "Unterlage", "Unterlage") }}

  <p>Die Schaltfläche <u>Unterlage</u> dient dem Import einer Unterlage für ein schnelleres Zeichnen des Dachflächenumrisses. Nach dem Import der Unterlage müssen deren Abmessungen kontrolliert und ggf. der Maßstab angepasst werden.</p>

  <p><b><u>Maßstabanpassung der importierten Unterlage</u></b></p>
  <ul>
    <li><p>Nach einem Klick auf die importierte Unterlage kann der Maßstab direkt in der entsprechenden Zelle der geöffneten Tabelle geändert werden.</p></li>
    <li><p>Für die Maßstabanpassung kann auch die Schaltfläche <u>Maßstab</u> verwendet werden, die sich im oberen Bereich der geöffneten Tabelle befindet. Mit dieser Schaltfläche kann der Maßstab der Unterlage anhand einer ausgewählten Kante eingestellt werden, deren tatsächliche Abmessungen bekannt sind.</p></li>
  </ul>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/TiledAreaGeneralIcon64x64.png", "Fläche", "Fläche") }}

  <p>Die Schaltfläche <u>Fläche</u> dient zum Zeichnen des Grundrissumrisses einer Dachfläche. Dachflächen können mit vordefinierten Flächenformen gezeichnet werden:</p>

{{ box_icons([
  ("img/GeneralLoopIcon64x64.png", "Allgemein"),
  ("img/ClassRectLoopIcon64x64.png", "Rechteck"),
  ("img/ClassTriangleLoopIcon64x64.png", "Dreieck"),
  ("img/ClassTrapezoidLoopIcon64x64.png", "Trapez"),
], "... und mehr", width=55, height=55, fontSize=10) }}

  <p>Nach dem Zeichnen oder Einfügen einer Fläche können je nach Flächentyp deren Abmessungen und Neigung sowie die Höhe und Richtung der Traufkante in der entsprechenden geöffneten Tabelle angepasst werden.</p>

  <hr> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/GeneralLoopIcon64x64.png", "Allgemein", "Allgemein") }}

  <p>Mit der Schaltfläche <u>Allgemein</u> kann eine Dachfläche beliebiger Grundrissform gezeichnet werden. Dazu stehen folgende Möglichkeiten zur Verfügung:</p>

  <p><b><u>Freies Zeichnen mit dem Cursor</u></b></p>
  <ul>
    <li><p>Kanten können durch freies Klicken in den Modellierungsbereich gezeichnet werden.</p></li>
    <li><p>Während des Zeichnens von Kanten können Funktionen zum Ausrichten des Cursors entlang der X- und Y-Achse oder im rechten Winkel zur zuletzt eingegebenen Kante genutzt werden.</p></li>
  </ul>

{{ modal_video_button("img/VideoOutlineFree.mp4") }}

  <p><b><u>Globale Koordinaten der Polygonecken</u></b></p>
  <ul>
    <li><p>Die globalen Koordinaten für den nächsten Eckpunkt werden im Format "X;Y" eingetragen, z. B. <b>2;4</b></p></li>
  </ul>

{{ modal_video_button("img/VideoOutlineGlobal.mp4") }}

  <p><b><u>Relative Koordinaten der Polygonecken</u></b></p>
  <ul>
    <li><p>Die relativen Koordinaten für den nächsten Eckpunkt werden im Format "@X;Y" eingetragen, z. B. <b>@2;4</b></p></li>
  </ul>

{{ modal_video_button("img/VideoOutlineRelative.mp4") }}

  <p><b><u>Polare Koordinaten der Polygonecken</u></b></p>
  <ul>
    <li><p>Die polaren Koordinaten für den nächsten Eckpunkt werden im Format "&gt;alpha;L" eingetragen, z. B. <b>&gt;135;6</b></p></li>
    <li><p>Der eingegebene Winkel wird vom positiven Verlauf der globalen X-Achse gegen den Uhrzeigersinn gemessen.</p></li>
  </ul>

{{ modal_video_button("img/VideoOutlinePolar.mp4") }}

  <p>Der zuletzt eingefügte Punkt kann mit der Taste <b><u>ENTF</u></b> gelöscht werden.</p>

  <hr> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Rechteck", "Rechteck") }}

  <p>Eine rechteckige Dachfläche kann durch freies Klicken in der Grundrissebene oder durch Eingabe der Maße im Format "X;Y", z. B. <b>2;4</b>, erstellt werden.</p>

  <hr> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icons([
  ("img/ClassTriangleLoopIcon64x64.png", "Dreieck"),
  ("img/ClassTrapezoidLoopIcon64x64.png", "Trapez"),
], "... und mehr", width=55, height=55, fontSize=10) }}

  <p>Dachflächen weiterer Formen können direkt durch Klicken in den Modellierungsbereich erstellt werden. Anschließend können die Maße in der Bearbeitungstabelle angepasst werden.</p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <h2>Bearbeitung der Dachflächen</h2>

  <p><b><u>Die Bearbeitungstabelle der Fläche kann durch Klick auf die gewünschte Fläche geöffnet werden.</u></b></p>

  <p>Die Fläche kann mit den Schaltflächen im oberen Bereich der Tabelle dupliziert, gelöscht, im Grundriss gedreht, in der Flächenebene gedreht sowie in allen drei Achsen verschoben werden.</p>

{{ modal_video_button("img/VideoEditPlanes.mp4") }}

/// details | Weitere Bearbeitungsmöglichkeiten der Dachflächen
{{ include_md("__sub_Geometry_Dimension_Plane.md") }}
///


  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Öffnung", "Öffnung") }}

  <p>Mit der Schaltfläche <u>Öffnung</u> kann in eine generierte Dachfläche eine Öffnung eingefügt werden, die als Grundrissprojektion gezeichnet wird.</p>
  <p>Die Öffnung kann rechteckig oder beliebiger Form sein und es kann ihr ein Öffnungstyp für einen Schornstein zugewiesen werden.</p>
  <p>Eine rechteckige Öffnung kann durch freies Klicken in der Grundrissebene oder durch Eingabe der Maße im Format "X;Y", z. B. <b>2;4</b>, erstellt werden. Eine Öffnung beliebiger Form kann durch freies Klicken oder durch die genannten Koordinatensysteme ähnlich wie der Dachumriss gezeichnet werden.</p>
  <p>Nach einem Klick auf die entsprechende Öffnung kann ihr Typ, die Position oder das Löschen mit den Schaltflächen im oberen Bereich der geöffneten Tabelle bearbeitet werden.</p>

{{ modal_video_button("img/VideoEditOpenings.mp4") }}

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/PreviewGeometry64x64.png", "Verbinden", "Verbinden") }}

  <p>Die Schaltfläche <u>Verbinden</u> dient zum Einstellen des maximalen Abstands von Punkten, die als identisch betrachtet werden können. Der Generator fasst anschließend Punkte zusammen, die innerhalb der eingestellten maximalen Entfernung liegen.</p>

  <p><b><u>Maßstabanpassung der importierten Unterlage</u></b></p>
  <ul>
    <li><p>Nach einem Klick auf die importierte Unterlage kann der Maßstab direkt in der entsprechenden Zelle der geöffneten Tabelle geändert werden.</p></li>
    <li><p>Für die Maßstabanpassung kann auch die Schaltfläche <u>Maßstab</u> verwendet werden, die sich im oberen Bereich der geöffneten Tabelle befindet. Mit dieser Schaltfläche kann der Maßstab der Unterlage anhand einer ausgewählten Kante eingestellt werden, deren tatsächliche Abmessungen bekannt sind.</p></li>
  </ul>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/DimensionLinearIcon64x64.png", "Bemaßung", "Bemaßung") }}

  <p>Die Schaltfläche <u>Bemaßung</u> ermöglicht das Hinzufügen beliebiger Grundriss-Bemaßungen ins Modell.</p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/TapeMeasureIcon64x64.png", "Messen", "Messen") }}

  <p>Mit der Schaltfläche <u>Messen</u> können die Abmessungen des Modells überprüft werden.</p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/MainInsert64x64.png", "Hinzufügen", "Hinzufügen") }}

  <p>Mit der Schaltfläche <u>Hinzufügen</u> können weitere (zusätzliche) Dachkonstruktionen zum Modellbereich hinzugefügt werden.</p>
  <ul>
    <li><p>Ein Dach, das durch seinen Umriss definiert ist</p></li>
    <li><p>Ein weiteres Dach, das nach Flächen modelliert wird</p></li>
  </ul>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<!-- product: HiStruct Roofs -->