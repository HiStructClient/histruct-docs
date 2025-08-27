---
sourceLang: cs
sourceHash: e733c2571e713bc52b4d334534abe976
autoTranslated: true
---

# Geometry
<p>Allows you to change the geometric parameters of the model, i.e., the dimensions of the building and the roof including slope and overhangs.</p>

<p>The content of the <u><i>Geometry</i></u> menu varies depending on the template used. HiStruct Roofs currently works with the following types of templates:</p>

<ul>
<li>MODEL BY PLANES</li>
<li>GENERATE FROM OBJ</li>
<li>GENERATE FROM OUTLINE</li>
<li>GENERATE FROM PREDEFINED SHAPE</li>
</ul>

<hr class="main">

{{ box_icon("img/StartRosolAreas_thumbnail.128x128.png", "", "MODEL BY PLANES") }}

///// details | I am using the MODEL BY PLANES template
{{ include_md("_ROOFS~ADV~ByPlanes_Geometry.md") }}
/////

<hr class="main">

{{ box_icon("img/StartRosolObj_thumbnail.128x128.png", "", "GENERATE FROM OBJ") }}

///// details | I am using the GENERATE FROM OBJ template
{{ include_md("_ROOFS~ADV~FromOBJ_Geometry.md") }}
/////

<hr class="main">

{{ box_icon("img/StartRosol_thumbnail.128x128.png", "", "GENERATE FROM OUTLINE") }}

///// details | I am using the GENERATE FROM OUTLINE template
{{ include_md("_ROOFS~ADV~FromOutline_Geometry.md") }}
/////

<hr class="main">

{{ box_icons([
  ("img/RooferRectangleShed_thumbnail.128x128.png", ""),
  ("img/RooferRectangleClippedHip_thumbnail.128x128.png", ""),
  ("img/RooferLshapeGable2_thumbnail.128x128.png", "")
], "GENERATE FROM PREDEFINED SHAPE") }}

///// details | I am using the GENERATE FROM PREDEFINED SHAPE template
{{ include_md("_ROOFS~ADV~FromShape_Geometry.md") }}
/////

<hr class="main">

<!-- product: HiStruct Roofs  -->