# Import výkresu s příponou DXF
Ať už potřebuji vymodelovat střechu, nebo celý dům, využití podkladu ve formě výkresu mi práci vždy ulehčí. Nejen, že využiji přichycování kurzoru k bodům na tomto výkresu, ale navíc budu mít kontrolu geometrie jednotlivých modelovaných prvků. Ale jak na to? Je to snadné při dodržení doporučeních. 
## Příprava podkladu

### Zvýraznění důležitých prvků
Vložený výkres bude pouze čárový, proto je vhodné ty části výkresu, které pro nás budou mít největší důležitost odlišit barvou.
### Verze a velikost DXF souboru
HiStruct podporuje většinu verzí DXF souborů, ale je vhodné zvolit velikost souboru do 2 MB, což zaručí maximální rychlost editace modelu.
### Co se mi v modelu zobrazí?
Podporovanými typy objektů jsou tyto*LINE, LWPOLYLINE, POLYLINE, SOLID, POINT, INSERT, SPLINE, CIRCLE, ARC* a *ELLIPSE*. 
### Připravený výkres pro vložení
Po dodržení instrukcí výše může výkres vypadat, třeba takto. Zvýraznil jsem důležité hrany střechy červenou barvou, vymazal jsem veškeré nepotřebné objekty. Čímž získám nejen rychlejší model, ale hlavně mě nebudou rušit jiné objekty. Zároveň jsou všehcny důležité čáry jedním z podporovaných objektů. 

![Alt text](img/dxfDrawings.png) 


## Vložení výkresu
Připravený výkres můžu vložit pomocí tlačítka *Import* a zvolením tlačítka **.dxf*, po kliknutí můžu vybrat soubor, který chci do modelu vložit.

![Alt text](img/importButton.png) 

### Zvolení počátku
Nyní kliknutím do scény vyberu bod, ve kterém bude počátek mého výkresu.

![Alt text](img/insertDXF.png)

### Úprava měřítka
Pokud mám výkres v metrech, bude i vložený výkres zobrazen v metrech. Ovšem pokud tomu tak není, lze měřítko snadno změnit pomocí tlačítka *Upravit*, kde změním požadované měřítko.

![Alt text](img/externalObjectEdit.png)

 ### Umístění výkresu
 S vložením výkresem lze volně manipulovat jako s každým jiným objektem, lze ho posouvat či otáčet.

 ## Vytvoření modelu
 Na importované *.dxf se lze přichytávat, zadání jednotlivých střešních ploch pak probíhá oklikáním půdorysu [pomocí obecného tvaru](modellingRoofs.md) s doplněním sklonu pro každou střešní plochu. 
 
 ![Alt text](img/dxfModel.png)

 Tímto způsobem vytvořím přesný 3D model na kterém je možné téměř vždy pustit [generátor lemovek a okapového systému](roofFlashingGenerator.md)

 ![Alt text](img/dxfModelFlashings.png)
