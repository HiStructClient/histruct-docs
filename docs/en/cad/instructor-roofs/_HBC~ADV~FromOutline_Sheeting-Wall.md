---
sourceLang: cs
sourceHash: 10f893b86eb76e4bbcf1ddc6aecb3b1e
autoTranslated: true
---

# Sheeting &gt; Wall

<p>In the <u><i>Sheeting &gt; Wall</i></u> menu, you can set the wall manufacturing type, the arrangement of the cladding rows, and the plinth height. You can also modify individual cladding layers here.</p>

<p>For each wall, it is also possible to adjust the color scheme and materials of the individual cladding layers. Here you can also generate a bill of materials with cladding items or a wall view in the form of an editable drawing.</p>

<p><b>Settings and adjustments of individual wall planes can be performed using <u>Control and Edit buttons</u>.</b></p>

<ul>
  <li><p>Through the <u>Control buttons</u> in the model, you can set the wall cladding type, the type and dimensions of the secondary structure elements separately for each wall plane, as well as create material takeoffs and wall construction drawings.</p></li>
  <li><p>Through the <u>Edit buttons</u> in the model, you can edit the properties of individual layers of the wall construction on a specified wall plane, as well as create material takeoffs and drawings of the relevant layers of the wall structure.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/EditPropertiesIcon64x64.png", "Layout", "Layout") }}

<p>The <u>Layout</u> button allows you to set the manufacturing type, arrangement of cladding rows, and plinth height.</p>

<hr class="main">

<h2>Wall Sheeting Layer Settings</h2>

<p>The configuration of the roof structure is done using the buttons:</p>

<ul>
  <li><p><u>Top layer</u></p></li>
  <li><p><u>Inner layers</u></p></li>
  <li><p><u>Plinth</u></p></li>
</ul>

<p>
For some cladding types, the <u>Inner layers</u> button may be hidden by default, and the secondary structure for such cladding type is not generated.
</p>

<p>The <u>Plinth</u> button is available depending on the wall manufacturing type set in <u>Layout</u>.</p>

<hr>

{{ box_icon("img/RoofTopLayer_64x64.png", "Top layer", "Top layer", fontSize=10) }}
<ul>
  <li><p>Allows you to select cladding material from a prepared product gallery.</p></li>
</ul>

<hr>

{{ box_icon("img/RoofLowerLayers_64x64.png", "Inner layers", "Inner layers", fontSize=10) }}
<ul>
  <li><p>Allows you to choose the secondary structural composition type from a prepared product gallery.</p></li>
</ul>

<hr>

{{ box_icon("img/WallPartLayerIcon64x64.png", "Plinth", "Plinth", fontSize=10) }}
<ul>
  <li><p>Allows you to select plinth material from a prepared product gallery.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/ControlButton.png", "", "Control button", width=64) }}

<p><b><u>For individual roof planes, it allows:</u></b></p>
<ul>
  <li><p>Setting the roof assembly type - type of roofing and secondary structure.</p></li>
  <li><p>Generating a bill of materials for roofing items and also generating a roof layout with all layers in the form of an editable drawing.</p></li>
</ul>

/// details | Features for ROOF available via Control button
{{ include_md("__sub_Sheeting_RoofPlane.md") }}
///


<p><b><u>For individual wall planes, it allows:</u></b></p>
<ul>
<li><p>Setting the wall manufacturing type, cladding row arrangement method, plinth height, or color scheme.</p></li>
<li><p>Setting the wall material and adjusting individual cladding layers according to the wall manufacturing type.</p></li>
<li><p>Generating a bill of materials for the wall cladding items and a wall view in the form of an editable drawing.</p></li>
</ul>

/// details | Features for WALL available via Control button
{{ include_md("__sub_Sheeting_WallPlane.md") }}
///


<hr class="main">

{{ box_icon("img/EditButton.png", "", "Edit button", width=64) }}

<p><b><u>For individual roof assembly layers on a specified roof plane, it allows:</u></b></p>
<ul>
  <li><p>Setting the type of roofing or individual layers of the secondary structure, including dimensions, laying direction, as well as editing the position and laying angle.</p></li>
  <li><p>Generating a layout of the relevant roof structure layer in the form of an editable drawing.</p></li>
  <li><p>For the roof covering, it is also possible to generate a material takeoff with the roof cover items.</p></li>
</ul>

/// details | Features for ROOF available via Edit button
{{ include_md("__sub_Sheeting_RoofLayer.md") }}
///


<hr class="main">


<p><b><u>For individual cladding layers on a specified wall plane, it allows:</u></b></p>
<ul>
<li><p>Setting the cladding material or individual layers of the secondary structure or plinth, as well as setting the laying direction, and adjusting the position and cladding laying angle.</p></li>
<li><p>Editing the cladding color scheme, extending cladding overhangs.</p></li> 
<li><p>Generating a drawing of the relevant wall construction layer in the form of an editable drawing.</p></li>
<li><p>For the external cladding layer, it is also possible to generate a material takeoff with items.</p></li>
</ul>

/// details | Features for WALL available via Edit button
{{ include_md("__sub_Sheeting_WallLayer.md") }}
///


<hr class="main">

<h2>Missing a specific covering in the gallery? Write to us, and we will add it.</h2>
<a href="mailto:jiri.podval@histruct.com?subject=Inquiry about HiStruct Building Configurator" class="btn">
  I want to add
</a>

<!-- product: HiStruct Building Configurator -->