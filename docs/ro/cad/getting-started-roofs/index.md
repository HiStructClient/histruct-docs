---
sourceLang: cs
sourceHash: decff2fa38de31ff1060f45f406c0f95
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
1. Piese, documente, desene


Gata, mă duc să beau o cafea 😊 😊.

HiStruct poate fi personalizat pe scară largă. Sistemul de montare a accesoriilor de acoperiș, a rosturilor, a jgheaburilor și a burlanelor este configurat separat pentru fiecare producător în parte, într-un set separat de fișiere de configurare. Acesta conține informații despre modul în care trebuie să fie așezată zona de acoperiș cu accesorii, combinații de culori posibile, informații despre lista de materiale și multe altele. Acestea și alte personalizări se fac în cadrul [proiectului de personalizare](customisationProject.md).

## Acum, mai în detaliu...

### 1. Creez un proiect cu sau fără hartă

2. Procesez o nouă cerere. Primul lucru pe care vreau să-l fac este să încep un nou proiect. Un proiect este un loc care poate conține una sau mai multe componente - modele 3D, adică configurații, variante sau piese. Pagina proiectului are două vizualizări. Vizualizarea implicită este o simplă listă de proiecte stabilite cu componente. Dacă doresc să stochez și o locație pentru un proiect, pot utiliza vizualizarea proiectelor pe hartă, unde pot specifica și o locație de pe hartă.

### 2. Modelarea suprafețelor acoperișurilor

De obicei, începem prin **selectarea tipului de acoperiș, a sistemului de jgheaburi și de burlane** (acestea pot fi modificate ulterior) din biblioteci. Urmează crearea unui model de acoperiș din planurile individuale ale acoperișului, eventual folosind metode de modelare mai avansate. Metoda de modelare adecvată depinde de documentele disponibile pentru o anumită cerere de informații. Cu cât este mai bună calitatea documentației, cu atât mai eficient se poate realiza procesul de modelare.

#### **Am doar câteva schițe cu dimensiuni 😊**.

În cazul în care forma acoperișului este simplă, o pot [modela](modellingRoofs.md) prin inserarea unor suprafețe de acoperiș cu forme predefinite sau pot crea o formă generică a suprafeței acoperișului în spațiul de modelare. Modul general de introducere utilizează trasarea și alte instrumente de introducere familiare, similare altor programe CAD. Dacă panta este cunoscută, planurile acoperișului pot fi rotite și deplasate în spațiu pentru a corespunde formei reale a acoperișului. În cazul în care acoperișul poate fi construit în spațiu cu suficientă precizie, se poate utiliza [generator de jgheaburi și burlane](roofFlashingGenerator.md).

#### **Am un desen vectorial al planului acoperișului 😊😊😊**

Dacă am un desen vectorial, va fi mai ușor de modelat. Este posibil să importați [fișiere în format *.dxf](importDxf.md) în HiStruct, sau să convertiți vectorial[ *.pdf în *.dxf](convertPdfToDxf.md) pentru a [importa în HiStruct](importDxf.md). *.dxf-ul importat permite o fixare ușoară, iar introducerea suprafețelor individuale ale acoperișului se face cu un clic prin planul etajului, cu posibilitatea de a adăuga o pantă pentru fiecare suprafață a acoperișului. Avantajul constă în acuratețea și ușurința realizării unui model 3D. Aproape întotdeauna poate fi utilizat [generatorul de sclipiri și streșini](roofFlashingGenerator.md).

#### **Dispun de un model 3D dintr-o orientare digitală 😊😊😊😊****.

Modelul din orientarea digitală este un câștig. Dacă am acest model într-un format adecvat (3D *.pdf sau direct *.obj), pot importa direct geometria. Pot [importa *.obj](importObj.md) în HiStruct, sau [converti 3D *.pdf în *.obj](convert3dPdfToObj.md) și [importa asta în HiStruct](importObj.md).

După import, HiStruct va oferi suprafețe recunoscute din care puteți alege cum să le convertiți în geometrie HiStruct. Generatorul de suprafețe](roofPolygonGenerator.md) efectuează apoi conversia în suprafețe de acoperire a acoperișului sau a pereților, care pot fi apoi prelucrate în mod normal.

După ce suprafețele acoperișului au fost generate, pot folosi în continuare [roofFlashing Generator](roofFlashingGenerator.md). Această metodă de introducere este aproape fără muncă.

#### **Formă simplă 😊😊😊😊😊**

Tipurile de acoperiș dreptunghiular pentru bungalourile din ce în ce mai populare sunt disponibile în HiStruct direct ca o clădire întreagă, care este învelită automat cu materialul de acoperiș ales și unsă cu accesorii.

### 3. Instalarea acoperișului

Pentru noi, bibliotecile de învelitori și de scufundări nu înseamnă doar mărime și culoare, ci o întreagă abordare a placării zonelor specifice ale acoperișului. Datorită generatorului de variabile, putem introduce în bibliotecă procedura specifică de instalare a acoperișului unui anumit producător. Facem acest lucru ca parte a [proiectului de personalizare](customisationProject.md). Un generator bine conceput elimină apoi intervențiile necesare în procesul automat de montare.

[RoofPolygonTilling](roofPolygonTillingOptions.md) are loc în mod automat în funcție de setările de configurare ale acoperișului. De asemenea, este posibil să se regleze începutul așezării (stânga, dreapta, de la centru la linia mediană, de la centru la marginea panoului) pentru a obține cea mai mică tăietură posibilă. În timpul reglajelor de așezare sunt afișate informațiile privind raportul dintre tăiere și suprafața planului acoperișului.

### 4. Cum se taie și sistemul de jgheaburi?

Bineînțeles, [rosturile, rosturile](roofFlashingOptions.md) și [sistemul de jgheaburi](roofFlashingGutterOptions.md) pot fi specificate oriunde în spațiu prin agățarea pe suprafețele de acoperiș deja specificate, pe geometria importată sau pe alte obiecte. În plus, este posibil să se utilizeze adăugarea de muchii la laturile individuale ale planurilor de acoperiș sau direct la [generator peste un grup de planuri de acoperiș](roofFlashingGenerator.md). Pentru elementele generate, panta planurilor de acoperiș asociate este ajustată automat, stabilindu-se astfel corect unghiurile de încovoiere ale solnițelor și cârligelor sistemului de streașină.

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
![exemplu de desen de tasare a acoperișului](img\roofTillingPlane2.png)
