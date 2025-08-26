---
sourceLang: cs
sourceHash: 2fab412dc25a976995ad83e142153dad
autoTranslated: true
---

# Verkleidung &gt; Wandpaneele

<p>Im Menü <u><i>Verkleidung &gt; Wandpaneele</i></u>, zugänglich über das <u>Editier-Button</u>, kann die Verlegerichtung und der Versatz der Wandpaneele eingestellt, Materiallisten erstellt und editierbare Zeichnungen der Wandpaneele generiert werden.</p>
<p>Die Einstellungsmöglichkeiten unterscheiden sich je nach verwendetem Materialtyp.</p>
<p><b><u>Bedien- und Editier-Buttons</u> ändern die Eigenschaften der Konstruktion nur auf der ausgewählten Wandebene.</b></p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icons([
  ("img/TilingEditIcon64x64.png", "Verlegung"),
  ("img/TilingEditIcon64x64.png", "Schicht")
], "Verlegung / Schicht") }}

<h3>Verlegung</h3>

<ul>
<li><p>
  Der <u>Verlegung</u>-Button ermöglicht die Auswahl des Materials für die jeweilige Schicht der Wandkonstruktion aus einer vorbereiteten Produktgalerie.
  </p></li>
<li><p>Außerdem kann die Richtung, der Winkel und der Versatz der Verkleidungselemente vom Rand des Gebäudes eingestellt werden.
</p></li>

<li><p>
  Nach Klick auf das gewählte Wandverkleidungselement kann das Element zu Beginn und am Ende um die gewählte Länge verlängert oder seine Farbe bearbeitet werden.
  Ebenso ermöglicht es die Einstellung von Überständen und Farben der einzelnen Verkleidungsstücke.
</p></li>

<li><p>
{{ box_icon("img/AddOffsetButton.png", "", "Überstand", width=50) }}
</p></li>


<ul><li><p>
  Der Button <u>Überstand</u> im Modell ermöglicht das Einstellen des Überstands der Wandverkleidung über die jeweilige Gebäudekante.
</p></li></ul>
</ul>

<h3>Schicht</h3>
<ul>
<li><p>
  ...Die Funktionalität des <u>Schicht</u>-Buttons ist für eine zukünftige Version des Programms geplant...
</p></li>
</ul>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<p>
{{ box_icon("img/ColorsIcon64x64.png", "Farben", "Farben") }}
</p>
<p>Der <u>Farben</u>-Button ermöglicht das Festlegen eines Farbschemas für die jeweilige Wandebene. Je nach Schema können Farben für ausgewählte Wandpaneele gesetzt werden.</p>
<p>Die Wandpaneele sind ab 0 nummeriert.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/BomIcon64x64.png", "Stückliste", "Stückliste") }}

<p>
  Erstellt eine Übersichtstabelle mit den Positionen der jeweiligen Schicht des Wandaufbaus für die entsprechende Wandebene.
</p>

<p>
Die Funktionalität ist vorübergehend möglicherweise nicht für alle Verkleidungsschichten zugänglich.
</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/MainDrawings64x64.png", "Zeichnung", "Zeichnung") }}

<p>
  Generiert eine Zeichnung der gewählten Schicht der Wandebene. Die Zeichnung kann weiter bearbeitet und mit Beschriftungen und Maßen versehen werden.
</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/TapeMeasureIcon64x64.png", "Messen", "Messen") }}

<p>
  Mit dem <u>Messen</u>-Button können die Maße des Modells überprüft werden.
</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<p>
{{ box_icon("img/ControlButton.png", "", "Bedien-Button", width=64) }}
</p>

<p><b><u>Für einzelne Dachflächen ermöglicht es:</u></b></p>
<ul>
  <li><p>Festlegung des Dachaufbau-Typs – Bedachungstyp und Unterkonstruktion.</p></li>
  <li><p>Generierung einer Stückliste der Dachdeckung sowie die Erstellung eines Grundrisses des Dachaufbaus einschließlich aller Schichten als editierbare Zeichnung.</p></li>
</ul>

<p><b><u>Für einzelne Wandebenen ermöglicht es:</u></b></p>
<ul>
<li><p>Festlegung des Wandfertigungstyps, der Verlegung der Verkleidungsreihen, der Sockelhöhe oder des Farbschemas.</p></li>
<li><p>Festlegung des Wandmaterials und Bearbeitung der einzelnen Verkleidungsschichten je nach Wandfertigungstyp.</p></li>
<li><p>Generierung einer Stückliste der Wandverkleidungspositionen und einer Ansicht der Wand als editierbare Zeichnung.</p></li>
</ul>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<p>
{{ box_icon("img/EditButton.png", "", "Editier-Button", width=64) }}
</p>

<p><b><u>Für einzelne Schichten des Dachaufbaus auf der ausgewählten Dachfläche ermöglicht es:</u></b></p>
<ul>
  <li><p>Festlegung des Bedachungstyps oder der einzelnen Schichten der Unterkonstruktion inklusive Maße, Verlegerichtung sowie Anpassung von Position und Verlegewinkel.</p></li>
  <li><p>Generierung des Grundrisses der betreffenden Schicht der Dachkonstruktion als editierbare Zeichnung.</p></li>
  <li><p>Für die Dachdeckung kann auch ein Materialbericht mit den Positionen der Dachdeckung generiert werden.</p></li>
</ul>

<p><b><u>Für einzelne Schichten der Wandverkleidung auf der ausgewählten Wandebene ermöglicht es:</u></b></p>
<ul>
<li><p>Festlegung des Verkleidungsmaterials oder der einzelnen Schichten der Unterkonstruktion bzw. des Sockels, außerdem Verlegerichtung sowie Anpassung von Position und Verlegewinkel der Verkleidung.</p></li>
<li><p>Anpassung des Farbschemas der Verkleidung, Verlängerung der Überstände der Verkleidung.</p></li>
<li><p>Generierung einer Zeichnung der gewählten Schicht der Wandkonstruktion als editierbare Zeichnung.</p></li>
<li><p>Für die äußere Verkleidungsschicht kann auch ein Materialauszug mit den Positionen generiert werden.</p></li>
</ul>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Fehlt ein bestimmtes Dachmaterial in der Galerie? Schreiben Sie uns, wir fügen es hinzu.</h2>
<a href="mailto:jiri.podval@histruct.com?subject=Frage zum HiStruct Gebäudekonfigurator" class="btn">
  Ich möchte ergänzen
</a>

<!-- product: HiStruct Building Configurator -->