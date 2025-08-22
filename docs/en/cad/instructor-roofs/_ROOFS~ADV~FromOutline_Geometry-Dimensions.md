---
sourceLang: cs
sourceHash: c053dfed4fd74f09a4ab3ffd51368819
autoTranslated: true
---

<h1>Geometry &gt; Dimensions</h1>
<p>Allows you to change the geometric parameters of the model, i.e., the dimensions of the eaves edges, the slope, and overhang of the roof. It is also possible to adjust the height of the entire roof structure.</p>

<hr class="main">

<h2>Editing Individual Edges</h2>
<p><b>By clicking on the respective eaves edge, you can set the type of edge, adjust its length, set the slope of the corresponding roof section, and its overhang.</b></p>

{{ modal_video_button("img/VideoEditEdges.mp4") }}

<hr class="main">

{{ box_icon("img/ImportDxfIcon64x64.png", "Background", "Background") }}

<p>The <u>Background</u> button is used to import a background for faster roof outline drawing.</p> 

<p>After importing the background, you need to check its dimensions and adjust the scale if necessary.</p>

<p><b><u>Adjusting the Scale of the Imported Background</u></b></p>

<ul>
<p><li>
After clicking on the grid of the imported background, you can change the scale directly in the relevant cell in the open table. 
</li></p>

<p><li>
To adjust the scale, you can also use the <u>Scale</u> button, which is located at the top of the open table. Using this button, you can set the scale of the background based on a selected edge whose actual dimensions are known.
</li></p>
</ul>

{{ modal_video_button("img/VideoImportDXF.mp4") }}

<hr class="main">

{{ box_icon("img/ClassRectLoopIcon64x64.png", "Opening", "Opening") }}

<p>With the <u>Opening</u> button, you can insert an opening into the generated roof plane; it is drawn as a planar projection.</p>
<p>The opening can be rectangular or of a general shape, and you can assign it an opening type for a chimney.</p>
<p>A rectangular opening can be entered by freely clicking in the plan view or by specifying its dimensions in the "X;Y" format, e.g., <b>2;4</b>. A general-shaped opening can be drawn by free clicking or using coordinate systems, similar to the outline of the roof structure.</p>
<p>After clicking on the respective opening, you can use the buttons at the top of the open table to change its type, position, or delete it.</p>

{{ modal_video_button("img/VideoEditOpenings.mp4") }}

<hr class="main">

{{ box_icon("img/SetSlopeIcon64x64.png", "Slope", "Slope") }}

<p>The <u>Slope</u> button allows you to set the same slope for all roof planes.</p>

<hr class="main">

{{ box_icon("img/RoofLiftIcon64x64.png", "Lift", "Lift") }}

<p>The <u>Lift</u> button allows you to adjust the height of the walls of the modeled object.</p>

<hr class="main">

{{ box_icon("img/EditPropertiesIcon64x64.png", "Properties", "Properties") }}

<p>Allows you to adjust the method for entering geometry; depending on the settings, you can draw the outline of the roof or the walls.</p>
<p>It is also possible to set the blending of roof planes between individual objects here.</p>

<hr class="main">

{{ box_icon("img/DeleteIcon64x64.png", "Delete", "Delete") }}

<p>Deletes all imported backgrounds and roof structures drawn using the <u>Outline</u> function.</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Annotation", "Annotation") }}

<p>The <u>Annotation</u> button allows you to add any plan dimensions to the model.</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Measure", "Measure") }}

<p>With the <u>Measure</u> button, you can check the dimensions of the model.</p>

<hr class="main">

{{ box_icon("img/MainInsert64x64.png", "Add", "Add") }}

<p>The <u>Add</u> button allows you to add additional (secondary) roof structures to the model space.</p>
<ul>
  <li><p>Another roof defined by an outline</p></li>
  <li><p>A roof drawn using roof planes</p></li>
</ul>

<hr class="main">

<!-- product: HiStruct Roofs -->