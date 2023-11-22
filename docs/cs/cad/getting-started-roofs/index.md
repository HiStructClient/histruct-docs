
# HiStruct pro střechaře

HiStruct je webová aplikace, která umožňuje snadnou spolupráci či sdílení projektu nebo jeho částí. Takto umožníte náhled na 3D model střechy koncovému zákazníkovi, spolupracujete na projektu s kolegou nebo montážní firmou.
Slouží k rychlému sestavení nabídky, výkazu materiálu a kladečských plánů pro střešní krytiny, oplechování, lemovky a okapové systémy. Systém umožňuje několik módů zadání, které zvyšují efektivitu při práci s projektem.

## Jak zpracovat poptávku střechy v HiStruct?

1. Založím projekt s mapou nebo bez
1. Namodeluji střešní plochy překreslením nebo si pomůžu importem
1. Upravím vygenerované kladení
1. Navolím lemovky a okapový systém nebo jej nechám automaticky vygenerovat
1. Kusovníky, dokumenty, výkresy


Hotovo, jdu na kávičku 😊

HiStruct lze rozsáhle přizpůsobit. Systém kladení střešních tvarovek, lemovek, oplechování a okapového systému je nastaven pro každého konkrétního výrobce zvlášť v samostatné sadě konfiguračních souborů. Obsahuje informaci o tom, jakým způsobem je třeba střešní plochu tvarovkami vyskládat, dále možné barevné kombinace, informace k výkazu materiálu a další. Tato a další přizpůsobení děláme v rámci [projektu pro přizpůsobení](customisationProject.md).

## A teď podrobněji...

### 1. Založení projektu - s mapou nebo bez

Zpracováváte novou poptávku. První co chcete udělat, je založit nový projekt. Projekt je místo, které může obsahovat jednu nebo více komponent - 3D modelů, tedy konfigurací, variant nebo částí. Stránka s projekty má dva pohledy. Defaultní pohled je prostý výpis založených projektů s komponentami. Pokud chcete u projektu ukládat i umístění, můžete využít mapový pohled na projekty, kde lze zadat i umístění z mapy.

### 2. Modelování střešních ploch

Začínáme většinou **volbou typu krytiny, lemovek a okapového systému** (ta lze měnit) z knihoven. Následuje tvorba modelu střechy z jednotlivých střešních rovin, případně pomocí pokročilejších metod modelování. Vhodný způsob modelování závisí na dostupných podkladech pro konkrétní poptávku. Platí, že čím kvalitnější jsou podklady, tím efektivněji lze provést samotný proces modelování.

#### **Mám jen pár náčrtků s rozměry 😊**

Pokud je tvar střechy jednoduchý, můžete jej [modelovat](modellingRoofs.md) vkládáním střešních ploch s předdefinovanými tvary nebo vytvořit obecný tvar střešní plochy v modelovacím prostoru. V režimu obecného zadání se využívá trasování a dalších známých nástrojů pro zadávání, podobně jako v ostatních CAD programech. Pokud je znám sklon, je možné střešní roviny naotáčet a naposouvat v prostoru tak, aby odpovídaly skutečnému tvaru střechy. Pokud se podaří sestavit střechu v prostoru s dostatečnou přesností, lze použít  [generátor lemovek a okapového systému](roofFlashingGenerator.md).

#### **Mám vektorový výkres půdorysu střechy 😊😊**

Pokud máte k dispozici vektorový výkres, bude se vám modelovat snadněji. Do HiStruct lze importovat [soubory ve formátu *.dxf](importDxf.md), případně převést vektorové[ *.pdf na *.dxf](convertPdfToDxf.md) a to [naimportovat do HiStruct](importDxf.md). Importované *.dxf umožňuje snadné přichytávání a zadávání jednotlivých střešních ploch oklikáním půdorysu s možností doplnění sklonu pro každou střešní plochu. Výhodou je přesnost a snadné zhotovení 3D modelu. Téměř vždy lze použít [generátor lemovek a okapového systému](roofFlashingGenerator.md).

#### **Mám 3D model z digitálního zaměření 😊😊😊**

Model z digitálního zaměření je výhra. Pokud máte tento model ve vhodném formátu (3D *.pdf nebo přímo *.obj), můžete geometrii rovnou importovat. Do HiStruct lze [importovat *.obj](importObj.md), případně [převést 3D *.pdf na *.obj](convert3dPdfToObj.md) a to [naimportovat do HiStruct](importObj.md).

Po importu HiStruct nabídne rozpoznané plochy, ze kterých vyberete, jak se mají převést na HiStruct geometrii. [Generátor ploch](roofPolygonGenerator.md) pak provede převod na střešní nebo stěnové opláštěné plochy, na kterých lze dále postupovat běžným způsobem.

Po vygenerování střešních ploch můžete použít ještě [generátor lemovek a okapového systému](roofFlashingGenerator.md). Tento způsob zadání je téměř bezpracný.

#### **Jednoduchý tvar 😊😊😊**

Obdélníkové typy střech na stále oblíbenější bungalovy jsou v HiStruct dostupné přímo jako celá budova, která se automaticky opláští zvolenou krytinou a olemuje tvarovkami.

### 3. Kladení střešní krytiny

Knihovny krytin a lemovek pro nás znamenají nejen velikost a barvu, ale celý přístup k opláštění konkrétních střešních ploch. Do knihovny jsme díky variabilnímu generátoru schopni zanést konkrétní montážní postup dané krytiny konkrétního výrobce. Toto děláme v rámci [projektu přizpůsobení](customisationProject.md). Kvalitně vytvořený generátor následně eliminuje nutné zásahy do automatického kladení.

[Kladení střeních tvarovek](roofPolygonTillingOptions.md) probíhá automaticky podle konfiguračního nastavení krytiny. Dále je možné upravovat počátek kladení (zleva, zprava, střed na osu, střed na hranu panelu) tak, aby byl dosažen nejmenší možný prořez. Informace o poměru prořezu k ploše střešní roviny jsou zobrazeny během úprav kladení.

### 4. Jak na lemovky a okapový systém?

[Oplechování, lemovky](roofFlashingOptions.md) a [okapový systém](roofFlashingGutterOptions.md) lze samozřejmě zadávat kamkoliv do prostoru chytáním na již zadané střešní plochy, importovanou geometrii nebo jiné objekty. Navíc je možné využít přidávání lemovek na jednotlivé strany střešních rovin, nebo si práci usnadnit [generátorem nad skupinou střešních rovin](roofFlashingGenerator.md). U generovaných prvků se automaticky nastavuje sklon souvisejících střešních rovin, a tak se správně nastaví ohýbací úhly lemovek a háků okapového systému.

HiStruct obsahuje komplexní možnosti [nastavení okapového systému](roofFlashingGutterOptions.md). Zadání pomocí polylinie definující navazující okap, lze nastavit sklon okapu. Pro každou část okapu nastavíme i sklon navazující střešní roviny pro správný výpočet ohybu a délky háků. Na každou část okapu lze přidat svody, které mají další [možnosti nastavení](roofFlashingGutterOptions.md).

### 5. Kusovníky, dokumenty, výkresy... prostě výstupy

**Kusovník**
[Kusovník](roofBom.md) se vytváří automaticky z částí střechy vložených do modelového prostoru. Jednotlivé části modelu mají u sebe informaci z jakých částí jsou vytvořeny s možností úpravy počtu a případného přidávání dalších položek.

Způsob generování kusovníku pak může být upraven v rámci [projektu přizpůsobení](customisationProject.md).

**Nabídka**
Generovaný kusovník doplněný napojením na ceník výrobce může být součástí [nabídky](roofQuote.md). Nabídku lze však připravit i bez kusovníku. Způsob generování nabídky pak může být upraven v rámci [projektu přizpůsobení](customisationProject.md).

**Kladecí plány**
[Kladečské výkresy](roofPolygonTillingDrawing.md) jsou generovány automaticky ze zadané geometrie a případných změn uživatele. V případě potřeby lze výkres doplnit dalšími poznámkami či kótami.

![example of roof tilling drawing](img\roofTillingPlane1.png)
![example of roof tilling drawing](img\roofTillingPlane2.png)
