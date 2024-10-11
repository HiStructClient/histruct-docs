---
sourceLang: cs
sourceHash: 978114c8a8873bb76c969d812a624842
autoTranslated: true
---

# 📐 DXF-Zeichnung in HiStruct einfügen, um eine genaue Modellierung zu ermöglichen

Wenn Sie eine Linienbasis für Ihr Dach haben, können Sie diese in den Modellierbereich einfügen, um Ihre Arbeit zu erleichtern. Diese Basis ermöglicht es Ihnen, Ihr Dach genauer zu zeichnen, und erhöht dank des automatischen Einrastens des Cursors auch die Genauigkeit Ihres Modells. Sie haben keine Zeichnung im DXF-Format, sondern nur im PDF-Format? Kein Problem, die meisten Strichzeichnungen lassen sich leicht [in DXF] konvertieren (convertPdfToDxf.md).

Schauen wir uns einmal an, wie man eine solche Zeichnung einfügt...

## Wie fügt man DXF in HiStruct ein?

1. öffnen Sie die Registerkarte *Substrat* und klicken Sie auf die Schaltfläche *Import \*.dxf*. Daraufhin öffnet sich ein Dialogfeld, in das Sie Ihre Zeichnung hochladen können.
2. Nachdem Sie die Datei ausgewählt haben, müssen Sie den Einfügepunkt der Zeichnung festlegen, indem Sie in die Szene klicken.

![Modell DXF](img/importDXF.png)

## Einstellung des richtigen Maßstabs der Zeichnung
Da die Zeichnungen in unterschiedlichen Maßstäben vorliegen, muss zunächst der richtige Maßstab eingestellt werden, damit das Modell mit den tatsächlichen Abmessungen übereinstimmt.

![Modell DXF](img/dxfNoScale.png)

1. zunächst müssen Sie eine der bekannten Kanten mit der Schaltfläche *Messen* messen.
2. Berechnen Sie den Maßstab als die tatsächliche Länge geteilt durch die gemessene Länge.
3. klicken Sie auf die eingefügte Zeichnung und ändern Sie den Maßstab auf der Registerkarte *Eigenschaften*.

Wenn Sie den richtigen Maßstabswert eingestellt haben, stimmen die gemessenen Werte mit den Linien der Zeichnung überein.

![Modell DXF](img/dxfWithScale.png)

## Von der Zeichnung zum fertigen Dach
Nachdem wir nun die Basis als DXF importiert haben, können wir das Dach auf die übliche Weise modellieren, entweder mit einzelnen Dachebenen oder mit unserem automatischen Solver, der das Dach nur aus dem Konturpolygon eines solchen Daches erstellt.

![Modell DXF](img/dxfRoof.png)

