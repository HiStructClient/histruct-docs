---
sourceLang: en
sourceHash: d9326252e346c94fa270c5bf51451fae
autoTranslated: true
proofRead: true
---



# HiStruct pentru specialistul în acoperișuri

HiStruct este o aplicație web care facilitează colaborarea fără probleme și partajarea proiectelor. Fie că este vorba de previzualizarea unui model 3D de acoperiș pentru un client, de colaborarea cu un coleg sau de coordonarea cu o companie de instalare, HiStruct face ca procesul să fie ușor și eficient.

Pentru a spori eficiența activității de proiect, HiStruct generează rapid oferte de preț, liste de materiale și planuri de placare a acoperișurilor, a scufundărilor și a sistemelor de jgheaburi. Sistemul oferă mai multe moduri de intrare, asigurând o abordare rapidă și adaptabilă a gestionării proiectelor.

## Cum se procesează o cerere de informații despre acoperiș în HiStruct?

1. Creați un proiect cu sau fără hartă.
1. Modelați planurile acoperișului prin redesenarea sau importul acestora.
1. Modificați tasările generate.
1. Selectați sistemul de burlane și jgheaburi sau cereți ca acestea să fie generate automat.
1. Generați listele de materiale, documentele și desenele.


Gata, mă duc să beau o cafea 😊.

HiStruct poate fi foarte bine personalizat. Sistemul de placare a planurilor de acoperiș, a solnițelor și a sistemelor de jgheaburi este configurat separat pentru fiecare producător în seturi dedicate de fișiere de configurare. Aceste fișiere conțin detalii privind modul de dispunere a suprafeței acoperișului cu racorduri, combinații potențiale de culori, informații despre lista de materiale și multe altele. Astfel de personalizări sunt efectuate în cadrul [proiectului de personalizare](customisationProject.md).

## Acum, mai în detaliu...

### 1. Creez un proiect cu sau fără o hartă

2. Procesez o nouă cerere. Pasul inițial este să pornesc un nou proiect. Un proiect este un spațiu care poate îngloba una sau mai multe componente, cum ar fi modele 3D, configurații, variante de model sau piese. Pagina proiectului oferă două vizualizări. Vizualizarea implicită prezintă o listă simplă de proiecte stabilite cu componentele asociate. Dacă doresc să includ o locație pentru un proiect, pot utiliza vizualizarea proiectelor pe hartă, care îmi permite să specific o locație direct pe hartă.

### 2. Modelarea planurilor de acoperiș

De obicei, începem prin **selectarea tipului de acoperiș, a sistemului de jgheaburi și de burlane** (acestea pot fi modificate ulterior) din biblioteci. Urmează crearea unui model de acoperiș din planurile individuale ale acoperișului, eventual folosind metode de modelare mai avansate. Metoda de modelare adecvată depinde de documentele disponibile pentru o anumită cerere de informații. Cu cât este mai bună calitatea documentației, cu atât mai eficient se poate realiza procesul de modelare.

#### **Am doar câteva schițe cu dimensiuni 😊**.

Dacă forma acoperișului este simplă, pot [să-l modelez](modellingRoofs.md) prin inserarea unor planuri de acoperiș cu forme predefinite sau pot crea o formă generală a suprafeței acoperișului în spațiul de modelare. Forma generală de intrare utilizează trasarea și alte instrumente de intrare familiare, similare altor programe CAD. Dacă panta este cunoscută, planurile de acoperiș pot fi rotite și deplasate în spațiu pentru a corespunde formei reale a acoperișului. În cazul în care acoperișul poate fi construit în spațiu cu suficientă precizie, se poate utiliza [generator de jgheaburi și burlane](roofFlashingGenerator.md).

#### **Am un desen vectorial al planului acoperișului 😊😊😊**

Dacă am un desen vectorial, va fi mai ușor de modelat. Este posibil să importați [fișiere în format *.dxf](importDxf.md) în HiStruct, sau să convertiți fișierele vectoriale[ *.pdf în *.dxf](convertPdfToDxf.md) pentru a le [importa în HiStruct](importDxf.md). *.dxf-ul importat permite o fixare ușoară, iar introducerea planurilor individuale ale acoperișului se face cu un clic prin planul de etaj, cu opțiunea de a adăuga o pantă pentru fiecare suprafață a acoperișului. Avantajul constă în acuratețea și ușurința realizării unui model 3D. Aproape întotdeauna se poate utiliza [generatorul de sclipiri și streșini](roofFlashingGenerator.md).

#### **Dispun de un model 3D dintr-o orientare digitală 😊😊😊😊****.

Modelul din orientarea digitală este un câștig. Dacă am acest model într-un format adecvat (3D *.pdf sau direct *.obj), pot importa direct geometria. Pot [importa *.obj](importObj.md) în HiStruct, sau [converti 3D *.pdf în *.obj](convert3dPdfToObj.md) și [importa asta în HiStruct](importObj.md).

După import, HiStruct va oferi suprafețe recunoscute din care puteți alege cum să le convertiți în geometrie HiStruct. Generatorul de suprafețe](roofPolygonGenerator.md) efectuează apoi conversia în suprafețe de acoperire a acoperișului sau a pereților, care pot fi apoi prelucrate în mod normal.

După ce suprafețele acoperișului au fost generate, mai pot folosi [roof flashing generator](roofFlashingGenerator.md). Această metodă de introducere este aproape fără muncă.

#### **Formă simplă 😊😊😊😊😊**

Tipurile de acoperiș dreptunghiular pentru bungalourile din ce în ce mai populare sunt disponibile direct în HiStruct ca structuri complete. Aceste structuri sunt acoperite în mod automat cu materialul de acoperiș selectat și echipate cu sclipiri și jgheaburi.

### 3. Instalarea acoperișului

Pentru noi, bibliotecile de învelitori și de jgheaburi nu înseamnă doar dimensiune și culoare, ci o întreagă abordare a placării suprafețelor specifice ale acoperișului. Datorită generatorului de variabile, putem introduce în bibliotecă procedura specifică de instalare a acoperișurilor unui anumit producător. Facem acest lucru ca parte a [proiectului de personalizare](customisationProject.md). Un generator bine conceput elimină apoi intervențiile necesare în procesul automat de montare.

Procesul de [așternere a acoperișului](roofPolygonTillingOptions.md) are loc automat pe baza setărilor de configurare a acoperișului. De asemenea, este posibilă ajustarea poziției de pornire a țiglăritului (stânga, dreapta, centru la linia mediană, centru la marginea panoului) pentru a obține cea mai mică tăietură posibilă. Informațiile privind raportul dintre tăietură și suprafața planului acoperișului sunt afișate în timpul ajustărilor de placare.

### 4. Cum se utilizează solnițele și un sistem de jgheaburi?

Bineînțeles, [flashingurile](roofFlashingOptions.md) și [sistemul de jgheaburi](roofFlashingGutterOptions.md) pot fi specificate oriunde în spațiu, prin agățarea pe suprafețe de acoperiș deja specificate, pe geometria importată sau pe alte obiecte. În plus, este posibil să le adăugați la marginile planurilor de acoperiș individuale sau să utilizați direct [generatorul peste un grup de planuri de acoperiș](roofFlashingGenerator.md). Pentru elementele generate, panta planurilor de acoperiș asociate este ajustată automat, stabilindu-se astfel corect unghiurile de încovoiere ale solnițelor și cârligelor sistemului de streașină.

HiStruct include setări cuprinzătoare ale [sistemului de jgheaburi](roofFlashingGutterOptions.md). Prin specificarea unei polilinii care definește jgheabul din aval, poate fi setată panta jgheabului. Pentru fiecare parte a jgheabului, se stabilește, de asemenea, panta planului aval al acoperișului pentru calcularea corectă a lungimii curburii și a cârligului. Este posibil să se adauge cleme la fiecare secțiune de jgheab, care au [opțiuni de setare] suplimentare (roofFlashingGutterOptions.md).

### 5. Nomenclaturi, documente, desene... pur și simplu ieșiri

**BOM**
[BOM](roofBom.md) este creat automat din piesele de acoperiș inserate în spațiul modelului. Piesele individuale ale modelului au în dreptul lor informații despre piesele din care sunt create, cu posibilitatea de a edita numărul și, eventual, de a adăuga mai multe elemente.

Modul în care este generată BOM poate fi apoi modificat în cadrul [proiectului de personalizare](customisationProject.md).

**Citație**
Lista de materiale generată, completată cu un link către lista de prețuri a producătorului, poate face parte din [quote](roofQuote.md). Cu toate acestea, oferta poate fi pregătită fără BOM. Metoda de generare a ofertei poate fi apoi modificată în cadrul [proiectului de personalizare](customisationProject.md).

**Desene**
Desenele [layout drawings](roofPolygonTillingDrawing.md) sunt generate în mod automat pornind de la geometria specificată și de la orice modificări efectuate de utilizator. Dacă este necesar, se pot adăuga note sau adnotări suplimentare la desen.

![exemplu de desen de tasare a acoperișului](img\roofTillingPlane1.png)
![exemplu de desen de tasare a acoperișului](img\roofTillingPlane2.png)
