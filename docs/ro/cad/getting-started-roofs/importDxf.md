---
sourceLang: en
sourceHash: 190381ceb421aa273407cadc84baafa0
autoTranslated: true
proofRead: true
---


# Importarea desenului DXF

Indiferent dacă veți modela un acoperiș sau o întreagă casă, utilizarea unui desen vă va facilita munca. Un desen vă va face munca mai ușoară. De ce? Ei bine, nu numai că puteți poziționa ușor cursorul pe punctele de pe desen, dar aveți și control asupra formei și dimensiunii fiecărui element pe care îl modelați. Dar cum să o faceți? Credem, este ușor dacă urmați câțiva pași simpli.

## Cum să pregătiți desenul înainte de importare?

### Evidențiați elementele importante
Desenul importat va consta în general doar din linii, deci este indicat să evidențiați părțile importante ale desenului cu culori diferite.

### Versiunea și dimensiunea fișierului DXF
HiStruct suportă majoritatea versiunilor fișierelor DXF, dar recomandăm să alegeți fișiere de maxim 2 MB pentru a avea o viteză optimă la editarea modelului.

### Obiectele suportate în fișierele DXF
Diverse tipuri de obiecte sunt suportate în instrumentul nostru, precum *LINE, LWPOLYLINE, POLYLINE, SOLID, POINT, INSERT, SPLINE, CIRCLE, ARC* și *ELLIPSE*.

### Desen pregătit pentru importare
Dacă urmați sfaturile de mai sus, desenul poate arăta, de exemplu, în felul următor. Am evidențiat marginile importante ale acoperișului în roșu și am îndepărtat obiectele inutile. Aceasta nu numai că face procesul de creare al modelului mai rapid, dar îmi oferă și liniște sufletească în timpul lucrului și nu trebuie să mă preocup de distragerea atenției.

![Desene DXF](img/dxfDrawings.png)


## Cum să importați un desen DXF în HiStruct?

Dacă am un desen pregătit, îl pot importa ușor în proiectul meu. Doar trebuie să apăs pe butonul *Import* și să selectez fișierul **.dxf*.

![Butonul de import](img/importButton.png)

### Selectarea originii
Acum doar trebuie să fac clic în scenă și să selectez punctul în care vreau să plasez originea desenului meu.

![Selectarea originii](img/insertDXF.png)

### Ajustare a scării
Dacă desenul meu este în unități diferite de metri, nu este o problemă. Pot simplu să ajustez scara folosind butonul *Editare*.

![Editarea scalei](img/externalObjectEdit.png)

### Plasarea desenului
Pot manipula desenul importat la fel cum pot face cu orice alt obiect, mutându-l sau rotindu-l după necesitate.

## Cum creez un model pornind de la un desen?
Puteți alinia la *.dxf importat, apoi puteți defini suprafețele individuale ale acoperișului prin conturarea planului etajului utilizând o [forma generală de acoperiș](modellingRoofs.md), având opțiunea de a adăuga o înclinare pentru fiecare suprafață a acoperișului.

![Crearea unui model](img/dxfModel.png)

Astfel, puteți crea un model detaliat 3D cu ajutorul căruia puteți utiliza aproape întotdeauna [generatorul de elemente de etanșare și jgheaburi](roofFlashingGenerator.md).

![Model de elemente de etanșare și jgheaburi](img/dxfModelFlashings.png)