# Import výkresu s příponou DXF

Ať už se chystáš namodelovat střechu nebo celý dům, využití výkresu ti hodně ulehčí práci. S výkresem to budeš mít jednodušší. Proč? No, nejenom, že můžeš jednoduše přichytit kurzor k bodům na výkresu, ale také si udržíš kontrolu nad tvarem a velikostí každého modelovaného prvku. Ale jak na to? Věř mi, je to snadné, pokud následuješ několik jednoduchých kroků.

## Příprava podkladu

### Zvýraznění důležitých prvků
Tvůj vložený výkres bude obvykle tvořen jen čarami, proto je rozumné důležité části výkresu zvýraznit různou barvou.

### Verze a velikost DXF souboru
HiStruct podporuje většinu verzí DXF souborů, ale doporučuji volit soubory do velikosti 2 MB pro maximální rychlost při editaci modelu.

### Co můžeš čekat ve svém modelu?
V našem nástroji jsou podporovány různé typy objektů, jako jsou *LINE, LWPOLYLINE, POLYLINE, SOLID, POINT, INSERT, SPLINE, CIRCLE, ARC* a *ELLIPSE*. 

### Připravený výkres pro vložení
Pokud postupuješ podle výše uvedených tipů, může výkres vypadat například takto. Já jsem zvýraznil důležité hrany střechy červenou barvou a odstranil nepotřebné objekty. Díky tomu nejenže rychleji vytvořím model, ale také budu mít klid při práci a nemusím se starat o rušivé prvky.

![DXF drawings](img/dxfDrawings.png) 


## Vložení výkresu

Pokud mám připravený výkres, můžu ho snadno vložit do mého projektu. Stačí kliknout na tlačítko *Import* a vybrat soubor s příponou **.dxf*.

![Import tlačítko](img/importButton.png)

### Zvolení počátku
Teď stačí kliknout do scény a vybrat bod, kde chci umístit začátek mého výkresu.

![Zvolení počátku](img/insertDXF.png)

### Úprava měřítka
Pokud je můj výkres v jiných jednotkách než metry, nevadí. Můžu jednoduše upravit měřítko pomocí tlačítka *Upravit*.

![Upravit měřítko](img/externalObjectEdit.png)

### Umístění výkresu
S vloženým výkresem mohu pracovat stejně jako s jakýmkoli jiným objektem. Můžu ho posouvat nebo otáčet.

## Vytvoření modelu
Nyní můžu začít pracovat na mém 3D modelu. Importovaný výkres mi pomáhá získat pevný základ. Pro tvorbu střešních ploch klikám a tvůrce vytváří střechu automaticky. 

![Vytvoření modelu](img/dxfModel.png)

Tímto způsobem mohu vytvořit přesný 3D model na kterém je možné téměř vždy pustit [generátor lemovek a okapového systému](roofFlashingGenerator.md)

![Model s lemovkami a okapem](img/dxfModelFlashings.png)
