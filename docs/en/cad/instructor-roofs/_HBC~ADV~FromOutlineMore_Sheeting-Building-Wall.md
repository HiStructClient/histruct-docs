---
sourceLang: cs
sourceHash: 94138e5d9e621e884d631ddf800762df
autoTranslated: true
---

<h1>Cladding &gt; Building &gt; Wall</h1>

<p>In the <u><i>Cladding &gt; Building &gt; Wall</i></u> menu, it is possible to set the wall production type, cladding row layout, and plinth height. Here you can also edit individual cladding layers.</p>

<p>For individual walls, you can further edit the color scheme and materials of the individual cladding layers. You can also generate a bill of materials for cladding items or a view of the wall in the form of an editable drawing.</p>

<p><b>Settings and edits of individual wall planes can be done using the <u>Control and Edit buttons</u>.</b></p>

<ul>
  <li><p>Via the <u>Control buttons</u> in the model, you can set the wall cladding type, type and dimensions of secondary construction elements separately for each wall plane, and you can also create bills of materials and wall construction drawings.</p></li>
  <li><p>Via the <u>Edit buttons</u> in the model, you can edit the properties of individual layers of the wall construction on the specified wall plane, and you can also create bills of materials and drawings of the respective wall construction layers.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/EditPropertiesIcon64x64.png", "Layout", "Layout") }}

<p>The <u>Layout</u> button allows you to set the production type, cladding row layout, and plinth height.</p>

<hr class="main">

<h2>Wall Cladding Layer Settings</h2>

<p>The roof construction composition is set using the buttons:</p>

<ul>
  <li><p><u>Top layer</u></p></li>
  <li><p><u>Inner layers</u></p></li>
  <li><p><u>Plinth</u></p></li>
</ul>

<p>
For some types of cladding, the <u>Inner layers</u> button may be hidden by default, and the secondary structure for that cladding type will not be generated.
</p>

<p>The <u>Plinth</u> button is available depending on the wall production type set in <u>Layout</u>.

<hr>

{{ box_icon("img/RoofTopLayer_64x64.png", "Top layer", "Top layer", fontSize=10) }}
<ul>
  <li><p>Allows you to select the cladding material from a prepared product gallery.</p></li>
</ul>

<hr>

{{ box_icon("img/RoofLowerLayers_64x64.png", "Inner layers", "Inner layers", fontSize=10) }}
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
  <li><p>Setting the type of roof composition—type of covering and secondary structure.</p></li>
  <li><p>Generating a bill of materials with roof covering items and generating a plan of the roof construction with all layers in the form of an editable drawing.</p></li>
</ul>

/// details | Functions for ROOF available via Control button
{{ include_md("__sub_Sheeting_RoofPlane.md") }}
///

<p><b><u>For individual wall planes, it allows:</u></b></p>
<ul>
<li><p>Setting the wall production type, cladding row layout, plinth height, or color scheme.</p></li>
<li><p>Setting the wall material and editing the individual cladding layers according to the wall production type.</p></li>
<li><p>Generating a bill of materials for wall cladding items and a view of the wall in the form of an editable drawing.</p></li>
</ul>

/// details | Functions for WALL available via Control button
{{ include_md("__sub_Sheeting_WallPlane.md") }}
///

<hr class="main">

{{ box_icon("img/EditButton.png", "", "Edit button", width=64) }}

<p><b><u>For the individual composition layers of the roof on a given roof plane, it allows:</u></b></p>
<ul>
  <li><p>Setting the type of covering or individual layers of the secondary structure including dimensions, laying direction, and adjusting the position and laying angle.</p></li>
  <li><p>Generating a plan of the relevant roof construction layer in the form of an editable drawing.</p></li>
  <li><p>For the roof covering, it is also possible to generate a bill of materials with roof covering items.</p></li>
</ul>

/// details | Functions for ROOF available via Edit button
{{ include_md("__sub_Sheeting_RoofLayer.md") }}
///

<hr class="main">

<p><b><u>For individual cladding composition layers on a specified wall plane, it allows:</u></b></p>
<ul>
<li><p>Setting the cladding material or individual layers of the secondary structure or plinth, as well as setting the laying direction, and also adjusting the position and angle of the cladding laying.</p></li>
<li><p>Editing the cladding color scheme, extending the cladding overhangs.</p></li> 
<li><p>Generating a drawing of the relevant wall construction layer in the form of an editable drawing.</p></li>
<li><p>For the external cladding layer, it is also possible to generate a bill of materials with items.</p></li>
</ul>

/// details | Functions for WALL available via Edit button
{{ include_md("__sub_Sheeting_WallLayer.md") }}
///

<hr class="main">

<h2>Are you missing any roofing in the gallery? Write to us, and we will add it.</h2>
<a href="mailto:jiri.podval@histruct.com?subject=HiStruct Building Configurator Question" class="btn">
  I want to add
</a>

<!-- product: HiStruct Building Configurator -->