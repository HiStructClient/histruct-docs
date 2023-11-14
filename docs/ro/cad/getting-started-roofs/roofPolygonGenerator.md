---
sourceLang: cs
sourceHash: 5892688192faec0ad0338eccf2c47852
autoTranslated: true
---

# Utilizarea modelului din orientarea digitală a clădirii

Un serviciu utilizat pe scară largă pentru supravegherea unei clădiri folosind hărți detaliate sau alte date, care oferă, de obicei, și un model tridimensional ca rezultat. Acest model este de obicei furnizat în format *.obj sau în format 3D *.pdf. HiStruct permite ca modelul obținut în acest mod să fie utilizat pentru prelucrări ulterioare.

Modelul în format [3D *.pdf poate fi convertit în format *.obj](convert3dPdfToObj.md). Formatul *.obj poate fi apoi direct [importat](importObj.md) în scena HiStruct.

Modelul din orientarea digitală este, de obicei, mai mult sau mai puțin corect din punct de vedere geometric. Fiecare suprafață a acoperișului este împărțită într-o serie de triunghiuri, ceea ce este bine pentru afișarea fișierului importat în scenă. Pentru placare, însă, suprafețele acoperișului trebuie să fie unificate. Prin urmare, după import, se efectuează automat o corecție geometrică în care triunghiurile sunt unificate în fețe de acoperiș.

Aceste geometrii de suprafață corectate sunt apoi salvate împreună cu proiectul, iar suprafețele individuale ale acoperișului și ale pereților pot fi convertite în elemente de placare.
