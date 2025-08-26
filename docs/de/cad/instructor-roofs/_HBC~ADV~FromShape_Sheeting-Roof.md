---
sourceLang: cs
sourceHash: 35370eba55aeb3a6954706e78f73219d
autoTranslated: true
---

# Verkleidung &gt; Dach

<p>Im Menü <u><i>Verkleidung &gt; Dach</i></u> können der Dachaufbau-Typ, die Art der Dachdeckung und die Maße der sekundären Dachkonstruktion eingestellt werden.</p>

<p>Für die einzelnen Dachflächen kann zusätzlich die Verlegerichtung der Dachdeckung geändert, ein Materialauszug mit den Positionen der Dachdeckung generiert und außerdem ein Grundriss der Dachkonstruktion in Form einer editierbaren Zeichnung erstellt werden.</p>

<p><b>Die Einstellungen und Anpassungen der einzelnen Dachflächen können über die <u>Steuer- und Editier-Buttons</u> vorgenommen werden.</b></p>

<ul>
  <li><p>Über die <u>Steuer-Buttons</u> im Modell kann der Dachaufbau-Typ, die Art der Dachdeckung sowie die Maße der Elemente der sekundären Konstruktion für jede einzelne Dachfläche separat eingestellt werden. Sie ermöglichen auch die Erstellung von Materialauszügen und Zeichnungen der Dachkonstruktion.</p></li>
  <li><p>Über die <u>Editier-Buttons</u> im Modell können die Eigenschaften einzelner Schichten der Dachkonstruktion für die jeweilige Dachfläche bearbeitet werden. Sie ermöglichen ebenfalls die Erstellung von Materialauszügen und Zeichnungen für die entsprechenden Schichten der Dachkonstruktion.</p></li>
</ul>

<hr class="main">

<h2>Einstellung der Schichten der Dachkonstruktion</h2>
<p>Die Einstellung des Dachaufbaus erfolgt mit folgenden Buttons:</p>

<ul>
  <li><p><u>Obere Schicht</u></p></li>
  <li><p><u>Untere Schichten</u></p></li>
</ul>

<p>
Für einige Dachdeckungen kann im Standardzustand der Button <u>Untere Schichten</u> ausgeblendet sein und für diese Deckung wird dann keine sekundäre Konstruktion generiert.
</p> 

<hr>

{{ box_icon("img/RoofTopLayer_64x64.png", "Obere Schicht", "Obere Schicht", fontSize=10) }}
<ul>
  <li><p>Ermöglicht die Auswahl der Dachdeckung aus einer vorbereiteten Produktgalerie.</p></li>
</ul>

<hr>

{{ box_icon("img/RoofLowerLayers_64x64.png", "Untere Schichten", "Untere Schichten", fontSize=10) }}
<ul>
  <li><p>Ermöglicht die Auswahl des Typs des sekundären Konstruktionsaufbaus aus einer vorbereiteten Produktgalerie.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/ControlButton.png", "", "Steuer-Button", width=64) }}

<p><b><u>Für einzelne Dachflächen ermöglicht:</u></b></p>
<ul>
  <li><p>Einstellung des Dachaufbaus - des Deckungstyps und der sekundären Konstruktion.</p></li>
  <li><p>Generieren eines Materialauszugs für die Dachdeckung sowie Generieren des Grundrisses der Dachkonstruktion mit allen Schichten in Form einer editierbaren Zeichnung.</p></li>
</ul>

/// details | Funktionen für DACH zugänglich über den Steuer-Button
{{ include_md("__sub_Sheeting_RoofPlane.md") }}
///


<p><b><u>Für einzelne Wandflächen ermöglicht:</u></b></p>
<ul>
<li><p>Einstellung des Wandaufbaus, der Verlegerichtung der Bekleidung, der Sockelhöhe oder des Farbschemas.</p></li>
<li><p>Einstellung des Wandmaterials und Bearbeitung der einzelnen Schichten der Bekleidung je nach Art der Wandkonstruktion.</p></li>
<li><p>Generieren eines Materialauszugs mit Bekleidungspositionen der Wand sowie einer Ansicht der Wand in Form einer editierbaren Zeichnung.</p></li>
</ul>

/// details | Funktionen für WAND zugänglich über den Steuer-Button
{{ include_md("__sub_Sheeting_WallPlane.md") }}
///


<hr class="main">

{{ box_icon("img/EditButton.png", "", "Editier-Button", width=64) }}

<p><b><u>Für einzelne Schichten des Dachaufbaus auf der ausgewählten Dachfläche ermöglicht:</u></b></p>
<ul>
  <li><p>Einstellung der Deckungsart oder der einzelnen Schichten der sekundären Konstruktion, einschließlich Maße, Verlegerichtung sowie Anpassung von Position und Verlegerichtungswinkel.</p></li>
  <li><p>Generieren des Grundrisses der jeweiligen Schicht der Dachkonstruktion in Form einer editierbaren Zeichnung.</p></li>
  <li><p>Für die Dachdeckung kann zudem ein Materialauszug mit den Positionen der Dachdeckung generiert werden.</p></li>
</ul>

/// details | Funktionen für DACH zugänglich über den Editier-Button
{{ include_md("__sub_Sheeting_RoofLayer.md") }}
///


<hr class="main">


<p><b><u>Für einzelne Schichten des Verkleidungsaufbaus auf der ausgewählten Wandfläche ermöglicht:</u></b></p>
<ul>
<li><p>Einstellung des Verkleidungsmaterials oder einzelner Schichten der sekundären Konstruktion bzw. des Sockels, außerdem die Einstellung der Verlegerichtung sowie Position und Verlegerichtungswinkel der Verkleidung.</p></li>
<li><p>Anpassung des Farbschemas der Verkleidung, Verlängerung von Überständen der Verkleidung.</p></li> 
<li><p>Generieren einer Zeichnung der jeweiligen Schicht der Wandkonstruktion in Form einer editierbaren Zeichnung.</p></li>
<li><p>Für die äußere Verkleidungsschicht kann außerdem ein Materialauszug mit den Positionen generiert werden.</p></li>
</ul>

/// details | Funktionen für WAND zugänglich über den Editier-Button
{{ include_md("__sub_Sheeting_WallLayer.md") }}
///


<hr class="main">

<h2>Fehlt Ihnen eine Dachdeckung in der Galerie? Schreiben Sie uns, wir ergänzen sie gerne.</h2>
<a href="mailto:jiri.podval@histruct.com?subject=Anfrage zum HiStruct Gebäudekonfigurator" class="btn">
  Ergänzung anfragen
</a>

<!-- product: HiStruct Roofs -->