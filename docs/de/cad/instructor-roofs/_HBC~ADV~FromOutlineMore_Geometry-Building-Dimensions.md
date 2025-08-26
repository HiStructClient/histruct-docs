---
sourceLang: cs
sourceHash: 5be0628cf06673cd309fe21ac36787bf
autoTranslated: true
---

# Geometrie &gt; Gebäude &gt; Abmessungen

<p>Ermöglicht das Ändern der geometrischen Parameter des Modells, also der Abmessungen der Traufkanten, Neigung und Überstand des Daches. Ebenso kann die Höhe der gesamten Dachkonstruktion geändert werden.</p>

<hr class="main">

<h2>Bearbeiten einzelner Kanten</h2>
<b>Nach dem Anklicken der entsprechenden Traufkante kann der Typ der Kante eingestellt, ihre Länge angepasst, die Neigung des jeweiligen Dachbereichs sowie dessen Überstand festgelegt werden.</b>

{{ modal_video_button("img/VideoEditEdges.mp4") }}

<hr class="main">

{{ box_icon("img/ImportDxfIcon64x64.png", "Unterlage", "Unterlage") }}

<p>Die Schaltfläche <u>Unterlage</u> dient zum Importieren einer Unterlage für ein schnelleres Zeichnen der Dachumrisse.</p> 

<b>Nach dem Import der Unterlage müssen deren Abmessungen überprüft und gegebenenfalls der Maßstab angepasst werden.</b>

<ul>
  <li><p>Die Maßstabeinstellung kann nach dem Import der Unterlage geändert werden, indem auf die graue rechteckige Schaltfläche im Modellierungsbereich geklickt wird.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Öffnung", "Öffnung") }} 

<p>Mit der Schaltfläche <u>Öffnung</u> kann in die generierte Dachebene eine Öffnung eingefügt werden, sie wird als Grundrissprojektion gezeichnet.</p>
<p>Die Öffnung kann rechteckig oder von allgemeiner Form sein, und es kann ihr ein Typ für einen Schornsteindurchbruch zugewiesen werden.</p>
<p>Eine rechteckige Öffnung kann durch freies Klicken in die Grundrissebene oder anhand ihrer Maße in der Form "X;Y" eingegeben werden, z. B. <b>2;4</b>. Eine Öffnung allgemeiner Form kann frei per Klick oder mit Koordinatensystemen, ähnlich wie der Umriss der Dachkonstruktion, eingezeichnet werden.</p>
<p>Nach dem Anklicken der entsprechenden Öffnung kann deren Typ, Position oder Löschung über die Schaltflächen im oberen Bereich der geöffneten Tabelle geändert werden.</p>

<hr class="main">

{{ box_icon("img/SetSlopeIcon64x64.png", "Neigung", "Neigung") }}

<p>Mit der Schaltfläche <u>Neigung</u> kann für alle Dachflächen die gleiche Neigung eingestellt werden.</p>

<hr class="main">

{{ box_icon("img/RoofLiftIcon64x64.png", "Anheben", "Anheben") }}

<p>Mit der Schaltfläche <u>Anheben</u> kann die Wandhöhe des modellierten Objekts angepasst werden.</p>

<hr class="main">

{{ box_icon("img/EditPropertiesIcon64x64.png", "Eigenschaften", "Eigenschaften") }}

<p>Ermöglicht die Auswahl der Methode zur Eingabe der Geometrie. Je nach Einstellung kann der Umriss des Daches oder der Wände gezeichnet werden.</p>
<p>Hier kann auch die Überlappung der Dachflächen zwischen den einzelnen Objekten eingestellt werden.</p>

<hr class="main">

{{ box_icon("img/DeleteIcon64x64.png", "Löschen", "Löschen") }}

<p>Löscht alle importierten Unterlagen und Konstruktionen, die mit der Funktion <u>Umriss</u> eingezeichnet wurden.</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Anmerkung", "Anmerkung") }}

<p>Mit der Schaltfläche <u>Anmerkung</u> können beliebige Grundriss-Bemaßungen zum Modell hinzugefügt werden.</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Messen", "Messen") }}

<p>Mit der Schaltfläche <u>Messen</u> können die Abmessungen des Modells überprüft werden.</p>

<hr class="main">

{{ box_icon("img/MainInsert64x64.png", "Hinzufügen", "Hinzufügen") }}

<p>Mit der Schaltfläche <u>Hinzufügen</u> können dem Modellbereich weitere Dachkonstruktionen hinzugefügt werden.</p>

<ul>
  <li><p>Pultdach auf rechteckigem Grundriss</p></li>
  <li><p>Satteldach auf rechteckigem Grundriss</p></li>
  <li><p>Weitere Dächer, die durch Umriss definiert sind</p></li>
  <li><p>Dach, das mithilfe einer 3D-Datei vom Typ ".obj" definiert ist</p></li>
</ul>

<hr class="main">

<!-- product: HiStruct Building Configurator -->