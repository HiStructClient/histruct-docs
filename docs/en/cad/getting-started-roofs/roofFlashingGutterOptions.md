---
sourceLang: cs
sourceHash: d49dd49ce611b19ee6d3bcda4145d1b8
autoTranslated: true
---

# 💧 Modelling the gutter system in HiStruct

The gutter system is one of the key elements of the roof structure, whose main role is to protect the roof structure from the negative effects of water. This important structural element includes several components such as gutters, downspouts and downspouts, which together form a system for the proper drainage of water from the roof surface. In this article we will look at how a gutter system can be modelled within HiStruct.

![Flashing gutter](img/flashingGutter.png)

## Specifying a gutter system

There are several options for modelling the gutter system in HiStruct. The fastest way is to use the [gutter and flashing generator](roofFlashingGenerator.md), which allows you to quickly create a complex gutter system and then modify individual elements as needed. Alternatively, you can manually add a flashing system using [polyline](../instructor-roofs/insertPolyline.md), which specifies the edges of the roof to which the flashing is to be applied. This flexibility allows you to tailor the gutter system to your specific requirements and building projects.

## Adjusting the gutter and eaves geometry

The gutter system can be modified in terms of geometry. You have the option to move the tops of the polyline, which allows you to change the position of the gutter, and you can also adjust the angle of the gutter hooks.   The generator does this automatically, but you can change this by clicking *Edit* and then *Geometry*, where you can change the angle or position of the polyline. Changing the angle and geometry is done in a similar way to editing [roof flashing](roofFlashingOptions.md). In addition, by clicking *Edit* and selecting the gutter, you can change the gutter slope. This will ensure that the gutter has the correct slope for efficient rainwater drainage. The last parameter you can change is the cover width. This value determines the width of the gutter sheet and affects the appearance and function of the gutter system.

![Flashing gutter properties](img/flashingGutterProperties.png)

## Adjusting the gutter geometry

After clicking the *Edit* button and selecting a gutter, the HiStruct gutter editing menu will open. This menu provides several options for modifying the gutter geometry, allowing you to customize the gutter to your specific requirements.

- **Change Distance to Wall**: You can change the distance of the gutter, allowing you to add elbows and bring the gutter closer to the wall.

- **Extend Downspout**: The downspout can be extended either via the dialog box or by simply dragging the green dots on the downspout.

- **Changing the position of the gutter**: You can also change the position of the gutter easily by selecting the gutter and then moving it with the mouse.

In this way, you can flexibly adjust the geometry of the gutter to suit your specific needs and the requirements of your building project.

![Flashing gutter downspout properties](img/flashingGutterDownspoutProperties.png)


## Adding a gutter downspout
In HiStruct, gutter downspouts are usually generated automatically to ensure sufficient runoff from the gutter. However, if you would like to add an additional gutter, you can do so simply by using the *plus* button. Simply click this button, and the gutter downspout will be added to the existing gutter you have selected.

![flashing gutter add downspout](img/flashingGutterAddDownspout.png)