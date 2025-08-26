---
sourceLang: cs
sourceHash: fec403c07eeea618cc30950cf749192f
autoTranslated: true
---

# Bekleidung &gt; Gebäude &gt; Dach

<p>Im Menü <u><i>Bekleidung &gt; Gebäude &gt; Dach</i></u> kann der Dachaufbau-Typ, der Typ der Dacheindeckung und die Maße der sekundären Dachkonstruktion eingestellt werden.</p>

<p>Für die einzelnen Dachflächen kann zusätzlich die Verlegerichtung der Dacheindeckung geändert, ein Stückverzeichnis mit Positionen der Dacheindeckung generiert und auch der Grundriss der Dachkonstruktion in Form einer editierbaren Zeichnung erstellt werden.</p>

<p><b>Die Einstellungen und Anpassungen der einzelnen Dachflächen können über die <u>Steuer- und Bearbeitungsschaltflächen</u> vorgenommen werden.</b></p>

<ul>
  <li><p>Über <u>Steuerschaltflächen</u> im Modell lassen sich der Dachaufbau-Typ, der Eindeckungstyp und die Maße der Elemente der sekundären Konstruktion separat für jede Dachfläche einstellen. Außerdem können sie Materialauszüge und Zeichnungen der Dachkonstruktion erstellen.</p></li>
  <li><p>Über <u>Bearbeitungsschaltflächen</u> im Modell können die Eigenschaften der einzelnen Schichten der Dachkonstruktion auf der jeweiligen Dachfläche bearbeitet werden. Diese ermöglichen ebenfalls das Erstellen von Materialauszügen und Zeichnungen der entsprechenden Schichten der Dachkonstruktion.</p></li>
</ul>

<hr class="main">

<h2>Einstellungen der Schichten der Dachkonstruktion</h2>
<p>Die Einstellungen für den Schichtenaufbau der Dachkonstruktion werden über folgende Schaltflächen vorgenommen:</p>

<ul>
  <li><p><u>Obere Schicht</u></p></li>
  <li><p><u>Untere Schichten</u></p></li>
</ul>

<p>
Für bestimmte Eindeckungen kann die <u>Untere Schichten</u>-Schaltfläche im Standardzustand verborgen sein, und für solche Eindeckungen wird dann keine sekundäre Konstruktion generiert.
</p> 

<hr>

{{ box_icon("img/RoofTopLayer_64x64.png", "Obere Schicht", "Obere Schicht", fontSize=10) }}
<ul>
  <li><p>Ermöglicht die Auswahl einer Dacheindeckung aus einer vorbereiteten Produktgalerie.</p></li>
</ul>

<hr>

{{ box_icon("img/RoofLowerLayers_64x64.png", "Untere Schichten", "Untere Schichten", fontSize=10) }}
<ul>
  <li><p>Ermöglicht die Auswahl des Typs der sekundären Konstruktion aus einer vorbereiteten Produktgalerie.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/ControlButton.png", "", "Steuerschaltfläche", width=64) }}

<p><b><u>Für einzelne Dachflächen ermöglicht:</u></b></p>
<ul>
  <li><p>Einstellung des Dachaufbau-Typs – Typ der Eindeckung und der sekundären Konstruktion.</p></li>
  <li><p>Generierung eines Stückverzeichnisses mit den Positionen der Dacheindeckung sowie Generierung des Grundrisses der Dachkonstruktion mit allen Schichten in Form einer editierbaren Zeichnung.</p></li>
</ul>

/// details | Funktionen für DACH zugänglich über die Steuerschaltfläche
{{ include_md("__sub_Sheeting_RoofPlane.md") }}
///

<p><b><u>Für einzelne Wandflächen ermöglicht:</u></b></p>
<ul>
<li><p>Einstellung des Herstellungsmodus der Wand, der Verlegerichtung der Bekleidungslagen, der Sockelhöhe oder des Farbschemas.</p></li>
<li><p>Einstellung des Wandmaterials und Bearbeitung der einzelnen Bekleidungsschichten je nach Herstellungsmodus der Wand.</p></li>
<li><p>Generierung eines Stückverzeichnisses mit den Positionen der Wandbekleidung sowie eine Ansicht der Wand in Form einer editierbaren Zeichnung.</p></li>
</ul>

/// details | Funktionen für WAND zugänglich über die Steuerschaltfläche
{{ include_md("__sub_Sheeting_WallPlane.md") }}
///


<hr class="main">

{{ box_icon("img/EditButton.png", "", "Bearbeitungsschaltfläche", width=64) }}

<p><b><u>Für einzelne Schichten des Dachaufbaus auf einer gewählten Dachfläche ermöglicht:</u></b></p>
<ul>
  <li><p>Einstellung des Typs der Eindeckung bzw. der einzelnen Schichten der sekundären Konstruktion einschließlich Abmessungen, Verlegerichtung sowie Anpassung der Position und des Verlegewinkels.</p></li>
  <li><p>Generierung des Grundrisses der jeweiligen Schicht der Dachkonstruktion in Form einer editierbaren Zeichnung.</p></li>
  <li><p>Für die Dacheindeckung kann auch ein Materialauszug mit Dacheindeckungspositionen generiert werden.</p></li>
</ul>

/// details | Funktionen für DACH zugänglich über die Bearbeitungsschaltfläche
{{ include_md("__sub_Sheeting_RoofLayer.md") }}
///


<hr class="main">


<p><b><u>Für einzelne Schichten der Bekleidungsstruktur auf einer bestimmten Wandfläche ermöglicht:</u></b></p>
<ul>
<li><p>Einstellung des Bekleidungsmaterials oder der einzelnen Schichten der sekundären Konstruktion bzw. des Sockels, zudem Einstellung der Verlegerichtung sowie Anpassung der Position und des Verlegewinkels der Bekleidung.</p></li>
<li><p>Anpassung des Farbschemas der Wandbekleidung, Verlängerung der Überstände der Bekleidung.</p></li> 
<li><p>Generierung einer Zeichnung der jeweiligen Schicht der Wandkonstruktion in Form einer editierbaren Zeichnung.</p></li>
<li><p>Für die äußere Bekleidungsschicht kann ebenfalls ein Materialauszug mit Positionen generiert werden.</p></li>
</ul>

/// details | Funktionen für WAND zugänglich über die Bearbeitungsschaltfläche
{{ include_md("__sub_Sheeting_WallLayer.md") }}
///


<hr class="main">

<h2>Fehlt Ihnen eine Dacheindeckung in der Galerie? Schreiben Sie uns, wir ergänzen sie gerne.</h2>
<a href="mailto:jiri.podval@histruct.com?subject=Anfrage zum HiStruct Gebäudekonfigurator" class="btn">
  Ich möchte ergänzen
</a>

<!-- product: HiStruct Building Configurator -->