---
sourceLang: cs
sourceHash: 543d40684eab17bcf51e74a5818e12c1
autoTranslated: true
---

# Verkleidung &gt; Dach

<p>Im Menü <u><i>Verkleidung &gt; Dach</i></u> ist es möglich, den Dachaufbau, den Typ der Dachdeckung und die Abmessungen der Sekundärkonstruktion des Daches einzustellen.</p>

<p>Innerhalb der einzelnen Dachflächen kann außerdem die Richtung der Dachdeckung geändert, ein Stückverzeichnis der Dacheindeckung erzeugt sowie ein Grundriss der Dachkonstruktion in Form einer editierbaren Zeichnung generiert werden.</p>

<p><b>Einstellungen und Anpassungen der einzelnen Dachflächen können mit <u>Steuer- und Bearbeitungsschaltflächen</u> vorgenommen werden.</b></p>

<ul>
  <li><p>Über die <u>Steuerschaltflächen</u> im Modell lassen sich der Aufbau des Daches, der Typ der Deckung und die Abmessungen der Elemente der Sekundärkonstruktion jeweils getrennt für einzelne Dachflächen einstellen. Außerdem können Materialauszüge und Konstruktionszeichnungen für das Dach erzeugt werden.</p></li>
  <li><p>Über die <u>Bearbeitungsschaltflächen</u> im Modell können die Eigenschaften der einzelnen Schichten der Dachkonstruktion an der gewählten Dachfläche bearbeitet werden; ebenfalls können Materialauszüge und Zeichnungen der jeweiligen Schichten erzeugt werden.</p></li>
</ul>

<hr class="main">

<h2>Einstellungen der Dachkonstruktionsschichten</h2>
<p>Die Einstellungen für den Dachaufbau werden über folgende Schaltflächen vorgenommen:</p>

<ul>
  <li><p><u>Obere Schicht</u></p></li>
  <li><p><u>Untere Schichten</u></p></li>
</ul>

<p>
Für einige Dacheindeckungen kann die Schaltfläche <u>Untere Schichten</u> im Standardzustand ausgeblendet sein; die Sekundärkonstruktion wird dann für diese Deckung nicht generiert.
</p> 

<hr>

{{ box_icon("img/RoofTopLayer_64x64.png", "Obere Schicht", "Obere Schicht", fontSize=10) }}
<ul>
  <li><p>Ermöglicht die Auswahl der Dacheindeckung aus einer vorbereiteten Produktgalerie.</p></li>
</ul>

<hr>

{{ box_icon("img/RoofLowerLayers_64x64.png", "Untere Schichten", "Untere Schichten", fontSize=10) }}
<ul>
  <li><p>Ermöglicht die Auswahl des Typs des sekundären Konstruktionsaufbaus aus einer vorbereiteten Produktgalerie.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/ControlButton.png", "", "Steuerschaltfläche", width=64) }}

<p>Für einzelne Dachflächen ermöglicht die Schaltfläche:</p>

<ul>
  <li><p>Einstellung des Dachaufbaus - Art der Deckung und der Sekundärkonstruktion.</p></li>
  <li><p>Generierung eines Stückverzeichnisses mit Posten der Dacheindeckung sowie Erstellung eines Dachkonstruktionsgrundrisses mit allen Schichten in Form einer editierbaren Zeichnung.</p></li>
</ul>

/// details | Funktionen zugänglich über die Steuerschaltfläche
{{ include_md("__sub_Sheeting_RoofPlane.md") }}
///



<hr class="main">

{{ box_icon("img/EditButton.png", "", "Bearbeitungsschaltfläche", width=64) }}

<p>Für einzelne Schichten des Dachaufbaus auf einer bestimmten Dachfläche ermöglicht die Schaltfläche:</p>

<ul>
  <li><p>Einstellung des Typs der Deckung oder einzelner Schichten der Sekundärkonstruktion, einschließlich Abmessungen, Verlegerichtung, ebenso Anpassung der Position und des Verlegewinkels.</p></li>
  <li><p>Erzeugung eines Grundrisses der jeweiligen Schicht der Dachkonstruktion in Form einer editierbaren Zeichnung.</p></li>
  <li><p>Für die Dacheindeckung lässt sich außerdem ein Materialauszug mit Positionen der Dacheindeckung generieren.</p></li>
</ul>

/// details | Funktionen zugänglich über die Bearbeitungsschaltfläche
{{ include_md("__sub_Sheeting_RoofLayer.md") }}
///


<hr class="main">

<h2>Fehlt Ihnen ein bestimmter Dachbelag in der Galerie? Schreiben Sie uns, wir ergänzen ihn gerne.</h2>
<a href="mailto:jiri.podval@histruct.com?subject=Frage zum HiStruct Gebäudekonfigurator" class="btn">
  Ergänzung anfordern
</a>

<!-- product: HiStruct Roofs -->