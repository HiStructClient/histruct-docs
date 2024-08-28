---
sourceLang: cs
sourceHash: a73105b1491809aa47a7e015cab6ba8b
autoTranslated: true
---

# Placarea acoperișului și burlanele

Învelitoarea acoperișului și adăugarea burlanelor la un plan de acoperiș sunt etape esențiale în crearea unui proiect de acoperiș de calitate. În HiStruct, puteți adăuga manual burlane pe fiecare parte a unui plan de acoperiș sau puteți utiliza [Generator de burlane pentru acoperiș](roofFlashingGenerator.md) pentru un întreg grup de planuri de acoperiș. Modelarea solbancurilor și a burlanelor individuale este ușoară și vă voi arăta cum să o faceți.

## Specificarea șarpantelor

Cel mai rapid mod de a crea solnițe este să utilizați [roofFlashing Generator](roofFlashingGenerator.md) și apoi să modificați elementele individuale. Dar toate burlanele acoperișului pot fi definite și cu ajutorul [polyline](../instructor-roofs/insertPolyline.md), care specifică marginile acoperișului unde ar trebui aplicate burlanele.

## Modificarea geometriei burlanelor

Toate solnițele pot fi modificate din punct de vedere al geometriei. Puteți muta vârfurile poliliniei pentru a schimba poziția burlanelor. De asemenea, puteți ajusta unghiul de încovoiere al unora dintre garnituri. Generatorul face acest lucru automat, dar puteți modifica acest lucru făcând clic pe *Edit* și apoi pe *Geometry*, unde puteți modifica unghiul sau poziția poliliniei.

### Ajustarea unghiului

Pentru a modifica unghiul, faceți clic pe săgeata care indică normala suprafeței de care este adiacentă marginea.

![Editarea unghiului de clipire](img/flashingEditAngle.png)

După ce faceți clic pe săgeată, faceți clic pe pictograma cursorului și apoi selectați suprafața pe care doriți să adere franjura.

![Edit angle of flashing- step 2](img/flashingEditAngleStep2.png)

### Editați poziția

Modificarea poziției se face în același mod ca și modificarea geometriei polilinii.

## Selectarea placării din bibliotecă

Puteți selecta diferite tipuri de plăsmuire din [bibliotecă](roofFlashingLibrary.md) pentru fiecare element de plăsmuire. Acest lucru se poate face fie pentru elemente individuale, fie pentru un întreg grup de elemente deodată.

## Tipuri de burlane

Fiecare parte a acoperișului necesită un anumit tip de solnițe și burlane. HiStruct are o gamă largă de solnițe și burlane pentru a acoperi aproape toate părțile acoperișului. În cele ce urmează vom trece în revistă fiecare element în parte.

### Solbanți de fronton
Solbanții de fronton, numiți și solbanți de pârâu, sunt solbanți speciali utilizați pentru finisarea fațadei frontonului unui acoperiș. Fațada frontonului este porțiunea acoperișului care se află pe partea frontonului unei clădiri, iar solnițele frontonului sunt utilizate pentru a oferi un finisaj estetic sau de protecție acestei porțiuni a acoperișului.

![Bandă de protecție a frontoanelor](img/flashingGableTrim.png)

### Ornamente de coamă
O garnitură de coamă este un element de acoperiș care este utilizat pentru a acoperi coama unui acoperiș. Acest element este utilizat pentru a proteja această zonă de intemperii, de pătrunderea apei și de alte potențiale probleme. În acest fel, garnitura de coamă asigură o finisare completă și sigură a acoperișului.

![Acoperiș de acoperiș](img/flashingRidgeCap.png)

### Un capac de coamă
O vale este un punct de pe un acoperiș în care două suprafețe ale acoperișului se întâlnesc pentru a forma o vale. Această caracteristică este utilizată pentru a evacua apa și zăpada și pentru a proteja clădirea de infiltrarea umidității.
 
![Vâlcea intermitentă](img/flashingValley.png)

### Gârle
Un jgheab este un element structural situat la marginea unui acoperiș care servește la controlarea fluxului de apă de ploaie într-un jgheab sau într-un canal de scurgere, protejând astfel clădirea de daunele cauzate de apa care curge în structura acoperișului.


![Șorț de jgheab](img/flashingGutterApron.png)

### Șarpantă la perete
Acest chenar este de obicei situat în locul în care acoperișul întâlnește peretele vertical și servește la asigurarea unei legături strânse și curate din punct de vedere estetic între cele două părți ale clădirii.

![Bandă de protecție a peretelui](img/flashingWallTrim.png)

### Închiderea deschiderii
Acest element este utilizat pentru a placa o deschidere în acoperiș pentru a preveni curgerea apei în jurul deschiderii.

Deschizătura acoperișului](img/flashingRoofOpening.png)