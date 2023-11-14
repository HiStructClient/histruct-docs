---
sourceLang: en
sourceHash: d9326252e346c94fa270c5bf51451fae
autoTranslated: true
proofRead: true
---


# HiStruct pentru specialiștii în acoperișuri

HiStruct este o aplicație web care facilitează colaborarea și partajarea proiectelor. Fie că este vorba de prezentarea unui model de acoperiș în 3D pentru un client, colaborarea cu un coleg sau coordonarea cu o companie de instalare, HiStruct face ca procesul să fie ușor și eficient.

Pentru a îmbunătăți eficiența în lucrul la proiecte, HiStruct generează rapid oferte de preț, liste de materiale și planuri pentru acoperiș, fațade și sisteme de jgheaburi. Sistemul oferă mai multe moduri de introducere, asigurând o abordare rapidă și adaptabilă a gestionării proiectelor.

## Cum să procesezi o cerere de acoperiș în HiStruct?

1. Creează un proiect cu sau fără o hartă.
1. Modelează planurile acoperișului prin desenare sau importare.
1. Editează modelul generat.
1. Alege sistemul de învelitoare și de jgheaburi sau lasă aplicația să le genereze automat.
1. Generează liste de materiale, documente și desene.

Terminat, mă duc să iau o cafea 😊

HiStruct poate fi personalizat în mare măsură. Sistemul pentru planurile acoperișului, fațade și sistemele de jgheaburi sunt configurate separat pentru fiecare producător în seturi de fișiere de configurare dedicate. Aceste fișiere conțin detalii despre modul de așezare a zonei de acoperiș cu accesorii, combinații potențiale de culori, informații despre lista de materiale și altele. Astfel de personalizări sunt efectuate în cadrul [proiectului de personalizare](customisationProject.md).

## Acum, în detaliu...

### 1. Creez un proiect cu sau fără o hartă

Procesez o nouă solicitare. Primul pas este să încep un nou proiect. Un proiect este un spațiu care poate cuprinde unul sau mai multe componente, cum ar fi modelele 3D, configurațiile, variantele de model sau componente. Pagina proiectului oferă două vederi. Vederea implicită prezintă o simplă listă de proiecte stabilite cu componente asociate. Dacă doresc să includ o locație pentru un proiect, pot utiliza vizualizarea pe hartă, care îmi permite să specific o locație direct pe hartă.

### 2. Modelez planurile acoperișului

De obicei începem prin **selectarea tipului de învelitoare, fațade și sistem de jgheaburi** (acestea pot fi schimbate ulterior) din biblioteci. Apoi creăm un model de acoperiș din planurile individuale ale acoperișului, utilizând posibil metode mai avansate de modelare. Metoda de modelare potrivită depinde de documentația disponibilă pentru o anumită cerere. Cu cât calitatea documentației este mai bună, cu atât procesul de modelare poate fi realizat mai eficient.

#### **Am doar câteva schițe cu dimensiuni 😊**

Dacă forma acoperișului este simplă, pot [modela](modellingRoofs.md) planurile acoperișului prin inserarea planurilor de acoperiș cu forme predefinite sau prin crearea unei forme generale a zonei acoperișului în spațiul de modelare. Forma de intrare generală utilizează instrumente de trasare și alte instrumente de intrare familiare, similare altor programe CAD. Dacă panta este cunoscută, planurile acoperișului pot fi rotite și mutate în spațiu pentru a se potrivi cu forma acoperișului reală. Dacă acoperișul poate fi construit în spațiu cu suficientă precizie, se poate utiliza [generatorul de fațade și jgheaburi](roofFlashingGenerator.md).

#### **Am un desen vectorial al planului acoperișului 😊😊**

Dacă am un desen vectorial, va fi mai ușor de modelat. Este posibil să import [fișiere în format *.dxf](importDxf.md) în HiStruct, sau să convertesc fișierele vectoriale *.pdf în *.dxf și să le [importe în HiStruct](importDxf.md). Fișierele *.dxf importate permit capturarea ușoară și introducerea planurilor individuale de acoperiș prin selectarea în planul de etaj cu opțiunea de a adăuga o pantă pentru fiecare suprafață de acoperiș. Avantajul este precizia și ușurința de a realiza un model 3D. De obicei, se poate utiliza [generatorul de fațade și învelitori](roofFlashingGenerator.md).

#### **Am un model 3D dintr-o orientare digitală 😊😊😊**

Modelul din focalizarea digitală este câștigător. Dacă am acest model într-un format potrivit (3D *.pdf sau direct *.obj), pot importa geometria direct. Pot [importa *.obj](importObj.md) în HiStruct sau [converti 3D *.pdf în *.obj](convert3dPdfToObj.md) și [importa în HiStruct](importObj.md).

După importare, HiStruct va oferi suprafețele recunoscute din care puteți alege cum să le convertiți în geometrie HiStruct. [Generatorul de suprafețe](roofPolygonGenerator.md) realizează conversia în suprafețe de acoperiș sau fațade, care pot fi apoi prelucrate în mod normal.

După ce suprafețele acoperișului au fost generate, încă pot utiliza [generatorul de flanșe pentru acoperiș](roofFlashingGenerator.md). Acest mod de introducere a datelor este aproape lipsit de muncă.

#### **Formă simplă 😊😊😊**

Tipurile de acoperișuri rectangulare pentru casele din ce în ce mai populare pot fi accesate direct în HiStruct ca structuri complete. Aceste structuri sunt acoperite automat cu materialul de acoperiș selectat și sunt echipate cu flanșe și jgheaburi.

### 3. Instalarea acoperișului

Pentru noi, bibliotecile de materiale de acoperiș și flanșe nu înseamnă doar dimensiuni și culori, ci și o abordare completă a îmbrăcăminții unor suprafețe specifice de acoperiș. Datorită generatorului variabil, suntem capabili să introducem procedura specifică de instalare a unui acoperiș al unui anumit producător în bibliotecă. Facem acest lucru în cadrul [proiectului de personalizare](customisationProject.md). Un generator bine conceput elimină apoi intervențiile necesare în procesul automat de așezare.

Procesul de [acoperire cu țiglă a acoperișului](roofPolygonTillingOptions.md) are loc automat pe baza setărilor de configurare a acoperișului. Este posibil să ajustăm și poziția de început a acoperirii cu țiglă (stânga, dreapta, centru la linia centrală, centru la marginea panoului) pentru a obține cel mai mic tăietură posibilă. Informații despre raportul dintre tăietură și suprafața planului acoperișului sunt afișate în timpul ajustărilor acoperirii cu țiglă.

### 4. Cum se utilizează flanșele și sistemul de jgheaburi?

Desigur, [flanșele](roofFlashingOptions.md) și [sistemul de jgheaburi](roofFlashingGutterOptions.md) pot fi specificate oriunde în spațiu prin atașarea la suprafețele de acoperiș deja specificate, la geometria importată sau la alte obiecte. În plus, este posibil să le adăugăm la marginile planurilor individuale de acoperiș sau să le utilizăm direct [peste un grup de planuri de acoperiș](roofFlashingGenerator.md). Pentru elementele generate, panta planurilor asociate este ajustată automat, stabilind astfel corect unghiurile de îndoire ale flanșelor și cârligelor sistemului de streșini.

HiStruct include setări cuprinzătoare ale [sistemului de jgheaburi](roofFlashingGutterOptions.md). Prin specificarea unei polilinii care definește jgheabul aval, se poate seta panta jgheabului. Pentru fiecare parte a jgheabului, setăm și panta planului acoperișului aval pentru calculul corect al lungimii îndoirii și a cârligelor. Este posibil să adăugăm știfturi la fiecare secțiune a jgheabului, care au opțiuni [suplimentare de configurare](roofFlashingGutterOptions.md).

### 5. Lista de materiale (BOM), documente, desene... pur și simplu rezultate

**Lista de materiale (BOM)**
[BOM-ul](roofBom.md) este creat automat din piesele de acoperiș introduse în spațiul modelului. Părțile individuale ale modelului au informații lângă ele despre din ce piese sunt create, cu posibilitatea de a edita numărul și eventual de a adăuga mai multe elemente.

Modul în care este generat BOM-ul poate apoi fi modificat în cadrul [proiectului de personalizare](customisationProject.md).

**Ofertă**
BOM-ul generat, împreună cu un link către lista de prețuri a producătorului, poate face parte din [ofertă](roofQuote.md). Cu toate acestea, oferta poate fi pregătită și fără BOM. Metoda de generare a ofertei poate fi apoi modificată în cadrul [proiectului de personalizare](customisationProject.md).

**Desene**
[Desenele de amplasament](roofPolygonTillingDrawing.md) sunt generate automat din geometria specificată și orice modificări făcute de utilizator. Dacă este necesar, pot fi adăugate note sau adnotări suplimentare la desen.

![Exemplu de desen al acoperișului](img\roofTillingPlane1.png)
![Exemplu de desen al acoperișului](img\roofTillingPlane2.png)
