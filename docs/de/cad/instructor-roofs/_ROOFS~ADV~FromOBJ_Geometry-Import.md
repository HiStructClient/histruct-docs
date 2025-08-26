---
sourceLang: cs
sourceHash: f3e4281c2fca478ac0a77a535a3f9d5c
autoTranslated: true
---

# Geometrie &gt; Import
<p>Im Menü <u><i>Geometrie &gt; Import</i></u> ist es möglich, die Einstellungen des Kantengenerators und der Flächen zu ändern, sowie die Abmessungen und Neigungen der generierten Kanten und Flächen mithilfe des Lösers ROSOL anzupassen.</p>

<hr class="main">

<h2>Einstellungen der generierten Kanten und Flächen</h2>
<p>Der Generator erstellt ein 3D-Modell aus Dreiecksflächen, die durch Kanten begrenzt sind.</p>

<p>Das eingemessene Modell muss jedoch nicht exakt sein, deshalb ist es direkt im Modell möglich, die Parameter der einzelnen generierten Kanten und Flächen anzupassen – die Auswahl erfolgt durch Klicken auf das gewünschte Element.</p>

<h3><u>Flächen</u></h3>
<p>Je nach Ausrichtung der einzelnen Flächen im Modell wird bestimmt, ob es sich um eine Dachfläche handelt oder nicht.</p>

<p>Die einzelnen generierten Flächen können ein- oder ausgeschaltet werden. Eingeschaltete Flächen werden weiterhin als Dachflächen betrachtet und auf ihnen werden Beläge, Sekundärkonstruktionen und Abkantteile generiert.</p>

<h3><u>Kanten</u></h3>
<p>Den Kanten wird entsprechend ihrer Geometrie im Modell eine der folgenden Funktionen zugeordnet:</p>

<p><span style="color: rgba(40,100,255,255);"><b>Giebelkante</b></span></p>
<ul>
  <li><p>Kante am Rand der Dachfläche, in der Neigung</p></li>
  <li><p>Ist die abschließende Kante der Dachfläche</p></li>
</ul>

<p><span style="color: rgba(20,255,20,255);"><b>Traufkante</b></span></p>
<ul>
  <li><p>Kante am Rand der Dachfläche, waagrecht</p></li>
  <li><p>Ist die abschließende Kante der Dachfläche</p></li>
</ul>

<p><span style="color: rgba(187,120,62,255);"><b>Innere Kante</b></span></p>
<ul>
  <li><p>Kante zwischen Dachflächen, ausgeschaltet</p></li>
  <li><p>Teilt nur die generierten Dachebenen</p></li>
</ul>

<p>Die einzelnen Kanten innerhalb der aktiven Dachflächen können ein- oder ausgeschaltet werden. Außerdem kann eingestellt werden, ob der Generator sie weiterhin als waagrecht betrachten soll oder nicht.</p>

<hr class="main">

{{ box_icon("img/MainSettings64x64.png", "Einstellungen", "Einstellungen") }}

<p>Ermöglicht das Anpassen des Maßstabs des importierten Modells und das Anpassen der Parameter des Dachebenen-Generators.</p>

<p><b><u>Maßstab</u></b></p>
<ul>
  <li><p>Durch Ändern des Werts kann das Modell vergrößert oder verkleinert werden. Ein geeigneter Maßstab sollte so gewählt werden, dass die Objektabmessungen im Modell denen der Wirklichkeit entsprechen.</p></li>
  <li><p>Die korrekte Maßstabeinstellung kann überprüft werden, indem ein beliebiges bekanntes Maß mit der <u>Messfunktion</u> gemessen wird.</p></li>
</ul>

<p><b><u>Senkrechte Flächen</u></b></p>
<ul>
  <li><p>Senkrechte Flächen können aus dem Modell vollständig entfernt werden. Es ist auch möglich, für diese Flächen die maximal zulässige Winkeldifferenz von der Senkrechten einzustellen, bis zu der sie als senkrecht gelten.</p></li>
</ul>

<p><b><u>Waagrechte Flächen</u></b></p>
<ul>
  <li><p>Waagrechte Flächen können ebenfalls vollständig aus dem Modell entfernt werden. Ebenso ist es möglich, für diese Flächen die maximal zulässige Winkeldifferenz von der Waagrechten einzustellen, bis zu der sie als waagrecht gelten.</p></li>
</ul>

<p><b><u>Max. Punktabstand zum Zusammenfassen</u></b></p>
<ul>
  <li><p>Legt den maximalen Abstand fest, bei dem Punkte als identisch betrachtet werden. Der Generator fasst anschließend alle Punkte, die innerhalb der eingestellten maximalen Distanz liegen, zusammen.</p></li>
</ul>

<p><b><u>Max. Winkel zwischen Flächennormalen zum Zusammenfassen</u></b></p>
<ul>
  <li><p>Legt den maximalen Winkel fest, den die Normalen zweier benachbarter Ebenen einschließen dürfen, damit diese Ebenen als parallel gelten. Der Generator fasst anschließend diese Ebenen zusammen.</p></li>
</ul>

<p><b><u>Max. Neigung einer als waagrecht geforderten Kante</u></b></p>
<ul>
  <li><p>Dient zur Festlegung der maximalen Steigung einer Kante, bis zu der die Kante noch als waagrecht betrachtet wird.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/PreviewGeometry64x64.png", "Vorschau", "Vorschau") }}

<p>Mit dem <u>Vorschau</u>-Button können die generierten Dachflächen und Kanten im Modellraum einschließlich ihrer Längen und Neigungen überprüft werden.</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Annotation", "Annotation") }}

<p>Die Taste <u>Annotation</u> ermöglicht das Hinzufügen beliebiger Grundrissmaße zum Modell.</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Messen", "Messen") }}

<p>Mit dem <u>Messen</u>-Button können die Maße des Modells überprüft werden.</p>

<hr class="main">

<!-- product: HiStruct Roofs -->