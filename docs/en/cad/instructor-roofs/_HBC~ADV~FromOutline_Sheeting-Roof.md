---
sourceLang: cs
sourceHash: 285d5dd1d31000d95a01ccc44836dd63
autoTranslated: true
---

# Cladding &gt; Roof

<p>In the <u><i>Cladding &gt; Roof</i></u> menu, you can set the type of roof assembly, the type of roofing material, and the dimensions of the secondary roof structure.</p>

<p>Within each individual roof plane, you can also change the direction of roofing installation, generate a bill of materials with roofing items, and generate a roof structure floor plan in the form of an editable drawing.</p>

<p><b>Settings and modifications for each roof plane can be made using <u>Control and Edit buttons</u>.</b></p>

<ul>
  <li><p>Via the <u>Control Buttons</u> in the model, you can set the type of roof assembly, type of roofing, and dimensions of secondary structure elements separately for each roof plane. They also allow you to create material schedules and roof construction drawings.</p></li>
  <li><p>Via the <u>Edit Buttons</u> in the model, you can edit the properties of individual layers of the roof structure on the designated roof plane. They also allow you to create material schedules and drawings of the respective layers of the roof structure.</p></li>
</ul>

<hr class="main">

<h2>Setting Roof Construction Layers</h2>
<p>The configuration of the roof construction layers is done using the buttons:</p>

<ul>
  <li><p><u>Top Layer</u></p></li>
  <li><p><u>Lower Layers</u></p></li>
</ul>

<p>
For some roofing types, the <u>Lower Layers</u> button may be hidden by default, and the secondary structure is then not generated for such roofing.
</p> 

<hr>

{{ box_icon("img/RoofTopLayer_64x64.png", "Top Layer", "Top Layer", fontSize=10) }}
<ul>
  <li><p>Allows you to select roofing from a prepared gallery of products.</p></li>
</ul>

<hr>

{{ box_icon("img/RoofLowerLayers_64x64.png", "Lower Layers", "Lower Layers", fontSize=10) }}
<ul>
  <li><p>Allows you to select the type of secondary structure assembly from a prepared gallery of products.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/ControlButton.png", "", "Control Button", width=64) }}

<p><b><u>For individual roof planes, allows:</u></b></p>
<ul>
  <li><p>Setting the type of roof assembly - type of roofing and secondary structure.</p></li>
  <li><p>Generating a bill of materials with roofing items, as well as generating a floor plan of the roof structure with all layers in the form of an editable drawing.</p></li>
</ul>

/// details | Functions for ROOF available via Control Button
{{ include_md("__sub_Sheeting_RoofPlane.md") }}
///

<p><b><u>For individual wall planes, allows:</u></b></p>
<ul>
<li><p>Setting the type of wall production, the arrangement of cladding rows, plinth height, or color scheme.</p></li>
<li><p>Setting the wall material and editing individual cladding layers according to the wall production type.</p></li>
<li><p>Generating a bill of materials with cladding items and generating a wall view in the form of an editable drawing.</p></li>
</ul>

/// details | Functions for WALL available via Control Button
{{ include_md("__sub_Sheeting_WallPlane.md") }}
///

<hr class="main">

{{ box_icon("img/EditButton.png", "", "Edit Button", width=64) }}

<p><b><u>For individual roof assembly layers on a specific roof plane, allows:</u></b></p>
<ul>
  <li><p>Setting the type of roofing or individual layers of the secondary structure, including their dimensions, laying direction, as well as position and laying angle adjustment.</p></li>
  <li><p>Generating a floor plan of the respective roof structure layer in the form of an editable drawing.</p></li>
  <li><p>For the roofing layer, it is also possible to generate a material schedule with roofing items.</p></li>
</ul>

/// details | Functions for ROOF available via Edit Button
{{ include_md("__sub_Sheeting_RoofLayer.md") }}
///

<hr class="main">


<p><b><u>For individual cladding assembly layers on a specific wall plane, allows:</u></b></p>
<ul>
<li><p>Setting the cladding material or individual layers of the secondary structure or plinth, as well as setting the laying direction and modifying the position and laying angle of the cladding.</p></li>
<li><p>Modifying the cladding color scheme, extending the cladding overhangs.</p></li> 
<li><p>Generating a drawing of the respective wall structure layer in the form of an editable drawing.</p></li>
<li><p>For the outer cladding layer, it is also possible to generate a material schedule with items.</p></li>
</ul>

/// details | Functions for WALL available via Edit Button
{{ include_md("__sub_Sheeting_WallLayer.md") }}
///

<hr class="main">

<h2>Is there a roofing material missing from the gallery? Let us know and we will add it.</h2>
<a href="mailto:jiri.podval@histruct.com?subject=Inquiry about HiStruct building configurator" class="btn">
  I want to add one
</a>

<!-- product: HiStruct Roofs -->