---
sourceLang: cs
sourceHash: b27e0167c1b67c9a94709781b9f50a2b
autoTranslated: true
---

# Geometry &gt; Building &gt; Dimensions

<p>Allows you to change the geometric parameters of the model, i.e., the dimensions of the eaves edges, the slope and overhang of the roof. It is also possible to change the height of the entire roof structure.</p>

<hr class="main">

<h2>Editing Individual Edges</h2>
<b>After clicking the respective eaves edge, you can set the edge type, adjust its length, set the slope of the relevant roof part, and its overhang.</b>

{{ modal_video_button("img/VideoEditEdges.mp4") }}

<hr class="main">

{{ box_icon("img/ImportDxfIcon64x64.png", "Base", "Base") }}

<p>The <u>Base</u> button is used to import a reference base for faster drawing of the roof outline.</p>

<b>After importing the base, you need to check its dimensions and adjust the scale if necessary.</b>

<ul>
  <li><p>You can change the scale setting after importing the base by clicking the gray rectangular button in the modeling area.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Opening", "Opening") }} 

<p>The <u>Opening</u> button allows you to insert an opening into the generated roof plane; it is drawn as a top view projection.</p>
<p>The opening can be rectangular or of a general shape, and you can assign a chimney opening type to it.</p>
<p>A rectangular opening can be defined by freely clicking into the top view plane, or by using its dimensions in the form "X;Y", e.g., <b>2;4</b>. An opening of a general shape can be drawn by freely clicking or by using coordinate systems, similar to the outline of the roof structure.</p>
<p>After clicking the respective opening, you can change its type, position, or delete it using the buttons at the top of the opened table.</p>

<hr class="main">

{{ box_icon("img/SetSlopeIcon64x64.png", "Set slope", "Set slope") }}

<p>The <u>Set slope</u> button allows you to set the same slope for all roof planes.</p>

<hr class="main">

{{ box_icon("img/RoofLiftIcon64x64.png", "Lift roof", "Lift roof") }}

<p>The <u>Lift roof</u> button allows you to adjust the height of the walls of the modeled object.</p>

<hr class="main">

{{ box_icon("img/EditPropertiesIcon64x64.png", "Properties", "Properties") }}

<p>Allows you to adjust the method of defining geometry; depending on the setting, you can draw the outline of the roof or walls.</p>
<p>It is also possible here to set the intersection of roof planes between individual objects.</p>

<hr class="main">

{{ box_icon("img/DeleteIcon64x64.png", "Delete", "Delete") }}

<p>Deletes all imported bases and structures drawn using the <u>Outline</u> function.</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Anotate", "Anotate") }}

<p>The <u>Anotate</u> button allows you to add any planar dimension labels to the model.</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Measure", "Measure") }}

<p>The <u>Measure</u> button allows you to check the dimensions of the model.</p>

<hr class="main">

{{ box_icon("img/MainInsert64x64.png", "Add", "Add") }}

<p>The <u>Add</u> button allows you to add more roof structures to the modeling area.</p>

<ul>
  <li><p>Shed roof on a rectangular footprint</p></li>
  <li><p>Gable roof on a rectangular footprint</p></li>
  <li><p>Another roof defined by outline</p></li>
  <li><p>Roof defined by a 3D file of type ".obj"</p></li>
</ul>

<hr class="main">

<!-- product: HiStruct Building Configurator -->