---
sourceLang: cs
sourceHash: 778ecba4d7239466d1570dded14f15d9
autoTranslated: true
---

# Sheeting &gt; Wall

<p>In the <u><i>Sheeting > Wall</i></u> menu, you can set the wall production type, the arrangement of cladding rows, and the plinth height. It is also possible to modify individual cladding layers here.</p>

<p>For individual walls, you can also modify the color scheme and materials for each cladding layer. It is also possible to generate a bill of materials for cladding items or a view of the wall in the form of an editable drawing.</p>

<p><b>Settings and modifications for individual wall planes can be made using the <u>Control and Edit buttons</u>.</b></p>

<ul>
  <li><p>Through the <u>Control buttons</u> in the model, you can set the cladding type of the wall, the type and dimensions of secondary structure elements separately for each wall plane; they also allow material reports and wall structure drawings to be created.</p></li>
  <li><p>Through the <u>Edit buttons</u> in the model, you can edit the properties of individual wall construction layers on a given wall plane; they also allow the creation of material reports and drawings for the respective wall structure layers.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/EditPropertiesIcon64x64.png", "Layout", "Layout") }}

<p>The <u>Layout</u> button allows you to set the production type, arrangement of cladding rows, and the plinth height.</p>

<hr class="main">

<h2>Setting Wall Sheeting Layers</h2>

<p>Setting up the composition of the wall structure is done using the following buttons:</p>

<ul>
  <li><p><u>Top Layer</u></p></li>
  <li><p><u>Inner Layers</u></p></li>
  <li><p><u>Plinth</u></p></li>
</ul>

<p>
For some cladding types, the <u>Inner Layers</u> button may be hidden by default, and the secondary structure then is not generated for that cladding type.
</p>

<p>The <u>Plinth</u> button is available depending on the wall production type set in <u>Layout</u>.

<hr>

{{ box_icon("img/RoofTopLayer_64x64.png", "Top Layer", "Top Layer", fontSize=10) }}
<ul>
  <li><p>Allows you to select the cladding material from a prepared product gallery.</p></li>
</ul>

<hr>

{{ box_icon("img/RoofLowerLayers_64x64.png", "Inner Layers", "Inner Layers", fontSize=10) }}
<ul>
  <li><p>Allows you to select the type of secondary structure composition from a prepared product gallery.</p></li>
</ul>

<hr>

{{ box_icon("img/WallPartLayerIcon64x64.png", "Plinth", "Plinth", fontSize=10) }}
<ul>
  <li><p>Allows you to select the plinth material from a prepared product gallery.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/ControlButton.png", "", "Control button", width=64) }}

<p><b><u>For individual roof planes, it allows:</u></b></p>
<ul>
  <li><p>Setting the composition type of the roof—covering type and secondary structure type.</p></li>
  <li><p>Generating a bill of materials with roof covering items and also generating a plan of the roofing structure with all layers in the form of an editable drawing.</p></li>
</ul>

/// details | Functions for ROOF available via Control button
{{ include_md("__sub_Sheeting_RoofPlane.md") }}
///

<p><b><u>For individual wall planes, it allows:</u></b></p>
<ul>
<li><p>Setting the wall production type, method of arranging cladding rows, plinth height, or color scheme.</p></li>
<li><p>Setting the wall material and editing individual cladding layers according to the wall production type.</p></li>
<li><p>Generating a bill of materials with cladding items for the wall and a wall view in the form of an editable drawing.</p></li>
</ul>

/// details | Functions for WALL available via Control button
{{ include_md("__sub_Sheeting_WallPlane.md") }}
///

<hr class="main">

{{ box_icon("img/EditButton.png", "", "Edit button", width=64) }}

<p><b><u>For individual roofing layers on a given roof plane, it allows:</u></b></p>
<ul>
  <li><p>Setting the type of roofing or individual secondary structure layers including dimensions, direction of laying, as well as editing the position and laying angle.</p></li>
  <li><p>Generating a plan of the respective roofing layer in the form of an editable drawing.</p></li>
  <li><p>For roof covering, it is also possible to generate a material report with roofing items.</p></li>
</ul>

/// details | Functions for ROOF available via Edit button
{{ include_md("__sub_Sheeting_RoofLayer.md") }}
///

<hr class="main">

<p><b><u>For individual cladding composition layers on a given wall plane, it allows:</u></b></p>
<ul>
<li><p>Setting the cladding material or individual secondary structure or plinth layers, also setting the direction of installation, as well as adjusting the position and laying angle of the cladding.</p></li>
<li><p>Modification of the cladding color scheme, extension of cladding overhangs.</p></li>
<li><p>Generating a drawing of the respective wall structure layer in the form of an editable drawing.</p></li>
<li><p>For the outer cladding layer, it is also possible to generate a material report with items.</p></li>
</ul>

/// details | Functions for WALL available via Edit button
{{ include_md("__sub_Sheeting_WallLayer.md") }}
///

<hr class="main">

<h2>Is there a covering missing in the gallery? Write to us and we'll add it.</h2>
<a href="mailto:jiri.podval@histruct.com?subject=Question for HiStruct Building Configurator" class="btn">
  I want to add
</a>

<!-- product: HiStruct Building Configurator -->