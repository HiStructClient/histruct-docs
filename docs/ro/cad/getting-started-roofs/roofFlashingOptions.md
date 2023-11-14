---
sourceLang: en
sourceHash: 7cd4cdfdab50f27235f4533edfb32371
autoTranslated: true
---


# Acoperișuri și borduri

Adăugarea de sclipiri la acoperiș și suplimentarea streașinilor în proiectarea acoperișului sunt pași esențiali în crearea unui proiect de acoperiș de înaltă calitate. În HiStruct, puteți adăuga manual solnițe pe fiecare parte a planului de acoperiș sau puteți utiliza [roof Flashings Generator](roofFlashingGenerator.md) pentru un întreg grup de planuri de acoperiș.

## Specificarea flashingurilor

Cel mai rapid mod de a crea flashinguri este să utilizați [roofFlashingFlashing Generator](roofFlashingGenerator.md) și apoi să modificați elementele individuale. Dar toate flashingurile pentru acoperișuri pot fi definite, de asemenea, folosind [polyline](polylineInput.md), care specifică marginile acoperișului unde trebuie aplicate flashingurile.

## Modificarea geometriei de bliț

Toate flashingurile pot fi modificate din punct de vedere al geometriei. Puteți muta vârfurile polilinii pentru a modifica poziția flashingurilor. De asemenea, puteți ajusta unghiul de curbură al unora dintre blindaje. Generatorul face acest lucru în mod automat, dar puteți modifica acest lucru făcând clic pe *Edit* și apoi pe *Geometry*, unde puteți modifica unghiul sau geometria polilinii.

### Ajustarea unghiului

Pentru a modifica unghiul, dați clic pe săgeata care arată normala suprafeței căreia îi este adiacentă bordura.

![Editarea unghiului de clipire](img/flashingEditAngle.png)

După ce faceți clic pe săgeată, faceți clic pe pictograma cursorului și apoi selectați zona la care doriți ca franjura să adere.

![Edit angle of flashing- step 2](img/flashingEditAngleStep2.png)

### Edit position

Modificarea poziției se face în același mod ca și modificarea geometriei [polyline](polylineInput.md).

## Selectarea placării din bibliotecă

Puteți selecta diferite tipuri de blițuri din [library](roofFlashingLibrary.md) pentru fiecare element de bliț. Acest lucru se poate face fie pentru elemente individuale, fie pentru un grup de elemente deodată.

## Tipuri de flashinguri

Fiecare parte a acoperișului necesită un tip specific de flashinguri și de racorduri. HiStruct dispune de o gamă largă de flashinguri și de blindaje pentru a acoperi aproape toate părțile acoperișului. În cele ce urmează vom trece în revistă fiecare element în parte.

![Buton de bliț](img/flashingsButton.png)

### Gable trim
Jaluzelele de fronton, numite și garnituri de burlan, sunt niște garnituri speciale folosite pentru finisarea fațadei fronton a unui acoperiș. Fațada frontonului este porțiunea de acoperiș care se află pe partea frontonului unei clădiri, iar rosturile de fronton sunt folosite pentru a oferi un finisaj estetic sau de protecție acestei porțiuni de acoperiș.

![Flashing gable trim](img/flashingGableTrim.png)

### Ridge trim
O garnitură de coamă este un element de acoperiș care este folosit pentru a acoperi coama unui acoperiș. Acest element este folosit pentru a proteja această zonă de intemperii, de pătrunderea apei și de alte potențiale probleme. În acest fel, garnitura de coamă asigură o finisare completă și sigură a acoperișului.

![Flashing ridge cap](img/flashingRidgeCap.png)

### A ridge cap
O vale este un punct de pe un acoperiș în care două suprafețe de acoperiș se întâlnesc pentru a forma o vale. Această caracteristică este folosită pentru a evacua apa și zăpada și pentru a proteja clădirea de infiltrarea umidității.
 
![Flashing valley](img/flashingValley.png)

###Eaves
Un jgheab este un element structural situat la marginea unui acoperiș care are rolul de a controla fluxul de apă de ploaie într-un jgheab sau în jgheaburile de scurgere, protejând astfel clădirea de daunele cauzate de apa care curge în structura acoperișului.


![Șorț de jgheab de jgheab](img/flashingGutterApron.png)

### Bordură la perete
Acest jgheab este situat de obicei acolo unde acoperișul se întâlnește cu peretele vertical și are rolul de a asigura o legătură etanșă și curată din punct de vedere estetic între cele două părți ale clădirii.

!!![Flanșament de bordură a peretelui](img/flashingWallTrim.png)

### Flashing the opening
Acest element este utilizat pentru a placa o deschidere în acoperiș pentru a împiedica apa să curgă în jurul deschiderii.

![Flashing roof opening](img/flashingRoofOpening.png)