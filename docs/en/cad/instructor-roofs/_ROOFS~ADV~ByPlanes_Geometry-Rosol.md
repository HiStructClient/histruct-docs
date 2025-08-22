---
sourceLang: cs
sourceHash: 65421b7b60dae450b0e31064fa30928c
autoTranslated: true
---

<h1>Geometry &gt; Rosol</h1>

<p>
In the <u><i>Geometry &gt; Rosol</i></u> menu, you can adjust the dimensions and slopes of generated edges and surfaces using the ROSOL solver.
</p>

<hr class="main">

<h2>Editing the geometry of roof edges and surfaces using the ROSOL solver</h2>

<p>
After adjusting the generator settings in the <u><i>Geometry &gt; Import</i></u> menu, we now have generated roof edges and planes with the corresponding dimensions and slopes.
</p>

<p>
Directly in the model, it is now possible to edit the type, length, and optionally force the horizontality of roof edges; for roof surfaces, you can modify their slope. 
</p>
<p>
<b>Edits can be made in the table that opens after clicking on the respective edge or surface.</b>
</p>

<p>
<b>Some modifications may be incompatible with acceptable results from the solver, and such changes cannot be made.</b>
</p>

<p>
By editing the geometry of individual edges and surfaces, the geometry of the entire model is changed. Dimensions you want to keep can be locked using the lock symbol.
</p>

<hr class="main">

{{ box_icon("img/RoofLiftIcon64x64.png", "Lift", "Lift") }}

With the <u>Lift</u> button, you can adjust the height of the modeled object's walls.

<hr class="main">

{{ box_icon("img/RoofEccentricityIcon64x64.png", "Eccentricity", "Eccentricity") }}

With the <u>Eccentricity</u> button, you can offset the roof structure outside the generated roof plane by a specified value.

<hr class="main">

{{ box_icon("img/LockIcon64x64.png", "Locks", "Locks") }}

With the <u>Locks</u> button, you can lock or unlock the slopes of all roof planes.

<hr class="main">

{{ box_icon("img/StartOverIcon64x64.png", "Restart", "Restart") }}

With the <u>Restart</u> button, you can delete all user modifications of the geometry and return to the original solver result.

<hr class="main">

{{ box_icon("img/TapeMeasureIcon64x64.png", "Measure", "Measure") }}

With the <u>Measure</u> button, you can check the model's dimensions.

<hr class="main">

<!-- product: HiStruct Roofs -->