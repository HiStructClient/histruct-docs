---
sourceLang: cs
sourceHash: 2b4958e7a074240d1b6d9214b8fd1a2c
autoTranslated: true
---

# Geometrie

<p>Ermöglicht die Änderung der geometrischen Parameter des Modells, also der Abmessungen des Gebäudes und des Daches einschließlich Neigung und Überstände. Hier kann auch der Dachaufbau-Typ festgelegt werden.</p>

<hr class="main">

{{ box_icon("img/ImportDxfIcon64x64.png", "Unterlage", "Unterlage") }}

<p>Die Schaltfläche <u>Unterlage</u> dient zum Import einer Unterlage für das schnellere Zeichnen des Dachumrisses.</p>
<p><b>Nach dem Import der Unterlage müssen deren Abmessungen überprüft und ggf. der Maßstab angepasst werden.</b></p>

<ul>
  <li><p>Die Maßstabeinstellung kann nach dem Import der Unterlage durch Klick auf die graue rechteckige Schaltfläche im Modellierungsbereich geändert werden.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/RoofBoundaryIcon64x64.png", "Umriss", "Umriss") }}

<p>Die Schaltfläche <u>Umriss</u> dient zum Zeichnen des Grundrissumrisses des Daches. Für die Eingabe der Länge und Richtung der einzelnen Traufkanten können Sie verwenden:</p>

<p><b><u>Freies Zeichnen mit dem Cursor</u></b></p>
<ul>
  <li><p>Kanten können frei durch Klicken in den Modellierungsbereich gezeichnet werden.</p></li>
  <li><p>Während des Zeichnens der Kanten können Sie die Funktion zur Ausrichtung des Cursors entlang der X- und Y-Achse oder zur rechtwinkligen Ausrichtung des Cursors zur zuletzt eingegebenen Kante nutzen.</p></li>
</ul>

{{ modal_video_button("img/VideoOutlineFree.mp4") }}

<p><b><u>Globale Koordinaten der Polygonpunkte</u></b></p>
<ul>
  <li><p>Die globalen Koordinaten für den nächsten Punkt werden im Format "X;Y" eingegeben, also z. B. <b>2;4</b></p></li>
</ul>

{{ modal_video_button("img/VideoOutlineGlobal.mp4") }}

<p><b><u>Relative Koordinaten der Polygonpunkte</u></b></p>
<ul>
  <li><p>Die relativen Koordinaten für den nächsten Punkt werden im Format "@X;Y" eingegeben, also z. B. <b>@2;4</b></p></li>
</ul>

{{ modal_video_button("img/VideoOutlineRelative.mp4") }}

<p><b><u>Polarkoordinaten der Polygonpunkte</u></b></p>
<ul>
  <li><p>Die Polarkoordinaten für den nächsten Punkt werden im Format "&gt;alfa;L" eingegeben, also z. B. <b>&gt;135;6</b></p></li>
  <li><p>Der eingegebene Winkel wird von der positiven Richtung der globalen X-Achse gegen den Uhrzeigersinn abgetragen.</p></li>
</ul>

{{ modal_video_button("img/VideoOutlinePolar.mp4") }}

Der zuletzt eingefügte Punkt kann mit der Taste <b><u>DELETE</u></b> gelöscht werden.

<hr class="main">

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Ausschnitt", "Ausschnitt") }}

<p>Mit der Schaltfläche <u>Ausschnitt</u> kann in die generierte Dachfläche ein Ausschnitt eingefügt werden, der als Grundrissprojektion gezeichnet wird.</p>
<p>Der Ausschnitt kann rechteckig oder beliebig geformt sein und kann als Typ „Ausschnitt für Schornstein“ definiert werden.</p>

<hr class="main">

{{ box_icon("img/EditPropertiesIcon64x64.png", "Eigenschaften", "Eigenschaften") }}

<p>Ermöglicht die Anpassung der Art der Geometrieeingabe. Je nach Einstellung kann der Umriss des Daches oder der Wände gezeichnet werden.</p>

<hr class="main">

{{ box_icon("img/DeleteIcon64x64.png", "Löschen", "Löschen") }}

<p>Löscht alle importierten Unterlagen und die mit der Funktion <u>Umriss</u> gezeichneten Konstruktionen.</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Anmerkung", "Anmerkung") }}

<p>Mit der Schaltfläche <u>Anmerkung</u> können beliebige Grundrissbemaßungen zum Modell hinzugefügt werden.</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Messen", "Messen") }}

<p>Mit der Schaltfläche <u>Messen</u> können die Abmessungen des Modells überprüft werden.</p>

<hr class="main">

{{ box_icon("img/MainInsert64x64.png", "Hinzufügen", "Hinzufügen") }}

<p>Mit der Schaltfläche <u>Hinzufügen</u> können dem Modellraum weitere Konstruktionen hinzugefügt werden.</p>
<ul>
  <li><p>Objekt mit Pultdach auf rechteckigem Grundriss</p></li>
  <li><p>Objekt mit Satteldach auf rechteckigem Grundriss</p></li>
  <li><p>Weiteres Objekt, das durch einen Umriss definiert ist</p></li>
  <li><p>Objekt, das durch eine 3D-Datei im Format „.obj“ bestimmt ist</p></li>
</ul>

<hr class="main">

<!-- product: HiStruct Building Configurator -->