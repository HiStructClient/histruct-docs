---
sourceLang: cs
sourceHash: aee06f134419d1578c96aa0cec553120
autoTranslated: true
---

<h1>Sheeting &gt; Building</h1>

<p>The <u><i>Sheeting &gt; Building</i></u> menu allows you to set the roof composition type, roof covering type, and dimensions of the secondary roof structure.</p>

<p>For walls, you can set the wall production type and wall material.</p>

<p><b>Settings and modifications of individual roof and wall planes can be made using the <u>Control and Edit buttons</u>.</b></p>

<hr class="main">

{{ box_icon("img/RoofSketchIcon64x64.png", "Roof", "Roof") }}

<p>The <u>Roof</u> button allows you to set the roof composition type, roof covering type, and dimensions of the secondary roof structure for the entire roof.</p>

<hr class="main">

{{ box_icon("img/WallIcon64x64.png", "Walls #.#", "Walls #.#") }}

<p>The <u>Walls #.#</u> button allows you to set the wall production type, the method of laying sheeting rows, and plinth height.</p>

<hr class="main">

{{ box_icon("img/ControlButton.png", "", "Control Button", width=64) }}

<p><b><u>For individual roof planes, it allows:</u></b></p>
<ul>
  <li><p>Setting the type of roof composition – type of covering and secondary structure.</p></li>
  <li><p>Generating a bill of materials with roof covering items and generating a layout of the roof structure with all layers in the form of an editable drawing.</p></li>
</ul>

/// details | Functions for ROOF available via the Control Button
{{ include_md("__sub_Sheeting_RoofPlane.md") }}
///

<p><b><u>For individual wall planes, it allows:</u></b></p>
<ul>
<li><p>Setting the wall production type, the method of laying sheeting rows, plinth height, or color scheme.</p></li>
<li><p>Setting the wall material and editing individual sheeting layers according to the wall production type.</p></li>
<li><p>Generating a bill of materials with sheeting items and an elevation view of the wall in the form of an editable drawing.</p></li>
</ul>

/// details | Functions for WALL available via the Control Button
{{ include_md("__sub_Sheeting_WallPlane.md") }}
///

<hr class="main">

{{ box_icon("img/EditButton.png", "", "Edit Button", width=64) }}

<p><b><u>For individual layers of the roof composition on a given roof plane, it allows:</u></b></p>
<ul>
  <li><p>Setting the type of covering or individual secondary structure layers including dimensions, installation direction, as well as modifying the position and installation angle.</p></li>
  <li><p>Generating the layout of the respective layer of the roof structure in the form of an editable drawing.</p></li>
  <li><p>For the roof covering, it is also possible to generate a material report with roof covering items.</p></li>
</ul>

/// details | Functions for ROOF available via the Edit Button
{{ include_md("__sub_Sheeting_RoofLayer.md") }}
///

<hr class="main">

<p><b><u>For individual sheeting composition layers on a given wall plane, it allows:</u></b></p>
<ul>
<li><p>Setting the sheeting material or individual layers of the secondary structure or plinth, also setting the installation direction, as well as modifying the position and installation angle of the sheeting.</p></li>
<li><p>Editing the sheeting color scheme, extending sheeting overhangs.</p></li> 
<li><p>Generating a drawing of the respective wall structure layer in the form of an editable drawing.</p></li>
<li><p>For the exterior sheeting layer, it is also possible to generate a material report with items.</p></li>
</ul>

/// details | Functions for WALL available via the Edit Button
{{ include_md("__sub_Sheeting_WallLayer.md") }}
///

<hr class="main">

<h2>Are you missing a roof covering in the gallery? Let us know, we will add it.</h2>
<a href="mailto:jiri.podval@histruct.com?subject=Inquiry about HiStruct Building Configurator" class="btn">
  I want to add
</a>

<!-- product: HiStruct Building Configurator -->