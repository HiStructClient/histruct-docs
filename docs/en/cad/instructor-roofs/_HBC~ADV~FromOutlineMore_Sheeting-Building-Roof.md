---
sourceLang: cs
sourceHash: 729c1e79688b11ea6235bf488f077974
autoTranslated: true
---

<h1>Cladding &gt; Building &gt; Roof</h1>

<p>In the <u><i>Cladding &gt; Building &gt; Roof</i></u> menu, you can set the roof composition type, the type of roofing, and the dimensions of the secondary roof structure.</p>

<p>Within each individual roof plane, you can also change the direction of roofing layout, generate a bill of materials for the roofing items, and generate a roof structure floor plan in the form of an editable drawing.</p>

<p><b>The settings and adjustments of individual roof planes can be made using <u>Control and Edit buttons</u>.</b></p>

<ul>
  <li><p>With <u>Control buttons</u> in the model, you can set the type of roof composition, the type of roofing, and the dimensions of the secondary structure elements separately for each roof plane; they also allow you to create material reports and roof structure drawings.</p></li>
  <li><p>With <u>Edit buttons</u> in the model, you can edit the properties of individual roof structure layers on a specified roof plane; they also allow you to create material reports and drawings of the relevant layers of the roof structure.</p></li>
</ul>

<hr class="main">

<h2>Roof Structure Layer Settings</h2>
<p>The roof structure composition is set using the buttons:</p>

<ul>
  <li><p><u>Top layer</u></p></li>
  <li><p><u>Lower layers</u></p></li>
</ul>

<p>
For some roof coverings, the <u>Lower layers</u> button may be hidden by default, and the secondary structure is not generated for such roofing.
</p>

<hr>

{{ box_icon("img/RoofTopLayer_64x64.png", "Top layer", "Top layer", fontSize=10) }}
<ul>
  <li><p>Allows you to select roofing from a prepared product gallery.</p></li>
</ul>

<hr>

{{ box_icon("img/RoofLowerLayers_64x64.png", "Lower layers", "Lower layers", fontSize=10) }}
<ul>
  <li><p>Allows you to select the type of secondary structure composition from a prepared product gallery.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/ControlButton.png", "", "Control button", width=64) }}

<p><b><u>For each roof plane, it allows:</u></b></p>
<ul>
  <li><p>Setting the roof composition type – roofing type and secondary structure.</p></li>
  <li><p>Generating a bill of materials for roofing items, as well as generating a plan view of the roof structure with all layers in the form of an editable drawing.</p></li>
</ul>

/// details | Functions for ROOF available via Control button
{{ include_md("__sub_Sheeting_RoofPlane.md") }}
///


<p><b><u>For each wall plane, it allows:</u></b></p>
<ul>
<li><p>Setting the wall production type, the method of placing cladding rows, the height of the plinth, or the color scheme.</p></li>
<li><p>Setting the wall material and modifying individual cladding layers according to wall production type.</p></li>
<li><p>Generating a bill of materials for wall cladding items and a view of the wall in the form of an editable drawing.</p></li>
</ul>

/// details | Functions for WALL available via Control button
{{ include_md("__sub_Sheeting_WallPlane.md") }}
///


<hr class="main">

{{ box_icon("img/EditButton.png", "", "Edit button", width=64) }}

<p><b><u>For each layer of the roof composition on a specified roof plane, it allows:</u></b></p>
<ul>
  <li><p>Setting the type of roofing or individual layers of the secondary structure including dimensions, direction of laying, as well as adjusting position and laying angle.</p></li>
  <li><p>Generating a plan view of the relevant roof structure layer in the form of an editable drawing.</p></li>
  <li><p>For the roofing layer, it is also possible to generate a material report with roofing items.</p></li>
</ul>

/// details | Functions for ROOF available via Edit button
{{ include_md("__sub_Sheeting_RoofLayer.md") }}
///


<hr class="main">


<p><b><u>For each layer of the cladding composition on a specified wall plane, it allows:</u></b></p>
<ul>
<li><p>Setting the cladding material or individual layers of secondary structure or plinth, further setting the laying direction, as well as adjusting the position and laying angle of the cladding.</p></li>
<li><p>Modification of the cladding color scheme, extension of cladding overhangs.</p></li>
<li><p>Generating a drawing of the relevant wall structure layer in the form of an editable drawing.</p></li>
<li><p>For the exterior cladding layer, you can also generate a material report with items.</p></li>
</ul>

/// details | Functions for WALL available via Edit button
{{ include_md("__sub_Sheeting_WallLayer.md") }}
///


<hr class="main">

<h2>Are you missing some roofing material in the gallery? Let us know, we will add it.</h2>
<a href="mailto:jiri.podval@histruct.com?subject=Question about HiStruct Building Configurator" class="btn">
  I want to add
</a>

<!-- product: HiStruct Building Configurator -->