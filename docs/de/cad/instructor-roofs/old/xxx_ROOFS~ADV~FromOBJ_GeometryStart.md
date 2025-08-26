---
sourceLang: cs
sourceHash: 3306e889dac30398fc19b243da4d783e
autoTranslated: true
---

# Geometrie
<p>Das Menü <u><i>Geometrie</i></u> ermöglicht im ersten Schritt den Import einer Datei des Typs "<b>.obj</b>" für die schnelle Generierung von Dachflächen.</p>

<p>Nach dem Import des 3D-Objekts können in den weiteren Schritten die Einstellungen des Kanten- und Flächengenerators geändert, die Maße und Neigungen der generierten Kanten und Flächen mit dem ROSOL-Löser angepasst sowie der Dachaufbau-Typ eingestellt werden.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Umwandlung der Datei ins ".obj"-Format</h2>
<p>Wenn Sie die Daten in einem komprimierten Ordner (zum Beispiel ".zip") vorliegen haben, müssen Sie diese Datei extrahieren und gegebenenfalls in den Typ ".obj" umwandeln.</p>

<p>Eine genaue Anleitung zur Konvertierung einer Datei ins ".obj"-Format finden Sie in unserem Blog.</p>
<a href="" target="_blank" rel="noopener noreferrer" class="btn">
  Blog besuchen
</a>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/ImportObjIcon64x64.png", "SoCol*.obj", "Import aus dem SoCol-Dienst") }}

<p>Ermöglicht den Import einer .obj-Datei, die aus dem SoCol-Dienst erhalten wurde.</p>
<p>Das Einfügen der Datei ins Modell muss durch Klicken oder durch die ENTER-Taste bestätigt werden.</p> 

<p>Nach dem Import der Vorlage sollten deren Maße überprüft und ggf. der Maßstab angepasst werden.</p>

<p><b><u>Anpassen des Maßstabs der importierten Vorlage</u></b></p>

<ul>
<p><li>
Nach dem Klick auf die Schaltfläche <u><i>Importieren > Einstellungen</i></u> kann der Maßstab direkt in der entsprechenden Zelle in der geöffneten Tabelle geändert werden. 
</li></p>

{{ modal_video_button("img/VideoImportOBJ.mp4") }}

<p><li>
Zur Anpassung des Maßstabs kann auch die Schaltfläche <u>Maßstab</u> verwendet werden, die sich im oberen Teil der geöffneten Tabelle befindet. Mit dieser Schaltfläche kann der Maßstab der Vorlage anhand einer ausgewählten Kante, deren tatsächliche Maße bekannt sind, eingestellt werden.
</li></p>

{{ modal_video_button("img/VideoImportDXF.mp4") }}

</ul>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/ImportObjIcon64x64.png", "Rexplorer*.obj", "Import aus dem Rexplorer-Dienst", fontSize=10) }}

<p>Ermöglicht den Import einer .obj-Datei, die aus dem Rexplorer-Dienst erhalten wurde.</p>
<p>Das Einfügen der Datei ins Modell muss durch Klicken oder durch die ENTER-Taste bestätigt werden.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/DimensionLinearIcon64x64.png", "Annotation", "Annotation") }}

<p>Mit der Schaltfläche <u>Annotation</u> können beliebige Grundrissbemaßungen dem Modell hinzugefügt werden.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

{{ box_icon("img/TapeMeasureIcon64x64.png", "Messen", "Messen") }}

<p>Mit der Schaltfläche <u>Messen</u> können die Maße des Modells überprüft werden.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<!-- product: HiStruct Roofs -->