---
sourceLang: cs
sourceHash: 6ef14edb73dcf9785ff5d6c4d7815495
autoTranslated: true
---


# HiStruct pentru acoperitori

HiStruct este o aplicație web care permite colaborarea sau partajarea ușoară a unui proiect sau a unor părți ale unui proiect. Astfel, puteți oferi o previzualizare a modelului 3D al acoperișului clientului final, puteți colabora la un proiect cu un coleg sau cu o companie de instalare.
Este utilizată pentru a crea rapid oferte de preț, liste de materiale și planuri de pozare pentru sisteme de acoperișuri, de rosturi, de rosturi și de jgheaburi. Sistemul permite mai multe moduri de intrare pentru a crește eficiența atunci când se lucrează cu un proiect.

## Cum se procesează o cerere de informații despre acoperiș în HiStruct?

1.
1. Modelez suprafețele acoperișului redesenând sau importând
1. Editez macheta generată
1. Selectez sistemul de solnițe și de streașină sau îl fac să fie generat automat
1. Editez oferta frumoasă care ne aduce contractul
1. Împărtășesc proiectul cu clientul

Gata, mă duc să beau o cafea 😊 😊.

HiStruct poate fi personalizat pe scară largă. Sistemul de montare a accesoriilor de acoperiș, a rosturilor, a jgheaburilor și a burlanelor este configurat separat pentru fiecare producător în parte, într-un set separat de fișiere de configurare. Acesta conține informații despre modul în care trebuie să fie așezată zona de acoperiș cu accesorii, combinații de culori posibile, informații despre lista de materiale și multe altele. Acestea și alte personalizări se fac în cadrul [proiectului de personalizare](customisationProject.md).

## Acum, mai în detaliu...

### 1. Prelucrez o nouă cerere

Este pentru Jirka sau Hank?

### 2. Modelarea suprafețelor acoperișurilor

De obicei, începem prin **alegerea tipului de acoperiș, a sistemului de jgheaburi și de burlane** (care poate fi modificat ulterior) din biblioteci. Urmează crearea unui model de acoperiș din planurile individuale ale acoperișului, sau metode de modelare mai avansate. Metoda de modelare adecvată depinde de documentele justificative disponibile pentru o anumită cerere de informații. Cu cât baza este mai bună, cu atât mai puțină muncă va necesita modelarea.

#### **Am doar câteva schițe cu dimensiuni 😊**.

Dacă nu am la dispoziție un suport digital, trebuie să specific planurile acoperișului. Pentru a facilita introducerea, am câteva opțiuni. Dacă forma planului acoperișului este simplă, pot [modela](modellingRoofs.md) introducând planuri de acoperiș de forme predefinite, sau parcă forma generală a planului acoperișului în spațiul de modelare. Modul general de introducere utilizează trasarea și alte instrumente de introducere familiare ca în alte programe CAD. Dacă se cunoaște panta, planurile acoperișului pot fi rotite în spațiu și împinse împreună în spațiu așa cum formează efectiv acoperișul. În cazul în care acoperișul poate fi asamblat în spațiu cu suficientă precizie, se poate utiliza [generator de jgheaburi și burlane](roofFlashingGenerator.md).

#### **Am un desen vectorial al planului acoperișului 😊😊😊**

Dacă am un desen vectorial, va fi mai ușor de modelat. Puteți [importa *.dxf](importDxf.md) în HiStruct, sau [converti vectorul *.pdf în *.dxf](convertPdfToDxf.md) și [importați asta în HiStruct](importDxf.md). Se poate face un snap la *.dxf importat, iar specificarea suprafețelor individuale ale acoperișului se face apoi prin decuparea planului de etaj cu adăugarea unei pante pentru fiecare suprafață a acoperișului. Avantajul constă în acuratețea și ușurința realizării modelului 3D. Aproape întotdeauna se poate utiliza [generatorul [flashing and gutter generator](roofFlashingGenerator.md).

#### **Dispun de un model 3D dintr-o orientare digitală 😊😊😊😊****.

Modelul din orientarea digitală este un câștig. Dacă am acest model într-un format adecvat (3D *.pdf sau direct *.obj), pot importa direct geometria. Pot [importa *.obj](importObj.md) în HiStruct, sau [converti 3D *.pdf în *.obj](convert3dPdfToObj.md) și [importa asta în HiStruct](importObj.md).

După import, HiStruct va oferi suprafețe recunoscute din care puteți alege cum să le convertiți în geometrie HiStruct. Generatorul de suprafețe](roofPolygonGenerator.md) efectuează apoi conversia în suprafețe de acoperire a acoperișului sau a pereților, care pot fi apoi prelucrate în mod normal.

După ce suprafețele acoperișului au fost generate, pot folosi în continuare [roofFlashing Generator](roofFlashingGenerator.md). Această metodă de introducere este aproape fără muncă.

#### **Formă simplă 😊😊😊😊😊**

Tipurile de acoperiș dreptunghiular pentru bungalourile din ce în ce mai populare sunt disponibile în HiStruct direct ca o clădire întreagă, care este învelită automat cu materialul de acoperiș ales și unsă cu accesorii.

### 3. Instalarea acoperișului

Pentru noi, bibliotecile de învelitori și de scufundări nu înseamnă doar mărime și culoare, ci o întreagă abordare a placării zonelor specifice ale acoperișului. Datorită generatorului de variabile, putem introduce în bibliotecă procedura specifică de instalare a acoperișului unui anumit producător. Facem acest lucru ca parte a [proiectului de personalizare](customisationProject.md). Un generator bine conceput elimină apoi intervențiile necesare în procesul automat de montare.

[RoofPolygonTilling](roofPolygonTillingOptions.md) are loc în mod automat în funcție de setările de configurare ale acoperișului. De asemenea, este posibil să setați începutul așezării (stânga, dreapta, centru la linia mediană, centru la marginea panoului) pentru a obține cea mai mică tăiere. Informațiile despre raportul dintre tăietură și suprafața planului acoperișului sunt afișate în timpul reglajelor de instalare.

### 4. Cum se taie și sistemul de jgheaburi?

Puteți, desigur, să specificați [flashinguri, rosturi](roofFlashingOptions.md) și [sistem de jgheaburi](roofFlashingGutterOptions.md) oriunde în spațiu, prin agățarea pe suprafețele de acoperiș deja specificate, pe geometria importată sau pe alte obiecte. În plus, este posibil să se utilizeze adăugarea de muchii la laturile individuale ale planurilor de acoperiș sau direct la [generator peste un grup de planuri de acoperiș](roofFlashingGenerator.md). Pentru elementele generate, panta planurilor de acoperiș asociate este ajustată automat, stabilindu-se astfel corect unghiurile de încovoiere ale solnițelor și cârligelor sistemului de streașină.

HiStruct include opțiuni cuprinzătoare [setări ale sistemului de jgheaburi](roofFlashingGutterOptions.md). Prin specificarea unei polilinii care definește jgheabul din aval, poate fi setată panta jgheabului. Pentru fiecare parte a jgheabului, se stabilește, de asemenea, panta planului de acoperiș din aval pentru calcularea corectă a curburii și a lungimii cârligului. Este posibil să se adauge cleme la fiecare secțiune de jgheab, care au [opțiuni de setare] suplimentare (roofFlashingGutterOptions.md).

### 5. Piese, documente, desene... pur și simplu ieșiri

**Schemă**
Lista [Piece List](roofBom.md) este creată automat din piesele de acoperiș inserate în spațiul modelului. Piesele individuale ale modelului au în dreptul lor informații despre piesele din care sunt create, cu posibilitatea de a edita numărul și, eventual, de a adăuga mai multe elemente.

Modul în care este generată BOM poate fi apoi modificat în cadrul [proiectului de personalizare](customisationProject.md).

**Ofertă**
Lista de materiale generată, completată cu un link către lista de prețuri a producătorului, poate face parte din [oferta](roofQuote.md). Cu toate acestea, oferta poate fi pregătită fără BOM. Metoda de generare a ofertei poate fi apoi modificată în cadrul [proiectului de personalizare](customisationProject.md).

**Planificări**
Planșele [Layout Drawings](roofPolygonTillingDrawing.md) sunt generate în mod automat pornind de la geometria specificată și de la orice modificări efectuate de utilizator. Dacă este necesar, se pot adăuga note sau adnotări suplimentare la desen.

![exemplu de desen de tasare a acoperișului](img\roofTillingPlane1.png)
![Exemplu de desen de tasare a acoperișului](img\roofTillingPlane2.png)

### 6. Împărtășirea cu clientul
Partajarea ușoară a proiectelor
Acest lucru este scris de Jirka sau de Hanka?
