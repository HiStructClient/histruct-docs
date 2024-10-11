---
sourceLang: cs
sourceHash: 2f4921249348370f1c9f7a204aa35cc2
autoTranslated: true
---

# 🛠️ Einfaches Arbeiten mit dem Dachplattengenerator

Willkommen bei unserem Dachplattengenerator! 🎉 Dieses Tool hilft Ihnen, die Dachplatten für Ihr Projekt einfach auszulegen. Kein kompliziertes Setup im Vorfeld - alles geschieht direkt auf dem Bildschirm, wo Sie jeden Abschnitt des Daches nach Ihren Wünschen anpassen können.

Zunächst legt der Generator automatisch die Bretter aus, die das gesamte Dach bedecken. Jetzt kommt der spaßige Teil! 💡 Sie können nun jede Dachebene einzeln anpassen. Für jede Dachebene stehen Ihnen mehrere Parameter zur Verfügung, mit denen Sie die Details nach Ihren Wünschen anpassen können.

Schauen wir uns an, wie es funktioniert 👇:

1. **Generator eingeben:** Sobald das Dach generiert ist, können Sie mit der Bearbeitung der einzelnen Ebenen beginnen. Klicken Sie auf die Ebene, die Sie bearbeiten möchten, und die Bearbeitungsoptionen werden geöffnet.
   ![Dachflächen](img/stripGeneratorRoof.png)

2. **Einstellung der Parameter - Verlegung:** Jede Dachebene hat ihre eigenen Parameter, die es Ihnen ermöglichen, die Verlegung der Platten fein abzustimmen, den Materialverbrauch zu optimieren und ein perfektes Ergebnis zu gewährleisten.
   Dachflächenverlegung](img/stripGeneratorTiling.png)

    - **Steuerung der Verlegerichtung:** Dieser Parameter bestimmt die Verlegerichtung der Dachziegel, entweder nach der Neigungsrichtung oder nach einer der Kanten der Dachebene. Verwenden Sie die Pfeile, um die Kante auszuwählen, an der die Verlegung beginnen soll; diese Kante wird im Modell durch eine gestrichelte Linie hervorgehoben.
    - **Verlegerichtung:** Bestimmt, ob die Streifen horizontal oder vertikal zur Verlegerichtung verlegt werden. ↔️
    - **Verlegerichtung umkehren:** Das Aktivieren dieses Parameters kehrt die Verlegerichtung um.
    - **Verlegerichtung der Beschläge umkehren:** Mit diesem Parameter können Sie die Verlegerichtung der Beschläge in jeder Bahn umkehren.
    - **Erste Reihe verschieben:** Bestimmt die Position der ersten horizontalen Fuge vom Ursprung aus. Dieser Parameter wird hauptsächlich verwendet, wenn die erste Reihe verschoben wird, was Sie im weiteren Verlauf erfahren werden.
    - **Verlegewinkel:** Die Größe des Winkels bestimmt die Abweichung der Verlegung von der angegebenen Kante.

3. **Parametereinstellungen - Bearbeiten:** In diesem Abschnitt können Sie bei Bedarf die erste oder letzte Reihe ausschalten. Dies kann nützlich sein, wenn die letzte Reihe z. B. nur ein 5 cm breiter Streifen ist, der von einer anderen Dachebene aus hinzugefügt wird.
Es ist einfach zu benutzen: im Menü für jeden Streifen gibt es 3 Optionen: *Ja, Nein* und *Beliebig*. Wenn Sie z. B. 30 cm von einer anderen Dachebene übrig haben, können Sie die erste Reihe um 30 cm versetzen, die erste Reihe auf *Allgemein* einstellen und in das Feld *Beschreibung* schreiben: "Es wird ein Streifen von Dachebene K verwendet". Diese Beschreibung wird dann in das Modell, die Zeichnung und die Stückliste übernommen. 📝
![Dachflächenabdeckung](img/stripGeneratorAdjust.png)


4. **Versatz einstellen:** Wenn Sie einen Kantenversatz einstellen oder die Abdeckung über eine Kante verlängern möchten, ist das ganz einfach. Klicken Sie auf die Schaltfläche ➕ neben der ausgewählten Kante und stellen Sie einen Wert ein, um die Fläche um den angegebenen Versatz zu vergrößern oder zu verkleinern.

Und das war's! Jetzt ist die Platzierung der Platine festgelegt! 🎉
