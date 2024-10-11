---
sourceLang: cs
sourceHash: 58c2838a2ce6f8698332c2066cd4a3b3
autoTranslated: true
---

# 🏠 Verwendung des OBJ-Modells zur automatischen Erzeugung des Daches
Mit der Entwicklung der BIM-Technologie gibt es immer mehr Bauprojekte, die über ein eigenes 3D-Modell verfügen, oft schon vor der eigentlichen Ausführung. Verfügt ein Gebäude jedoch nicht über ein solches Modell, gibt es Unternehmen, die die Vermessung von bestehenden Gebäuden anbieten. Unabhängig davon, ob die Vermessung mit Drohnen oder Satelliten erfolgt, ist das Ergebnis in der Regel ein detailliertes 3D-Modell im OBJ-Format. Wenn Sie kein OBJ-Modell haben, lesen Sie, wie Sie das Modell in dieses Format [konvertieren] können (convert3dPdfToObj.md). Das resultierende Modell kann wie folgt aussehen:

![Modell OBJ](img/objModelBase.png)

## Wie kann man OBJ in HiStruct einfügen?

Um das OBJ-Modell optimal zu nutzen, empfehlen wir Ihnen, unseren innovativen automatischen Dachgenerator zu verwenden. Er kann die einzelnen Dachebenen im OBJ-Modell erkennen und ihnen die richtigen Kanten, Neigungen und Eigenschaften zuweisen.

1. klicken Sie auf die Schaltfläche *Importieren \*.obj*. Daraufhin öffnet sich ein Dialogfeld, in das Sie Ihr Modell hochladen können.
2. Nachdem Sie die Datei ausgewählt haben, müssen Sie den Einfügepunkt des Modells festlegen, indem Sie in die Szene klicken.

![Rosol-Modell](img/rosolModelObj.png)

### Editieren eines erkannten 3D-Modells

Auch wenn unser Generator fast fehlerfrei arbeitet, kann es Kanten und Varianten geben, die er nicht immer richtig erkennt. Daher haben Sie die Möglichkeit, die Erkennung zu korrigieren und die Eigenschaften der einzelnen Kanten anzupassen.

- Klicken Sie auf eine beliebige Kante, um ihre Eigenschaften zu ändern.
- Auf dieselbe Weise können Sie die Eigenschaften jeder erkannten Ebene ändern. Wenn Sie auf einer Ebene kein Dach erzeugen wollen, können Sie deren Eigenschaften ändern.

**Die einzelnen Kanten sind je nach ihrer Funktion in 3 Gruppen farblich kodiert:**

- <span style="color: #395abd;">**Blaue Kanten**</span> : Schräge Bounding Box für einzelne Dachebenen.
- <span style="color: green;">**Grüne Kanten**</span> : Horizontale Kanten wie der First oder die Traufkante.
- <span style="color: red;">**Rote Kanten**</span>: Kanten, die beim Erzeugen eines Daches ignoriert werden, weil sie in einer Dachebene liegen.

**Einzelne Flächen sind je nach Funktion in 2 Gruppen farbkodiert:**

- <span style="color: #395abd;">**Blaue Flächen**</span>: Die Ebene, auf der die Überdachung liegen wird.
- **Weiße Flächen**: Die Ebene, die nicht Teil des Daches ist.

## Wie erzeugt man ein Dach?

Ein Dach zu erzeugen ist jetzt ganz einfach. Verwenden Sie einfach unseren Dachgenerator, indem Sie auf die Schaltfläche *Weiter* klicken. Der Generator führt Sie durch den Prozess und hilft Ihnen, das gewünschte Dach inklusive Zubehör zu erstellen.

![Dachmodell](img/roofModelObj.png)