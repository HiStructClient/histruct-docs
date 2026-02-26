---
sourceLang: en
sourceHash: b19295ae6f483236663b205d0c047661
autoTranslated: true
---

# 🏠 Utilizarea modelului OBJ pentru a genera acoperișul automat

Ai un model 3D dintr-un proiect BIM, o scanare cu drona sau un studiu satelitar? Perfect - HiStruct vorbește OBJ fluent. Cu OBJ, HiStruct generează automat modelul 3D al acoperișului. Dacă nu ai un astfel de model disponibil, există companii care oferă relevee ale clădirilor existente. Indiferent dacă releveul este realizat cu drone sau sateliți, rezultatul este de obicei un model 3D detaliat în format OBJ.

**❓Ce se întâmplă dacă primesc un model 3D în format PDF și nu am OBJ?**

Dacă ai un model 3D în format PDF, trebuie să îl convertești în format OBJ, care este suportat în HiStruct. E ușor. Consultă [acest ghid](6_PDF_to_OBJ.md) ca să vezi cât de rapid poți converti un model 3D din PDF în OBJ.

Modelul rezultat poate arăta astfel:

![OBJmodel](img/5objModelBase.png)


## Cum să inserezi un model OBJ în HiStruct

1. **Apasă butonul Import.obj.** Acesta va deschide o fereastră de dialog unde poți încărca modelul.

2. **Alege punctul de inserare.** După selectarea fișierului, fă click oriunde în scenă unde vrei să apară modelul.

3. **Lasă generatorul de acoperiș să-și facă magia.** HiStruct va detecta automat planele și muchiile acoperișului, apoi va crea un model 3D din suprafețe triunghiulare definite de acele muchii.

4. **Fă ajustări manuale dacă este necesar.** Chiar dacă generatorul este aproape impecabil, ocazional o muchie poate fi omisă sau o față clasificată incorect. Poți ajusta fin orice muchii sau suprafețe generate direct în model.

5. **Când totul arată bine, apasă „Next”** și lasă HiStruct să facă restul.

6. Generatorul te va ghida prin pașii următori și te va ajuta să creezi fără efort acoperișul pe care îl dorești - complet cu toate accesoriile.

![Roof model](img/5roofModelObj.png)



## 🔧 Reglarea fină a modelului tău

![Model](img\5rosolModelObj.png)

  <u>**Muchii**</u>

  - **Fă click pe orice muchie** pentru a-i edita **proprietățile**

  - **Muchiile individuale sunt codate pe culori în 3 grupuri în funcție de rolul lor:**

    * **🟦 Muchie de fronton** - o muchie înclinată la capătul unei suprafețe de acoperiș; marchează limita acelei suprafețe.
    * **🟩 Muchie de streașină** - o muchie orizontală a unei suprafețe de acoperiș.
    * **🟥 Muchie internă** - o muchie în interiorul unui plan de acoperiș, folosită doar pentru a împărți suprafețele; este ignorată la generarea acoperișului.

  - **Poți activa sau dezactiva fiecare muchie și poți seta dacă ar trebui tratată ca fiind orizontală.**

  <u>**Fețe**</u>

  - În același mod ca la muchii, poți **modifica proprietățile fiecărei fețe recunoscute**.

  - În funcție de orientarea sa, HiStruct decide dacă face parte din acoperiș.

  - Fă click pe orice față pentru a o include sau exclude din acoperiș. Fețele incluse vor avea generate pe ele învelitoare, structuri secundare și sorturi.

  - Fețele sunt codate pe culori în două grupuri:

    * 🟦 **Albastru** - parte a acoperișului; folosită pentru generare.
    * ⬜ **Alb** - nu face parte din acoperiș; exclusă.


**👉 [*Mergi la pașii următori*](8_sheeting_menu.md)** 

**👉 [*Înapoi la articolul principal*](index.md)**