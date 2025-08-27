
# Geometrie
<p>Umožňuje měnit geometrické parametry modelu, tedy rozměry budovy a střechy včetně sklonu a přesahů.</p>

<p>Obsah menu <u><i>Geometrie</i></u> se liší podle typu použité šablony, HiStruct Roofs v tuto chvíli pracuje s těmito typy šablon:</p>

<ul>
<li>MODELOVAT PO PLOCHÁCH</li>
<li>GENEROVAT Z OBJ</li>
<li>GENEROVAT Z OBRYSU</li>
<li>GENEROVAT Z PŘEDDEFINOVANÉHO TVARU</li>
</ul>

<hr class="main">

{{ box_icon("img/StartRosolAreas_thumbnail.128x128.png", "", "MODELOVAT PO PLOCHÁCH") }}

///// details | Používám šablonu MODELOVAT PO PLOCHÁCH
{{ include_md("_ROOFS~ADV~ByPlanes_Geometry.md") }}
/////

<hr class="main">

{{ box_icon("img/StartRosolObj_thumbnail.128x128.png", "", "GENEROVAT Z OBJ") }}

///// details | Používám šablonu GENEROVAT Z OBJ
{{ include_md("_ROOFS~ADV~FromOBJ_Geometry.md") }}
/////

<hr class="main">

{{ box_icon("img/StartRosol_thumbnail.128x128.png", "", "GENEROVAT Z OBRYSU") }}

///// details | Používám šablonu GENEROVAT Z OBRYSU
{{ include_md("_ROOFS~ADV~FromOutline_Geometry.md") }}
/////

<hr class="main">

{{ box_icons([
  ("img/RooferRectangleShed_thumbnail.128x128.png", ""),
  ("img/RooferRectangleClippedHip_thumbnail.128x128.png", ""),
  ("img/RooferLshapeGable2_thumbnail.128x128.png", "")
], "GENEROVAT Z PŘEDDEFINOVANÉHO TVARU") }}

///// details | Používám šablonu GENEROVAT Z PŘEDDEFINOVANÉHO TVARU
{{ include_md("_ROOFS~ADV~FromShape_Geometry.md") }}
/////

<hr class="main">

<!-- product: HiStruct Roofs  -->
