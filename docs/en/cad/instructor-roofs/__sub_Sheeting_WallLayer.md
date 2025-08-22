---
sourceLang: cs
sourceHash: 042d509600a0ea425ce7210fa876140e
autoTranslated: true
---

# Cladding &gt; Wall Layer

<p>In the <u><i>Cladding &gt; Wall Layer</i></u> menu accessible via the <u>Edit button</u>, it is possible to set, for individual layers of the cladding assembly on the specified wall plane:</p>

<ul>
<li><p>Setting the material of the cladding or individual layers of the secondary structure or plinth, as well as setting the laying direction, as well as editing the position and angle of the cladding placement.</p></li>
<li><p>Editing the cladding color scheme, extending the cladding overhangs.</p></li> 
<li><p>Generating a drawing of the relevant layer of the wall structure in the form of an editable drawing.</p></li>
<li><p>For the external cladding layer, it is also possible to generate a material statement with items.</p></li>
</ul>

<p>
  The available settings differ depending on the type of cladding material, secondary structure or plinth.
</p>

<p>
  <b><u>Control and Edit buttons</u> only modify the properties of the wall structure on the selected wall plane.</b>
</p>

<hr class="main">

{{ box_icons([
  ("img/TilingEditIcon64x64.png", "Laying"),
  ("img/TilingEditIcon64x64.png", "Grid"),
  ("img/TilingEditIcon64x64.png", "Frames"),
  ("img/TilingEditIcon64x64.png", "Layer")
], "Laying / Grid / Frames / Layer") }}

<h3>Laying</h3>

<ul>
<li><p>
  The <u>Laying</u> button allows you to select the material for the given wall layer from a prepared product gallery.
  </p></li>
<li><p>It also allows you to set the direction, angle, and offset of the cladding elements from the edge of the building.
</p></li>

<li><p>
  After clicking on the selected wall cladding element, it is possible to extend the element at the beginning and end by the selected length, or edit its color.
  It also allows you to set the overhangs and color of the individual cladding pieces.
</p></li>

<li><p>
{{ box_icon("img/AddOffsetButton.png", "", "Overhang", width=50) }}
</p></li>

<ul><li><p>
  The <u>Overhang</u> button in the model allows you to set the wall cladding overhang over the specified building edge.
</p></li></ul>
</ul>

<h3>Grid</h3>

<ul>
<li><p>The <u>Grid</u> button allows you to select the material for the given cladding structure layer from a prepared product gallery; here you can select the required batten cross-section including their spacing.
</p></li>

<li><p>It also allows you to set the spacing between the lathing elements, adjust the angle of the laid lath layer, and the offset of the first element from the building edge.
</p></li>
</ul>

<h3>Frames</h3>

<ul>
<li><p>
  The <u>Frames</u> button allows you to select the material for the given layer of the cladding structure from a prepared product gallery; here you can select the required cross-section for the secondary structure elements.
  </p></li>
</ul>

<h3>Layer</h3>
<ul>
<li><p>
  ...Functionality of the <u>Layer</u> button is being prepared for a future version of the program...
</p></li>
</ul>

<hr class="main">

<p>
{{ box_icon("img/ColorsIcon64x64.png", "Colors", "Colors") }}
</p>
<p>The <u>Colors</u> button allows you to set the color scheme for the given wall plane; according to the scheme type, it is possible to set the color for selected wall panels.</p>
<p>Wall panels are numbered from 0.</p>

<hr class="main">

{{ box_icon("img/BomIcon64x64.png", "BOM", "BOM") }}

<p>
  Generates a list of items for the selected layer of the wall structure assembly for the relevant wall plane into a clear table.
</p>

<p>
Functionality may not be temporarily available for all cladding assembly layers.
</p>

<hr class="main">

{{ box_icon("img/MainDrawings64x64.png", "Drawing", "Drawing") }}

<p>
  Generates a drawing of the specified wall plane layer. The drawing can be further edited, supplemented with labels and dimensions.
</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Measurement", "Measurement") }}

<p>
  The <u>Measurement</u> button allows you to check the model dimensions.
</p>