---
sourceLang: cs
sourceHash: 277492101b50ce1e43e86c7e11084d99
autoTranslated: true
---

# Sheeting &gt; Roof

<p>In the <u><i>Sheeting &gt; Roof</i></u> menu, you can set the type of roof composition, type of roofing material, and the dimensions of the secondary roof structure.</p>

<p>Within individual roof planes, you can additionally change the direction of the roofing installation, generate a bill of materials with roofing items, and also generate a plan view of the roof structure as an editable drawing.</p>

<p><b>Settings and modifications of individual roof planes can be done using <u>Control and Edit buttons</u>.</b></p>

<ul>
  <li><p>Using <u>Control buttons</u> in the model, you can set the type of roof composition, roofing type, and dimensions of the secondary structure elements separately for each roof plane, as well as create material reports and roof structure drawings.</p></li>
  <li><p>Using <u>Edit buttons</u> in the model, you can edit the properties of individual roof structure layers on a specified roof plane, and also create material reports and drawings of the respective roof structure layers.</p></li>
</ul>

<hr class="main">

<h2>Setting Up Roof Structure Layers</h2>
<p>You can configure the roof structure composition using the following buttons:</p>

<ul>
  <li><p><u>Top layer</u></p></li>
  <li><p><u>Lower layers</u></p></li>
</ul>

<p>
For some roofing materials, the <u>Lower layers</u> button may be hidden by default, and the secondary structure is not generated for such materials.
</p>

<hr>

{{ box_icon("img/RoofTopLayer_64x64.png", "Top layer", "Top layer", fontSize=10) }}
<ul>
  <li><p>Allows you to select a roofing product from a prepared product gallery.</p></li>
</ul>

<hr>

{{ box_icon("img/RoofLowerLayers_64x64.png", "Lower layers", "Lower layers", fontSize=10) }}
<ul>
  <li><p>Allows you to select the type of secondary structure composition from a prepared product gallery.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/ControlButton.png", "", "Control Button", width=64) }}

<p>For individual roof planes, it allows you to:</p>

<ul>
  <li><p>Set the type of roof composition – covering type and secondary structure.</p></li>
  <li><p>Generate a bill of materials with roof covering items and also generate a plan of the roof structure with all layers in the form of an editable drawing.</p></li>
</ul>

/// details | Functions accessible via Control Button
{{ include_md("__sub_Sheeting_RoofPlane.md") }}
///



<hr class="main">

{{ box_icon("img/EditButton.png", "", "Edit Button", width=64) }}

<p>For individual layers of the roof composition on a specified roof plane, it allows you to:</p>

<ul>
  <li><p>Set the type of covering or individual layers of the secondary structure including dimensions, direction of installation, as well as editing the position and angle of installation.</p></li>
  <li><p>Generate a plan of the relevant layer of the roof structure in the form of an editable drawing.</p></li>
  <li><p>For the roof covering, it is also possible to generate a material statement with roof covering items.</p></li>
</ul>

/// details | Functions accessible via Edit Button
{{ include_md("__sub_Sheeting_RoofLayer.md") }}
///


<hr class="main">

<h2>Is there a roofing material missing in the gallery? Let us know and we will add it.</h2>
<a href="mailto:jiri.podval@histruct.com?subject=HiStruct building configurator inquiry" class="btn">
  I want to add it
</a>

<!-- product: HiStruct Roofs -->