---
sourceLang: en
sourceHash: 2fc40df2c1b6e4b844f8426fa7f92382
autoTranslated: true
---


# Sistem de jgheaburi

Sistemul de jgheaburi este un element cheie al structurii acoperișului, rolul său principal fiind protecția construcției acoperișului împotriva efectelor negative ale apei. Acest element de construcție important include mai multe componente, cum ar fi streașina, jgheaburile și jgheaburile, care împreună formează un sistem de drenare adecvată a apei de pe suprafața acoperișului. În acest articol, vom explora opțiunile de modelare a sistemului de jgheaburi din cadrul HiStruct.

![Jgheab de scurgere](img/flashingGutter.png)

## Specificarea unui sistem de jgheaburi

Există mai multe opțiuni pentru modelarea sistemului de jgheaburi în HiStruct. Cel mai rapid mod este să utilizați [generator de jgheaburi și jgheaburi](roofFlashingGenerator.md), care vă permite să creați rapid un sistem complex de jgheaburi și apoi să modificați elementele individuale după cum este necesar. Alternativ, puteți adăuga manual unul sau mai multe jgheaburi folosind [polyline](polylineInput.md), care specifică marginile acoperișului pe care urmează să fie aplicate jgheaburile. Această flexibilitate vă permite să adaptați sistemul de jgheaburi la cerințele specifice ale proiectului.

## Ajustarea geometriei jgheaburilor și a burlanelor

Sistemul de jgheaburi poate fi modificat din punct de vedere al geometriei. Aveți opțiunea de a muta vârfurile polilinii, ceea ce vă permite să modificați poziția jgheabului, și puteți, de asemenea, să ajustați unghiurile cârligelor jgheabului. Generatorul face acest lucru în mod automat, dar puteți modifica acest lucru făcând clic pe *Edit* și apoi pe *Geometry*, unde puteți modifica unghiul sau edita polilinia. Modificarea unghiului și a geometriei se face într-un mod similar cu editarea [roofFlashing](roofFlashingOptions.md). În plus, făcând clic pe *Edit* și selectând jgheabul, puteți modifica panta jgheabului. Acest lucru va asigura că jgheabul are panta corectă pentru o scurgere eficientă a apei de ploaie. Ultimul parametru pe care îl puteți modifica este lățimea de acoperire. Această valoare determină lățimea foii de jgheab și afectează aspectul și funcția sistemului de jgheaburi.

![Proprietățile jgheabului cu bliț](img/flashingGutterProperties.png)

## Reglarea geometriei jgheabului

Selectând un jgheab și făcând clic pe butonul *Edit*, se va deschide meniul de editare a jgheaburilor HiStruct. Acest meniu oferă mai multe opțiuni de modificare a geometriei jgheabului, permițându-vă să personalizați jgheabul în funcție de cerințele dumneavoastră specifice.

- **Change Distance to Wall**: Puteți modifica distanța jgheabului, permițându-vă să adăugați coturi și să aduceți jgheabul mai aproape de perete.

- **Extindem jgheabul de coborâre**: Gura de scurgere poate fi extinsă fie prin intermediul casetei de dialog, fie prin simpla tragere a punctelor verzi de pe gura de scurgere.

- **Schimbarea poziției jgheabului**: De asemenea, puteți schimba cu ușurință poziția jgheabului selectând jgheabul și apoi deplasându-l cu mouse-ul.

În acest fel, puteți ajusta în mod flexibil geometria jgheabului pentru a se potrivi nevoilor specifice și cerințelor proiectului dumneavoastră.

![Proprietăți ale jgheabului de scurgere a jgheabului](img/flashingGutterDownspoutProperties.png)


## Adăugarea unui jgheab de scurgere a jgheabului
Coborârile jgheaburilor sunt de obicei generate automat pentru a asigura o scurgere eficientă a apei. Cu toate acestea, dacă doriți să adăugați un jgheab suplimentar, puteți face acest lucru pur și simplu folosind butonul *plus*. Este suficient să faceți clic pe acest buton, iar scurgerea de jgheab va fi adăugată la jgheabul existent pe care l-ați selectat.

![flashing gutter add downspout](img/flashingGutterAddDownspout.png)