---
sourceLang: en
sourceHash: 70298c03d0cb22a3dc1b138606e69930
autoTranslated: true
---


# Utilizarea modelului de măsurare digitală

Un serviciu utilizat pe scară largă pentru măsurători de clădiri prin intermediul hărților detaliate sau al altor surse de date oferă, de obicei, un model tridimensional în format *.obj sau 3D *.pdf. HiStruct permite utilizarea eficientă a acestui model achiziționat pentru procesarea ulterioară.

Modelul în format [3D *.pdf poate fi convertit în format *.obj](convert3dPdfToObj.md). Formatul *.obj poate fi apoi [importat](importObj.md) direct în scena HiStruct.

Modelul rezultat din măsurători digitale este, de obicei, mai mult sau mai puțin corect din punct de vedere geometric. Fiecare suprafață a acoperișului este împărțită într-o serie de triunghiuri, ceea ce este perfect în regulă pentru deplasarea fișierului importat în scenă. Cu toate acestea, pentru procesul ulterior de placare, este necesară unificarea triunghiurilor individuale în suprafețe de acoperiș corecte din punct de vedere geometric. Prin urmare, după import, se efectuează automat corecția geometrică, în timpul căreia triunghiurile sunt unificate în suprafețe de acoperiș.

Aceste geometrii de suprafață corectate sunt apoi salvate împreună cu proiectul, iar suprafețele individuale ale acoperișului și ale pereților pot fi convertite în suprafețe de țiglă.
