---
sourceLang: cs
sourceHash: d3c4dbe3f6616e660690e4e09e4e8541
autoTranslated: true
---

# 🚀 Cum funcționează generatorul de ornamente și jgheaburi HiStruct

Acesta este conceput în principal pentru a **economisi timp** pentru realizarea modelului 3d de solnițe și streșini pentru geometrii importate sau specificate ale planului acoperișului.

Generatorul poate fi, de asemenea, utilizat în general pentru geometrii de plan care sunt introduse dintr-un desen sau complet de mână și doar modificate pentru a se potrivi cel mai bine cu marginile planurilor acoperișului care urmează să fie atinse. Nu trebuie să se potrivească complet, ci doar să se potrivească în limitele toleranțelor normale.

![Geometrie sursă pentru generatorul de blițuri](img/sourceGeometryForFlashingGenerator.png)

HiStruct identifică în mod automat locațiile necesare ale burlanelor din geometria planurilor de acoperiș din apropiere și apoi generează tipurile de burlane corespunzătoare. Aceste solnițe generate pot fi apoi modificate după cum este necesar.

![Generated FlashingResult](img/generatedFlashingResult.png)
