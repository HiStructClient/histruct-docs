---
sourceLang: cs
sourceHash: 68fce3099952486cd4561024c1f98753
autoTranslated: true
---

# 🌧️ Richtiges Eindecken und Abdecken von Dächern

Das Verkleiden des Daches und das Hinzufügen von Eindeckrahmen sind wesentliche Schritte bei der Erstellung eines qualitativ hochwertigen Dachprojekts. In HiStruct können Sie jeder Seite einer Dachebene manuell Eindeckrahmen hinzufügen oder den [Generator für Eindeckrahmen](roofFlashingGenerator.md) für eine ganze Gruppe von Dachebenen verwenden. Die Modellierung einzelner Anschlüsse und Abdeckungen ist einfach, und ich zeige Ihnen, wie das geht.

## Anbringen von Eindeckrahmen

Der schnellste Weg, Eindeckrahmen zu erstellen, ist die Verwendung des [roofFlashing Generator](roofFlashingGenerator.md) und die anschließende Bearbeitung der einzelnen Elemente. Alle Dacheinfassungen können aber auch mit [polyline](../instructor-roofs/insertPolyline.md) definiert werden, das die Dachkanten angibt, an denen die Einfassungen angebracht werden sollen.

## Ändern der Eindeckrahmengeometrie

Alle Eindeckrahmen können in ihrer Geometrie verändert werden. Sie können die Eckpunkte der Polylinie verschieben, um die Position der Eindeckrahmen zu ändern. Sie können auch den Biegewinkel einiger Zierleisten anpassen. Der Generator macht dies automatisch, aber Sie können dies ändern, indem Sie auf *Bearbeiten* und dann *Geometrie* klicken, wo Sie den Winkel oder die Position der Polylinie ändern können.

### Einstellen des Winkels

Um den Winkel zu ändern, klicken Sie auf den Pfeil, der die Normale der Fläche anzeigt, an die der Rand angrenzt.

Winkel des Blinkens bearbeiten](img/flashingEditAngle.png)

Nachdem Sie auf den Pfeil geklickt haben, klicken Sie auf das Cursorsymbol und wählen dann den Bereich aus, an dem der Rand haften soll.

![Winkel des Blinkens bearbeiten - Schritt 2](img/flashingEditAngleStep2.png)

### Position bearbeiten

Das Ändern der Position erfolgt auf die gleiche Weise wie das Ändern der Polyliniengeometrie.

## Auswählen der Plattierung aus der Bibliothek

Sie können für jedes Eindeckungselement verschiedene Arten von Eindeckungen aus der [Bibliothek](roofFlashingLibrary.md) auswählen. Dies kann entweder für einzelne Elemente oder für eine ganze Gruppe von Elementen auf einmal geschehen.

## Typen von Eindeckrahmen

Jeder Teil des Daches erfordert eine bestimmte Art von Eindeckrahmen und Eindeckrahmen. HiStruct verfügt über eine breite Palette von Anschlüssen und Abdeckungen, die fast alle Teile des Daches abdecken. Im Folgenden werden wir jedes Element der Reihe nach durchgehen.

### Giebelanschlüsse
Giebelanschlüsse, auch Leegiebel genannt, sind spezielle Anschlüsse, die für den Abschluss der Giebelfassade eines Daches verwendet werden. Die Giebelseite ist der Teil des Daches, der sich auf der Giebelseite eines Gebäudes befindet, und Giebelanschlüsse werden verwendet, um diesem Teil des Daches einen ästhetischen oder schützenden Abschluss zu verleihen.

Giebelblende](img/flashingGableTrim.png)

### Firstabschluss
Eine Firstabdeckung ist ein Dachelement, das zur Abdeckung des Dachfirsts verwendet wird. Dieses Element dient dazu, diesen Bereich vor Witterungseinflüssen, eindringendem Wasser und anderen potenziellen Problemen zu schützen. Auf diese Weise sorgt die Firsthaube für einen vollständigen und sicheren Dachabschluss.

Firstabdeckung](img/flashingRidgeCap.png)

### Eine Firstkappe
Eine Kehle ist ein Punkt auf einem Dach, an dem zwei Dachflächen aufeinandertreffen und eine Kehle bilden. Sie dient dazu, Wasser und Schnee abzuleiten und das Gebäude vor eindringender Feuchtigkeit zu schützen.
 
Kehlstein](img/flashingValley.png)

### Traufe
Eine Dachrinne ist ein Strukturelement am Dachrand, das dazu dient, den Abfluss von Regenwasser in eine Dachrinne oder ein Fallrohr zu steuern und so das Gebäude vor Schäden zu schützen, die durch in die Dachkonstruktion eindringendes Wasser verursacht werden.


Dachrinnenschürze](img/flashingGutterApron.png)

### Einfassung an der Wand
Dieser Anschluss befindet sich in der Regel dort, wo das Dach auf die senkrechte Wand trifft und dient dazu, eine dichte und ästhetisch saubere Verbindung zwischen den beiden Gebäudeteilen herzustellen.

Eindeckrahmen](img/flashingWallTrim.png)

### Verkleidung der Öffnung
Mit diesem Element wird eine Öffnung im Dach verkleidet, um zu verhindern, dass Wasser um die Öffnung herumfließt.

![Eindeckung Dachöffnung](img/flashingRoofOpening.png)