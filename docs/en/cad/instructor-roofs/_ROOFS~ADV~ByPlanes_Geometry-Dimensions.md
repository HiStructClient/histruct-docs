---
sourceLang: cs
sourceHash: 6dd65173c1c40339c6ac0ffd16b0a0b9
autoTranslated: true
---

<h1>Geometry > Dimensions</h1>

  <p>Allows you to draw roof planes, change their shapes, dimensions or slopes, and set their connections.</p>

  <hr class="main">

{{ box_icon("img/ImportDxfIcon64x64.png", "Background", "Background") }}

  <p>The <u>Background</u> button is used to import a background for faster drawing of roof plane outlines. After importing the background, you need to check its dimensions and adjust the scale if necessary.</p>

  <p><b><u>Adjusting the scale of the imported background</u></b></p>

<ul>
<p><li>
After clicking on the grid of the imported background, the scale can be changed directly in the appropriate cell in the open table.
</li></p>

<p><li>
You can also use the <u>Scale</u> button, located at the top of the open table, to adjust the scale. This button allows you to set the background scale using a chosen edge for which you know the actual measurement.
</li></p>
</ul>

{{ modal_video_button("img/VideoImportDXF.mp4") }}

  <hr class="main">

{{ box_icon("img/TiledAreaGeneralIcon64x64.png", "Area", "Area") }}

  <p>The <u>Area</u> button is used to draw the plan outline of a roof plane. Roof planes can be drawn using predefined area shapes:</p>

{{ box_icons([
  ("img/GeneralLoopIcon64x64.png", "General"),
  ("img/ClassRectLoopIcon64x64.png", "Rectangle"),
  ("img/ClassTriangleLoopIcon64x64.png", "Triangle"),
  ("img/ClassTrapezoidLoopIcon64x64.png", "Trapezoid"),
], "... and more", width=55, height=55, fontSize=10) }}

  <p>After an area has been drawn or inserted, depending on the area type you can modify its dimensions and slope, as well as the height and direction of the eaves edge, in the corresponding open table.</p>

  <hr>

{{ box_icon("img/GeneralLoopIcon64x64.png", "General", "General") }}

  <p>The <u>General</u> button allows you to draw a roof plane of any shape, either in the plan view or directly in 3D space. You can use:</p>

  <p><b><u>Freehand drawing using the cursor (works in 3D space too)</u></b></p>
  <ul>
    <li><p>You can draw edges by freely clicking in the modeling space.</p></li>
    <li><p>While drawing edges in the plan view, you can use cursor alignment functions along the X and Y axes, or align the cursor perpendicular to the last drawn edge.</p></li>
    <li><p><b>When drawing a roof plane in 3D, use the endpoints of already modeled roof planes, then change the surface type from PROJECTION -> GENERAL.</b></p></li>
  </ul>

{{ modal_video_button("img/VideoPlanes3D.mp4") }}

  <p><b><u>Global coordinates for polygon vertices</u></b></p>
  <ul>
    <li><p>Global coordinates for the next vertex are entered in the format "X;Y", e.g. <b>2;4</b></p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesGlobal.mp4") }}

  <p><b><u>Relative coordinates for polygon vertices</u></b></p>
  <ul>
    <li><p>Relative coordinates for the next vertex are entered in the format "@X;Y", e.g. <b>@2;4</b></p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesRelative.mp4") }}

  <p><b><u>Polar coordinates for polygon vertices</u></b></p>
  <ul>
    <li><p>Polar coordinates for the next vertex are entered in the format "&gt;alpha;L", e.g. <b>&gt;135;6</b></p></li>
    <li><p>The entered angle is measured from the positive direction of the global X axis counterclockwise.</p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesPolar.mp4") }}

  <p>You can delete the last inserted point by pressing the <b><u>DELETE</u></b> key.</p>

  <hr>

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Rectangle", "Rectangle") }}

  <p>A rectangular roof plane can be entered by freely clicking in the plan view or by using its dimensions in the format "X;Y", e.g. <b>2;4</b>.</p>

  <hr>

{{ box_icons([
  ("img/ClassTriangleLoopIcon64x64.png", "Triangle"),
  ("img/ClassTrapezoidLoopIcon64x64.png", "Trapezoid"),
], "... and more", width=55, height=55, fontSize=10) }}

  <p>Other roof plane shapes can be entered directly by clicking in the modeling space and then modifying their dimensions in the edit table.</p>

  <hr class="main">

  <h2>Editing roof planes</h2>

  <p><b><u>The roof plane edit table can be opened in the Geometry > Dimensions menu by clicking on the chosen plane.</u></b></p>

  <p>You can copy, delete, rotate (either in the plan view or the plane), and move the area in all 3 directions using the buttons at the top of the table.</p>

{{ modal_video_button("img/VideoEditPlanes.mp4") }}

/// details | More options for editing roof planes
{{ include_md("__sub_Geometry_Dimension_Plane.md") }}
///

  <hr class="main">

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Opening", "Opening") }}

  <p>The <u>Opening</u> button allows you to insert an opening into a generated roof plane by drawing its plan projection.</p>
  <p>An opening can be rectangular or have a general shape, and you can assign it a chimney opening type.</p>
  <p>A rectangular opening can be entered by freely clicking in the plan view or by using its dimensions in the format "X;Y", e.g. <b>2;4</b>. An opening of general shape can be drawn freely or using coordinate systems similar to the roof construction outline.</p>
  <p>After clicking on the selected opening, you can change its type, position, or delete it using the buttons at the top of the open table.</p>

{{ modal_video_button("img/VideoEditOpenings.mp4") }}



  <hr class="main">

{{ box_icon("img/PreviewGeometry64x64.png", "Connect", "Connect") }}

  <p>The <u>Connect</u> button is used to set the maximum distance between points that can be considered identical. The generator will then merge points that meet the set maximum distance.</p>

  <p><b><u>Adjusting the scale of the imported background</u></b></p>
  <ul>
    <li><p>After clicking on the imported background, the scale can be changed directly in the corresponding cell in the open table.</p></li>
    <li><p>You can also use the <u>Scale</u> button at the top of the open table. This button allows you to set the background scale using a chosen edge for which you know the actual dimension.</p></li>
  </ul>

  <hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Annotation", "Annotation") }}

  <p>The <u>Annotation</u> button allows you to add any plan dimensions to the model.</p>

  <hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Measure", "Measure") }}

  <p>The <u>Measure</u> button lets you check the dimensions of the model.</p>

  <hr class="main">

{{ box_icon("img/MainInsert64x64.png", "Add", "Add") }}

  <p>The <u>Add</u> button lets you add additional (secondary) roof structures into the model space.</p>
  <ul>
    <li><p>Roof defined by an outline</p></li>
    <li><p>Another roof modeled plane by plane</p></li>
  </ul>

  <hr class="main">

<!-- product: HiStruct Roofs -->