
<h1>Opláštění</h1>

<p>Menu <u><i>Opláštění</i></u> umožňuje nastavit typ skladby střechy, typ střešní krytiny a rozměry sekundární střešní konstrukce.</p>
<p>U stěn pak lze nastavit typ výroby stěny a materiál jednotlivých vrstev stěny.</p>
<p><b>Nastavení a úpravy jednotlivých střešních a stěnových rovin je možné provést pomocí <u>Ovládacích a Editačních tlačítek</u>.</b></p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/RoofSketchIcon64x64.png" alt="RoofSketchIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
          Střecha
        </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Střecha
    </td>
  </tr>
</table>

<p>Tlačítko <u>Střecha</u> umožňuje nastavit typ skladby střechy, typ střešní krytiny a rozměry sekundární střešní konstrukce pro celou střechu.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/WallIcon64x64.png" alt="WallIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
          Stěny #.#
        </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Stěny #.#
    </td>
  </tr>
</table>

<p>Tlačítko <u>Stěny #.#</u> umožňuje nastavit typ výroby stěny, způsob kladení řad opláštění a výšku soklu.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/DimensionLinearIcon64x64.png" alt="DimensionLinearIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
          Anotace
        </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Anotace
    </td>
  </tr>
</table>

<p>Tlačítko <u>Anotace</u> umožňuje do modelu přidávat libovolné půdorysné kóty.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/TapeMeasureIcon64x64.png" alt="TapeMeasureIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
          Měření
        </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Měření
    </td>
  </tr>
</table>

<p>Tlačítko <u>Měření</u> umožňuje zkontrolovat rozměry modelu.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td><img src="img/ControlButton.png" alt="ControlButton.png" width="64"></td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Ovládací tlačítko</td>
  </tr>
</table>

<p><b><u>Pro jednotlivé střešní roviny umožňuje:</u></b></p>
<ul>
  <li><p>Nastavení typu skladby střechy - typu krytiny a sekundární konstrukce.</p></li>
  <li><p>Generování kusovníku s položkami střešní krytiny a také generování půdorysu střešní konstrukce se všemi vrstvami ve formě editovatelného výkresu.</p></li>
</ul>

<details>  <summary>
    <span>Funkce pro STŘECHU přístupné přes Ovládací tlačítko</span>
  </summary>
{{ include_md("__sub_Sheeting_RoofPlane.md") }}
</details>

<p><b><u>Pro jednotlivé stěnové roviny umožňuje:</u></b></p>
<ul>
<li><p>Nastavení typu výroby stěny, způsobu kladení řad opláštění, výšku soklu nebo barevné schéma.</p></li>
<li><p>Nastavení materiálu stěny a úpravu jednotlivých vrstev opláštění podle typu výroby stěny.</p></li>
<li><p>Generování kusovníku s položkami opláštění stěny a pohledu na stěnu ve formě editovatelného výkresu.</p></li>
</ul>

<details>  <summary>
    <span>Funkce pro STĚNU přístupné přes Ovládací tlačítko</span>
  </summary>
{{ include_md("__sub_Sheeting_WallPlane.md") }}
</details>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td><img src="img/EditButton.png" alt="EditButton.png" width="64"></td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Editační tlačítko</td>
  </tr>
</table>

<p><b><u>Pro jednotlivé vrstvy skladby střechy na určené střešní rovině umožňuje:</u></b></p>
<ul>
  <li><p>Nastavení typu krytiny nebo jednotlivých vrstev sekundární konstrukce včetně rozměrů, směru kladení, taktéž úpravu pozice a úhlu kladení.</p></li>
  <li><p>Generování půdorysu příslušné vrstvy střešní konstrukce ve formě editovatelného výkresu.</p></li>
  <li><p>Pro střešní krytinu je možné také vygenerovat výkaz materiálu s položkami střešní krytiny.</p></li>
</ul>

<details>  <summary>
    <span>Funkce pro STŘECHU přístupné přes Editační tlačítko</span>
  </summary>
{{ include_md("__sub_Sheeting_RoofLayer.md") }}
</details>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->


<p><b><u>Pro jednotlivé vrstvy skladby opláštění na určené stěnové rovině umožňuje:</u></b></p>
<ul>
<li><p>Nastavení materiálu opláštění nebo jednotlivých vrstev sekundární konsturkce či soklu, dále nastavení směru kladení, taktéž úpravu pozice a úhlu kladení opláštění.</p></li>
<li><p>Úpravu barevného schématu opláštění, prodloužení přesahů opláštění.</p></li> 
<li><p>Generování výkresu příslušné vrstvy stěnové konstrukce ve formě editovatelného výkresu.</p></li>
<li><p>Pro vrstvu vnějšího opláštění je možné také vygenerovat výkaz materiálu s položkami.</p></li>
</ul>

<details>  <summary>
    <span>Funkce pro STĚNU přístupné přes Editační tlačítko</span>
  </summary>
{{ include_md("__sub_Sheeting_WallLayer.md") }}
</details>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Chybí vám v galerii některá krytina? Napište nám, doplníme ji.</h2>
<a href="mailto:jiri.podval@histruct.com?subject=Dotaz na HiStruct konfigurátor budov" class="btn">
  Chci doplnit
</a>

<!-- product: HiStruct Building Configurator -->

