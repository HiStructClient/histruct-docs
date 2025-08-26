---
sourceLang: cs
sourceHash: 50304ac469f49b447a8b8a392cb1f0b1
autoTranslated: true
---

# Verkleidung

<p>Das Menü <u><i>Verkleidung</i></u> ermöglicht die Einstellung des Dachaufbaus, der Art der Dachdeckung sowie die Maße der sekundären Dachkonstruktion.</p>

<p>Für Wände kann die Art der Wandfertigung und das Material der einzelnen Schichten der Wand eingestellt werden.</p>

<p><b>Einstellungen und Anpassungen der einzelnen Dach- und Wandflächen können über die <u>Steuer- und Bearbeitungsschaltflächen</u> vorgenommen werden.</b></p>

<hr class="main">

{{ box_icon("img/DuoPitchBuildingIcon64x64.png", "Gebäude #", "Gebäude #") }}

<p>Die Schaltfläche <u>Gebäude #</u> dient zur Auswahl eines der modellierten Objekte.</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Annotation", "Annotation") }}

<p>Mit der Schaltfläche <u>Annotation</u> können beliebige Grundriss-Maßketten zum Modell hinzugefügt werden.</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Messen", "Messen") }}

<p>Mit der Schaltfläche <u>Messen</u> können die Abmessungen des Modells überprüft werden.</p>

<hr class="main">

{{ box_icon("img/ControlButton.png", "", "Steuerschaltfläche", width=64) }}

<p><b><u>Für die einzelnen Dachflächen ermöglicht sie:</u></b></p>
<ul>
  <li><p>Die Einstellung des Dachaufbaus – Art der Dachdeckung und der sekundären Konstruktion.</p></li>
  <li><p>Die Erstellung eines Stücklistenberichts mit Dachdeckungsposten sowie die Generierung des Grundrisses der Dachkonstruktion mit allen Schichten als bearbeitbare Zeichnung.</p></li>
</ul>

/// details | Funktionen für das DACH zugänglich über die Steuerschaltfläche
{{ include_md("__sub_Sheeting_RoofPlane.md") }}
///


<p><b><u>Für die einzelnen Wandflächen ermöglicht sie:</u></b></p>
<ul>
<li><p>Einstellung der Art der Wandfertigung, die Art der Reihenlegung der Verkleidung, die Sockelhöhe oder das Farbschema.</p></li>
<li><p>Einstellung des Wandmaterials und Anpassung der einzelnen Verkleidungsschichten je nach Fertigungsart der Wand.</p></li>
<li><p>Erstellung eines Stücklistenberichts mit Wandverkleidungsposten und der Ansicht der Wand als bearbeitbare Zeichnung.</p></li>
</ul>

/// details | Funktionen für die WAND zugänglich über die Steuerschaltfläche
{{ include_md("__sub_Sheeting_WallPlane.md") }}
///


<hr class="main">

{{ box_icon("img/EditButton.png", "", "Bearbeitungsschaltfläche", width=64) }}

<p><b><u>Für die einzelnen Schichten des Dachaufbaus auf einer bestimmten Dachfläche ermöglicht sie:</u></b></p>
<ul>
  <li><p>Die Einstellung der Art der Dachdeckung oder einzelner Schichten der sekundären Dachkonstruktion, einschließlich Abmessungen, Verlegerichtung sowie Anpassung der Position und des Verlegewinkels.</p></li>
  <li><p>Die Generierung des Grundrisses der betreffenden Schicht der Dachkonstruktion als bearbeitbare Zeichnung.</p></li>
  <li><p>Für die Dachdeckung kann auch ein Materialbericht mit entsprechenden Posten erstellt werden.</p></li>
</ul>

/// details | Funktionen für das DACH zugänglich über die Bearbeitungsschaltfläche
{{ include_md("__sub_Sheeting_RoofLayer.md") }}
///


<hr class="main">


<p><b><u>Für die einzelnen Schichten der Verkleidung auf einer bestimmten Wandfläche ermöglicht sie:</u></b></p>
<ul>
<li><p>Einstellung des Verkleidungsmaterials oder einzelner Schichten der sekundären Konstruktion oder des Sockels, außerdem die Einstellung der Verlegerichtung sowie die Anpassung der Position und des Verlegewinkels der Verkleidung.</p></li>
<li><p>Änderung des Farbschemas der Verkleidung, Verlängerung der Überstände der Verkleidung.</p></li> 
<li><p>Erstellung einer Zeichnung der betreffenden Schicht der Wandkonstruktion als bearbeitbare Zeichnung.</p></li>
<li><p>Für die Außenschicht der Verkleidung kann zusätzlich ein Materialbericht mit entsprechenden Posten erstellt werden.</p></li>
</ul>

/// details | Funktionen für die WAND zugänglich über die Bearbeitungsschaltfläche
{{ include_md("__sub_Sheeting_WallLayer.md") }}
///


<hr class="main">

<h2>Fehlt Ihnen eine Dachdeckung in der Galerie? Schreiben Sie uns, wir ergänzen sie gern.</h2>
<a href="mailto:jiri.podval@histruct.com?subject=Frage zum HiStruct Gebäudekonfigurator" class="btn">
  Ich möchte ergänzen
</a>

<!-- product: HiStruct Building Configurator -->