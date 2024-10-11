---
sourceLang: cs
sourceHash: 9288a8311fbc925c855293cf4e6b8bc0
autoTranslated: true
---

# 🏗️ Modelarea pas cu pas a planurilor acoperișului în HiStruct
Desenarea unui plan de acoperiș este una dintre modalitățile prin care puteți modela întregul acoperiș. Există două moduri în care se poate face acest lucru. Dacă vreau să desenez o formă simplă, cel mai ușor este să selectez una dintre formele predefinite. Cu toate acestea, dacă forma planului acoperișului este mai complexă, este recomandabil să utilizați o formă generică.

## Modelarea suprafeței

### Formă predefinită
Vom demonstra cum să creăm un plan de acoperiș folosind forme predefinite pe un plan de acoperiș care are o formă trapezoidală. În meniul de forme predefinite, voi selecta forma corespunzătoare, și anume *Lihedral*, și voi face clic în scenă pentru a introduce forma selectată. Cu toate acestea, acum trebuie să modific dimensiunile acestui trapezoid pentru a se potrivi cu planul acoperișului nostru. Fac acest lucru făcând clic pe butonul *Edit*, unde pot modifica cu ușurință dimensiunile individuale ale trapezoidului nostru.
Dacă am deja o schiță a acoperișului cu o pantă, procesul este mai ușor, deoarece nu trebuie să mă ocup de ajustări geometrice suplimentare. Trebuie doar să rotesc planul acoperișului cu unghiul dorit. Cu toate acestea, dacă dimensiunile acoperișului sunt afișate doar pe planul de situație, trebuie adăugată panta. Panta poate fi introdusă în grade, iar săgețile pot fi utilizate pentru a specifica direcția în care acoperișul va fi înclinat. Linia neagră punctată indică marginea streașinei spre care este înclinată suprafața acoperișului în funcție de panta selectată. Voi adăuga celelalte planuri ale acoperișului în același mod pentru a modela întregul acoperiș.
  
![Intrare poligon trapezoid](img/trapezpoidPolygonInput.png)



### Formă generală
Adăugarea unui plan de acoperiș folosind o formă generică aduce multă variabilitate și, cu ajutorul unor funcții inteligente pentru [add polygon](insertPolygon.md), este și ușor. Crearea unui astfel de plan se face prin simpla selectare a vârfurilor individuale ale planului acoperișului. Acest lucru facilitează modelarea oricărei forme a planului acoperișului. Din nou, pot ridica planul acoperișului la panta dorită sau pot doar roti planul cu panta dorită.
  
![General polygon input](img/generalPolygonInput.png)

### Acoperiș complet
În același mod, adaug celelalte planuri de acoperiș și creez un acoperiș complet prin adăugarea incrementală a fiecărui plan de acoperiș. Le rotesc cu unghiul corect și le setez înălțimea corectă. Pe un astfel de model, de obicei, puteți rula [generatorul automat de solnițe și jgheaburi] (roofFlashingGenerator.md).

![Generat](img/byPlanesRoof.png)

## Generare din contur
### Conturul acoperișului
A doua abordare posibilă este de a genera acoperișul doar din contur. Mai întâi trebuie să desenați conturul acoperișului. Pentru a face acest lucru, este desigur posibil să importați [fișiere în format *.dxf](importDxf.md) sau să convertiți [*.pdf în *.dxf] vectorial(convertPdfToDxf.md) și să le [importați în HiStruct](importDxf.md). Datorită fundalului, pot desena cu ușurință orice contur de acoperiș

![Intrarea poligonului de delimitare](img/generatedRoofBoundary.png)

### Generarea crestelor acoperișului
Imediat după desenarea conturului unui acoperiș, crestele acelui acoperiș vor fi rezolvate automat. Acest lucru va genera un acoperiș cu șarpantă pentru care se pot modifica diverse proprietăți.

![Intrarea poligonului crestelor](img/generatedRoofRidges.png)

### Modificarea marginilor individuale ale acoperișului

Toate marginile conturului desenate pot fi modificate cu ușurință. Fiecărei muchii i se poate atribui un set de parametri în funcție de tipul acesteia. În primul rând, puteți schimba tipul de margine de la marginea de streașină implicită, de exemplu, la o margine de fronton sau o margine de streașină ridicată. Pentru a face această alegere, pur și simplu faceți clic pe imaginea corespunzătoare. Apoi, puteți seta suprapunerea planului acoperișului sau, în cazul unei muchii de jgheab, panta planului acoperișului adiacent.

![Introducerea poligonului crestelor](img/generatedEditRoofEave.png)

### Generarea întregului acoperiș

Prin setarea corectă a marginilor individuale și a parametrilor acestora, întregul acoperiș poate fi apoi generat cu ușurință. În plus, generatorul generează în mod automat și toate [burlanele, burlanele](roofFlashingOptions.md) și [sistemul de jgheaburi](roofFlashingGutterOptions.md) necesare.

![Generat](img/generatedRoof.png)