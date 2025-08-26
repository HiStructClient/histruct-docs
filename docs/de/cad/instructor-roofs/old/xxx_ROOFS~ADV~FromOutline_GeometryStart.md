---
sourceLang: cs
sourceHash: 10be0891ebb9c73aef43ae131ab229dc
autoTranslated: true
---

<h1>Geometrie</h1>
<p>Ermöglicht das Ändern der geometrischen Parameter des Modells, also der Abmessungen des Gebäudes und des Daches einschließlich Neigung und Überstand. Ebenso kann hier der Typ des Dachaufbaus eingestellt werden.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/ImportDxfIcon64x64.png", "Unterlage", "Unterlage") }}

<p>Die Schaltfläche <u>Unterlage</u> dient zum Import einer Unterlage für das schnellere Zeichnen des Dachumrisses.</p> 

<p>Nach dem Import der Unterlage müssen deren Abmessungen überprüft und gegebenenfalls der Maßstab angepasst werden.</p>

<p><b><u>Anpassung des Maßstabs der importierten Unterlage</u></b></p>

<ul>
<p><li>
Nach einem Klick auf das Raster der importierten Unterlage kann der Maßstab direkt in der entsprechenden Zelle der geöffneten Tabelle geändert werden.
</li></p>

<p><li>
Zur Anpassung des Maßstabs kann auch die Schaltfläche <u>Maßstab</u> verwendet werden, die sich im oberen Teil der geöffneten Tabelle befindet. Mit dieser Schaltfläche kann der Maßstab der Unterlage anhand einer bekannten Kante mit bekannten realen Abmessungen eingestellt werden.
</li></p>
</ul>

{{ modal_video_button("img/VideoImportDXF.mp4") }}

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/RoofBoundaryIcon64x64.png", "Umriss", "Umriss") }}

<p>Die Schaltfläche <u>Umriss</u> dient zum Zeichnen des Grundrissumrisses des Daches. Für die Eingabe der Länge und Richtung der einzelnen Traufkanten stehen folgende Möglichkeiten zur Verfügung:</p>

<p><b><u>Freies Zeichnen mit dem Cursor</u></b></p>
<ul>
  <li><p>Kanten können durch freies Klicken in den Modellierungsbereich gezeichnet werden.</p></li>
  <li><p>Beim Zeichnen von Kanten können Funktionen zur Ausrichtung des Cursors entlang der X- und Y-Achsen oder zur rechtwinkligen Ausrichtung zum zuletzt eingegebenen Rand genutzt werden.</p></li>
</ul>

{{ modal_video_button("img/VideoOutlineFree.mp4") }}

<p><b><u>Globale Koordinaten der Polygonpunkte</u></b></p>
<ul>
  <li><p>Globale Koordinaten für den nächsten Punkt werden im Format &quot;X;Y&quot; eingegeben, also z. B. <b>2;4</b></p></li>
</ul>

{{ modal_video_button("img/VideoOutlineGlobal.mp4") }}

<p><b><u>Relative Koordinaten der Polygonpunkte</u></b></p>
<ul>
  <li><p>Relative Koordinaten für den nächsten Punkt werden im Format &quot;@X;Y&quot; eingegeben, also z. B. <b>@2;4</b></p></li>
</ul>

{{ modal_video_button("img/VideoOutlineRelative.mp4") }}

<p><b><u>Polarkoordinaten der Polygonpunkte</u></b></p>
<ul>
  <li><p>Polarkoordinaten für den nächsten Punkt werden im Format &quot;&gt;alfa;L&quot; eingegeben, also z. B. <b>&gt;135;6</b></p></li>
  <li><p>Der eingegebene Winkel wird von der positiven Richtung der globalen X-Achse gegen den Uhrzeigersinn gemessen.</p></li>
</ul>

{{ modal_video_button("img/VideoOutlinePolar.mp4") }}

<p>Der zuletzt eingefügte Punkt kann mit der Taste <b><u>ENTF</u></b> gelöscht werden.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Öffnung", "Öffnung") }}

<p>Mit der Schaltfläche <u>Öffnung</u> kann in die generierte Dachfläche eine Öffnung (im Grundriss) eingesetzt werden.</p>
<p>Die Öffnung kann rechteckig oder beliebig geformt sein und kann mit einem Öffnungstyp für einen Schornstein versehen werden.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/EditPropertiesIcon64x64.png", "Eigenschaften", "Eigenschaften") }}

<p>Ermöglicht die Anpassung der Eingabemethode für die Geometrie. Je nach Einstellung kann der Umriss des Daches oder der Wände gezeichnet werden.</p>
<p>Hier kann auch die Überlagerung der Dachflächen zwischen einzelnen Objekten eingestellt werden.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/DeleteIcon64x64.png", "Löschen", "Löschen") }}

<p>Löscht alle importierten Unterlagen und mittels der Funktion <u>Umriss</u> gezeichneten Dachkonstruktionen.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/DimensionLinearIcon64x64.png", "Anmerkung", "Anmerkung") }}

<p>Mit der Schaltfläche <u>Anmerkung</u> können beliebige Grundrissmaßketten zum Modell hinzugefügt werden.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/TapeMeasureIcon64x64.png", "Messen", "Messen") }}

<p>Mit der Schaltfläche <u>Messen</u> können die Abmessungen des Modells überprüft werden.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/MainInsert64x64.png", "Hinzufügen", "Hinzufügen") }}

<p>Mit der Schaltfläche <u>Hinzufügen</u> können dem Modell weitere (sekundäre) Dachkonstruktionen hinzugefügt werden.</p>
<ul>
  <li><p>Ein weiteres Dach, das durch einen Umriss definiert ist</p></li>
  <li><p>Ein Dach, das mit Dachflächen gezeichnet wurde</p></li>
</ul>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<!-- product: HiStruct Roofs -->