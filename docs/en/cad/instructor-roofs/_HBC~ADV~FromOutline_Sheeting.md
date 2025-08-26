---
sourceLang: cs
sourceHash: e5720aab134340f47e39cf38a5560734
autoTranslated: true
---

# Sheeting

<p>The <u><i>Sheeting</i></u> menu allows you to set the type of roof composition, the type of roofing material, and the dimensions of the secondary roof structure.</p>
<p>For walls, you can set the wall production type and the material of each wall layer.</p>
<p><b>Settings and adjustments of individual roof and wall planes can be made using the <u>Control and Edit Buttons</u>.</b></p>

<hr class="main">

{{ box_icon("img/RoofSketchIcon64x64.png", "Roof", "Roof") }}

<p>The <u>Roof</u> button allows you to set the type of roof composition, type of roofing material, and dimensions of the secondary roof structure for the entire roof.</p>

<hr class="main">

{{ box_icon("img/WallIcon64x64.png", "Walls #.#", "Walls #.#") }}

<p>The <u>Walls #.#</u> button allows you to set the wall manufacturing type, cladding layout method, and plinth height.</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Anotate", "Anotate") }}

<p>The <u>Anotate</u> button allows you to add any floor plan dimensions to the model.</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Measure", "Measure") }}

<p>The <u>Measure</u> button allows you to check the dimensions of the model.</p>

<hr class="main">

{{ box_icon("img/ControlButton.png", "", "Control button", width=64) }}

<p><b><u>For individual roof planes, it allows:</u></b></p>
<ul>
  <li><p>Setting the type of roof composition – type of roofing and secondary structure.</p></li>
  <li><p>Generation of a bill of materials with roofing items, as well as creating a roof structure plan with all layers in the form of an editable drawing.</p></li>
</ul>

/// details | Functions for ROOF available via Control Button
{{ include_md("__sub_Sheeting_RoofPlane.md") }}
///

<p><b><u>For individual wall planes, it allows:</u></b></p>
<ul>
<li><p>Setting the wall manufacturing type, cladding layout method, plinth height, or color scheme.</p></li>
<li><p>Setting the wall material and editing individual cladding layers according to wall type.</p></li>
<li><p>Generation of a bill of materials with wall cladding items and an elevation view in the form of an editable drawing.</p></li>
</ul>

/// details | Functions for WALL available via Control Button
{{ include_md("__sub_Sheeting_WallPlane.md") }}
///

<hr class="main">

{{ box_icon("img/EditButton.png", "", "Edit button", width=64) }}

<p><b><u>For individual roof composition layers on a specified roof plane, it allows:</u></b></p>
<ul>
  <li><p>Setting the type of roofing or individual secondary structure layers, including dimensions, installation direction, as well as adjusting position and installation angle.</p></li>
  <li><p>Generation of a footprint drawing of the relevant roof structure layer in an editable format.</p></li>
  <li><p>For roofing layers, it is also possible to generate a material report with roofing items.</p></li>
</ul>

/// details | Functions for ROOF available via Edit Button
{{ include_md("__sub_Sheeting_RoofLayer.md") }}
///

<hr class="main">

<p><b><u>For individual cladding layers on a specified wall plane, it allows:</u></b></p>
<ul>
<li><p>Setting the cladding material or each secondary structure layer or plinth, setting the installation direction, and adjusting the position and installation angle of the cladding.</p></li>
<li><p>Editing the color scheme of the cladding, extending the cladding overhangs.</p></li> 
<li><p>Generation of a drawing of the relevant wall structure layer in an editable format.</p></li>
<li><p>For the external cladding layer, you can also generate a material report with items.</p></li>
</ul>

/// details | Functions for WALL available via Edit Button
{{ include_md("__sub_Sheeting_WallLayer.md") }}
///

<hr class="main">

<h2>Is there a roofing material missing in the gallery? Let us know and we’ll add it.</h2>
<a href="mailto:jiri.podval@histruct.com?subject=Question about HiStruct Building Configurator" class="btn">
  I want to add
</a>

<!-- product: HiStruct Building Configurator -->