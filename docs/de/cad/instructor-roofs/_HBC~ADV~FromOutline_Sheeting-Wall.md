---
sourceLang: cs
sourceHash: 7b6d8ac9dbf46df09931e0ebfcdd0ecf
autoTranslated: true
---

# Verkleidung &gt; Wand

<p>Im Menü <u><i>Verkleidung &gt; Wand</i></u> kann der Fertigungstyp der Wand, die Verlegung der Verkleidungsreihen und die Sockelhöhe eingestellt werden. Außerdem können hier die einzelnen Schichten der Verkleidung bearbeitet werden.</p>

<p>Für einzelne Wände können zudem das Farbschema und die Materialien der einzelnen Verkleidungsschichten angepasst werden. Hier ist es auch möglich, ein Stücklistenverzeichnis mit Verkleidungspositionen oder eine Ansicht der Wand in Form einer bearbeitbaren Zeichnung zu generieren.</p>

<p><b>Die Einstellungen und Anpassungen der einzelnen Wandebenen können über die <u>Steuer- und Bearbeitungsschaltflächen</u> vorgenommen werden.</b></p>

<ul>
  <li><p>Über die <u>Steuerschaltflächen</u> im Modell kann der Verkleidungstyp der Wand, der Typ und die Abmessungen der Elemente der Sekundärkonstruktion für die einzelnen Wandebenen separat eingestellt werden; sie ermöglichen auch das Erstellen von Materiallisten und Zeichnungen der Wandkonstruktion.</p></li>
  <li><p>Über die <u>Bearbeitungsschaltflächen</u> im Modell können die Eigenschaften der einzelnen Schichten der Wandkonstruktion auf der gewählten Wandebene bearbeitet werden; sie ermöglichen ebenfalls das Erstellen von Materiallisten und Zeichnungen der entsprechenden Schichten der Wandkonstruktion.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/EditPropertiesIcon64x64.png", "Anordnung", "Anordnung") }}

<p>Die Schaltfläche <u>Anordnung</u> ermöglicht das Einstellen des Fertigungstyps, der Verlegung der Verkleidungsreihen und der Sockelhöhe.</p>

<hr class="main">

<h2>Einstellungen der Wandverkleidungsschichten</h2>

<p>Die Einstellung der Dachkonstruktion erfolgt über folgende Schaltflächen:</p>

<ul>
  <li><p><u>Obere Schicht</u></p></li>
  <li><p><u>Innere Schichten</u></p></li>
  <li><p><u>Sockel</u></p></li>
</ul>

<p>
Bei einigen Verkleidungstypen kann im Standardzustand die Schaltfläche <u>Innere Schichten</u> ausgeblendet sein und die Sekundärkonstruktion wird bei diesem Verkleidungstyp nicht generiert.
</p>

<p>Die Schaltfläche <u>Sockel</u> ist je nach im <u>Anordnung</u> eingestelltem Fertigungstyp der Wand verfügbar.</p>

<hr>

{{ box_icon("img/RoofTopLayer_64x64.png", "Obere Schicht", "Obere Schicht", fontSize=10) }}
<ul>
  <li><p>Ermöglicht die Auswahl des Verkleidungsmaterials aus einer vorbereiteten Produktgalerie.</p></li>
</ul>

<hr>

{{ box_icon("img/RoofLowerLayers_64x64.png", "Innere Schichten", "Innere Schichten", fontSize=10) }}
<ul>
  <li><p>Ermöglicht die Auswahl des Typs der Sekundärkonstruktion aus einer vorbereiteten Produktgalerie.</p></li>
</ul>

<hr>

{{ box_icon("img/WallPartLayerIcon64x64.png", "Sockel", "Sockel", fontSize=10) }}
<ul>
  <li><p>Ermöglicht die Auswahl des Sockelmaterials aus einer vorbereiteten Produktgalerie.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/ControlButton.png", "", "Steuerschaltfläche", width=64) }}

<p><b><u>Für die einzelnen Dachflächen ermöglicht es:</u></b></p>
<ul>
  <li><p>Die Einstellung des Dachaufbaus – der Bedachungsart und der Sekundärkonstruktion.</p></li>
  <li><p>Die Generierung einer Stückliste mit den Positionen der Dacheindeckung sowie die Erstellung eines Grundrisses der Dachkonstruktion mit allen Schichten in Form einer bearbeitbaren Zeichnung.</p></li>
</ul>

/// details | Funktionen für DACH verfügbar über die Steuerschaltfläche
{{ include_md("__sub_Sheeting_RoofPlane.md") }}
///


<p><b><u>Für die einzelnen Wandebenen ermöglicht es:</u></b></p>
<ul>
<li><p>Einstellung des Fertigungstyps der Wand, der Verlegungsart der Verkleidungsreihen, der Sockelhöhe oder des Farbschemas.</p></li>
<li><p>Einstellung des Wandmaterials und Bearbeitung der einzelnen Verkleidungsschichten je nach Fertigungstyp der Wand.</p></li>
<li><p>Generierung einer Stückliste mit Verkleidungspositionen der Wand und Ansicht der Wand in Form einer bearbeitbaren Zeichnung.</p></li>
</ul>

/// details | Funktionen für WAND verfügbar über die Steuerschaltfläche
{{ include_md("__sub_Sheeting_WallPlane.md") }}
///


<hr class="main">

{{ box_icon("img/EditButton.png", "", "Bearbeitungsschaltfläche", width=64) }}

<p><b><u>Für die einzelnen Schichten des Dachaufbaus auf der gewählten Dachfläche ermöglicht es:</u></b></p>
<ul>
  <li><p>Einstellung der Art der Eindeckung oder der einzelnen Schichten der Sekundärkonstruktion einschließlich Maße, Verlegerichtung, sowie die Anpassung von Position und Verlegerichtung.</p></li>
  <li><p>Generierung des Grundrisses der jeweiligen Schicht der Dachkonstruktion in Form einer bearbeitbaren Zeichnung.</p></li>
  <li><p>Für die Dacheindeckung kann auch eine Materialauswertung mit den Positionen der Eindeckung erstellt werden.</p></li>
</ul>

/// details | Funktionen für DACH verfügbar über die Bearbeitungsschaltfläche
{{ include_md("__sub_Sheeting_RoofLayer.md") }}
///


<hr class="main">


<p><b><u>Für die einzelnen Schichten des Verkleidungsaufbaus auf der gewählten Wandebene ermöglicht es:</u></b></p>
<ul>
<li><p>Einstellung des Verkleidungsmaterials oder der einzelnen Schichten der Sekundärkonstruktion oder des Sockels, weiterhin die Einstellung der Verlegerichtung sowie die Anpassung von Position und Verlegerichtung der Verkleidung.</p></li>
<li><p>Anpassung des Farbschemas der Verkleidung, Verlängerung der Überstände der Verkleidung.</p></li> 
<li><p>Generierung der Zeichnung der jeweiligen Schicht der Wandkonstruktion in Form einer bearbeitbaren Zeichnung.</p></li>
<li><p>Für die Außenschicht der Verkleidung kann auch eine Materialauswertung der einzelnen Positionen erstellt werden.</p></li>
</ul>

/// details | Funktionen für WAND verfügbar über die Bearbeitungsschaltfläche
{{ include_md("__sub_Sheeting_WallLayer.md") }}
///


<hr class="main">

<h2>Fehlt Ihnen eine Bedachung in der Galerie? Schreiben Sie uns, wir ergänzen sie.</h2>
<a href="mailto:jiri.podval@histruct.com?subject=Dotaz na HiStruct konfigurátor budov" class="btn">
  Ich möchte ergänzen
</a>

<!-- product: HiStruct Building Configurator -->