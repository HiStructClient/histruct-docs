---
sourceLang: en
sourceHash: 2fc40df2c1b6e4b844f8426fa7f92382
autoTranslated: true
---


# Sistem de jgheaburi

Sistemul de jgheaburi este un element cheie al structurii acoperișului, având rolul principal de a proteja construcția acoperișului împotriva efectelor negative ale apei. Acest element de construcție important include mai multe componente, cum ar fi streșini, burlane și jgheaburi, care formează împreună un sistem pentru drenarea corespunzătoare a apei de pe suprafața acoperișului. În acest articol, vom explora opțiunile de modelare ale sistemului de jgheaburi în cadrul HiStruct.

![Jgheab futuresc](img/flashingGutter.png)

## Specificarea unui sistem de jgheaburi

Există mai multe opțiuni pentru modelarea sistemului de jgheaburi în HiStruct. Cea mai rapidă modalitate este utilizarea [generatorului de jgheaburi și burlane](roofFlashingGenerator.md), care vă permite să creați rapid un sistem complex de jgheaburi și apoi să modificați elementele individuale după necesități. Alternativ, puteți adăuga manual una sau mai multe jgheaburi utilizând [polilinie](polylineInput.md), care specifică marginile acoperișului pe care se vor aplica jgheaburile. Această flexibilitate vă permite să adaptați sistemul de jgheaburi la cerințele specifice ale proiectului.

## Ajustarea geometriei jgheabului și a burlanului

Sistemul de jgheaburi poate fi modificat în ceea ce privește geometria. Aveți opțiunea de a muta vârfurile polilinei, ceea ce vă permite să schimbați poziția jgheabului, și puteți ajusta, de asemenea, unghiurile cârligelor jgheabului. Generatorul face acest lucru în mod automat, dar puteți schimba aceasta făcând clic pe *Editare* și apoi *Geometrie*, unde puteți modifica unghiul sau edita polilinia. Schimbarea unghiului și a geometriei se face într-un mod similar cu editarea [flashingului pentru acoperiș](roofFlashingOptions.md). În plus, făcând clic pe *Editare* și selectând jgheabul, puteți modifica înclinarea jgheabului. Aceasta va asigura ca jgheabul să aibă înclinația corectă pentru o drenare eficientă a apei de ploaie. Ultimul parametru pe care îl puteți schimba este lățimea acoperișului. Această valoare determină lățimea foii de jgheab și afectează aspectul și funcționalitatea sistemului de jgheaburi.

![Proprietăți jgheab futuresc](img/flashingGutterProperties.png)

## Ajustarea geometriei jgheabului

Prin selectarea unui jgheab și făcând clic pe butonul *Editare*, se va deschide meniul de editare a jgheabului HiStruct. Acest meniu oferă mai multe opțiuni pentru modificarea geometriei jgheabului, permițându-vă să personalizați jgheabul în funcție de cerințele specifice.

- **Schimbarea distanței față de perete**: Puteți schimba distanța jgheabului, permițându-vă să adăugați coturi și să aduceți jgheabul mai aproape de perete.

- **Extinderea burlanului**: Burlanul poate fi extins atât prin caseta de dialog, cât și prin simpla tragere a punctelor verzi de pe burlan.

- **Schimbarea poziției jgheabului**: De asemenea, puteți schimba ușor poziția jgheabului selectând jgheabul și apoi mutându-l cu mouse-ul.

În acest fel, puteți ajusta cu flexibilitate geometria jgheabului pentru a se potrivi nevoilor specifice și cerințelor proiectului dumneavoastră.

![Proprietăți burlan jgheab futuresc](img/flashingGutterDownspoutProperties.png)


## Adăugarea unui burlan de jgheab
Burlanele de jgheab sunt de obicei generate automat pentru a asigura o drenare eficientă a apei. Cu toate acestea, dacă doriți să adăugați un burlan suplimentar, puteți face acest lucru pur și simplu utilizând butonul *plus*. Pur și simplu faceți clic pe acest buton și burlanul de jgheab va fi adăugat la jgheabul existent pe care l-ați selectat.

![Adăugare burlan jgheab futuresc](img/flashingGutterAddDownspout.png)