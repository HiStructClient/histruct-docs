---
sourceLang: cs
sourceHash: 4e5a4e886a6ba79ab22830bcde13d4ce
autoTranslated: true
---

<h1>Verkleidung</h1>

  <p>Das Menü <u><i>Verkleidung</i></u> ermöglicht es, den Typ des Dachaufbaus, die Art der Dacheindeckung und die Maße der Sekundärdachkonstruktion festzulegen.</p>

  <p>Für die einzelnen Dachflächen ist es außerdem möglich, die Verlegerichtung der Dacheindeckung zu ändern, ein Stückverzeichnis mit den Positionen der Dacheindeckung zu generieren sowie den Grundriss der Dachkonstruktion in Form einer bearbeitbaren Zeichnung zu erzeugen.</p>

  <p><b>Die Einstellungen und Anpassungen der einzelnen Dachflächen können über die <u>Steuer- und Bearbeitungsschaltflächen</u> vorgenommen werden.</b></p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  {{ box_icon("img/DuoPitchBuildingIcon64x64.png", "Gebäude #", "Gebäude #") }}

  <p>Die Schaltfläche <u>Gebäude #</u> dient zur Auswahl eines der modellierten Objekte.</p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  {{ box_icon("img/DimensionLinearIcon64x64.png", "Bemaßung", "Bemaßung") }}

  <p>Mit der Schaltfläche <u>Bemaßung</u> können beliebige Grundrissmaße ins Modell eingefügt werden.</p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  {{ box_icon("img/TapeMeasureIcon64x64.png", "Messen", "Messen") }}

  <p>Mit der Schaltfläche <u>Messen</u> können die Maße des Modells überprüft werden.</p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/ControlButton.png", "", "Steuerschaltfläche", width=64) }}

<p>Für die einzelnen Dachflächen ermöglicht sie:</p>

<ul>
  <li><p>Festlegung des Dachaufbaus – Typ der Eindeckung und Sekundärkonstruktion.</p></li>
  <li><p>Erzeugung eines Stückverzeichnisses der Dacheindeckung und eine Generierung des Grundrisses der Dachkonstruktion mit allen Schichten als bearbeitbare Zeichnung.</p></li>
</ul>

/// details | Funktionen, die über die Steuerschaltfläche zugänglich sind
{{ include_md("__sub_Sheeting_RoofPlane.md") }}
///



<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/EditButton.png", "", "Bearbeitungsschaltfläche", width=64) }}

<p>Für die einzelnen Schichten des Dachaufbaus auf einer bestimmten Dachfläche ermöglicht sie:</p>

<ul>
  <li><p>Einstellung des Typs der Eindeckung oder der einzelnen Schichten der Sekundärkonstruktion einschließlich der Maße, der Verlegerichtung, sowie die Anpassung der Position und des Verlegewinkels.</p></li>
  <li><p>Generierung des Grundrisses der jeweiligen Schicht der Dachkonstruktion in Form einer bearbeitbaren Zeichnung.</p></li>
  <li><p>Für die Dacheindeckung kann ebenfalls ein Materialbericht mit den Dacheindeckungspositionen erstellt werden.</p></li>
</ul>

/// details | Funktionen, die über die Bearbeitungsschaltfläche zugänglich sind
{{ include_md("__sub_Sheeting_RoofLayer.md") }}
///


<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Fehlt Ihnen eine Eindeckung in der Galerie? Schreiben Sie uns, wir ergänzen sie.</h2>
<a href="mailto:jiri.podval@histruct.com?subject=Frage zum HiStruct Gebäudekonfigurator" class="btn">
  Ich möchte ergänzen
</a>

<!-- product: HiStruct Roofs -->