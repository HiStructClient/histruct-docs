---
sourceLang: cs
sourceHash: 416bbf07b5108c0b7ebd028174620591
autoTranslated: true
---


# Acoperișuri HiStruct pentru acoperitori

HiStruct este o aplicație web care permite colaborarea sau partajarea ușoară a unui proiect sau a unor părți ale unui proiect. În acest fel, puteți oferi o previzualizare a modelului 3D de acoperiș clientului final, puteți colabora la proiect cu un coleg sau cu o companie de instalare.
Sistemul este utilizat pentru a crea rapid oferte, liste de materiale și planuri de montaj pentru acoperișuri, șarpante, burlane și sisteme de jgheaburi. Sistemul permite mai multe moduri de intrare pentru a crește eficiența în lucrul cu un proiect.

## Cum se procesează o cerere de informații privind acoperișurile în HiStruct?

1.
1. Modelez zonele de acoperiș prin redesenare sau utilizând generatorul
1. Editez modelul generat
1. Selectez sistemul de șarpantă și de streașină sau îl generez automat
1. Obțin liste de cantități, documente, desene


Gata, mă duc să beau o cafea 😊

HiStruct poate fi personalizat extensiv. Sistemul de așezare a fitingurilor de acoperiș, șarpantelor, burlanelor și jgheaburilor este configurat separat pentru fiecare producător în parte, într-un set separat de fișiere de configurare. Acesta conține informații cu privire la modul în care zona acoperișului trebuie să fie așezată cu fitinguri, combinații de culori posibile, informații privind lista de materiale și multe altele. Acestea și alte personalizări se realizează în cadrul [proiectului de personalizare] (customisationProject.md).

## Acum, mai în detaliu...

### 1. Creez un proiect cu sau fără o hartă

Procesez o nouă cerere. Primul lucru pe care vreau să îl fac este să încep un proiect nou. Un proiect este un loc care poate conține una sau mai multe componente - modele 3D, adică configurații, variante sau piese. Pagina de proiect are două vizualizări. Vizualizarea implicită este o simplă listă a proiectelor stabilite cu componente. Dacă doresc să stochez și o locație pentru un proiect, pot utiliza vizualizarea pe hartă a proiectelor, unde pot specifica și o locație de pe hartă.

### 2. Modelarea suprafețelor acoperișurilor

De obicei, începem prin **selectarea tipului de acoperiș, a șarpantei și a sistemului de jgheaburi** (acestea pot fi modificate ulterior) din biblioteci. Urmează apoi crearea unui model de acoperiș din planurile individuale ale acoperișului, eventual utilizând metode de modelare mai avansate. Metoda de modelare adecvată depinde de documentele disponibile pentru o anumită solicitare. Cu cât calitatea documentației este mai bună, cu atât procesul de modelare poate fi realizat mai eficient.

#### **😊 Am doar câteva schițe cu dimensiuni**

Dacă forma acoperișului este simplă, o pot [modela](modellingRoofs.md) prin inserarea suprafețelor acoperișului cu forme predefinite sau pot crea o formă generică a suprafeței acoperișului în spațiul de modelare. Modul general de introducere utilizează trasarea și alte instrumente de introducere familiare, similare altor programe CAD. Dacă panta este cunoscută, planurile acoperișului pot fi rotite și deplasate în spațiu pentru a se potrivi cu forma reală a acoperișului. Dacă acoperișul poate fi construit în spațiu cu suficientă precizie, se poate utiliza [generatorul de burlane și jgheaburi] (roofFlashingGenerator.md).

#### **😊😊 Am un desen vectorial al planului acoperișului**

Dacă am un desen vectorial, va fi mai ușor de modelat. Este posibil să importați [fișiere în format *.dxf](importDxf.md) în HiStruct sau să convertiți [*.pdf în *.dxf] (convertPdfToDxf.md) în [importDxf.md). *.dxf-ul importat permite o fixare ușoară, iar introducerea suprafețelor individuale ale acoperișului se face făcând clic pe planul etajului cu opțiunea de a adăuga o pantă pentru fiecare suprafață a acoperișului. Avantajul este precizia și ușurința realizării unui model 3D. Aproape întotdeauna poate fi utilizat [generatorul de solnițe și streșini] (roofFlashingGenerator.md).

#### **😊😊😊 Am doar o schiță și trebuie să proiectez un acoperiș**

De exemplu, dacă aveți un acoperiș nou și aveți doar o schiță, HiStruct are un instrument inovator care proiectează automat forma finală a acoperișului, pantele, burlanele și sistemul de jgheaburi. Pentru a face acest lucru, este desigur posibil să importați [fișiere *.dxf](importDxf.md) sau să convertiți [*.pdf în *.dxf](convertPdfToDxf.md) și să le [importați în HiStruct](importDxf.md).

#### **😊😊😊😊 Am un model 3D dintr-o orientare digitală**

Un model dintr-o orientare digitală este un câștig. Dacă am acest model într-un format adecvat (3D *.pdf sau direct *.obj), pot importa geometria imediat. Pot [importa *.obj](importObj.md) în HiStruct, sau [converti 3D *.pdf în *.obj](convert3dPdfToObj.md) și [importa în HiStruct](importObj.md).

După import, HiStruct va oferi suprafețe recunoscute din care puteți alege cum să le convertiți în geometrie HiStruct. [Generatorul de suprafețe](roofPolygonGenerator.md) efectuează apoi conversia în suprafețe de placare a acoperișului sau a pereților, care pot fi apoi prelucrate în mod normal.

După generarea suprafețelor acoperișului, mai pot utiliza [roofFlashing Generator](roofFlashingGenerator.md). Această metodă de introducere este aproape fără muncă.

### 3. Așezarea acoperișului

Pentru noi, bibliotecile de acoperișuri și burlane nu înseamnă doar dimensiune și culoare, ci întreaga abordare a învelitorii anumitor zone ale acoperișului. Datorită generatorului de variabile, suntem capabili să introducem în bibliotecă procedura specifică de instalare a acoperișurilor unui anumit producător. Facem acest lucru în cadrul [proiectului de personalizare](customisationProject.md). Un generator bine conceput elimină apoi intervențiile necesare în procesul automat de instalare.

[RoofPolygonTilling](roofPolygonTillingOptions.md) are loc automat în funcție de setările de configurare ale acoperișului. De asemenea, este posibilă ajustarea începerii procesului de pozare pentru a obține cea mai mică tăiere posibilă. Informațiile privind raportul dintre tăietură și suprafața planului acoperișului sunt afișate în timpul modificării așezării.

### 4. Cum se utilizează sistemul de burlane și jgheaburi?

Bineînțeles, [flashings, flashings](roofFlashingOptions.md) și [sistemul de jgheaburi](roofFlashingGutterOptions.md) pot fi specificate oriunde în spațiu prin agățarea de suprafețele de acoperiș deja specificate, geometria importată sau alte obiecte. În plus, este posibil să se utilizeze adăugarea de muchii la laturile individuale ale planurilor de acoperiș sau direct la [generator peste un grup de planuri de acoperiș](roofFlashingGenerator.md). Pentru elementele generate, panta planurilor de acoperiș asociate este ajustată automat, stabilindu-se astfel corect unghiurile de încovoiere ale burlanelor și cârligelor sistemului de streașină.

HiStruct include opțiuni complete pentru [setările sistemului de jgheaburi] (roofFlashingGutterOptions.md). Specificând o polilinie care definește jgheabul din aval, se poate seta înclinarea jgheabului. Pentru fiecare parte a jgheabului, se stabilește, de asemenea, panta planului acoperișului din aval pentru calcularea corectă a lungimii cotului și a cârligului. Este posibil să se adauge cleme la fiecare secțiune a jgheabului, care au [opțiuni de setare] suplimentare (roofFlashingGutterOptions.md).

### 5. Piese, documente, desene... ieșiri simple

**Schiță**
[Lista pieselor] (roofBom.md) este creată automat din piesele acoperișului introduse în spațiul modelului. Piesele individuale ale modelului au în dreptul lor informații despre piesele din care sunt create, cu posibilitatea de a edita numărul și, eventual, de a adăuga mai multe elemente.

Modul în care este generată BOM poate fi apoi modificat în cadrul [proiectului de personalizare] (customisationProject.md).

**Ofertă**
Nomenclatorul generat, însoțit de un link către lista de prețuri a producătorului, poate face parte din [oferta](roofQuote.md). Cu toate acestea, oferta poate fi pregătită fără BOM. Metoda de generare a ofertei poate fi apoi modificată în cadrul [proiectului de personalizare](customisationProject.md).

**Planuri**
[Layout Drawings](roofPolygonTillingDrawing.md) sunt generate automat pornind de la geometria specificată și de la orice modificări efectuate de utilizator. Dacă este necesar, la desen se pot adăuga note sau adnotări suplimentare.

![exemplu de desen de tasare a acoperișului](img\roofTillingPlane1.png)
![exemplu de desen de tasare a acoperișului](img\roofTillingPlane2.png)
