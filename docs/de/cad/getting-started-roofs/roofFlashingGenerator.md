---
sourceLang: cs
sourceHash: d3c4dbe3f6616e660690e4e09e4e8541
autoTranslated: true
---

# 🚀 So funktioniert der HiStruct-Generator für Zierleisten und Dachrinnen

Der Generator dient hauptsächlich der **Zeitersparnis** bei der Erstellung von 3D-Modellen für Dachrinnen und Traufen für importierte oder spezifizierte Dachflächengeometrien.

Der Generator kann auch allgemein für ebene Geometrien verwendet werden, die aus einer Zeichnung oder vollständig von Hand eingegeben und nur so modifiziert werden, dass sie am besten zu den Kanten der zu berührenden Dachebenen passen. Sie müssen nicht vollständig passen, sondern nur innerhalb normaler Toleranzen.

![Quellgeometrie für Eindeckrahmengenerator](img/sourceGeometryForFlashingGenerator.png)

HiStruct identifiziert automatisch die erforderlichen Eindeckrahmenpositionen aus den Geometrien der angrenzenden Dachebenen und generiert dann die entsprechenden Eindeckrahmenarten. Diese generierten Eindeckrahmen können dann nach Bedarf weiter modifiziert werden.

![Generiertes Eindeckrahmenergebnis](img/generatedFlashingResult.png)
