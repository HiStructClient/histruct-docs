---
sourceLang: en
sourceHash: b265ac7b102d165430f0635e6fc2f8cd
autoTranslated: true
---

# Generare de jgheaburi și plăci de etanșare

Este special conceput să **economisească timpul** necesar pentru realizarea unui model 3D al plăcilor de etanșare și jgheaburilor pentru geometrii de acoperiș importate sau specificate.

Generatorul poate fi folosit și în mod mai general pentru geometrii plane introduse dintr-un desen sau create în întregime manual, și apoi modificate pentru a se potrivi cel mai bine cu marginile planurilor de acoperiș care trebuie acoperite. Nu trebuie să se potrivească perfect, ci trebuie să se încadreze în limitele normale de toleranță.

![Geometrie sursă pentru generatorul de plăci de etanșare](img/sourceGeometryForFlashingGenerator.png)

HiStruct identifică automat locurile unde sunt necesare plăcile de etanșare pe baza geometriilor planurilor de acoperiș învecinate și generează apoi tipurile corespunzătoare de plăci de etanșare. Aceste plăci generate pot fi apoi modificate ulterior, după cum este necesar.

![Rezultatul generării plăcilor de etanșare](img/generatedFlashingResult.png)