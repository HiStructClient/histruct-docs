---
sourceLang: en
sourceHash: 0aa30f8c3868783ed16c60a164d850d2
autoTranslated: true
---

# 🏠 Folosirea modelului OBJ pentru a genera acoperișul automat

Ai un model 3D dintr-un proiect BIM, o scanare cu drona sau o ridicare topografică prin satelit? Perfect - HiStruct vorbește fluent OBJ. Cu OBJ, HiStruct generează automat modelul 3D al acoperișului. Dacă nu ai un astfel de model disponibil, există companii care oferă servicii de scanare pentru clădiri existente. Indiferent dacă scanarea este făcută cu drone sau sateliți, rezultatul este de obicei un model 3D detaliat în format OBJ.

**❓Ce fac dacă primesc un model 3D în format PDF și nu am OBJ?**

Dacă ai un model 3D în format PDF, trebuie să îl convertești în format OBJ, care este suportat în HiStruct. Este simplu. Consultă [acest ghid](6_PDF_to_OBJ.md) pentru a vedea cât de rapid poți converti modelul 3D din PDF în OBJ.

Modelul rezultat poate arăta astfel:

![OBJmodel](img/5objModelBase.png)

## Cum se inserează un model OBJ în HiStruct

1.  **Apasă butonul Import.obj.** Se va deschide o casetă de dialog unde poți încărca modelul.

2.  **Alege punctul de inserare.** După selectarea fișierului, apasă oriunde în scenă unde vrei să apară modelul.

3.  **Lasă generatorul de acoperișuri să-și facă magia.** HiStruct va detecta automat planele și marginile acoperișului, apoi va crea un model 3D din suprafețele triunghiulare definite de acele margini.

4.  **Fă ajustări manuale dacă este nevoie.** Deși generatorul este aproape perfect, uneori poate lipsi o muchie sau o față poate fi clasificată greșit. Poți corecta orice muchii sau suprafețe generate direct în model.

![Model](img/5rosolModelObj.png)

## 🔧 Ajustare fină a modelului

<u>**Muchii**</u>

- **Apasă pe orice muchie** pentru a edita **proprietățile** acesteia

- **Muchiile individuale sunt codificate pe culori în 3 grupe, în funcție de rolul lor:**

> **🟦 Muchie capăt** - o muchie înclinată la capătul unei suprafețe de acoperiș; marchează limita acelei suprafețe.\
> **🟩 Muchie streașină** - o muchie orizontală a unei suprafețe de acoperiș.\
> **🟥 Muchie internă** - o muchie din interiorul unui plan al acoperișului, folosită doar pentru a împărți suprafețele; este ignorată la generarea acoperișului.

- **Poți activa/dezactiva fiecare muchie și seta dacă să fie tratată ca orizontală.**

<u>**Suprafețe**</u>

- La fel ca în cazul muchiilor, poți **schimba proprietățile fiecărei suprafețe recunoscute**.

- În funcție de orientarea acesteia, HiStruct decide dacă face parte din acoperiș.

- Apasă pe orice suprafață pentru a o include sau exclude din acoperiș. Suprafețele incluse vor avea tablă, structuri secundare și pazie generate pe ele.

- Suprafețele sunt codificate pe culori în două grupe:\
  🟦 **Albastru** - parte din acoperiș; folosit pentru generare.\
  ⬜ **Alb** - nu este parte din acoperiș; exclusă.

5. **Când totul arată bine, apasă „Next”** și lasă HiStruct să se ocupe de restul.

![Roof model](img/5roofModelObj.png)

6.  Generatorul te va ghida prin pașii următori și te va ajuta să creezi fără efort acoperișul dorit – complet cu toate accesoriile.

**👉 [*Mergi la pașii următori*](8_sheeting_menu.md)**

**👉 [*Întoarce-te la articolul principal*](index.md)**