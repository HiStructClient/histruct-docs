---
sourceLang: cs
sourceHash: c23a55c2a28ada275831634cd187fd51
autoTranslated: true
---

# Geometry &gt; Dimensions

<p>Allows you to change the geometric parameters of the model, i.e. the dimensions of the eaves edges, the slope and the overhang of the roof. It is also possible to change the height of the entire roof structure.</p>

<hr class="main">

<h2>Editing individual edges</h2>
<p><b>After clicking on the relevant eaves edge, you can set the edge type, adjust its length, set the slope of the relevant part of the roof, and its overhang.</b></p>

{{ modal_video_button("img/VideoEditEdges.mp4") }}

<hr class="main">

{{ box_icon("img/ImportDxfIcon64x64.png", "Underlay", "Underlay") }}

<p>The <u>Underlay</u> button is used for importing a background to speed up the roof outline drawing process.</p>

<p><b>After importing the background, it is important to check its dimensions and adjust the scale if necessary.</b></p>

<ul>
  <li><p>The scale can be changed after importing the background by clicking the gray rectangular button in the modeling space.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Opening", "Opening") }}

<p>The <u>Opening</u> button allows you to insert an opening into the generated roof plane, which is drawn as a floor plan projection.</p>

<p>The opening can be rectangular or of a general shape, and it is possible to assign a chimney opening type to it.</p>

<p>A rectangular opening can be specified either by free clicking into the floor plan view or by entering its dimensions in the form "X;Y", for example <b>2;4</b>. An opening of a general shape can be drawn by free clicking or using coordinate systems similar to the outline of the roof structure.</p>

<p>After clicking on the relevant opening, you can change its type, position, or delete it using the buttons at the top of the open dialog box.</p>

<hr class="main">

{{ box_icon("img/SetSlopeIcon64x64.png", "Set slope", "Set slope") }}

<p>The <u>Set slope</u> button sets the same slope for all roof planes.</p>

<hr class="main">

{{ box_icon("img/RoofLiftIcon64x64.png", "Lift roof", "Lift roof") }}

<p>The <u>Lift roof</u> button allows you to adjust the height of the walls of the modeled object.</p>

<hr class="main">

{{ box_icon("img/EditPropertiesIcon64x64.png", "Properties", "Properties") }}

<p>Allows you to adjust the method of geometry input; depending on the settings, you can draw the outline of the roof or the walls.</p>

<p>It is also possible to set the intersection of roof planes between individual objects here.</p>

<hr class="main">

{{ box_icon("img/DeleteIcon64x64.png", "Delete", "Delete") }}

<p>Deletes all imported backgrounds and constructions drawn using the <u>Outline</u> function.</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Anotate", "Anotate") }}

<p>The <u>Anotate</u> button allows you to add arbitrary floor plan dimensions to the model.</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Measure", "Measure") }}

<p>The <u>Measure</u> button allows you to check the dimensions of the model.</p>

<hr class="main">

{{ box_icon("img/MainInsert64x64.png", "Add", "Add") }}

<p>The <u>Add</u> button allows you to add additional roof structures to the modeling space.</p>

<ul>
  <li><p>Mono-pitch roof on a rectangular floor plan</p></li>
  <li><p>Gable roof on a rectangular floor plan</p></li>
  <li><p>Another roof defined by its outline</p></li>
  <li><p>Roof defined by a 3D file of type ".obj"</p></li>
</ul>

<hr class="main">

<!-- product: HiStruct Building Configurator -->