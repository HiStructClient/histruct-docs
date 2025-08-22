---
sourceLang: cs
sourceHash: 5579a628892f8a318c490badc50d300a
autoTranslated: true
---

# Cladding &gt; Roof

<p>In the <u><i>Cladding &gt; Roof</i></u> menu, it is possible to set the type of roof composition, the type of roofing, and the dimensions of the secondary roof structure.</p>

<p>Within individual roof planes, it is also possible to change the direction of laying the roofing, generate a bill of materials with roofing items, and also generate a plan of the roof structure in the form of an editable drawing.</p>

<p><b>Settings and adjustments for individual roof planes can be made using <u>Control and Edit buttons</u>.</b></p>

<ul>
  <li><p>Via the <u>Control buttons</u> in the model, you can set the type of roof composition, roofing type, and dimensions of secondary construction elements separately for each roof plane. They also allow you to create material reports and drawings of the roof structure.</p></li>
  <li><p>Via the <u>Edit buttons</u> in the model, you can edit the properties of individual layers of the roof structure on a selected roof plane. They also allow you to create material reports and drawings for the relevant layers of the roof structure.</p></li>
</ul>

<hr class="main">

<h2>Settings of Roof Structure Layers</h2>
<p>The composition setup of the roof structure is done using the following buttons:</p>

<ul>
  <li><p><u>Top layer</u></p></li>
  <li><p><u>Lower layers</u></p></li>
</ul>

<p>
For some roofings, the <u>Lower layers</u> button may be hidden by default, and the secondary structure for such roofing is then not generated.
</p> 

<hr>

{{ box_icon("img/RoofTopLayer_64x64.png", "Top layer", "Top layer", fontSize=10) }}
<ul>
  <li><p>Allows you to select a roofing material from a prepared gallery of products.</p></li>
</ul>

<hr>

{{ box_icon("img/RoofLowerLayers_64x64.png", "Lower layers", "Lower layers", fontSize=10) }}
<ul>
  <li><p>Allows you to choose the type of secondary structure composition from a prepared product gallery.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/ControlButton.png", "", "Control button", width=64) }}

<p><b><u>For individual roof planes, allows:</u></b></p>
<ul>
  <li><p>Setting the type of roof composition – roofing type and secondary structure.</p></li>
  <li><p>Generating a bill of materials with roofing items and also generating a plan of the roof structure with all layers in the form of an editable drawing.</p></li>
</ul>

/// details | Functions for ROOF available via Control button
{{ include_md("__sub_Sheeting_RoofPlane.md") }}
///


<p><b><u>For individual wall planes, allows:</u></b></p>
<ul>
<li><p>Setting the type of wall production, the method of laying cladding rows, plinth height, or color scheme.</p></li>
<li><p>Setting the wall material and editing individual cladding layers according to the type of wall production.</p></li>
<li><p>Generating a bill of materials with wall cladding items and an elevation of the wall in the form of an editable drawing.</p></li>
</ul>

/// details | Functions for WALL available via Control button
{{ include_md("__sub_Sheeting_WallPlane.md") }}
///


<hr class="main">

{{ box_icon("img/EditButton.png", "", "Edit button", width=64) }}

<p><b><u>For individual layers of the roof composition on a specified roof plane, allows:</u></b></p>
<ul>
  <li><p>Setting the type of roofing or individual layers of the secondary structure including dimensions, installation direction, as well as adjusting position and installation angle.</p></li>
  <li><p>Generating a plan of the relevant layer of the roof structure in the form of an editable drawing.</p></li>
  <li><p>For roofing, it is also possible to generate a material report with roofing items.</p></li>
</ul>

/// details | Functions for ROOF available via Edit button
{{ include_md("__sub_Sheeting_RoofLayer.md") }}
///


<hr class="main">


<p><b><u>For individual layers of the cladding composition on a specified wall plane, allows:</u></b></p>
<ul>
<li><p>Setting the cladding material or the individual layers of the secondary structure or plinth, as well as setting the installation direction, and also adjusting the position and installation angle of the cladding.</p></li>
<li><p>Adjusting the cladding color scheme, extending the cladding overhangs.</p></li> 
<li><p>Generating a drawing of the relevant layer of the wall structure in the form of an editable drawing.</p></li>
<li><p>For the outer cladding layer, it is also possible to generate a material report with items.</p></li>
</ul>

/// details | Functions for WALL available via Edit button
{{ include_md("__sub_Sheeting_WallLayer.md") }}
///


<hr class="main">

<h2>Is there a roofing you're missing in the gallery? Let us know and we'll add it.</h2>
<a href="mailto:jiri.podval@histruct.com?subject=Question about HiStruct building configurator" class="btn">
  I want to add
</a>

<!-- product: HiStruct Roofs -->