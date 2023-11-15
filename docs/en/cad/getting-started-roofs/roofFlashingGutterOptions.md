---
sourceLang: cs
sourceHash: 595b3a622e4f84016cafefbdd34d7598
autoTranslated: false
---

# Gutter system

The gutter system is a key element of the roof structure, with its main role being the protection of the roof construction against the negative effects of water. This important construction element includes several components, such as eaves, gutter spouts, and gutters, which together form a system for proper drainage of water from the roof surface. In this article, we will explore modeling options of the gutter system within HiStruct.

![Flashing gutter](img/flashingGutter.png)

## Specifying a gutter system

There are several options for modelling the gutter system in HiStruct. The fastest way is to use the [gutter and flashing generator](roofFlashingGenerator.md), which allows you to quickly create a complex gutter system and then modify individual elements as needed. Alternatively, you can manually add one or more gutters using [polyline](polylineInput.md), which specifies the edges of the roof on which the gutters are to be applied. This flexibility allows you to tailor the gutter system to the specific requirements of the project.

## Adjusting the gutter and downspout geometry

The gutter system can be modified in terms of geometry. You have the option to move the tops of the polyline, which allows you to change the position of the gutter, and you can also adjust the angles of the gutter hooks. The generator does this automatically, but you can change this by clicking *Edit* and then *Geometry*, where you can change the angle or edit the polyline. Changing the angle and geometry is done in a similar way to editing [roof flashing](roofFlashingOptions.md). In addition, by clicking *Edit* and selecting the gutter, you can change the gutter slope. This will ensure that the gutter has the correct slope for efficient rainwater drainage. The last parameter you can change is the cover width. This value determines the width of the gutter sheet and affects the appearance and function of the gutter system.

![Flashing gutter properties](img/flashingGutterProperties.png)

## Adjusting the gutter geometry

By selecting a gutter and clicking at the *Edit* button, HiStruct gutter editing menu will open. This menu provides several options for modifying the gutter geometry, allowing you to customize the gutter to your specific requirements.

- **Change Distance to Wall**: You can change the distance of the gutter, allowing you to add elbows and bring the gutter closer to the wall.

- **Extend Downspout**: The downspout can be extended either via the dialog box or by simply dragging the green dots on the downspout.

- **Changing the position of the gutter**: You can also change the position of the gutter easily by selecting the gutter and then moving it with the mouse.

In this way, you can flexibly adjust the geometry of the gutter to suit the specific needs and the requirements of your project.

![Flashing gutter downspout properties](img/flashingGutterDownspoutProperties.png)


## Adding a gutter downspout
The gutter downspouts are usually generated automatically to ensure efficient water drainage. However, if you would like to add an additional gutter, you can do so simply by using the *plus* button. Simply click this button, and the gutter downspout will be added to the existing gutter you have selected.

![flashing gutter add downspout](img/flashingGutterAddDownspout.png)