---
sourceLang: cs
sourceHash: 416bbf07b5108c0b7ebd028174620591
autoTranslated: true
---

# HiStruct Dächer für Dachdecker

HiStruct ist eine Webanwendung, die eine einfache Zusammenarbeit oder das Teilen eines Projekts oder seiner Teile ermöglicht. Auf diese Weise können Sie dem Endkunden einen 3D-Modellblick auf das Dach ermöglichen, mit einem Kollegen oder einer Montagefirma an einem Projekt zusammenarbeiten.
Es dient dem schnellen Erstellen von Angeboten, Materiallisten und Verlegeplänen für Dachdeckungen, Bleche, Randprofile und Dachrinnen. Das System bietet mehrere Eingabemodi, die die Effizienz bei der Arbeit an einem Projekt erhöhen.

## Wie man ein Dachprojekt in HiStruct bearbeitet?

1. Ich lege ein Projekt an, mit oder ohne Karte.
1. Ich modelliere Dachflächen durch Nachzeichnen oder mit Hilfe des Generators.
1. Ich bearbeite die generierte Verlegung.
1. Ich wähle Randprofile und das Dachrinnensystem aus oder lasse es automatisch generieren.
1. Ich erhalte Stücklisten, Dokumente, Zeichnungen.

Fertig, ich mache eine Kaffeepause 😊

HiStruct ist umfassend anpassbar. Das Verlegungssystem für Dachformsteine, Randprofile, Bleche und das Dachrinnensystem ist für jeden spezifischen Hersteller in separaten Konfigurationsdateisätzen eingestellt. Es enthält Informationen dazu, wie die Dachfläche mit Formsteinen verlegt werden muss, mögliche Farbkombinationen, Materiallisteninformationen und mehr. Diese und weitere Anpassungen werden im Rahmen des [Anpassungsprojekts](customisationProject.md) durchgeführt.

## Nun etwas detaillierter...

### 1. Ich lege ein Projekt an, mit oder ohne Karte

Ich bearbeite eine neue Anfrage. Das Erste, was ich tun möchte, ist ein neues Projekt anzulegen. Ein Projekt ist ein Ort, der eine oder mehrere Komponenten enthalten kann - 3D-Modelle, also Konfigurationen, Varianten oder Teile. Die Projektseite hat zwei Ansichten. Der Standardansicht zeigt die angelegten Projekte mit den Komponenten. Wenn ich auch Standorte für das Projekt speichern möchte, kann ich die Kartenansicht für Projekte nutzen, um Standorte auf der Karte einzugeben.

### 2. Modellierung der Dachflächen

In der Regel beginnen wir mit der **Auswahl des Dachdeckungstyps, der Randprofile und des Dachrinnensystems** (die später geändert werden können) aus den Bibliotheken. Es folgt die Modellierung des Dachmodells aus den einzelnen Dachflächen oder mithilfe fortschrittlicherer Modellierungsmethoden. Die geeignete Modellierungsmethode hängt von den verfügbaren Unterlagen für die spezifische Anfrage ab. Es gilt, je hochwertiger die Unterlagen sind, desto effizienter kann der eigentliche Modellierungsprozess durchgeführt werden.

#### **😊 Ich habe nur ein paar Skizzen mit Maßen**

Wenn die Form des Daches einfach ist, kann sie durch das [Modellieren](modellingRoofs.md) von Dachflächen mit vorgegebenen Formen eingefügt werden oder ein allgemeines Dachflächenmodell im Modellierungsraum erstellt werden. Im allgemeinen Eingabemodus werden Trassierungen und andere bekannte Eingabewerkzeuge verwendet, ähnlich wie in anderen CAD-Programmen. Wenn der Neigungswinkel bekannt ist, können die Dachflächen gedreht und im Raum verschoben werden, um der tatsächlichen Dachform zu entsprechen. Wenn es gelingt, das Dach im Raum mit ausreichender Genauigkeit zusammenzustellen, kann der [Generátor lemovky a okapového systému](roofFlashingGenerator.md) verwendet werden.

#### **😊😊 Ich habe einen Vektorgrundriss des Daches**

Wenn ich einen Vektorgrundriss zur Verfügung habe, ist die Modellierung einfacher. In HiStruct können Dateien im *.dxf-Format importiert werden, oder vektorielle *.pdf-Dateien können in *.dxf umgewandelt und in HiStruct importiert werden. Importierte *.dxf ermöglichen einfaches Anhängen und Eingeben einzelner Dachflächen durch Anklicken des Grundrisses mit der Möglichkeit, den Neigungswinkel für jede Dachfläche hinzuzufügen. Der Vorteil liegt in der Präzision und der einfachen Erstellung des 3D-Modells. Fast immer kann der [Generátor lemovky a okapového systému](roofFlashingGenerator.md) verwendet werden.

#### **😊😊😊 Ich habe nur den Umriss und muss das Dach entwerfen**

Wenn es sich beispielsweise um ein völlig neues Dach handelt, bei dem Sie nur den Umriss haben, können Sie in HiStruct ein innovatives Tool verwenden, das automatisch die endgültige Dachform, die Neigungen der einzelnen Flächen, die Randprofile und das Dachrinnensystem vorschlägt. Für diesen Vorgang können selbstverständlich Dateien im *.dxf-Format importiert werden, oder vektorielle *.pdf-Dateien können in *.dxf umgewandelt und [in HiStruct importiert werden](importDxf.md).

#### **😊😊😊😊 Ich habe ein 3D-Modell aus einem digitalen Scan**

Ein 3D-Modell aus einem digitalen Scan ist ein Gewinn. Wenn Sie dieses Modell in einem geeigneten Format haben (3D *.pdf oder direkt *.obj), können Sie die Geometrie direkt importieren. In HiStruct können Sie [*.obj importieren](importObj.md) oder 3D *.pdf-Dateien in *.obj konvertieren und [in HiStruct importieren](importObj.md).

Nach dem Import bietet HiStruct erkannte Flächen, aus denen Sie auswählen können, wie sie in HiStruct-Geometrie umgewandelt werden sollen. Der [Flächengenerator](roofPolygonGenerator.md) wandelt sie dann in Dach- oder Wandflächen um, an denen Sie dann wie gewohnt weiterarbeiten können.

Nachdem die Dachflächen erzeugt wurden, kann ich noch den [roofFlashing Generator](roofFlashingGenerator.md) verwenden. Diese Art der Eingabe ist nahezu arbeitsfrei.

### 3. Verlegung der Dacheindeckung

Die Bibliotheken für Dacheindeckung und Eindeckung bedeuten für uns nicht nur Größe und Farbe, sondern die gesamte Vorgehensweise bei der Verlegung bestimmter Dachflächen. Dank des Variablengenerators sind wir in der Lage, das spezifische Verlegeverfahren für die Dacheindeckung eines bestimmten Herstellers in die Bibliothek einzugeben. Wir tun dies im Rahmen eines [Anpassungsprojekts] (customisationProject.md). Ein gut gestalteter Generator eliminiert dann die notwendigen Eingriffe in den automatischen Verlegeprozess.

Das [RoofPolygonTilling](roofPolygonTillingOptions.md) erfolgt automatisch nach den Konfigurationseinstellungen der Dacheindeckung. Es ist auch möglich, den Beginn des Verlegevorgangs anzupassen, um einen möglichst kleinen Schnitt zu erzielen. Die Information über das Verhältnis des Schnittes zur Dachfläche wird während der Verlegeänderung angezeigt.

### 4. wie verwendet man das Dachrinnen- und Eindecksystem?

Natürlich können [Eindeckrahmen, Eindeckrahmen](roofFlashingOptions.md) und [Dachrinnensystem](roofFlashingGutterOptions.md) an beliebiger Stelle im Raum angegeben werden, indem man auf bereits angegebene Dachflächen, importierte Geometrie oder andere Objekte zurückgreift. Darüber hinaus ist es möglich, das Hinzufügen von Kanten zu einzelnen Seiten von Dachebenen oder direkt zum [Generator über eine Gruppe von Dachebenen](roofFlashingGenerator.md) zu verwenden. Für die generierten Elemente wird die Neigung der zugehörigen Dachebenen automatisch angepasst, wodurch die Biegewinkel der Eindeckrahmen und Haken des Traufsystems korrekt eingestellt werden.

HiStruct enthält umfangreiche [Rinnensystemeinstellungen](roofFlashingGutterOptions.md) Optionen. Durch Angabe einer Polylinie, die die nachgelagerte Dachrinne definiert, kann die Dachrinnenneigung eingestellt werden. Für jeden Teil der Rinne wird auch die Neigung der nachgelagerten Dachebene festgelegt, um die korrekte Berechnung der Bogen- und Hakenlänge zu ermöglichen. Es ist möglich, jedem Rinnenabschnitt Klammern hinzuzufügen, die zusätzliche [Einstellungsoptionen] haben (roofFlashingGutterOptions.md).

### 5. Teile, Dokumente, Zeichnungen... einfache Ausgaben

**Skizze**
Die [Stückliste](roofBom.md) wird automatisch aus den in den Modellraum eingefügten Dachteilen erstellt. Die einzelnen Teile des Modells haben neben sich die Information, aus welchen Teilen sie entstanden sind, mit der Möglichkeit, die Nummer zu bearbeiten und eventuell weitere Teile hinzuzufügen.

Die Art und Weise, wie die Stückliste erzeugt wird, kann dann innerhalb des [Anpassungsprojekts](customisationProject.md) geändert werden.

**Angebot**
Die generierte Stückliste kann zusammen mit einem Link zur Preisliste des Herstellers Teil des [Angebotes](roofQuote.md) sein. Das Angebot kann aber auch ohne die Stückliste erstellt werden. Die Methode zur Erstellung des Angebots kann dann innerhalb des [Anpassungsprojekts](customisationProject.md) geändert werden.

**Pläne**
Die [Layout-Zeichnungen](roofPolygonTillingDrawing.md) werden automatisch aus der angegebenen Geometrie und den vom Benutzer vorgenommenen Änderungen erstellt. Falls erforderlich, können der Zeichnung zusätzliche Notizen oder Anmerkungen hinzugefügt werden.

![Beispiel einer Dachfräszeichnung](img\roofTillingPlane1.png)
![Beispiel einer Dachdeckerzeichnung](img\roofTillingPlane2.png)
