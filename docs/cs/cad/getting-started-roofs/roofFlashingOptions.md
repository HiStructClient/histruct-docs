# Oplechování střechy

Oplechování střech a doplnění lemovek ke střešnímu návrhu jsou klíčovou součástí kvalitního návrhu střechy, bez kterých nelze správně nacenit střešní projekt. V HiStruct máte k dispozici dvě možnosti: můžete ručně přidávat lemovky ke každé straně střešní roviny nebo využít [generátor střešního oplechování](roofFlashingGenerator.md) pro celou skupinu střešních rovin. Modelování jednotlivých lemovek a oplechování je jednoduché, a já vám ihned ukážu, jak na to.

## Zadání oplechování

Nejsnazším způsob vymodelování lemovek je spuštění [generátor střešního oplechování](roofFlashingGenerator.md) a následná úprava jednotlivých prvků. Ovšem veškeré oplechování střechy je možné zadávat také pomocí [polyline](polylineInput.md), která určuje hranu střechy na které má být požadované oplechování.

## Úprava geometrie oplechování

Veškeré vložené oplechování je možné upravit z hlediska geometrie. je možné jednak posunout vrcholy polyline a tím změnit polohu lemovek. U některých lemovek je možné také změnit úhel ohybu jednotlivých částí. Toto všechno generátor dělá automaticky. Ale pokud je potřeba je možné to změnit kliknutím na tlačítko *Upravit* a tlačítkem * Geometrie* upravit úhel či polohu polyline.

### Úprava úhlu

Změna úhlu se provede kliknutím na šipku, která představuje normálu plochy na kterou lemovka navazuje. 

![Alt text](img/flashingEditAngle.png)

Po kliknutí na šipku je nutné kliknout na ikonu kurzoru a poté myší vybrat plochu na kterou má lemovka navazovat.

![Alt text](img/flashingEditAngleStep2.png)

### Úprava polohy

Změna polohy se provede stejným způsobem jako změna geometrie [polyline](polylineInput.md).

## Výběr oplechování z knihovny

Pomocí tlačítka knihovny lze vybírat u jednotlivých prvků oplechování [různé druhy a výrobce dané lemovky](roofFlashingLibrary.md). Zároveň pro změnu všech prvků je možné vybrat požadovaný typ lemovky z knihovny, což lze provést i zpětně. 

## Druhy oplechování

Každá část střechy vyžaduje specifický typ oplechování a lemovek. V HiStruct je široká nabídka oplechování a lemovek, které pokryjí téměř všechny části střech. V následujícím textu se budeme postupně zabývat jednotlivými prvky.

![Flashing button](img/flashingsButton.png)

### Štítová lemovka
Štítová lemovka zvaná též závětrná lišta je speciální oplechování, který se používá k zakončení štítového průčelí střechy. Štítové průčelí je část střechy, která se nachází na štítové straně budovy, a štítová lemovka slouží k estetickému nebo ochrannému dokončení této části střechy.

![Flashing gable trim](img/flashingGableTrim.png)

### Hřebenáč
Hřebenáč je střešní prvek, který se používá k zakrytí hřebene střechy. Tento prvek slouží k ochraně tohoto místa před povětrnostními vlivy, vniknutím vody a dalšími potenciálními problémy. Tímto způsobem hřebenáč zajišťuje kompletní a bezpečné zakončení střechy.

![Flashing ridge cap](img/flashingRidgeCap.png)

### Úžlabí
Úžlabí je místo na střeše, kde se setkávají dvě střešní plochy a tvoří údolí. Tento prvek slouží k odvádění vody a sněhu a chrání budovu před pronikání vlhkosti.
 
![Flashing valley](img/flashingValley.png)

### Okapnice 
Okapnice je stavební prvek umístěný na okraji střechy, který slouží k řízení odtoku dešťové vody do žlabu nebo okapového potrubí, čímž chrání budovu před poškozením způsobeným vodou, která by zatékala do konstrukce střechy.


![Flashing gutter apron](img/flashingGutterApron.png)  

### Lemování ke zdi
Tato lemovka se obvykle nachází na místě, kde se střecha setkává se svislou stěnou a slouží k těsnému a esteticky čistému spojení mezi těmito dvěma částmi budovy.

![Flashing wall trim](img/flashingWallTrim.png) 

### Oplechování otvoru
Tento prvek slouží k oplechování otvoru na střeše pro zamezení zatékání vody kolem otvoru.

![Flashing roof opening](img/flashingRoofOpening.png) 