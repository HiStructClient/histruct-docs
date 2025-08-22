---
sourceLang: cs
sourceHash: 2435d71d16bbc9f8593a4230a60a7684
autoTranslated: true
---

# Cladding

<p>The <u><i>Cladding</i></u> menu allows you to set the roof assembly type, type of roofing, and dimensions of the secondary roof structure.</p>

<p>For walls, it is possible to set the wall production type and the material of each wall layer.</p>

<p><b>Settings and modifications of individual roof and wall planes can be performed using the <u>Control and Edit buttons</u>.</b></p>

<hr class="main">

{{ box_icon("img/DuoPitchBuildingIcon64x64.png", "Building #", "Building #") }}

<p>The <u>Building #</u> button is used to select one of the modeled objects.</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Annotation", "Annotation") }}

<p>The <u>Annotation</u> button allows you to add any floor plan dimensions to the model.</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Measuring", "Measuring") }}

<p>The <u>Measuring</u> button enables you to check the dimensions of the model.</p>

<hr class="main">

{{ box_icon("img/ControlButton.png", "", "Control button", width=64) }}

<p><b><u>For individual roof planes, allows:</u></b></p>
<ul>
  <li><p>Setting the type of roof assembly – the type of roofing and secondary structure.</p></li>
  <li><p>Generating a bill of materials with roofing items and generating a floor plan of the roof structure with all layers as an editable drawing.</p></li>
</ul>

/// details | Functions for ROOF available via Control button
{{ include_md("__sub_Sheeting_RoofPlane.md") }}
///


<p><b><u>For individual wall planes, allows:</u></b></p>
<ul>
<li><p>Setting the type of wall production, method of arranging cladding rows, plinth height, or color scheme.</p></li>
<li><p>Setting the wall material and editing the individual cladding layers according to the wall production type.</p></li>
<li><p>Generating a bill of materials with wall cladding items and an elevation of the wall as an editable drawing.</p></li>
</ul>

/// details | Functions for WALL available via Control button
{{ include_md("__sub_Sheeting_WallPlane.md") }}
///


<hr class="main">

{{ box_icon("img/EditButton.png", "", "Edit button", width=64) }}

<p><b><u>For individual roof assembly layers on a specified roof plane, allows:</u></b></p>
<ul>
  <li><p>Setting the type of roofing or the individual layers of secondary structure, including dimensions, laying direction, as well as editing the position and laying angle.</p></li>
  <li><p>Generating a floor plan of the respective roof structure layer as an editable drawing.</p></li>
  <li><p>For the roofing, it is also possible to generate a material report with roofing items.</p></li>
</ul>

/// details | Functions for ROOF available via Edit button
{{ include_md("__sub_Sheeting_RoofLayer.md") }}
///


<hr class="main">


<p><b><u>For individual cladding assembly layers on a specified wall plane, allows:</u></b></p>
<ul>
<li><p>Setting the cladding material or individual layers of secondary structure or plinth, further setting of laying direction, and also editing the position and laying angle of the cladding.</p></li>
<li><p>Editing the cladding color scheme, extending cladding overhangs.</p></li> 
<li><p>Generating a drawing of the respective wall structure layer as an editable drawing.</p></li>
<li><p>For the exterior cladding layer, it is also possible to generate a material report with items.</p></li>
</ul>

/// details | Functions for WALL available via Edit button
{{ include_md("__sub_Sheeting_WallLayer.md") }}
///


<hr class="main">

<h2>Is there any roofing missing from the gallery? Write to us, we will add it.</h2>
<a href="mailto:jiri.podval@histruct.com?subject=Query regarding HiStruct building configurator" class="btn">
  I want to add
</a>

<!-- product: HiStruct Building Configurator -->