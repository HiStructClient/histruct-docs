---
sourceLang: cs
sourceHash: e51c064155c7f37907ea1cf3e9e95473
autoTranslated: true
---

# Utilizarea modelului din orientarea digitală a clădirii

Un serviciu utilizat pe scară largă pentru supravegherea unei clădiri cu ajutorul hărților detaliate sau al altor documente oferă, de obicei, un model tridimensional în format *.obj sau 3D *.pdf. HiStruct permite ca acest model obținut să fie utilizat în mod eficient pentru prelucrări ulterioare.

Modelul în format [3D *.pdf poate fi convertit în format *.obj](convert3dPdfToObj.md). Formatul *.obj poate fi apoi direct [importat](importObj.md) în scena HiStruct.

Modelul din orientarea digitală este, de obicei, mai mult sau mai puțin corect din punct de vedere geometric. Fiecare suprafață a acoperișului este descompusă într-o serie de triunghiuri, ceea ce nu reprezintă o problemă pentru afișarea fișierului importat în scenă. Cu toate acestea, pentru placarea ulterioară, suprafețele acoperișului trebuie să fie unificate. Prin urmare, după import, se efectuează automat o corecție geometrică în care triunghiurile sunt unificate în suprafețe de acoperiș.

Aceste geometrii de suprafață corectate sunt apoi salvate împreună cu proiectul, iar suprafețele individuale ale acoperișului și ale pereților pot fi convertite în elemente de placare.
