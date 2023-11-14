---
sourceLang: en
sourceHash: 70298c03d0cb22a3dc1b138606e69930
autoTranslated: true
---


# Utilizarea modelului de la măsurare digitală

Un serviciu larg utilizat pentru construirea măsurătorilor prin hărți detaliate sau alte surse de date furnizează de obicei un model tridimensional în format *.obj sau 3D *.pdf. HiStruct permite utilizarea eficientă a acestui model achiziționat pentru prelucrarea ulterioară.

Modelul în format [3D *.pdf poate fi convertit în format *.obj](convert3dPdfToObj.md). Formatul *.obj poate fi apoi [importat](importObj.md) direct în scena HiStruct.

Modelul din măsurătorile digitale este în mod obișnuit mai mult sau mai puțin geometric corect. Fiecare suprafață de acoperiș este divizată într-o serie de triunghiuri, ceea ce este perfect adecvat pentru afișarea fișierului importat în scenă. Cu toate acestea, pentru procesul ulterior de învelire, este necesară unificarea triunghiurilor individuale în suprafețe de acoperiș geometric corecte. Prin urmare, după import, se efectuează automat o corecție a geometriei, în timpul căreia triunghiurile sunt unificate în suprafețe de acoperiș.

Aceste geometrii de suprafață corectate sunt apoi salvate împreună cu proiectul, iar suprafețele individuale ale acoperișurilor și pereților pot fi convertite în zone cu plăci.