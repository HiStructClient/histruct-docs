---
sourceLang: cs
sourceHash: 68f68fb818dd1c8ff2f0e8df711d3de5
autoTranslated: true
---

# Sistem de jgheaburi

Sistemul de jgheaburi este unul dintre elementele cheie ale structurii acoperișului, al cărui rol principal este de a proteja structura acoperișului de efectele negative ale apei. Acest element structural important include mai multe componente, cum ar fi jgheaburile, burlanele și burlanele descendente, care împreună formează un sistem pentru drenarea corespunzătoare a apei de pe suprafața acoperișului. În acest articol vom analiza modul în care un sistem de jgheaburi poate fi modelat în cadrul HiStruct.

![Jgheab intermitent](img/flashingGutter.png)

## Specificarea unui sistem de jgheaburi

Există mai multe opțiuni pentru modelarea sistemului de jgheaburi în HiStruct. Cel mai rapid mod este de a utiliza [generatorul de jgheaburi și blițuri](roofFlashingGenerator.md), care vă permite să creați rapid un sistem complex de jgheaburi și apoi să modificați elementele individuale după cum este necesar. Alternativ, puteți adăuga manual un sistem de burlane utilizând [polyline](../instructor-roofs/insertPolyline.md), care specifică marginile acoperișului pe care urmează să fie aplicate burlanele. Această flexibilitate vă permite să adaptați sistemul de jgheaburi la cerințele dumneavoastră specifice și la proiectele de construcție.

## Ajustarea geometriei jgheaburilor și a streșinilor

Sistemul de jgheaburi poate fi modificat în ceea ce privește geometria. Aveți opțiunea de a muta vârfurile poliliniei, ceea ce vă permite să modificați poziția jgheabului și, de asemenea, puteți ajusta unghiul cârligelor jgheabului.   Generatorul face acest lucru automat, dar puteți modifica acest lucru făcând clic pe *Edit* și apoi pe *Geometry*, unde puteți modifica unghiul sau poziția poliliniei. Modificarea unghiului și a geometriei se face într-un mod similar editării [acoperișului] (roofFlashingOptions.md). În plus, făcând clic pe *Edit* și selectând jgheabul, puteți modifica panta jgheabului. Acest lucru va asigura că jgheabul are panta corectă pentru drenarea eficientă a apei de ploaie. Ultimul parametru pe care îl puteți modifica este lățimea capacului. Această valoare determină lățimea foii jgheabului și afectează aspectul și funcționarea sistemului de jgheaburi.

![Proprietăți ale jgheabului cu fulgere](img/flashingGutterProperties.png)

## Reglarea geometriei jgheabului

După ce faceți clic pe butonul *Edit* și selectați un jgheab, se va deschide meniul de editare a jgheabului HiStruct. Acest meniu oferă mai multe opțiuni pentru modificarea geometriei jgheabului, permițându-vă să personalizați jgheabul în funcție de cerințele dvs. specifice.

- **Change Distance to Wall**: Puteți modifica distanța jgheabului, permițându-vă să adăugați coturi și să aduceți jgheabul mai aproape de perete.

- **Extindeți jgheabul**: Jgheabul poate fi extins fie prin intermediul casetei de dialog, fie prin simpla glisare a punctelor verzi de pe jgheab.

- **Modificarea poziției jgheabului**: De asemenea, puteți modifica cu ușurință poziția jgheabului prin selectarea jgheabului și apoi deplasarea acestuia cu mouse-ul.

În acest fel, puteți ajusta în mod flexibil geometria jgheabului pentru a răspunde nevoilor dvs. specifice și cerințelor proiectului dvs. de construcție.

![Proprietăți ale jgheabului intermitent de coborâre](img/flashingGutterDownspoutProperties.png)


## Adăugarea unei guri de scurgere a jgheabului
În HiStruct, jgheaburile de scurgere sunt de obicei generate automat pentru a asigura o scurgere suficientă din jgheab. Cu toate acestea, dacă doriți să adăugați un jgheab suplimentar, o puteți face pur și simplu utilizând butonul *plus*. Pur și simplu faceți clic pe acest buton, iar jgheabul va fi adăugat la jgheabul existent pe care l-ați selectat.

![jgheabul intermitent adaugă burlan](img/flashingGutterAddDownspout.png)