---
sourceLang: cs
sourceHash: 8334cabcacd91f7dde4b7f5abb9da032
autoTranslated: true
---

# Bekleidung &gt; Wand

<p>Im Menü <u><i>Bekleidung > Wand</i></u> können Sie den Fertigungstyp der Wand, die Verlegung der Bekleidungsreihen und die Sockelhöhe einstellen. Hier können zudem die einzelnen Schichten der Wandbekleidung bearbeitet werden.</p>

<p>Für einzelne Wände kann außerdem das Farbschema und die Materialien der einzelnen Bekleidungsschichten angepasst werden. Ebenso ist es möglich, ein Stücklistenverzeichnis der Bekleidungsobjekte oder eine Ansicht der Wand als editierbare Zeichnung zu generieren.</p>

<p><b>Die Einstellungen und Anpassungen der einzelnen Wandebenen können über die <u>Bedien- und Editierknöpfe</u> vorgenommen werden.</b></p>

<ul>
  <li><p>Über die <u>Bedienknöpfe</u> im Modell kann der Bekleidungstyp der Wand, der Typ und die Abmessungen der Elemente der Sekundärkonstruktion getrennt für die einzelnen Wandebenen eingestellt werden. Außerdem können Materialauszüge und Zeichnungen der Wandkonstruktion erstellt werden.</p></li>
  <li><p>Über die <u>Editierknöpfe</u> im Modell können die Eigenschaften der einzelnen Schichten der Wandkonstruktion auf der definierten Wandebene bearbeitet und ebenfalls Materialauszüge und Zeichnungen der entsprechenden Schichten der Wandkonstruktion erzeugt werden.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/EditPropertiesIcon64x64.png", "Layout", "Layout") }}

<p>Die Schaltfläche <u>Layout</u> ermöglicht das Einstellen des Fertigungstyps, der Verlegung der Bekleidungsreihen und der Sockelhöhe.</p>

<hr class="main">

<h2>Einstellung der Wandbekleidungsschichten</h2>

<p>Die Einstellungen der Dachkonstruktion werden mit folgenden Schaltflächen vorgenommen:</p>

<ul>
  <li><p><u>Obere Schicht</u></p></li>
  <li><p><u>Innere Schichten</u></p></li>
  <li><p><u>Sockel</u></p></li>
</ul>

<p>
Für einige Bekleidungstypen kann die Schaltfläche <u>Innere Schichten</u> im Standardzustand versteckt sein und die Sekundärkonstruktion wird für diesen Bekleidungstyp nicht erzeugt.
</p>

<p>Die Schaltfläche <u>Sockel</u> ist abhängig vom Fertigungstyp der in <u>Layout</u> eingestellten Wand verfügbar.</p>

<hr>

{{ box_icon("img/RoofTopLayer_64x64.png", "Obere Schicht", "Obere Schicht", fontSize=10) }}
<ul>
  <li><p>Ermöglicht die Materialauswahl der Bekleidung aus einer vorbereiteten Produktgalerie.</p></li>
</ul>

<hr>

{{ box_icon("img/RoofLowerLayers_64x64.png", "Innere Schichten", "Innere Schichten", fontSize=10) }}
<ul>
  <li><p>Ermöglicht die Auswahl des Typs der Sekundärkonstruktion aus einer vorbereiteten Produktgalerie.</p></li>
</ul>

<hr>

{{ box_icon("img/WallPartLayerIcon64x64.png", "Sockel", "Sockel", fontSize=10) }}
<ul>
  <li><p>Ermöglicht die Materialauswahl des Sockels aus einer vorbereiteten Produktgalerie.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/ControlButton.png", "", "Bedienknopf", width=64) }}

<p><b><u>Für einzelne Dachebenen ermöglicht:</u></b></p>
<ul>
  <li><p>Die Einstellung des Dachaufbaus – des Deckungsmaterials und der Sekundärkonstruktion.</p></li>
  <li><p>Das Erzeugen einer Stückliste mit Positionen der Dachdeckung und auch das Erstellen einer Grundrisszeichnung der Dachkonstruktion mit allen Schichten in Form einer editierbaren Zeichnung.</p></li>
</ul>

/// details | Funktionen für DACH über den Bedienknopf verfügbar
{{ include_md("__sub_Sheeting_RoofPlane.md") }}
///


<p><b><u>Für einzelne Wandebenen ermöglicht:</u></b></p>
<ul>
<li><p>Die Einstellung des Wandfertigungstyps, der Verlegung der Bekleidungsreihen, der Sockelhöhe oder des Farbschemas.</p></li>
<li><p>Die Einstellung des Wandmaterials und die Bearbeitung der einzelnen Bekleidungsschichten je nach Wandfertigungstyp.</p></li>
<li><p>Das Erzeugen einer Stückliste der Bekleidungsobjekte der Wand und einer Ansicht der Wand als editierbare Zeichnung.</p></li>
</ul>

/// details | Funktionen für WAND über den Bedienknopf verfügbar
{{ include_md("__sub_Sheeting_WallPlane.md") }}
///


<hr class="main">

{{ box_icon("img/EditButton.png", "", "Editierknopf", width=64) }}

<p><b><u>Für einzelne Schichten des Dachaufbaus auf der definierten Dachebene ermöglicht:</u></b></p>
<ul>
  <li><p>Die Einstellung des Deckungsmaterials oder der einzelnen Schichten der Sekundärkonstruktion einschließlich Abmessungen, Verlegerichtung sowie Anpassung der Position und des Verlegewinkels.</p></li>
  <li><p>Das Erstellen des Grundrisses der jeweiligen Schicht der Dachkonstruktion als editierbare Zeichnung.</p></li>
  <li><p>Für die Dachdeckung ist es zudem möglich, einen Materialauszug mit Dachpositionen zu generieren.</p></li>
</ul>

/// details | Funktionen für DACH über den Editierknopf verfügbar
{{ include_md("__sub_Sheeting_RoofLayer.md") }}
///


<hr class="main">


<p><b><u>Für einzelne Schichten der Wandbekleidung auf der definierten Wandebene ermöglicht:</u></b></p>
<ul>
<li><p>Die Einstellung des Bekleidungsmaterials oder der einzelnen Schichten der Sekundärkonstruktion bzw. des Sockels, weiterhin die Einstellung der Verlegerichtung sowie die Bearbeitung der Position und des Winkels der Bekleidung.</p></li>
<li><p>Bearbeitung des Farbschemas der Bekleidung, Verlängerung der Überstände der Bekleidung.</p></li> 
<li><p>Das Erstellen der Zeichnung der jeweiligen Wandkonstruktionsschicht als editierbare Zeichnung.</p></li>
<li><p>Für die Außenschicht der Bekleidung kann außerdem ein Materialauszug mit Positionen generiert werden.</p></li>
</ul>

/// details | Funktionen für WAND über den Editierknopf verfügbar
{{ include_md("__sub_Sheeting_WallLayer.md") }}
///


<hr class="main">

<h2>Fehlt Ihnen eine Bedachung in unserer Galerie? Schreiben Sie uns, wir ergänzen sie.</h2>
<a href="mailto:jiri.podval@histruct.com?subject=Frage zum HiStruct Gebäudekonfigurator" class="btn">
  Ich möchte ergänzen
</a>

<!-- product: HiStruct Building Configurator -->