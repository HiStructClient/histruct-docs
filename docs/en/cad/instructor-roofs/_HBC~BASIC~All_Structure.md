---
sourceLang: cs
sourceHash: cdd13ef6b0d5e2a95bbcf2917407213a
autoTranslated: true
---

<h1>Structure</h1>

<p>The <u><i>Structure</i></u> menu allows you to set the parameters of the primary load-bearing structure, adjust materials and cross-sections of elements, and add wall and roof bracings.</p>

<p>Settings and modifications for the entire primary structure can be performed by clicking the <b><u>Control Button</u></b> in the center of the model.</p>

<p><b><u>Clicking on a selected element of the load-bearing structure</u></b> allows you to edit the properties for the entire group to which the element belongs.</p>

<p>If you want to edit only a single selected element, you need to click its <b><u>Edit Button</u></b> and remove it from its group.</p>

<p>By clicking the <b><u>In-plane Bracing</u></b> button, you can add a bracing to the respective part of the wall or roof. You can then set its material, cross-section, geometry, and arrangement within the given plane. Modifications to individual bracing sections can be made directly by clicking on the respective member. It is possible to add multiple types of bracings within the same plane.</p>

<hr class="main">

{{ box_icon("img/MainSettings64x64.png", "Settings", "Settings", fontSize=12) }}

<p>...The functionality of the <u>Settings</u> button is being prepared for a future version of the program...</p>

<hr class="main">

{{ box_icon("img/ControlButton.png", "", "Control Button", width=64) }}

<p><b><u>The Control Button in the middle of the model allows you to set:</u></b></p>
<ul>
  <li><p>Type of primary structure.</p></li>
  <li><p>Type of beam used for the roof overhang.</p></li>
  <li><p>Minimum length for the roof overhang.</p></li>
  <li><p>Vertical position of the column base.</p></li>
  <li><p>Generation of compression stiffeners if the user wants to use them in the structure.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/EditButton.png", "", "Edit Button", width=64) }}

<p><b><u>For individual elements of the primary structure, it allows:</u></b></p>
<ul>
  <li><p>Setting whether the element should be part of the default group of elements.</p></li>
</ul>

<p>If the element is removed from the given group, it can be further edited independently from the original group. Depending on the type of element, you can further modify its material, cross-section, tapers, base location, or activate ties.</p>

<hr class="main">

{{ box_icon("img/StiffenerButton.png", "", "In-plane Bracing", width=64) }}

<p><b><u>For individual roof or wall planes, it allows:</u></b></p>
<ul>
  <li><p>Add a bracing to the respective part of the wall or roof, and then set its material, cross-section, geometry, and arrangement within the given plane.</p></li>
  <li><p>Modifications to individual bracing sections can be made directly by clicking on the respective member.</p></li>
  <li><p>Multiple types of bracings can be added within the same plane.</p></li>
</ul>

<hr class="main">

<!-- product: HiStruct Building Configurator -->