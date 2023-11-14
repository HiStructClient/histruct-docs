---
sourceLang: cs
sourceHash: 0ec09804c11db8487d8a751ce3e4af21
autoTranslated: true
---

# Trim generator și sistem de jgheaburi

Este conceput în principal pentru a **economisi timp** pentru realizarea de modele 3D de jgheaburi și burlane pentru geometrii importate sau specificate ale planului acoperișului.

De asemenea, generatorul poate fi utilizat în general pentru geometrii plane care sunt introduse dintr-un desen sau complet manual și doar modificate pentru a se potrivi cât mai bine cu marginile planurilor de acoperiș care urmează să fie atinse. Nu trebuie să se potrivească complet, ci doar să se potrivească în limitele toleranțelor normale.

![Source geometry for flashing generator](img/sourceGeometryForFlashingGenerator.png)

HiStruct identifică în mod automat locațiile necesare pentru flashing din geometriile planurilor de acoperiș din apropiere și apoi generează tipurile de flashing corespunzătoare. Aceste flashinguri generate pot fi apoi modificate ulterior, după cum este necesar.

![Generated flashing result](img/generatedFlashingResult.png)
