---
sourceLang: cs
sourceHash: a920f831af0b17d2f48bfd56ba360dae
autoTranslated: true
---

<h1>Structure</h1>

<p>The <u><i>Structure</i></u> menu allows you to set the parameters of the primary load-bearing structure, modify materials and cross-sections of elements, and add wall and roof bracings.</p>
<p>Settings and modifications for the entire primary structure can be performed by clicking the <b><u>Control Button</u></b> in the center of the model.</p>
<p><b><u>Clicking on a selected element of the load-bearing structure</u></b> edits the properties for the entire group to which the given element belongs.</p>
<p>If you want to edit only a single selected element, you need to click its <b><u>Edit Button</u></b> and exclude it from its group.</p>
<p>By clicking the <b><u>In-plane Bracing</u></b> button, you can add a bracing to the respective part of the wall or roof, for which you can subsequently set the material, cross-section, geometry, and distribution within the given plane. You can adjust individual sections of bracings directly by clicking the given member. You can add multiple types of bracings within the same plane.</p>

<hr class="main">

<p>
{{ box_icon("img/MainSettings64x64.png", "Settings", "Settings") }}
</p>

<p>...The functionality of the <u>Settings</u> button is being prepared for a future version of the program...</p>

<hr class="main">

<p>
{{ box_icon("img/ControlButton.png", "", "Control Button", width=64) }}
</p>

<p><b><u>The control button in the center of the model allows you to set:</u></b></p>
<ul>
  <li><p>The type of primary structure.</p></li>
  <li><p>The type of beam used for the roof overhang.</p></li>
  <li><p>The minimum length for the roof overhang.</p></li>
  <li><p>The height positioning of the column base.</p></li>
  <li><p>Generation of compression struts if the user wants to use them in the structure.</p></li>
</ul>

<hr class="main">

<p>
{{ box_icon("img/EditButton.png", "", "Edit Button", width=64) }}
</p>

<p><b><u>For individual elements of the primary structure, it allows you to:</u></b></p>
<ul>
  <li><p>Set whether the element should be part of the default group of elements.</p></li>
</ul>
<p>If an element is removed from the group, it can then be further edited independently of the original group. Depending on the type of element, you can further modify its material, cross-section, tapers, base placement, or activate tension rods.</p>

<hr class="main">

<p>
{{ box_icon("img/StiffenerButton.png", "", "In-plane Bracing", width=64) }}
</p>

<p><b><u>For individual roof or wall planes, it allows you to:</u></b></p>
<ul>
  <li><p>Add a bracing to the relevant part of the wall or roof, for which you can then set the material, cross-section, geometry, and distribution within the given plane.</p></li>
  <li><p>You can adjust individual bracing sections directly by clicking the given member.</p></li>
  <li><p>Multiple types of bracings can be added to the same plane.</p></li>
</ul>

<hr class="main">

<!-- product: HiStruct Building Configurator -->