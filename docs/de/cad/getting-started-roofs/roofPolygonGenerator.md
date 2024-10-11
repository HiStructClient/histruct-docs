---
sourceLang: cs
sourceHash: 50e6b6a8e62ae06d886fb82a718134ea
autoTranslated: true
---

# 🏢 Möglichkeiten der Nutzung des Modells aus der digitalen Gebäudeorientierung

Die weit verbreitete Dienstleistung der Vermessung eines Gebäudes mit Hilfe von Detailkarten liefert oft auch ein dreidimensionales Modell im *.obj oder 3D *.pdf Format. HiStruct ermöglicht es Ihnen, dieses gewonnene Modell effizient für die weitere Bearbeitung zu nutzen.

Das Modell im [3D *.pdf-Format kann in das *.obj-Format konvertiert werden](convert3dPdfToObj.md), das *.obj-Format kann dann direkt in die HiStruct-Szene [importiert](importObj.md) werden.

Das Modell aus der digitalen Orientierung ist in der Regel mehr oder weniger geometrisch korrekt. Jede Dachfläche ist in eine Reihe von Dreiecken zerlegt, was für die Darstellung der importierten Datei in der Szene kein Problem darstellt. Für die spätere Eindeckung müssen die Dachflächen jedoch vereinheitlicht werden. Daher wird nach dem Import automatisch eine Geometriekorrektur durchgeführt, bei der die Dreiecke zu Dachflächen vereinheitlicht werden.

Diese korrigierten Flächengeometrien werden dann mit dem Projekt gespeichert, und die einzelnen Dach- und Wandflächen können in Verkleidungselemente umgewandelt werden.
