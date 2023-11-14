---
sourceLang: cs
sourceHash: 351adf998f7ab2d237efeb46fff6576f
autoTranslated: true
---

# Import desen DXF

Fie că aveți de gând să modelați un acoperiș sau o casă întreagă, utilizarea unui desen vă va ușura mult munca. Un desen vă va ușura munca. De ce? Ei bine, nu numai că puteți pur și simplu să fixați cursorul în punctele de pe desen, dar păstrați și controlul asupra formei și dimensiunii fiecărui element pe care îl modelați. Dar cum se face acest lucru? Credeți-mă, este ușor dacă urmați câțiva pași simpli.

## Cum să-ți pregătești desenul înainte de inserție?

### Evidențiați elementele importante
Desenul tău lipit va consta, de obicei, doar din linii, așa că este înțelept să evidențiezi părțile importante ale desenului cu diferite culori.

### Versiunea și dimensiunea fișierului DXF
HiStruct suportă majoritatea versiunilor de fișiere DXF, dar vă recomand să alegeți fișiere cu o dimensiune de până la 2 MB pentru o viteză maximă la editarea modelului dumneavoastră.

### Obiecte de fișiere DXF acceptate
Diferite tipuri de obiecte sunt acceptate în instrumentul nostru, cum ar fi *LINE, LWPOLYLINE, POLYLINE, SOLID, POINT, INSERT, SPLINE, CIRCLE, ARC* și *ELLIPSE*.

### Ready to insert drawing
Dacă urmați sfaturile de mai sus, desenul poate arăta astfel, de exemplu. Am evidențiat cu roșu marginile importante ale acoperișului și am eliminat obiectele inutile. Acest lucru nu numai că face mai rapidă crearea modelului, dar îmi oferă și liniște atunci când lucrez și nu trebuie să-mi fac griji cu privire la distragerea atenției.

![Desene DXF](img/dxfDrawings.png)


## Cum se inserează un desen DXF în HiStruct?

Dacă am un desen pregătit, îl pot insera cu ușurință în proiectul meu. Trebuie doar să faceți clic pe butonul *Import* și să selectați fișierul **.dxf*.

![Import Button](img/importButton.png)

### Selectarea originii
Acum trebuie doar să fac clic în scenă și să selectez punctul în care vreau să plasez începutul desenului meu.

![Select the origin](img/insertDXF.png)

### Ajustarea scalei
Dacă desenul meu este în alte unități decât metri, este în regulă. Pot pur și simplu să ajustez scara folosind butonul *Edit*.

![Edit Scale](img/externalObjectEdit.png)

### Drawing location
Pot lucra cu desenul inserat la fel ca cu orice alt obiect. Îl pot roti sau roti.

## Cum pot crea un model dintr-un desen?
Puteți să vă fixați pe *.dxf importat, apoi să specificați suprafețele individuale ale acoperișului prin decuparea planului [folosind o formă generică](modellingRoofs.md) cu adăugarea unei pante pentru fiecare suprafață a acoperișului.

![Crearea unui model](img/dxfModel.png)

În acest fel pot crea un model 3D precis pe care să pot rula aproape întotdeauna [generatorul de sclipiri și jgheaburi](roofFlashingGenerator.md)

![Flashing and gutter model](img/dxfModelFlashings.png)
