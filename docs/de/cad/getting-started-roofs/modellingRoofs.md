---
sourceLang: cs
sourceHash: 9288a8311fbc925c855293cf4e6b8bc0
autoTranslated: true
---

# 🏗️ Modellierung von Dachebenen in HiStruct - Schritt für Schritt
Das Zeichnen einer Dachebene ist eine der Möglichkeiten, das gesamte Dach zu modellieren. Es gibt zwei Möglichkeiten, dies zu tun. Wenn ich eine einfache Form zeichnen möchte, ist es am einfachsten, wenn ich eine der vordefinierten Formen wähle. Wenn die Form der Dachebene jedoch komplexer ist, ist es ratsam, eine allgemeine Form zu verwenden.

## Oberflächenmodellierung

### Vordefinierte Form
Wir werden an einer trapezförmigen Dachebene demonstrieren, wie man eine Dachebene mit vordefinierten Formen erstellt. Im Menü der vordefinierten Formen wähle ich die entsprechende Form, z.B. *Lihedral*, und klicke in die Szene, um die gewählte Form einzufügen. Nun muss ich jedoch die Abmessungen dieses Trapezes ändern, damit es zu unserer Dachebene passt. Dazu klicke ich auf die Schaltfläche *Bearbeiten*, wo ich die einzelnen Abmessungen unseres Trapezes leicht ändern kann.
Wenn ich bereits eine Skizze des Daches mit einer Neigung habe, ist der Prozess einfacher, weil ich mich nicht mit zusätzlichen Geometrieanpassungen befassen muss. Ich muss lediglich die Dachebene um den gewünschten Winkel drehen. Wenn die Dachabmessungen jedoch nur auf dem Grundriss dargestellt sind, muss die Neigung hinzugefügt werden. Die Neigung kann in Grad eingegeben werden, und mit den Pfeilen kann die Richtung angegeben werden, in die das Dach geneigt werden soll. Die gestrichelte schwarze Linie zeigt die Traufkante an, zu der die Dachfläche entsprechend der gewählten Neigung geneigt wird. Ich werde die anderen Dachebenen auf die gleiche Weise hinzufügen, um das gesamte Dach zu modellieren.
  
![Trapezpolygon Eingabe](img/trapezpoidPolygonInput.png)



### Allgemeine Form
Das Hinzufügen einer Dachebene unter Verwendung einer allgemeinen Form bringt eine Menge Variabilität mit sich, und mit Hilfe einiger cleverer Funktionen für [add polygon](insertPolygon.md) ist es auch ganz einfach. Die Erstellung einer solchen Ebene erfolgt durch einfaches Auswählen der einzelnen Scheitelpunkte der Dachebene. Auf diese Weise lässt sich jede beliebige Form einer Dachebene modellieren. Auch hier kann ich die Dachebene auf die gewünschte Neigung anheben oder die Ebene einfach um die gewünschte Neigung drehen.
  
![Allgemeine Polygon-Eingabe](img/generalPolygonInput.png)

### Vollständiges Dach
Auf die gleiche Weise füge ich die restlichen Dachebenen hinzu und erzeuge ein komplettes Dach, indem ich nach und nach jede Dachebene hinzufüge. Drehen Sie sie um den richtigen Winkel und stellen Sie die richtige Höhe ein. Bei einem solchen Modell können Sie normalerweise den automatischen [Eindeckrahmen- und Dachrinnengenerator] (roofFlashingGenerator.md) verwenden.

![Erzeugt](img/byPlanesRoof.png)

## Erzeugen aus Umriss
### Dachumriss
Die zweite Möglichkeit besteht darin, das Dach nur anhand des Umrisses zu generieren. Zunächst muss der Umriss des Daches gezeichnet werden. Dazu kann man natürlich [Dateien im *.dxf-Format](importDxf.md) importieren, oder Vektor-[*.pdf zu *.dxf](convertPdfToDxf.md) konvertieren und [in HiStruct importieren](importDxf.md). Dank des Hintergrunds kann ich problemlos jeden Dachumriss zeichnen

![Begrenzungspolygon eingeben](img/generatedRoofBoundary.png)

### Generierung von Dachfirsten
Unmittelbar nach dem Zeichnen eines Dachumrisses werden die Firste des Daches automatisch aufgelöst. Dadurch wird ein Walmdach erzeugt, für das verschiedene Eigenschaften verändert werden können.

![Firstpolygoneingabe](img/generatedRoofRidges.png)

### Einzelne Dachkanten ändern

Alle gezeichneten Konturkanten können einfach bearbeitet werden. Jeder Kante kann je nach Typ eine Reihe von Parametern zugewiesen werden. Zunächst können Sie die Art der Kante ändern, z.B. von der Standard-Traufkante zu einer Giebelkante oder einer erhöhten Traufkante. Klicken Sie dazu einfach auf das entsprechende Bild. Anschließend können Sie die Überlappung der Dachebene oder, im Falle einer Traufkante, die Neigung der angrenzenden Dachebene einstellen.

![Firstpolygoneingabe](img/generatedEditRoofEave.png)

### Generieren Sie das gesamte Dach

Durch die korrekte Einstellung der einzelnen Ränder und ihrer Parameter kann nun das gesamte Dach einfach generiert werden. Darüber hinaus generiert der Generator auch automatisch alle notwendigen [Eindeckrahmen, Eindeckrahmen](roofFlashingOptions.md) und [Dachrinnensystem](roofFlashingGutterOptions.md).

![Generiert](img/generatedRoof.png)