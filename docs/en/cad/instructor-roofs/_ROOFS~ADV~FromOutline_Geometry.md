---
sourceLang: cs
sourceHash: f5fb1162a42c07c38cd7b7270c825b9b
autoTranslated: true
---

# Geometry
<p>Allows you to change the geometric parameters of the model, i.e., the dimensions of the building and roof, including pitch and overhangs. Here you can also set the type of roof structure.</p>

<p><b>For greater clarity, the contents of the <u>Geometry</u> menu differ depending on whether you are before or after drawing the outline.</b></p>

<p><b><u>Control buttons</u> modify the properties of the roof construction only on the selected roof plane.</b></p>

<hr class="main">

//// details | PHASE 1: I want to create the first roof from an outline

# Geometry
<p>Allows you to change the geometric parameters of the model, i.e., the dimensions of the building and roof, including pitch and overhangs.</p>

<hr class="main">

{{ box_icon("img/ImportDxfIcon64x64.png", "Underlay", "Underlay") }}

<p>The <u>Underlay</u> button is used to import a background for faster drawing of the roof outline.</p> 

<p>After importing the background, it is necessary to check its dimensions and adjust the scale if necessary.</p>

<p><b><u>Editing the scale of the imported background</u></b></p>

<ul>
<p><li>
By clicking on the grid of the imported background, the scale can be changed directly in the appropriate cell of the open table.
</li></p>

<p><li>
To adjust the scale, you can also use the <u>Scale</u> button, which is located at the top of the open table. This button allows you to set the scale of the background by selecting an edge whose actual dimensions you know.
</li></p>
</ul>

{{ modal_video_button("img/VideoImportDXF.mp4") }}

<hr class="main">

{{ box_icon("img/RoofBoundaryIcon64x64.png", "Boundary", "Boundary") }}

<p>The <u>Boundary</u> button is used to draw the floor plan outline of the roof. To input the length and direction of individual eave edges, you can use:</p>

<p><b><u>Freehand drawing with the cursor</u></b></p>
<ul>
  <li><p>Edges can be drawn by freely clicking into the modeling space.</p></li>
  <li><p>While drawing edges, you can use functions for aligning the cursor along the X and Y axes, or align the cursor perpendicular to the last entered edge.</p></li>
</ul>

{{ modal_video_button("img/VideoOutlineFree.mp4") }}

<p><b><u>Global coordinates of polygon vertices</u></b></p>
<ul>
  <li><p>The global coordinates for the next vertex are entered in the format "X;Y", e.g., <b>2;4</b></p></li>
</ul>

{{ modal_video_button("img/VideoOutlineGlobal.mp4") }}

<p><b><u>Relative coordinates of polygon vertices</u></b></p>
<ul>
  <li><p>The relative coordinates for the next vertex are entered in the format "@X;Y", e.g., <b>@2;4</b></p></li>
</ul>

{{ modal_video_button("img/VideoOutlineRelative.mp4") }}

<p><b><u>Polar coordinates of polygon vertices</u></b></p>
<ul>
  <li><p>The polar coordinates for the next vertex are entered in the format "&gt;alpha;L", e.g., <b>&gt;135;6</b></p></li>
  <li><p>The angle is measured from the positive direction of the global X axis counterclockwise.</p></li>
</ul>

{{ modal_video_button("img/VideoOutlinePolar.mp4") }}

<p>The last inserted point can be deleted with the <b><u>DELETE</u></b> key.</p>

<hr class="main">

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Opening", "Opening") }}

<p>With the <u>Opening</u> button, you can insert an opening into the generated roof plane, which is drawn as a floor plan projection.</p>
<p>The opening can be rectangular or of a general shape, and a chimney opening type can be assigned to it.</p>

<hr class="main">

{{ box_icon("img/EditPropertiesIcon64x64.png", "Properties", "Properties") }}

<p>Allows you to modify the way geometry is entered; depending on the setting, you can draw the outline of the roof or the walls.</p>
<p>You can also set the intersection of roof planes between individual objects here.</p>

<hr class="main">

{{ box_icon("img/DeleteIcon64x64.png", "Delete all", "Delete all") }}

<p>Deletes all imported backgrounds and roof constructions drawn using the <u>Boundary</u> function.</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Anotate", "Anotate") }}

<p>The <u>Anotate</u> button allows you to add arbitrary floor plan dimensions to the model.</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Measure", "Measure") }}

<p>The <u>Measure</u> button allows you to check the dimensions of the model.</p>

<hr class="main">

{{ box_icon("img/MainInsert64x64.png", "Add", "Add") }}

<p>The <u>Add</u> button allows you to add additional (auxiliary) roof structures to the model space.</p>
<ul>
  <li><p>Another roof defined by a boundary</p></li>
  <li><p>A roof drawn using roof planes</p></li>
</ul>

////

<hr class="main">


//// details | PHASE 2: After creating the first roof from the outline

# Geometry

<p>
{{ box_icon("img/Sheated_Building_Page_Building.png", "Dimensions", "Dimensions") }}
</p>

<p>The <u>Dimensions</u> button is used to draw the floor shape of the object, set its height and roof pitch, and also to add openings in the roof construction.</p>
<p>Basic floor dimensions can be entered either for the roof construction or for the vertical walls.</p>

<hr class="main">

<!--{{ box_icon("img/RoofSketchIcon64x64.png", "Roof", "Roof") }}

<p>The <u>Roof</u> button allows you to set the type of roof construction. The type of covering and the dimensions of the secondary roof structure can be changed via the <u>Sheeting</u> button.</p>

<hr class="main">-->

{{ box_icon("img/PvgisIcon64x64.png", "Performance", "Performance", fontSize=10) }}

<p>
Allows you to evaluate the potential solar radiation power on individual roof planes.
</p>

<p>
...The <u>Performance</u> button functionality is being prepared for a future version of the program...
</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Anotate", "Anotate") }}

<p>The <u>Anotate</u> button enables you to add any ground plan dimensions to the model.</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Measure", "Measure") }}

<p>The <u>Measure</u> button allows you to check the dimensions of the model.</p>

////

<hr class="main">

<!-- product: HiStruct Roofs  -->