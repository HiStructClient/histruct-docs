---
sourceLang: cs
sourceHash: 372e35207466f83cb0d10ab0f6ee4cfb
autoTranslated: true
---

# Verkleidung &gt; Gebäude &gt; Wand

<p>Im Menü <u><i>Verkleidung &gt; Gebäude &gt; Wand</i></u> kann der Fertigungstyp der Wand, die Anordnung der Verkleidungsreihen und die Sockelhöhe eingestellt werden. Ebenso können hier die einzelnen Schichten der Wandverkleidung bearbeitet werden.</p>

<p>Für einzelne Wände lassen sich zudem das Farbschema und die Materialien der einzelnen Verkleidungsschichten anpassen. Außerdem ist es möglich, ein Stücklistenverzeichnis mit Verkleidungsposten oder eine Wandansicht als editierbare Zeichnung zu generieren.</p>

<p><b>Die Einstellungen und Anpassungen der einzelnen Wandflächen erfolgen mit <u>Bedienungs- und Bearbeitungstasten</u>.</b></p>

<ul>
  <li><p>Über die <u>Bedienungstasten</u> im Modell kann der Typ der Wandverkleidung, der Typ und die Abmessungen der Elemente der Sekundärkonstruktion jeweils für die einzelnen Wandflächen festgelegt werden. Sie ermöglichen zudem die Erstellung von Materialauszügen und Zeichnungen der Wandkonstruktion.</p></li>
  <li><p>Mit den <u>Bearbeitungstasten</u> im Modell lassen sich die Eigenschaften der einzelnen Schichten der Wandkonstruktion auf der angegebenen Wandfläche bearbeiten. Zudem können Materialauszüge und Zeichnungen der jeweiligen Schichten der Wandkonstruktion erstellt werden.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/EditPropertiesIcon64x64.png", "Layout", "Layout") }}

<p>Mit der Taste <u>Layout</u> können der Fertigungstyp, die Anordnung der Verkleidungsreihen und die Sockelhöhe eingestellt werden.</p>

<hr class="main">

<h2>Einstellungen der Wandverkleidungsschichten</h2>

<p>Die Zusammensetzung der Dachkonstruktion wird mithilfe folgender Tasten eingestellt:</p>

<ul>
  <li><p><u>Obere Schicht</u></p></li>
  <li><p><u>Innere Schichten</u></p></li>
  <li><p><u>Sockel</u></p></li>
</ul>

<p>
Für bestimmte Verkleidungstypen kann die Taste <u>Innere Schichten</u> standardmäßig ausgeblendet sein, und die Sekundärkonstruktion wird für diesen Verkleidungstyp dann nicht generiert.
</p>

<p>Die Taste <u>Sockel</u> ist je nach Fertigungstyp der Wand, der in <u>Layout</u> eingestellt ist, verfügbar.</p>

<hr>

{{ box_icon("img/RoofTopLayer_64x64.png", "Obere Schicht", "Obere Schicht", fontSize=10) }}
<ul>
  <li><p>Ermöglicht die Auswahl des Verkleidungsmaterials aus einer vorbereiteten Produktgalerie.</p></li>
</ul>

<hr>

{{ box_icon("img/RoofLowerLayers_64x64.png", "Innere Schichten", "Innere Schichten", fontSize=10) }}
<ul>
  <li><p>Ermöglicht die Auswahl des Typs der Sekundärkonstruktionsschichten aus einer vorbereiteten Produktgalerie.</p></li>
</ul>

<hr>

{{ box_icon("img/WallPartLayerIcon64x64.png", "Sockel", "Sockel", fontSize=10) }}
<ul>
  <li><p>Ermöglicht die Auswahl des Sockelmaterials aus einer vorbereiteten Produktgalerie.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/ControlButton.png", "", "Bedientaste", width=64) }}

<p><b><u>Für einzelne Dachflächen ermöglicht es:</u></b></p>
<ul>
  <li><p>Einstellung des Typs der Dachaufbauzusammensetzung – Art der Dacheindeckung und Sekundärkonstruktion.</p></li>
  <li><p>Erstellung einer Stückliste für Dacheindeckungselemente sowie die Generierung einer Grundrisszeichnung der Dachkonstruktion mit allen Schichten als editierbare Zeichnung.</p></li>
</ul>

/// details | Funktionen für DACH verfügbar über die Bedientaste
{{ include_md("__sub_Sheeting_RoofPlane.md") }}
///


<p><b><u>Für einzelne Wandflächen ermöglicht es:</u></b></p>
<ul>
<li><p>Einstellung des Wandfertigungstyps, der Anordnung der Verkleidungsreihen, der Sockelhöhe oder des Farbschemas.</p></li>
<li><p>Einstellung des Wandmaterials und Anpassung der einzelnen Verkleidungsschichten je nach Wandfertigungstyp.</p></li>
<li><p>Generierung einer Stückliste mit Verkleidungselementen und einer Wandansicht als editierbare Zeichnung.</p></li>
</ul>

/// details | Funktionen für WAND verfügbar über die Bedientaste
{{ include_md("__sub_Sheeting_WallPlane.md") }}
///


<hr class="main">

{{ box_icon("img/EditButton.png", "", "Bearbeitungstaste", width=64) }}

<p><b><u>Für einzelne Schichten der Dachzusammensetzung auf einer bestimmten Dachfläche ermöglicht es:</u></b></p>
<ul>
  <li><p>Einstellung des Typs der Dacheindeckung oder der einzelnen Schichten der Sekundärkonstruktion einschließlich Abmessungen, Verlegerichtung sowie Anpassung von Position und Verlegewinkel.</p></li>
  <li><p>Generierung einer Grundrisszeichnung der entsprechenden Schicht der Dachkonstruktion als editierbare Zeichnung.</p></li>
  <li><p>Für die Dachdeckung kann zudem ein Materialauszug mit Elementen der Dacheindeckung generiert werden.</p></li>
</ul>

/// details | Funktionen für DACH verfügbar über die Bearbeitungstaste
{{ include_md("__sub_Sheeting_RoofLayer.md") }}
///


<hr class="main">


<p><b><u>Für einzelne Schichten der Wandverkleidung auf einer bestimmten Wandfläche ermöglicht es:</u></b></p>
<ul>
<li><p>Einstellung des Verkleidungsmaterials oder der einzelnen Schichten der Sekundärkonstruktion bzw. des Sockels, sowie die Einstellung der Verlegerichtung, ebenso Anpassung von Position und Verlegewinkel der Verkleidung.</p></li>
<li><p>Anpassung des Farbschemas der Verkleidung, Verlängerung der Überstände der Verkleidung.</p></li> 
<li><p>Erstellung einer Zeichnung der jeweiligen Schicht der Wandkonstruktion als editierbare Zeichnung.</p></li>
<li><p>Für die Außenschicht der Verkleidung kann zudem ein Materialauszug mit Positionen generiert werden.</p></li>
</ul>

/// details | Funktionen für WAND verfügbar über die Bearbeitungstaste
{{ include_md("__sub_Sheeting_WallLayer.md") }}
///


<hr class="main">

<h2>Fehlt Ihnen eine bestimmte Eindeckung in der Galerie? Schreiben Sie uns, wir ergänzen sie.</h2>
<a href="mailto:jiri.podval@histruct.com?subject=Anfrage zum HiStruct Gebäudekonfigurator" class="btn">
  Ich möchte ergänzen
</a>

<!-- product: HiStruct Building Configurator -->