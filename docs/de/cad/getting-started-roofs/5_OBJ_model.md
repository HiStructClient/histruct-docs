---
sourceLang: en
sourceHash: b19295ae6f483236663b205d0c047661
autoTranslated: true
---

# 🏠 Verwendung des OBJ-Modells zur automatischen Dachgenerierung

Hast du ein 3D-Modell aus einem BIM-Projekt, einem Drohnenscan oder einer Satellitenvermessung? Perfekt – HiStruct spricht OBJ fließend. Mit OBJ generiert HiStruct das 3D-Dachmodell automatisch. Wenn du kein solches Modell zur Verfügung hast, gibt es Unternehmen, die die Vermessung bestehender Gebäude anbieten. Unabhängig davon, ob die Vermessung mit Drohnen oder Satelliten erfolgt, ist das Ergebnis in der Regel ein detailliertes 3D-Modell im OBJ-Format.

**❓Was ist, wenn ich ein 3D-Modell im PDF-Format erhalte und kein OBJ habe?**

Wenn du ein 3D-Modell im PDF-Format hast, musst du es in das OBJ-Format konvertieren, das in HiStruct unterstützt wird. Das ist einfach. Sieh dir [diese Anleitung](6_PDF_to_OBJ.md) an, um zu sehen, wie du ein 3D-Modell schnell von PDF nach OBJ konvertierst.

Das resultierende Modell kann so aussehen:

![OBJmodel](img/5objModelBase.png)


## So fügst du ein OBJ-Modell in HiStruct ein

1. **Klicke auf die Schaltfläche Import.obj.** Dadurch öffnet sich ein Dialogfenster, in dem du dein Modell hochladen kannst.

2. **Wähle den Einfügepunkt.** Nach der Dateiauswahl klicke irgendwo in die Szene, wo das Modell erscheinen soll.

3. **Lass den Dachgenerator seine Magie wirken.** HiStruct erkennt automatisch Dachflächen und Kanten und erstellt dann ein 3D-Modell aus dreieckigen Flächen, die durch diese Kanten definiert sind.

4. **Nimm bei Bedarf manuelle Anpassungen vor.** Obwohl der Generator nahezu fehlerfrei ist, kann gelegentlich eine Kante übersehen oder eine Fläche falsch klassifiziert werden. Du kannst alle generierten Kanten oder Flächen direkt im Modell feinjustieren.

5. **Wenn alles gut aussieht, klicke auf „Next“** und lass HiStruct den Rest erledigen.

6. Der Generator führt dich durch die nächsten Schritte und hilft dir, mühelos das gewünschte Dach zu erstellen – komplett mit allem Zubehör.

![Roof model](img/5roofModelObj.png)



## 🔧 Feinabstimmung deines Modells

![Model](img\5rosolModelObj.png)

  <u>**Kanten**</u>

  - **Klicke auf eine beliebige Kante**, um ihre **Eigenschaften** zu bearbeiten

  - **Die einzelnen Kanten sind entsprechend ihrer Funktion farbcodiert in 3 Gruppen:**

    * **🟦 Giebelkante** – eine geneigte Kante am Ende einer Dachfläche; sie markiert die Begrenzung dieser Fläche.
    * **🟩 Traufkante** – eine horizontale Kante einer Dachfläche.
    * **🟥 Innere Kante** – eine Kante innerhalb einer Dachfläche, die nur zum Aufteilen von Flächen dient; sie wird bei der Dachgenerierung ignoriert.

  - **Du kannst jede Kante ein- oder ausschalten und festlegen, ob sie als horizontal behandelt werden soll.**

  <u>**Flächen**</u>

  - Auf die gleiche Weise wie bei Kanten kannst du **die Eigenschaften jeder erkannten Fläche ändern**.

  - Basierend auf ihrer Ausrichtung entscheidet HiStruct, ob sie Teil des Dachs ist.

  - Klicke auf eine beliebige Fläche, um sie in das Dach einzuschließen oder davon auszuschließen. Auf eingeschlossenen Flächen werden Eindeckung, Sekundärkonstruktionen und Anschlüsse generiert.

  - Flächen sind in zwei Gruppen farbcodiert:

    * 🟦 **Blau** – Teil des Dachs; wird für die Generierung verwendet.
    * ⬜ **Weiß** – nicht Teil des Dachs; ausgeschlossen.


**👉 [*Zu den nächsten Schritten*](8_sheeting_menu.md)**

**👉 [*Zurück zum Hauptartikel*](index.md)**