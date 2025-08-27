---
sourceLang: cs
sourceHash: 085041fc63495250220b06474ee9733d
autoTranslated: true
---

# Geometry > Dimensions

<p>Allows you to change the geometric parameters of the model, i.e., the dimensions of the building and the roof, including slope and overhangs.</p>

<p>The content of the <u><i>Geometry &gt; Dimensions</i></u> menu varies depending on the template type used:</p>

<ul>
<li>MODEL BY PLANES</li>
<li>GENERATE FROM OUTLINE</li>
</ul>

{{ box_icon("img/StartRosolAreas_thumbnail.128x128.png", "", "MODEL BY PLANES") }}

///// details | I am using the MODEL BY PLANES template
{{ include_md("_ROOFS~ADV~ByPlanes_Geometry-Dimensions.md") }}
/////

{{ box_icon("img/StartRosol_thumbnail.128x128.png", "", "GENERATE FROM OUTLINE") }}

///// details | I am using the GENERATE FROM OUTLINE template
{{ include_md("_ROOFS~ADV~FromOutline_Geometry-Dimensions.md") }}
/////

  <p>Allows you to draw roof planes, change their shapes, dimensions, or slopes, and set their connections.</p>

  <hr class="main">

{{ box_icon("img/ImportDxfIcon64x64.png", "Base", "Base") }}

  <p>The <u>Base</u> button is used to import a base for faster drawing of the roof outline. After importing the base, you need to check its dimensions and possibly adjust the scale.</p>

  <p><b><u>Editing the scale of the imported base</u></b></p>

<ul>
<p><li>
After clicking on the grid of the imported base, you can change the scale directly in the relevant cell in the open table.
</li></p>

<p><li>
To adjust the scale, you can also use the <u>Scale</u> button, located at the top of the open table. Using this button, you can set the scale of the base using a selected edge with known actual dimensions.
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

  <p>After drawing or inserting an area, depending on the type of area, you can modify its dimensions and slope, as well as the height and direction of the eaves edge in the relevant open table.</p>

  <hr>

{{ box_icon("img/GeneralLoopIcon64x64.png", "General", "General") }}

  <p>The <u>General</u> button lets you draw a roof plane of any shape, either in the plan view or in 3D space. To do this, you can use:</p>

  <p><b><u>Freehand drawing using the cursor (can also be used in 3D space)</u></b></p>
  <ul>
    <li><p>Edges can be drawn by free clicking in the modeling space.</p></li>
    <li><p>When drawing edges in the plan view, you can use functions to align the cursor to X and Y axes, or perpendicular to the last drawn edge.</p></li>
    <li><p><b>When drawing a roof plane in 3D space, you must use endpoints of already modeled roof surfaces and then change the plane type from PROJECTED -> GENERAL</b>.
  </ul>

{{ modal_video_button("img/VideoPlanes3D.mp4") }}

  <p><b><u>Global coordinates of polygon vertices</u></b></p>
  <ul>
    <li><p>Global coordinates for the next vertex are entered in the format "X;Y", e.g., <b>2;4</b></p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesGlobal.mp4") }}

  <p><b><u>Relative coordinates of polygon vertices</u></b></p>
  <ul>
    <li><p>Relative coordinates for the next vertex are entered in the format "@X;Y", e.g., <b>@2;4</b></p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesRelative.mp4") }}

  <p><b><u>Polar coordinates of polygon vertices</u></b></p>
  <ul>
    <li><p>Polar coordinates for the next vertex are entered in the format "&gt;alpha;L", e.g., <b>&gt;135;6</b></p></li>
    <li><p>The entered angle is measured from the positive direction of the global X axis counterclockwise.</p></li>
  </ul>

{{ modal_video_button("img/VideoPlanesPolar.mp4") }}

  <p>The last inserted point can be deleted using the <b><u>DELETE</u></b> key.</p>

  <hr>

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Rectangle", "Rectangle") }}

  <p>A rectangular roof plane can be created by clicking freely in the plan view or by entering its dimensions in the format "X;Y", e.g., <b>2;4</b>.</p>

  <hr>

{{ box_icons([
  ("img/ClassTriangleLoopIcon64x64.png", "Triangle"),
  ("img/ClassTrapezoidLoopIcon64x64.png", "Trapezoid"),
], "... and more", width=55, height=55, fontSize=10) }}

  <p>Roof planes of other shapes can be created directly by clicking in the modeling space, and then the dimensions can be edited in the editing table.</p>

  <hr class="main">

  <h2>Editing Roof Planes</h2>

  <p><b><u>You can open the editing table for the plane in the Geometry > Dimensions menu by clicking on the selected plane.</u></b></p>

  <p>The area can be copied, deleted, rotated in the plan view or in its plane, and also moved in all 3 directions using the buttons at the top of the table.</p>

{{ modal_video_button("img/VideoEditPlanes.mp4") }}

/// details | More options for editing roof planes
{{ include_md("__sub_Geometry_Dimension_Plane.md") }}
///

  <hr class="main">

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Opening", "Opening") }}

  <p>The <u>Opening</u> button allows you to insert an opening into a generated roof plane, which is drawn as a plan projection.</p>
  <p>The opening can be rectangular or of general shape, and can be given a type of opening for a chimney.</p>
  <p>A rectangular opening can be drawn by free clicking in the plan view or by entering its dimensions in the format "X;Y", e.g., <b>2;4</b>. A general opening can be drawn by free clicking or using coordinate systems similarly to the roof structure outline.</p>
  <p>Clicking on the given opening allows you to change its type, position, or delete it using the buttons at the top of the open table.</p>

{{ modal_video_button("img/VideoEditOpenings.mp4") }}



  <hr class="main">

{{ box_icon("img/PreviewGeometry64x64.png", "Connect", "Connect") }}

  <p>The <u>Connect</u> button is used to set the maximum distance between points that can be considered identical. The generator then merges points that meet the specified maximum distance.</p>

  <p><b><u>Editing the scale of the imported base</u></b></p>
  <ul>
    <li><p>After clicking on the imported base, you can change the scale directly in the relevant cell in the open table.</p></li>
    <li><p>To adjust the scale, you can also use the <u>Scale</u> button, located at the top of the open table. With this button, you can set the base scale using a selected edge for which you know its actual dimensions.</p></li>
  </ul>

  <hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Annotation", "Annotation") }}

  <p>The <u>Annotation</u> button allows you to add arbitrary plan dimensions to the model.</p>

  <hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Measure", "Measure") }}

  <p>The <u>Measure</u> button allows you to check the model dimensions.</p>

  <hr class="main">

{{ box_icon("img/MainInsert64x64.png", "Add", "Add") }}

  <p>The <u>Add</u> button lets you add additional (secondary) roof structures to the model space.</p>
  <ul>
    <li><p>A roof defined by outline</p></li>
    <li><p>Another roof modeled by planes</p></li>
  </ul>

  <hr class="main">

<!-- product: HiStruct Roofs -->