---
sourceLang: cs
sourceHash: 77bd7a3e8bfde6f0c05e9ef6c8a1f548
autoTranslated: true
---

# Geometry &gt; Import
<p>In the <u><i>Geometry &gt; Import</i></u> menu, you can change the settings of the edge and surface generator, adjust the dimensions and slopes of the generated edges and surfaces using the ROSOL solver.</p>

<hr class="main">

<h2>Settings of Generated Edges and Surfaces</h2>
<p>The generator creates a 3D model from triangular surfaces, which are bounded by edges.</p>

<p>However, the captured model may not be accurate, so you can adjust the parameters of individual generated edges and surfaces directly in the model - select them by clicking on the chosen element.</p>

<h3><u>Surfaces</u></h3>
<p>The orientation of individual surfaces in the model determines whether it is a roof surface or not.</p>

<p>Individual generated surfaces can be turned on or off; enabled surfaces will be further considered as roof surfaces and roofing, secondary structure, as well as flashing elements will be generated on them.</p>

<h3><u>Edges</u></h3>
<p>According to their geometry in the model, edges are assigned one of the following functions:</p>

<p><span style="color: rgba(40,100,255,255);"><b>Gable</b></span></p>
<ul>
  <li><p>An edge at the edge of a roof surface, at an angle</p></li>
  <li><p>It is the edge terminating the roof surface</p></li>
</ul>

<p><span style="color: rgba(20,255,20,255);"><b>Eave</b></span></p>
<ul>
  <li><p>An edge at the edge of a roof surface, horizontal</p></li>
  <li><p>It is the edge terminating the roof surface</p></li>
</ul>

<p><span style="color: rgba(187,120,62,255);"><b>Internal</b></span></p>
<ul>
  <li><p>An edge between roof surfaces, disabled</p></li>
  <li><p>Only divides the generated roof planes</p></li>
</ul>

<p>Individual edges within active roof surfaces can be enabled or disabled and you can also set whether the generator should further consider them as horizontal or not.</p>

<hr class="main">

{{ box_icon("img/MainSettings64x64.png", "Settings", "Settings") }}

<p>Allows you to adjust the scale of the imported model and adapt the parameters of the roof plane generator.</p>

<p><b><u>Scale</u></b></p>
<ul>
  <li><p>By adjusting the value, you can enlarge or shrink the model; it is necessary to set the appropriate scale so that the dimensions of the object in the model correspond to its real dimensions.</p></li>
  <li><p>The correct scale setting can be verified by measuring any known dimension using the <u>Measure</u> button.</p></li>
</ul>

<p><b><u>Vertical Surfaces</u></b></p>
<ul>
  <li><p>Vertical surfaces can be completely omitted from the model, or you can set the maximum allowable angular deviation from the vertical direction for these surfaces, for which they will still be considered vertical.</p></li>
</ul>

<p><b><u>Horizontal Surfaces</u></b></p>
<ul>
  <li><p>Horizontal surfaces can also be completely omitted from the model, or you can set the maximum allowable angular deviation from the horizontal direction for these surfaces, for which they will still be considered horizontal.</p></li>
</ul>

<p><b><u>Max. Distance of Points to Merge</u></b></p>
<ul>
  <li><p>Used to set the maximum distance between points that can be considered identical. The generator will then merge points that meet the specified maximum distance.</p></li>
</ul>

<p><b><u>Max. Angle Between Surface Normals to Merge</u></b></p>
<ul>
  <li><p>Used to set the maximum angle that the normals of two adjacent planes can form to be considered parallel. The generator will then merge these planes.</p></li>
</ul>

<p><b><u>Max. Slope of Line Required to be Horizontal</u></b></p>
<ul>
  <li><p>Used to set the maximum slope of an edge at which it will still be considered horizontal.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/PreviewGeometry64x64.png", "Preview", "Preview") }}

<p>The <u>Preview</u> button allows you to check the generated roof surfaces and edges in the model space, including their lengths and slopes.</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Anotate", "Anotate") }}

<p>The <u>Anotate</u> button enables you to add any ground plan dimensions to the model.</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Measure", "Measure") }}

<p>The <u>Measure</u> button allows you to check the dimensions of the model.</p>

<hr class="main">

<!-- product: HiStruct Roofs -->