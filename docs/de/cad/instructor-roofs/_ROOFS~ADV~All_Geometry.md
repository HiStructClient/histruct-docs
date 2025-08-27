---
sourceLang: cs
sourceHash: e733c2571e713bc52b4d334534abe976
autoTranslated: true
---

# Geometrie
<p>Ermöglicht das Ändern der geometrischen Parameter des Modells, also der Abmessungen des Gebäudes und des Dachs einschließlich Neigung und Überstände.</p>

<p>Der Inhalt des Menüs <u><i>Geometrie</i></u> unterscheidet sich je nach verwendetem Vorlagentyp. HiStruct Roofs arbeitet derzeit mit folgenden Vorlagentypen:</p>

<ul>
<li>NACH FLÄCHEN MODELLIEREN</li>
<li>AUS OBJ GENERIEREN</li>
<li>AUS KONTUR GENERIEREN</li>
<li>AUS VORDEFINIERTER FORM GENERIEREN</li>
</ul>

<hr class="main">

{{ box_icon("img/StartRosolAreas_thumbnail.128x128.png", "", "NACH FLÄCHEN MODELLIEREN") }}

///// details | Ich verwende die Vorlage NACH FLÄCHEN MODELLIEREN
{{ include_md("_ROOFS~ADV~ByPlanes_Geometry.md") }}
/////

<hr class="main">

{{ box_icon("img/StartRosolObj_thumbnail.128x128.png", "", "AUS OBJ GENERIEREN") }}

///// details | Ich verwende die Vorlage AUS OBJ GENERIEREN
{{ include_md("_ROOFS~ADV~FromOBJ_Geometry.md") }}
/////

<hr class="main">

{{ box_icon("img/StartRosol_thumbnail.128x128.png", "", "AUS KONTUR GENERIEREN") }}

///// details | Ich verwende die Vorlage AUS KONTUR GENERIEREN
{{ include_md("_ROOFS~ADV~FromOutline_Geometry.md") }}
/////

<hr class="main">

{{ box_icons([
  ("img/RooferRectangleShed_thumbnail.128x128.png", ""),
  ("img/RooferRectangleClippedHip_thumbnail.128x128.png", ""),
  ("img/RooferLshapeGable2_thumbnail.128x128.png", "")
], "AUS VORDEFINIERTER FORM GENERIEREN") }}

///// details | Ich verwende die Vorlage AUS VORDEFINIERTER FORM GENERIEREN
{{ include_md("_ROOFS~ADV~FromShape_Geometry.md") }}
/////

<hr class="main">

<!-- product: HiStruct Roofs  -->