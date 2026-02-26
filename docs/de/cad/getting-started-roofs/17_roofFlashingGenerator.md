---
sourceLang: en
sourceHash: 29c806166677115d214ff2f00ac97c48
autoTranslated: true
---

# 🚀 Wie der HiStruct-Säumungs- und Rinnengenerator funktioniert

Er ist hauptsächlich dafür ausgelegt, **Zeit zu sparen** beim Erstellen von 3D-Modellen von Verblechungen und Traufen für importierte oder spezifizierte Dachflächengeometrien.

Der Generator kann auch allgemein für Flächengeometrien verwendet werden, die aus einer Zeichnung übernommen oder vollständig von Hand eingegeben und dann so angepasst werden, dass sie bestmöglich an die Kanten der zu berührenden Dachflächen passen. Er muss nicht vollständig passen, nur innerhalb normaler Toleranzen.

![Quellgeometrie für den Verblechungsgenerator](img/SourceGeometryFlashing.png)

HiStruct identifiziert automatisch die erforderlichen Verblechungspositionen aus den Geometrien nahegelegener Dachflächen und erzeugt anschließend die entsprechenden Verblechungstypen. Diese erzeugten Verblechungen können dann bei Bedarf weiter angepasst werden.

![Erzeugtes Verblechungsergebnis](img/GeneratedFlashingResult.png)