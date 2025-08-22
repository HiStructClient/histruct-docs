---
sourceLang: cs
sourceHash: dc6c04679e49a4b2b9d9c9f2615e84e1
autoTranslated: true
---

# Geometry
<p>
Allows you to draw roof planes, modify their shapes, dimensions, or slopes.
</p>

<p><b>For a clearer workflow, the content of the <u>Geometry</u> menu differs for the phase before drawing the first surface and the phase after drawing the first surface.</b></p>

<p>
<b><u>Edit buttons</u> adjust properties of the roof structure only on the selected roof plane.</b>
</p>

<hr class="main">

//// details | PHASE 1: I want to draw the first area

# Geometry
<p>
Allows you to draw roof planes, modify their shapes, dimensions, or slopes, and also set the type of roof composition.
</p>

<hr class="main">
{{ box_icon("img/ImportDxfIcon64x64.png", "Background", "Background") }}

<p>The <u>Background</u> button is used to import a background for faster drawing of the roof outline.</p> 

<p>After importing the background, you need to check its dimensions and adjust the scale if necessary.</p>

<p><b><u>Adjusting the imported background scale</u></b></p>

<ul>
<p><li>
After clicking on the grid of the imported background, you can change the scale directly in the corresponding cell in the opened table. 
</li></p>

<p><li>
To adjust the scale, you can also use the <u>Scale</u> button located at the top of the opened table. With this button, you can set the background scale based on a selected edge whose actual dimension is known.
</li></p>
</ul>

{{ modal_video_button("img/VideoImportDXF.mp4") }}

<hr class="main">

{{ box_icon("img/TiledAreaGeneralIcon64x64.png", "Area", "Area") }}

<p>
The <u>Area</u> button is used to draw the floorplan outline of a roof plane. Roof planes can be drawn using predefined area shapes:
</p>

{{ box_icons([
  ("img/GeneralLoopIcon64x64.png", "General"),
  ("img/ClassRectLoopIcon64x64.png", "Rectangle"),
  ("img/ClassTriangleLoopIcon64x64.png", "Triangle"),
  ("img/ClassTrapezoidLoopIcon64x64.png", "Trapezoid"),
], "... and more", width=55, height=55, fontSize=10) }}

<p>
After drawing or inserting an area, its dimensions and slope, as well as the height and direction of the eaves edge, can be modified in the relevant open table—depending on the area type.
</p>

<hr>

{{ box_icon("img/GeneralLoopIcon64x64.png", "General", "General") }}

  <p>The <u>General</u> button allows you to draw a roof plane of any shape, allowing you to draw both in the floorplan (2D) and the 3D space. You can use:</p>

  <p><b><u>Freehand drawing using the cursor (also possible in 3D space)</u></b></p>
  <ul>
    <li><p>Edges can be drawn by freely clicking in the modeling space.</p></li>
    <li><p>When drawing edges in the floorplan, you can use cursor snapping to the X and Y axes directions, or perpendicular to the last placed edge.</p></li>
    <li><p><b>When drawing a roof surface in 3D space, you must use endpoints of already modeled roof planes, and then change the surface type from PROJECTION -> GENERAL</b>.</p></li>
  </ul>

{{ modal_video_button("img/VideoPlanes3D.mp4") }}

  <p><b><u>Global coordinates of polygon vertices</u></b></p>
  <ul>
    <li><p>Global coordinates for the next vertex are entered in the format "X;Y", e.g. <b>2;4</b></p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesGlobal.mp4") }}

  <p><b><u>Relative coordinates of polygon vertices</u></b></p>
  <ul>
    <li><p>Relative coordinates for the next vertex are entered in the format "@X;Y", e.g. <b>@2;4</b></p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesRelative.mp4") }}

  <p><b><u>Polar coordinates of polygon vertices</u></b></p>
  <ul>
    <li><p>Polar coordinates for the next vertex are entered in the format "&gt;alpha;L", e.g. <b>&gt;135;6</b></p></li>
    <li><p>The entered angle is measured from the positive X global axis counterclockwise.</p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesPolar.mp4") }}

  <p>The last inserted point can be deleted using the <b><u>DELETE</u></b> key.</p>

<hr>

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Rectangle", "Rectangle") }}

<p>
A roof plane of rectangular shape can be entered by freely clicking in the floorplan or by its dimensions in the format "X;Y", e.g. <b>2;4</b>.
</p>

<hr>

{{ box_icons([
  ("img/ClassTriangleLoopIcon64x64.png", "Triangle"),
  ("img/ClassTrapezoidLoopIcon64x64.png", "Trapezoid"),
], "... and more", width=55, height=55, fontSize=10) }}

<p>
Roof planes of other shapes can be placed directly by clicking in the modeling space; their dimensions can then be adjusted in the edit table.
</p>

<hr class="main">

<h2>Edit roof planes</h2>

<p><b><u>You can open the table for editing a plane by clicking on the chosen plane.</u></b></p>

<p>
Using the buttons at the top of the table, the area can be copied, deleted, rotated in the floorplan or in the plane, and moved in all three directions.
</p>

{{ modal_video_button("img/VideoEditPlanes.mp4") }}

/// details | Other editing options for roof planes
{{ include_md("__sub_Geometry_Dimension_Plane.md") }}
///

<hr class="main">

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Opening", "Opening") }}

<p>
The <u>Opening</u> button allows you to insert an opening into the generated roof plane, drawn as a floorplan projection.
</p>

<p>
An opening can be rectangular or of general shape and can have a chimney opening type assigned.
</p>

<p>
A rectangular opening can be entered by freely clicking in the floorplan or using its dimensions in the format "X;Y", e.g. <b>2;4</b>. An opening of general shape can be drawn freely or using coordinate systems similarly as the outline of the roof structure.
</p>

<p>
After clicking on the relevant opening, you can use the buttons at the top of the open table to change its type, position, or delete it.
</p>

{{ modal_video_button("img/VideoEditOpenings.mp4") }}

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Annotation", "Annotation") }}

<p>
The <u>Annotation</u> button allows you to add any floorplan dimensioning into the model.
</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Measuring", "Measuring") }}

<p>
The <u>Measuring</u> button can be used to check model dimensions.
</p>

<hr class="main">

{{ box_icon("img/MainInsert64x64.png", "Add", "Add") }}

<p>
The <u>Add</u> button allows you to add additional (secondary) roof structures to the model space.
</p>

<ul>
  <li>
    <p>Roof defined by an outline</p>
  </li>
  <li>
    <p>Another roof modeled by planes</p>
  </li>
</ul>

////

<hr class="main">

//// details | PHASE 2: After drawing the first area
  
# Geometry

{{ box_icon("img/Sheated_Building_Page_Building.png", "Dimensions", "Dimensions") }}

<p>
The <u>Dimensions</u> button is used for drawing and inserting roof planes. For these planes, it is possible to further modify their geometry, create openings, and set parameters for correct plane connections.
</p>
<p>

<hr class="main">

<!--{{ box_icon("img/RoofSketchIcon64x64.png", "Roof", "Roof") }}

The <u>Roof</u> button allows you to set the type of roof composition. The type of covering and dimensions of the secondary roof structure can be changed with the <u>Sheathing</u> button.

<hr class="main">

{{ box_icon("img/ImportObjIcon64x64.png", "Jelly", "Jelly") }}

<p>
Allows you to adjust dimensions and slopes of generated edges and planes, change the height and possibly the eccentricity of the roof.
</p>

<hr class="main">

{{ box_icon("img/PvgisIcon64x64.png", "Output", "Output") }}

<p>
Allows you to evaluate the potential solar radiation performance on individual roof surfaces.
</p>

<p>
...Functionality of the <u>Output</u> button is being prepared for a future program version...
</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Annotation", "Annotation") }}

<p>
The <u>Annotation</u> button allows you to add any floorplan dimensioning into the model.
</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Measuring", "Measuring") }}

<p>
The <u>Measuring</u> button can be used to check model dimensions.
</p>

////

<hr class="main">

<!-- product: HiStruct Roofs -->