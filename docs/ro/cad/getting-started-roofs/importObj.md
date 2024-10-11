---
sourceLang: cs
sourceHash: 58c2838a2ce6f8698332c2066cd4a3b3
autoTranslated: true
---

# 🏠 Utilizarea modelului OBJ pentru generarea automată a acoperișului
Odată cu dezvoltarea tehnologiei BIM, vedem din ce în ce mai des proiecte de construcții care au propriul model 3D, de multe ori înainte ca acestea să fie efectiv implementate. Cu toate acestea, dacă o clădire nu are un astfel de model, există companii care oferă topografie a clădirilor existente. Indiferent dacă ridicarea se face cu drone sau sateliți, rezultatul este de obicei un model 3D detaliat în format OBJ, dacă nu aveți un model OBJ, vedeți cum să [convertiți] modelul în acest format(convert3dPdfToObj.md). Modelul rezultat poate arăta astfel:

![Model OBJ](img/objModelBase.png)

## Cum să introduc OBJ în HiStruct?

Pentru a profita la maximum de modelul OBJ, vă recomandăm să utilizați inovatorul nostru generator automat de acoperișuri. Acesta poate recunoaște planurile individuale ale acoperișului în modelul OBJ și le poate atribui marginile, pantele și proprietățile corecte.

1. Faceți clic pe butonul *Import \*.obj*. Aceasta va deschide o fereastră de dialog în care puteți încărca modelul dvs.
2. După selectarea fișierului, trebuie să specificați punctul de inserție al modelului făcând clic în scenă.

![Model Rosol](img/rosolModelObj.png)

### Editarea unui model 3D recunoscut

Chiar dacă generatorul nostru este aproape impecabil, pot exista muchii și variante pe care acesta nu le recunoaște întotdeauna corect. Prin urmare, aveți posibilitatea de a corecta dispozitivul de recunoaștere și de a ajusta proprietățile fiecărei muchii.

- Faceți clic pe orice muchie pentru a-i ajusta proprietățile.
- În același mod, puteți modifica proprietățile fiecărui plan recunoscut. Dacă nu doriți să generați un acoperiș pe un plan, puteți modifica proprietățile acestuia.

**Marginile individuale sunt codificate prin culori în 3 grupe, în funcție de funcția lor:**

- <span style="color: #395abd;">**Borduri albastre**</span> : Caseta de delimitare oblică pentru planurile de acoperiș individuale.
- <span style="color: green;">**Green edges**</span> : Margini orizontale cum ar fi coama acoperișului sau marginea streașinei.
- <span style="color: red;">**Red edges**</span> : Marginile care sunt ignorate la generarea unui acoperiș deoarece se află într-un anumit plan al acoperișului.

**Fațetele individuale sunt codificate prin culoare în 2 grupuri în funcție de funcție:**

- <span style="color: #395abd;">**Arii albastre**</span>: Planul pe care va fi amplasată acoperirea.
- **Zone albe**: Planul care nu face parte din acoperiș.

## Cum să generăm un acoperiș?

Generarea unui acoperiș este acum ușoară. Trebuie doar să utilizați generatorul nostru de acoperișuri făcând clic pe butonul *Next*. Generatorul vă va ghida prin proces și vă va ajuta să generați cu ușurință acoperișul dorit, inclusiv accesoriile.

![Model de acoperiș](img/roofModelObj.png)