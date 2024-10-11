---
sourceLang: cs
sourceHash: 978114c8a8873bb76c969d812a624842
autoTranslated: true
---

# 📐 Introduceți desenul DXF în HiStruct pentru o modelare precisă

Dacă aveți orice bază de linii pentru acoperișul dvs., inserarea acesteia în spațiul de modelare vă va ușura mult munca. Această bază vă va permite să vă desenați acoperișul mai precis și, datorită fixării automate a cursorului, va crește și precizia modelului dvs. Nu aveți un desen în format DXF, ci doar în format PDF? Nu contează, majoritatea desenelor cu linii pot fi ușor [convertite în DXF](convertPdfToDxf.md).

Să aruncăm o privire la modul de inserare a unui astfel de desen...

## Cum să introduceți DXF în HiStruct?

1. Deschideți fila *Substrat* și faceți clic pe butonul *Import \*.dxf*. Acest lucru va deschide o casetă de dialog în care puteți încărca desenul dvs.
2. După selectarea fișierului, trebuie să specificați punctul de inserție al desenului făcând clic în scenă.

![Model DXF](img/importDXF.png)

## Setarea scării corecte a desenului
Deoarece desenele sunt la scări diferite, este mai întâi necesar să setați scara corectă pentru a face modelul să corespundă dimensiunilor reale.

![Model DXF](img/dxfNoScale.png)

1. Mai întâi trebuie să măsurați una dintre marginile cunoscute folosind butonul *Measure*.
2. Calculați scara ca fiind lungimea reală împărțită la lungimea măsurată.
3. Faceți clic pe desenul inserat și modificați-i scara în fila *Properties*.

Dacă ați setat valoarea corectă a scării, atunci valorile măsurate se vor potrivi cu liniile din desen.

![Model DXF](img/dxfWithScale.png)

## De la desen la acoperișul complet
Acum că am importat baza ca DXF, este posibil să modelăm acoperișul în mod obișnuit, fie folosind planuri individuale ale acoperișului, fie folosind soluția noastră automată, care creează acoperișul doar din poligonul de contur al unui astfel de acoperiș.

![Model DXF](img/dxfRoof.png)

