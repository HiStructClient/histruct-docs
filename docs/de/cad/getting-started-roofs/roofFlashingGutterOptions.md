---
sourceLang: cs
sourceHash: d49dd49ce611b19ee6d3bcda4145d1b8
autoTranslated: true
---

# 💧 Modellierung des Rinnensystems in HiStruct

Das Dachrinnensystem ist eines der Schlüsselelemente der Dachkonstruktion, dessen Hauptaufgabe darin besteht, die Dachstruktur vor den negativen Auswirkungen von Wasser zu schützen. Dieses wichtige Strukturelement umfasst mehrere Komponenten wie Dachrinnen, Fallrohre und Fallrohre, die zusammen ein System für die ordnungsgemäße Ableitung von Wasser von der Dachfläche bilden. In diesem Artikel werden wir uns ansehen, wie ein Dachrinnensystem in HiStruct modelliert werden kann.

Dachrinne](img/flashingGutter.png)

## Festlegen eines Dachrinnensystems

Für die Modellierung des Dachrinnensystems in HiStruct gibt es mehrere Möglichkeiten. Am schnellsten geht es mit dem [Dachrinnen- und Eindeckrahmen-Generator](roofFlashingGenerator.md), mit dem Sie schnell ein komplexes Rinnensystem erstellen und dann einzelne Elemente nach Bedarf ändern können. Alternativ können Sie ein Eindeckrahmensystem manuell mit [polyline](../instructor-roofs/insertPolyline.md) hinzufügen, das die Kanten des Daches angibt, an denen der Eindeckrahmen angebracht werden soll. Diese Flexibilität ermöglicht es Ihnen, das Dachrinnensystem an Ihre spezifischen Anforderungen und Bauprojekte anzupassen.

## Anpassen der Dachrinnen- und Traufgeometrie

Das Rinnensystem kann in seiner Geometrie verändert werden. Sie haben die Möglichkeit, die Spitzen der Polylinie zu verschieben, wodurch Sie die Position der Dachrinne ändern können, und Sie können auch den Winkel der Dachrinnenhaken anpassen.   Der Generator macht dies automatisch, aber Sie können dies ändern, indem Sie auf *Bearbeiten* und dann *Geometrie* klicken, wo Sie den Winkel oder die Position der Polylinie ändern können. Das Ändern des Winkels und der Geometrie erfolgt auf ähnliche Weise wie das Bearbeiten von [roof flashing](roofFlashingOptions.md). Wenn Sie auf *Bearbeiten* klicken und die Dachrinne auswählen, können Sie außerdem die Dachrinnenneigung ändern. Dadurch wird sichergestellt, dass die Dachrinne die richtige Neigung für eine effiziente Regenwasserableitung hat. Der letzte Parameter, den Sie ändern können, ist die Breite der Abdeckung. Dieser Wert bestimmt die Breite des Rinnenblechs und beeinflusst das Aussehen und die Funktion des Rinnensystems.

Eigenschaften der Eindeckrinne](img/flashingGutterProperties.png)

## Anpassen der Rinnengeometrie

Nachdem Sie auf die Schaltfläche *Bearbeiten* geklickt und eine Rinne ausgewählt haben, öffnet sich das HiStruct-Rinnenbearbeitungsmenü. In diesem Menü finden Sie mehrere Optionen zur Änderung der Rinnengeometrie, mit denen Sie die Rinne an Ihre speziellen Anforderungen anpassen können.

- **Abstand zur Wand ändern**: Sie können den Abstand der Rinne ändern, so dass Sie Bögen hinzufügen und die Rinne näher an die Wand bringen können.

- **Fallrohr verlängern**: Das Fallrohr kann entweder über das Dialogfeld oder durch einfaches Ziehen der grünen Punkte auf dem Fallrohr verlängert werden.

- **Position der Dachrinne ändern**: Sie können die Position der Dachrinne auch ganz einfach ändern, indem Sie die Dachrinne auswählen und sie dann mit der Maus verschieben.

Auf diese Weise können Sie die Geometrie der Dachrinne flexibel an Ihre Bedürfnisse und die Anforderungen Ihres Bauvorhabens anpassen.

![Eigenschaften der Dachrinne](img/flashingGutterDownspoutProperties.png)


## Hinzufügen eines Rinnenfallrohrs
In HiStruct werden Rinnenfallrohre normalerweise automatisch erzeugt, um einen ausreichenden Abfluss aus der Rinne zu gewährleisten. Wenn Sie jedoch eine zusätzliche Dachrinne hinzufügen möchten, können Sie dies einfach über die Schaltfläche *plus* tun. Klicken Sie einfach auf diese Schaltfläche, und die Regenrinne wird der bereits vorhandenen Rinne, die Sie ausgewählt haben, hinzugefügt.

![Blinkende Dachrinne Fallrohr hinzufügen](img/flashingGutterAddDownspout.png)