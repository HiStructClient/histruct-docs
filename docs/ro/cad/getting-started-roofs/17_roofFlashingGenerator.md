---
sourceLang: en
sourceHash: d2d648194432608fc297a9166744386c
autoTranslated: true
---

# 🚀 Cum funcționează generatorul de borduri și jgheaburi HiStruct

Este conceput în principal pentru a **economisi timp** în realizarea modelului 3D al bordurilor și streșinilor pentru geometria planurilor de acoperiș importate sau specificate.

Generatorul poate fi folosit de asemenea, în general, pentru geometrii de plane introduse dintr-un desen sau complet manual și doar modificate astfel încât să se potrivească cât mai bine cu marginile planurilor de acoperiș ce urmează a fi atinse. Nu este necesar să se potrivească perfect, ci doar să se încadreze în toleranțele normale.

![Geometria sursă pentru generatorul de borduri](img/SourceGeometryFlashing.png)

HiStruct identifică automat locațiile necesare pentru borduri din geometria planurilor de acoperiș apropiate, apoi generează tipurile corespunzătoare de borduri. Aceste borduri generate pot fi apoi modificate în continuare după necesitate.

![Rezultatul bordurii generate](img/generatedFlashingResult.png)