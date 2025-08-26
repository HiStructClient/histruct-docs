---
sourceLang: cs
sourceHash: 270e8a64d8508ac2574615b8b98071d8
autoTranslated: true
---

<h1>Geometrie &gt; Gebäude &gt; Abmessungen</h1>
<p>Ermöglicht das Ändern der geometrischen Parameter des Modells, also der Abmessungen der Traufkanten, der Dachneigung und des Dachüberstands. Es ist auch möglich, die Höhe der gesamten Dachkonstruktion zu ändern.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Bearbeitung einzelner Kanten</h2>
<p><b>Nach dem Anklicken der entsprechenden Traufkante können Sie den Kantentyp einstellen, ihre Länge anpassen, die Neigung des jeweiligen Dachteils und dessen Überstand festlegen.</b></p>

{{ modal_video_button("img/VideoEditEdges.mp4") }}

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/ImportDxfIcon64x64.png", "Unterlage", "Unterlage") }}

<p>Die Schaltfläche <u>Unterlage</u> dient dazu, eine Unterlage zu importieren, um den Dachumriss schneller zu zeichnen.</p>
<p><b>Nach dem Import der Unterlage sollten die Abmessungen überprüft und gegebenenfalls der Maßstab angepasst werden.</b></p>
<ul>
  <li><p>Die Maßstabeinstellung kann nach dem Import der Unterlage durch Klicken auf die graue rechteckige Schaltfläche im Modellierungsbereich geändert werden.</p></li>
</ul>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Öffnung", "Öffnung") }}

<p>Mit der Schaltfläche <u>Öffnung</u> kann eine Öffnung in die generierte Dachfläche eingefügt werden, die als Grundrissprojektion gezeichnet wird.</p>
<p>Die Öffnung kann rechteckig oder von beliebiger Form sein, zudem kann ihr der Typ "Schornsteinöffnung" zugewiesen werden.</p>
<p>Eine rechteckige Öffnung kann durch freies Klicken in die Grundrissfläche oder mittels Angabe ihrer Maße in der Form "X;Y", z. B. <b>2;4</b>, eingegeben werden. Eine Öffnung beliebiger Form kann durch freies Klicken oder mithilfe von Koordinatensystemen ähnlich wie der Umriss der Dachkonstruktion eingezeichnet werden.</p>
<p>Nach dem Anklicken der jeweiligen Öffnung können Sie mit den Schaltflächen im oberen Bereich der geöffneten Tabelle ihren Typ, ihre Position ändern oder sie löschen.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/SetSlopeIcon64x64.png", "Neigung", "Neigung") }}

<p>Mit der Schaltfläche <u>Neigung</u> kann dieselbe Neigung für alle Dachflächen eingestellt werden.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/RoofLiftIcon64x64.png", "Anheben", "Anheben") }}

<p>Mit der Schaltfläche <u>Anheben</u> kann die Höhe der Wände des modellierten Objekts angepasst werden.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/EditPropertiesIcon64x64.png", "Eigenschaften", "Eigenschaften") }}

<p>Ermöglicht die Anpassung der Art der Geometrieeingabe; je nach Einstellung kann der Umriss des Daches oder der Wände gezeichnet werden.</p>
<p>Hier kann auch die Überlappung von Dachflächen zwischen einzelnen Objekten eingestellt werden.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/DeleteIcon64x64.png", "Löschen", "Löschen") }}

<p>Löscht alle importierten Unterlagen und Dachkonstruktionen, die mit der Funktion <u>Umriss</u> gezeichnet wurden.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/DimensionLinearIcon64x64.png", "Annotation", "Annotation") }}

<p>Mit der Schaltfläche <u>Annotation</u> können beliebige Grundrissbemaßungen zum Modell hinzugefügt werden.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/TapeMeasureIcon64x64.png", "Messen", "Messen") }}

<p>Mit der Schaltfläche <u>Messen</u> können Sie die Abmessungen des Modells überprüfen.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/MainInsert64x64.png", "Hinzufügen", "Hinzufügen") }}

<p>Mit der Schaltfläche <u>Hinzufügen</u> können dem Modellraum weitere (sekundäre) Dachkonstruktionen hinzugefügt werden.</p>
<ul>
  <li><p>Pultdach auf rechteckigem Grundriss</p></li>
  <li><p>Satteldach auf rechteckigem Grundriss</p></li>
  <li><p>Weitere Dächer, definiert durch Umriss</p></li>
  <li><p>Dach, definiert mittels 3D-Datei des Typs ".obj"</p></li>
</ul>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<!-- product: HiStruct Roofs -->