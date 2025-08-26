---
sourceLang: cs
sourceHash: 13d40de0d581d792956ff2b1bffa7c1d
autoTranslated: true
---

# Verkleidung &gt; Dach

<p>Im Menü <u><i>Verkleidung &gt; Dach</i></u> kann der Dachaufbau-Typ, der Dachbelag und die Abmessungen der Sekundärdachkonstruktion eingestellt werden.</p>

<p>Für die einzelnen Dachflächen kann außerdem die Verlegerichtung des Dachbelags geändert, ein Stücklistenbericht der Dachbelagspositionen erstellt und der Grundriss der Dachkonstruktion als editierbare Zeichnung generiert werden.</p>

<p><b>Die Einstellungen und Bearbeitungen der einzelnen Dachflächen können mit den <u>Steuer- und Bearbeitungsschaltflächen</u> vorgenommen werden.</b></p>

<ul>
  <li><p>Mit den <u>Steuerschaltflächen</u> im Modell kann der Dachaufbau-Typ, die Art des Dachbelags und die Abmessungen der Elemente der Sekundärkonstruktion für jede einzelne Dachfläche separat eingestellt sowie Materialauszüge und Konstruktionszeichnungen für das Dach erzeugt werden.</p></li>
  <li><p>Mit den <u>Bearbeitungsschaltflächen</u> im Modell können die Eigenschaften der einzelnen Schichten der Dachkonstruktion auf einer bestimmten Dachfläche bearbeitet sowie Materialauszüge und Zeichnungen der jeweiligen Schichten der Dachkonstruktion erstellt werden.</p></li>
</ul>

<hr class="main">

<h2>Einstellungen der Dachkonstruktionsschichten</h2>
<p>Die Einstellung des Dachaufbaus erfolgt über Schaltflächen:</p>

<ul>
  <li><p><u>Obere Schicht</u></p></li>
  <li><p><u>Untere Schichten</u></p></li>
</ul>

<p>
Bei bestimmten Dachbelägen kann im Standardfall die Schaltfläche <u>Untere Schichten</u> ausgeblendet sein und für solche Beläge wird keine Sekundärkonstruktion erzeugt.
</p> 

<hr>

{{ box_icon("img/RoofTopLayer_64x64.png", "Obere Schicht", "Obere Schicht", fontSize=10) }}
<ul>
  <li><p>Ermöglicht die Auswahl des Dachbelags aus einer vorbereiteten Produktgalerie.</p></li>
</ul>

<hr>

{{ box_icon("img/RoofLowerLayers_64x64.png", "Untere Schichten", "Untere Schichten", fontSize=10) }}
<ul>
  <li><p>Ermöglicht die Auswahl des Sekundäraufbaus aus einer vorbereiteten Produktgalerie.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/ControlButton.png", "", "Steuerschaltfläche", width=64) }}

<p><b><u>Für einzelne Dachflächen ermöglicht:</u></b></p>
<ul>
  <li><p>Einstellung des Dachaufbaus - Art des Dachbelags und der Sekundärkonstruktion.</p></li>
  <li><p>Erzeugung einer Stückliste der Dachbelagspositionen sowie Generierung des Grundrisses der Dachkonstruktion mit allen Schichten als bearbeitbare Zeichnung.</p></li>
</ul>

/// details | Funktionen für DACH zugänglich über die Steuerschaltfläche
{{ include_md("__sub_Sheeting_RoofPlane.md") }}
///

<p><b><u>Für einzelne Wandflächen ermöglicht:</u></b></p>
<ul>
<li><p>Einstellung des Wandfertigungstyps, der Verlegerichtung der Verkleidungsreihen, Sockelhöhe oder Farbschema.</p></li>
<li><p>Festlegung des Wandmaterials und Bearbeitung einzelner Verkleidungsschichten je nach Wandfertigungstyp.</p></li>
<li><p>Erstellung einer Stückliste der Wandverkleidungspositionen und einer Ansicht der Wand als bearbeitbare Zeichnung.</p></li>
</ul>

/// details | Funktionen für WAND zugänglich über die Steuerschaltfläche
{{ include_md("__sub_Sheeting_WallPlane.md") }}
///

<hr class="main">

{{ box_icon("img/EditButton.png", "", "Bearbeitungsschaltfläche", width=64) }}

<p><b><u>Für einzelne Schichten des Dachaufbaus auf einer bestimmten Dachfläche ermöglicht:</u></b></p>
<ul>
  <li><p>Einstellung von Dachbelag oder Einzelkomponenten der Sekundärkonstruktion einschließlich Abmessungen, Verlegerichtung sowie Anpassungen von Position und Verlegerichtungswinkel.</p></li>
  <li><p>Generierung des Grundrisses der jeweiligen Dachkonstruktionsschicht als bearbeitbare Zeichnung.</p></li>
  <li><p>Für den Dachbelag kann auch ein Materialbericht mit Positionen des Dachbelags generiert werden.</p></li>
</ul>

/// details | Funktionen für DACH zugänglich über die Bearbeitungsschaltfläche
{{ include_md("__sub_Sheeting_RoofLayer.md") }}
///

<hr class="main">


<p><b><u>Für einzelne Schichten des Wandaufbaus auf einer bestimmten Wandfläche ermöglicht:</u></b></p>
<ul>
<li><p>Einstellung des Verkleidungsmaterials oder einzelner Schichten der Sekundärkonstruktion oder des Sockels, Einstellung der Verlegerichtung sowie Anpassung von Position und Verlegerichtungswinkel der Verkleidung.</p></li>
<li><p>Anpassung des Farbschemas der Verkleidung, Verlängerung der Verkleidungsüberstände.</p></li> 
<li><p>Generierung einer Zeichnung der jeweiligen Schicht der Wandkonstruktion als bearbeitbare Zeichnung.</p></li>
<li><p>Für die Schicht der äußeren Verkleidung kann ebenfalls eine Materialauswertung mit Positionen generiert werden.</p></li>
</ul>

/// details | Funktionen für WAND zugänglich über die Bearbeitungsschaltfläche
{{ include_md("__sub_Sheeting_WallLayer.md") }}
///

<hr class="main">

<h2>Fehlt Ihnen ein Dachbelag in der Galerie? Schreiben Sie uns, wir ergänzen ihn gerne.</h2>
<a href="mailto:jiri.podval@histruct.com?subject=Anfrage zum HiStruct Gebäude-Konfigurator" class="btn">
  Ergänzung anfordern
</a>

<!-- product: HiStruct Roofs -->