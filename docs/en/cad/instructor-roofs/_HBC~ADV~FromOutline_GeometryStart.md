---
sourceLang: cs
sourceHash: fd9b4ca9354e2999f688019741170e63
autoTranslated: true
---

# Geometry

<p>Allows you to change the geometric parameters of the model, i.e., the dimensions of the building and roof including slope and overhangs. Here you can also set the type of roof structure.</p>

<hr class="main">

{{ box_icon("img/ImportDxfIcon64x64.png", "Base", "Base") }}

<p>The <u>Base</u> button is used to import a base for faster drawing of the roof outline.</p>
<p><b>After importing the base, it is necessary to check its dimensions and, if needed, adjust the scale.</b></p>

<ul>
  <li><p>The scale setting can be changed after importing the base by clicking the gray rectangular button in the modeling space.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/RoofBoundaryIcon64x64.png", "Outline", "Outline") }}

<p>The <u>Outline</u> button is used to draw the roof's footprint outline. To enter the length and direction of individual eave edges, you can use:</p>

<p><b><u>Free drawing using the cursor</u></b></p>
<ul>
  <li><p>Edges can be drawn by freely clicking in the modeling space.</p></li>
  <li><p>During edge drawing, you can use cursor alignment functions to the directions of X and Y axes, or align the cursor perpendicular to the last entered edge.
</p></li>
</ul>

{{ modal_video_button("img/VideoOutlineFree.mp4") }}

<p><b><u>Global coordinates of polygon vertices</u></b></p>
<ul>
  <li><p>Global coordinates for the next vertex are entered in the format "X;Y", for example, <b>2;4</b></p></li>
</ul>

{{ modal_video_button("img/VideoOutlineGlobal.mp4") }}

<p><b><u>Relative coordinates of polygon vertices</u></b></p>
<ul>
  <li><p>Relative coordinates for the next vertex are entered in the format "@X;Y", e.g., <b>@2;4</b></p></li>
</ul>

{{ modal_video_button("img/VideoOutlineRelative.mp4") }}

<p><b><u>Polar coordinates of polygon vertices</u></b></p>
<ul>
  <li><p>Polar coordinates for the next vertex are entered in the format "&gt;alpha;L", for example, <b>&gt;135;6</b></p></li>
  <li><p>The entered angle is measured from the positive direction of the global X axis, counterclockwise.</p></li>
</ul>

{{ modal_video_button("img/VideoOutlinePolar.mp4") }}

The last inserted point can be deleted using the <b><u>DELETE</u></b> key.

<hr class="main">

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Opening", "Opening") }}

<p>The <u>Opening</u> button allows you to insert an opening into the generated roof plane; it is drawn as a plan projection.</p>
<p>The opening can be rectangular or of a general shape, and a chimney opening type can be assigned to it.</p>

<hr class="main">

{{ box_icon("img/EditPropertiesIcon64x64.png", "Properties", "Properties") }}

<p>Allows you to edit the way geometry is entered; depending on the settings, you can draw the outline of either the roof or the walls.</p>

<hr class="main">

{{ box_icon("img/DeleteIcon64x64.png", "Delete", "Delete") }}

<p>Deletes all imported bases and structures drawn using the <u>Outline</u> function.</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Anotate", "Anotate") }}

<p>The <u>Anotate</u> button allows you to add any plan dimensions to the model.</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Measure", "Measure") }}

<p>The <u>Measure</u> button allows you to check the dimensions of the model.</p>

<hr class="main">

{{ box_icon("img/MainInsert64x64.png", "Add", "Add") }}

<p>The <u>Add</u> button allows you to add additional structures to the model space.</p>
<ul>
  <li><p>An object with a mono-pitch roof on a rectangular footprint</p></li>
  <li><p>An object with a gable roof on a rectangular footprint</p></li>
  <li><p>Another object defined by an outline</p></li>
  <li><p>An object specified using a 3D ".obj" file</p></li>
</ul>

<hr class="main">

<!-- product: HiStruct Building Configurator -->