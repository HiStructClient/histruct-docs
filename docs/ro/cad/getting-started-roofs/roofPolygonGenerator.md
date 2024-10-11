---
sourceLang: cs
sourceHash: 50e6b6a8e62ae06d886fb82a718134ea
autoTranslated: true
---

# 🏢 Posibilități de utilizare a modelului din orientarea digitală a clădirii

Serviciul utilizat pe scară largă de ridicare a unei clădiri folosind hărți detaliate oferă adesea și un model tridimensional în format *.obj sau 3D *.pdf. HiStruct vă permite să utilizați eficient acest model obținut pentru prelucrarea ulterioară.

Modelul în format [3D *.pdf poate fi convertit în format *.obj](convert3dPdfToObj.md). Formatul *.obj poate fi apoi [importat](importObj.md) direct în scena HiStruct.

Modelul din orientarea digitală este de obicei mai mult sau mai puțin corect din punct de vedere geometric. Fiecare suprafață a acoperișului este descompusă într-o serie de triunghiuri, ceea ce nu reprezintă o problemă pentru afișarea fișierului importat în scenă. Cu toate acestea, pentru placarea ulterioară, suprafețele acoperișului trebuie să fie unificate. Prin urmare, după import, se efectuează automat o corecție geometrică în care triunghiurile sunt unificate în suprafețe de acoperiș.

Aceste geometrii de suprafață corectate sunt apoi salvate împreună cu proiectul, iar suprafețele individuale ale acoperișului și pereților pot fi convertite în elemente de placare.
