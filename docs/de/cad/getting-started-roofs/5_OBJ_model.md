---
sourceLang: en
sourceHash: 0aa30f8c3868783ed16c60a164d850d2
autoTranslated: true
---

# 🏠 Verwendung des OBJ-Modells zur automatischen Dachgenerierung

Sie haben ein 3D-Modell aus einem BIM-Projekt, Drohnenscan oder Satellitenvermessung? Perfekt – HiStruct versteht OBJ einwandfrei. Mit OBJ generiert HiStruct das 3D-Dachmodell automatisch. Wenn Sie kein solches Modell zur Verfügung haben, gibt es Firmen, die die Vermessung bestehender Gebäude anbieten. Unabhängig davon, ob die Vermessung mit Drohnen oder Satelliten erfolgt, ist das Ergebnis in der Regel ein detailliertes 3D-Modell im OBJ-Format.

**❓Was ist, wenn ich ein 3D-Modell im PDF-Format erhalte und kein OBJ habe?**

Wenn Sie ein 3D-Modell im PDF-Format haben, müssen Sie es in das von HiStruct unterstützte OBJ-Format umwandeln. Das ist einfach. In [dieser Anleitung](6_PDF_to_OBJ.md) erfahren Sie, wie Sie ein 3D-Modell schnell von PDF nach OBJ konvertieren.

Das resultierende Modell kann so aussehen:

![OBJmodel](img/5objModelBase.png)

## So fügen Sie ein OBJ-Modell in HiStruct ein

1.  **Klicken Sie auf die Schaltfläche Import.obj.** Dadurch öffnet sich ein Dialogfenster, in dem Sie Ihr Modell hochladen können.

2.  **Wählen Sie den Einfügepunkt.** Nachdem Sie die Datei ausgewählt haben, klicken Sie an eine beliebige Stelle in der Szene, an der das Modell erscheinen soll.

3.  **Lassen Sie den Dachgenerator seine Magie wirken.** HiStruct erkennt automatisch Dachflächen und Kanten und erzeugt dann ein 3D-Modell aus den durch diese Kanten definierten Dreiecksflächen.

4.  **Nehmen Sie bei Bedarf manuelle Anpassungen vor.** Auch wenn der Generator nahezu fehlerfrei ist, kann gelegentlich eine Kante übersehen oder eine Fläche falsch klassifiziert werden. Sie können alle generierten Kanten oder Flächen direkt im Modell feinjustieren.

![Model](img/5rosolModelObj.png)

## 🔧 Feineinstellungen an Ihrem Modell

<u>**Kanten**</u>

- **Klicken Sie auf eine beliebige Kante**, um deren **Eigenschaften** zu bearbeiten

- **Die einzelnen Kanten sind je nach Funktion in 3 Gruppen farbcodiert:**

> **🟦 Ortgangkante** – eine geneigte Kante am Ende einer Dachfläche; markiert die Begrenzung dieser Fläche.\
> **🟩 Traufkante** – eine horizontale Kante einer Dachfläche.\
> **🟥 Innere Kante** – eine Kante innerhalb einer Dachfläche, dient nur zur Unterteilung von Flächen und wird bei der Dachgenerierung ignoriert.

- **Sie können jede Kante ein- oder ausschalten und festlegen, ob sie als horizontal behandelt werden soll.**

<u>**Flächen**</u>

- Wie bei den Kanten können Sie **die Eigenschaften jeder erkannten Fläche ändern**.

- Basierend auf ihrer Ausrichtung entscheidet HiStruct, ob sie zum Dach gehört.

- Klicken Sie auf eine beliebige Fläche, um sie in das Dach einzuschließen oder auszuschließen. Eingeschlossene Flächen erhalten Dachhaut, Nebenkonstruktionen und Anschlüsse.

- Flächen sind in zwei Gruppen farbcodiert:\
  🟦 **Blau** – Teil des Daches; wird für die Generierung verwendet.\
  ⬜ **Weiß** – kein Teil des Daches; ausgeschlossen.

5. **Wenn alles passt, klicken Sie auf "Weiter"** und lassen Sie HiStruct den Rest erledigen.

![Roof model](img/5roofModelObj.png)

6.  Der Generator führt Sie durch die nächsten Schritte und hilft Ihnen, mühelos das gewünschte Dach mit allen Zubehörteilen zu erstellen.

**👉 [*Zu den nächsten Schritten*](8_sheeting_menu.md)**

**👉 [*Zurück zum Hauptartikel*](index.md)**