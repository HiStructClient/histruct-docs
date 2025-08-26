---
sourceLang: cs
sourceHash: 19017a56dfc9ae4a019d2573ec46eee8
autoTranslated: true
---

# Geometry
<p>The <u><i>Geometry</i></u> menu in the first step allows you to import a "<b>.obj</b>" file for rapid generation of roof planes.</p>

<p><b>For a clearer workflow, the content of the <u>Geometry</u> menu differs before and after importing a model in .obj format.</b></p>

<p>After importing a 3D object, further steps allow you to change the settings of the edge and face generator, modify dimensions and slopes of the generated edges and faces using the ROSOL solver.</p>
<p><b><u>Control buttons</u> adjust the roof structure properties only on the selected roof plane.</b></p>

<hr class="main">

//// details | PHASE 1: I want to import a .obj file

# Geometry

<h2>Converting a file to ".obj" format</h2>
<p>If you have your data in a compressed folder (such as ".zip"), you need to extract this file and convert it to ".obj" format if necessary.</p>

<p>For detailed instructions on how to convert a file to .obj format, please read our blog.</p>

<h2>Is a specific roofing material missing from the gallery? Let us know and we'll add it.</h2>
<a href="" target="_blank" rel="noopener noreferrer" class="btn">
  Visit blog
</a>

<hr class="main">

{{ box_icon("img/ImportObjIcon64x64.png", "SoCol*.obj", "Import from SoCol service") }}

<p>Allows importing an .obj file acquired from the SoCol service.</p>
<p>File insertion into the model needs to be confirmed by clicking or pressing ENTER.</p> 

<p>After importing the base, you should check its dimensions and adjust the scale if necessary.</p>

<p><b><u>Adjusting the scale of the imported base</u></b></p>

<ul>
<p><li>
After clicking the <u><i>Import > Settings</i></u> button, you can change the scale directly in the relevant cell in the open table.
</li></p>

{{ modal_video_button("img/VideoImportOBJ.mp4") }}

<p><li>
You can also use the <u>Scale</u> button located at the top of the open table to adjust the scale. With this button, you can set the scale for the base using a selected edge whose real-life dimension you know.
</li></p>

{{ modal_video_button("img/VideoImportDXF.mp4") }}

</ul>

<hr class="main">

{{ box_icon("img/ImportObjIcon64x64.png", "Rexplorer*.obj", "Import from Rexplorer service", fontSize=10) }}

<p>Allows importing an .obj file acquired from the Rexplorer service.</p>
<p>File insertion into the model needs to be confirmed by clicking or pressing ENTER.</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Anotate", "Anotate") }}

<p>The <u>Anotate</u> button enables you to add any ground plan dimensions to the model.</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Measure", "Measure") }}

<p>The <u>Measure</u> button allows you to check the dimensions of the model.</p>

////

<hr class="main">

//// details | PHASE 2: After importing a .obj file

# Geometry

<h2>Editing model geometry after import</h2>
<p>Immediately after inserting the model, you can adjust the scale of the imported model and change the settings of the generated edges and faces in the table on the left. The same adjustments can later be made using the <b><u>Import &gt; Settings</u></b> button.</p>

<hr class="main">

{{ box_icon("img/Sheated_Building_Page_Building.png", "Import", "Import") }}
<p>Allows you to adjust the scale of the imported model and customize the parameters of the roof plane generator.</p>

<hr class="main">

<!--{{ box_icon("img/RoofSketchIcon64x64.png", "Roof", "Roof") }}
<p>The <u>Roof</u> button lets you set the roof structure type. The type of covering and secondary roof structure dimensions can be changed using the <u>Sheeting</u> button.</p>

<hr class="main">-->

{{ box_icon("img/ImportObjIcon64x64.png", "Rosol", "Rosol") }}
<p>Allows you to modify the dimensions and slopes of generated edges and faces, change the height, and if necessary, the eccentricity of the roof.</p>

<hr class="main">

{{ box_icon("img/PvgisIcon64x64.png", "Performance", "Performance", fontSize=10) }}

<p>
Allows you to evaluate the potential solar radiation output on each roof surface.
</p>

<p>
...Functionality of the <u>Performance</u> button is planned for a future program version...
</p>

<hr class="main">

{{ box_icon("img/DimensionLinearIcon64x64.png", "Anotate", "Anotate") }}
<p>The <u>Anotate</u> button enables you to add any ground plan dimensions to the model.</p>

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Measure", "Measure") }}
<p>The <u>Measure</u> button allows you to check the dimensions of the model.</p>

////

<hr class="main">

<!-- product: HiStruct Roofs -->