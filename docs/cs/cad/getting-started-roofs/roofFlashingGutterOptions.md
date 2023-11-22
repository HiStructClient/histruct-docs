# Okapový systém

Okapový systém je jedním z klíčových prvků střešní konstrukce, jehož hlavní rolí je ochrana střešní konstrukce před negativními vlivy vody. Tento důležitý stavební prvek zahrnuje několik komponent, jako jsou okapnice, okapové svody a žlaby, které společně tvoří systém pro správné odvádění vody z povrchu střechy. V této kapitole se podíváme na to, jakým způsobem lze modelovat okapový systém v rámci programu HiStruct. 

![Flashing gutter](img/flashingGutter.png)

## Zadání okapového systému

Pro modelování okapového systému v programu HiStruct existuje několik možností. Nejrychlejším způsobem je využití [generátoru okapů a lemovek](roofFlashingGenerator.md), který umožňuje rychle vytvořit komplexní okapový systém a následně upravit jednotlivé prvky dle potřeby. Alternativně můžete okapový systém přidat manuálně pomocí [polylinie](polylineInput.md), která určuje okraje střechy, na které má být oplechování aplikováno. Tato flexibilita vám umožňuje přizpůsobit okapový systém vašim konkrétním požadavkům a stavebním projektům.

## Úprava geometrie žlabu a okapnice

Okapový systém lze upravovat z hlediska geometrie. Máte možnost posunout vrcholy polylinie, což vám umožní změnit polohu okapu, a dále můžete upravit úhel ohybu žlabových háků.   Generátor to dělá automaticky, ale můžete to měnit kliknutím na tlačítko *Upravit* a následně *Geometrie*, kde můžete změnit úhel či polohu polylinie. Změna úhlu a geometrie je provedena podobným způsobem jako při úpravě [oplechování střechy](roofFlashingOptions.md). Kromě toho můžete po kliknutí na tlačítko *Upravit* a výběru žlabu měnit sklon žlabu. Tím zajistíte, že okap bude mít správný sklon pro efektivní odvod srážkové vody. Posledním parametrem, na který můžete měnit, je krycí šířka. Tato hodnota určuje šířku okapnicového plechu a má vliv na vzhled a funkci okapového systému.

![Flashing gutter properties](img/flashingGutterProperties.png)

## Úprava geometrie okapového svodu

Po kliknutí na tlačítko *Upravit* a výběru okapového svodu se otevře nabídka pro úpravu okapového svodu v programu HiStruct. Tato nabídka poskytuje několik možností pro upravení geometrie okapového svodu, které vám umožní přizpůsobit okapový svod vašim konkrétním požadavkům.

- **Změna vzdálenosti od stěny**: Můžete měnit vzdálenost okapového svodu, což umožňuje přidat svodová kolena a přiblížit svod ke stěně.

- **Prodloužení svodu**: Okapový svod lze prodloužit buď prostřednictvím dialogového okna, nebo jednoduše přetažením zelených bodů na okapovém svodu.

- **Změna polohy svodu**: Můžete také změnit polohu okapového svodu snadno vybráním příslušného svodu a následným posunutím pomocí myši.

Tímto způsobem můžete flexibilně přizpůsobit geometrii okapového svodu tak, aby vyhovovala vašim konkrétním potřebám a požadavkům na stavební projekt.

![Flashing gutter downspout properties](img/flashingGutterDownspoutProperties.png) 


## Přidání okapového svodu
V programu HiStruct se okapové svody obvykle generují automaticky, aby byl zajištěn dostatečný odtok z okapového žlabu. Nicméně, pokud byste chtěli přidat další okapový svod, můžete to provést jednoduše pomocí tlačítka *plus*. Stačí kliknout na toto tlačítko, a okapový svod bude přidán ke stávajícímu žlabu, který jste vybrali.

![flashing gutter add downspout](img/flashingGutterAddDownspout.png)
