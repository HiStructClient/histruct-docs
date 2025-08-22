
<h1>Opláštění &gt; Stěna</h1>

<p>V menu <u><i>Opláštění > Stěna</i></u> je možné nastavit typ výroby stěny, kladení řad opláštění a výšku soklu. Taktéž je zde možné upravit jednotlivé vrstvy opláštění.</p>

<p>U jednotlivých stěn je navíc možné upravovat barevné schéma a materiály jednotlivých vrstev opláštění. Také je zde možné generovat kusovník s položkami opláštění nebo pohled na stěnu ve formě editovatelného výkresu.</p>

<p><b>Nastavení a úpravy jednotlivých stěnových rovin je možné provést pomocí <u>Ovládacích a Editačních tlačítek</u>.</b></p>

<ul>
  <li><p>Přes <u>Ovládací tlačítka</u> v modelu je možné nastavit typ opláštění stěny, typ a rozměry prvků sekundární konstrukce zvlášť pro jednotlivé stěnové roviny, taktéž umožňují vytvářet výkazy materiálů a výkresy stěnové konstrukce.</p></li>
  <li><p>Přes <u>Editační tlačítka</u> v modelu je možné editovat vlastnosti jednotlivých vrstev stěnové konstrukce na určené stěnové rovině, taktéž umožňují vytvářet výkazy materiálů a výkresy příslušných vrstev stěnové konstrukce.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/EditPropertiesIcon64x64.png", "Rozvržení", "Rozvržení") }}

<p>Tlačítko <u>Rozvržení</u> umožňuje nastavit typ výroby, kladení řad opláštění a výšku soklu.</p>

<hr class="main">

<h2>Nastavení vrstev opláštění stěny</h2>

<p>Nastavení skladby střešní konstrukce se provádí pomocí tlačítek:</p>

<ul>
  <li><p><u>Vrchní vrstva</u></p></li>
  <li><p><u>Vnitřní vrstvy</u></p></li>
  <li><p><u>Sokl</u></p></li>
</ul>

<p>
Pro některé typy opláštění může být v defaultním stavu tlačítko <u>Vnitřní vrstvy</u> schované a sekundární konstrukce pak pro takový typ opláštění není generována.
</p>

<p>Tlačítko <u>Sokl</u> je dostupné podle typu výroby stěny nastavené v <u>Rozvržení</u>.

<hr>

{{ box_icon("img/RoofTopLayer_64x64.png", "Vrchní vrstva", "Vrchní vrstva", fontSize=10) }}
<ul>
  <li><p>Umožňuje výběr materiálu opláštění z připravené galerie výrobků.</p></li>
</ul>

<hr>

{{ box_icon("img/RoofLowerLayers_64x64.png", "Vnitřní vrstvy", "Vnitřní vrstvy", fontSize=10) }}
<ul>
  <li><p>Umožňuje výběr typu skladby sekundární konstrukce z připravené galerie výrobků.</p></li>
</ul>

<hr>

{{ box_icon("img/WallPartLayerIcon64x64.png", "Sokl", "Sokl", fontSize=10) }}
<ul>
  <li><p>Umožňuje výběr materiálu soklu z připravené galerie výrobků.</p></li>
</ul>

<hr class="main">

{{ box_icon("img/ControlButton.png", "", "Ovládací tlačítko", width=64) }}

<p><b><u>Pro jednotlivé střešní roviny umožňuje:</u></b></p>
<ul>
  <li><p>Nastavení typu skladby střechy - typu krytiny a sekundární konstrukce.</p></li>
  <li><p>Generování kusovníku s položkami střešní krytiny a také generování půdorysu střešní konstrukce se všemi vrstvami ve formě editovatelného výkresu.</p></li>
</ul>

/// details | Funkce pro STŘECHU přístupné přes Ovládací tlačítko
{{ include_md("__sub_Sheeting_RoofPlane.md") }}
///


<p><b><u>Pro jednotlivé stěnové roviny umožňuje:</u></b></p>
<ul>
<li><p>Nastavení typu výroby stěny, způsobu kladení řad opláštění, výšku soklu nebo barevné schéma.</p></li>
<li><p>Nastavení materiálu stěny a úpravu jednotlivých vrstev opláštění podle typu výroby stěny.</p></li>
<li><p>Generování kusovníku s položkami opláštění stěny a pohledu na stěnu ve formě editovatelného výkresu.</p></li>
</ul>

/// details | Funkce pro STĚNU přístupné přes Ovládací tlačítko
{{ include_md("__sub_Sheeting_WallPlane.md") }}
///


<hr class="main">

{{ box_icon("img/EditButton.png", "", "Editační tlačítko", width=64) }}

<p><b><u>Pro jednotlivé vrstvy skladby střechy na určené střešní rovině umožňuje:</u></b></p>
<ul>
  <li><p>Nastavení typu krytiny nebo jednotlivých vrstev sekundární konstrukce včetně rozměrů, směru kladení, taktéž úpravu pozice a úhlu kladení.</p></li>
  <li><p>Generování půdorysu příslušné vrstvy střešní konstrukce ve formě editovatelného výkresu.</p></li>
  <li><p>Pro střešní krytinu je možné také vygenerovat výkaz materiálu s položkami střešní krytiny.</p></li>
</ul>

/// details | Funkce pro STŘECHU přístupné přes Editační tlačítko
{{ include_md("__sub_Sheeting_RoofLayer.md") }}
///


<hr class="main">


<p><b><u>Pro jednotlivé vrstvy skladby opláštění na určené stěnové rovině umožňuje:</u></b></p>
<ul>
<li><p>Nastavení materiálu opláštění nebo jednotlivých vrstev sekundární konsturkce či soklu, dále nastavení směru kladení, taktéž úpravu pozice a úhlu kladení opláštění.</p></li>
<li><p>Úpravu barevného schématu opláštění, prodloužení přesahů opláštění.</p></li> 
<li><p>Generování výkresu příslušné vrstvy stěnové konstrukce ve formě editovatelného výkresu.</p></li>
<li><p>Pro vrstvu vnějšího opláštění je možné také vygenerovat výkaz materiálu s položkami.</p></li>
</ul>

/// details | Funkce pro STĚNU přístupné přes Editační tlačítko
{{ include_md("__sub_Sheeting_WallLayer.md") }}
///


<hr class="main">

<h2>Chybí vám v galerii některá krytina? Napište nám, doplníme ji.</h2>
<a href="mailto:jiri.podval@histruct.com?subject=Dotaz na HiStruct konfigurátor budov" class="btn">
  Chci doplnit
</a>

<!-- product: HiStruct Building Configurator -->

