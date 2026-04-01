---
sourceLang: en
sourceHash: d2d648194432608fc297a9166744386c
autoTranslated: true
---

# 🚀 Wie der HiStruct-Abschluss- und Dachrinnengenerator funktioniert

Er ist hauptsächlich dazu entwickelt, **Zeit zu sparen** beim Erstellen von 3D-Modellen für Blechabdeckungen und Dachrinnen bei importierten oder angegebenen Dachflächengeometrien.

Der Generator kann auch allgemein für Flächengeometrien verwendet werden, die aus einer Zeichnung eingegeben oder komplett von Hand erstellt und dann angepasst wurden, um bestmöglich an die Kanten der betroffenen Dachflächen zu passen. Es ist nicht erforderlich, perfekt zu passen – es genügt, innerhalb normaler Toleranzen zu liegen.

![Ausgangsgeometrie für den Blechabdeckungs-Generator](img/SourceGeometryFlashing.png)

HiStruct erkennt automatisch die erforderlichen Positionen für Blechabdeckungen anhand der Geometrien der angrenzenden Dachflächen und erzeugt anschließend die entsprechenden Abdeckungstypen. Diese generierten Abdeckungen können bei Bedarf weiter angepasst werden.

![Erzeugtes Ergebnis der Blechabdeckung](img/generatedFlashingResult.png)