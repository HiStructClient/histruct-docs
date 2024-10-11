---
sourceLang: cs
sourceHash: 68fce3099952486cd4561024c1f98753
autoTranslated: true
---

# 🌧️ Proper flashing and flashing of roofs

Sheathing the roof and adding flashings to the roof design are essential steps in creating a quality roofing project. In HiStruct, you can manually add flashings to each side of a roof plane or use the [Roof Flashings Generator](roofFlashingGenerator.md) for an entire group of roof planes. Modeling individual flashings and flashings is easy, and I'll show you how to do it.

## Specifying flashings

The fastest way to create flashings is to use the [roofFlashing Generator](roofFlashingGenerator.md) and then modify the individual elements. But all roof flashings can also be defined using [polyline](../instructor-roofs/insertPolyline.md), which specifies the roof edges where the flashings should be applied.

## Modifying the flashing geometry

All flashings can be modified in terms of geometry. You can move the polyline vertices to change the position of the flashings. You can also adjust the bending angle of some of the trims. The generator does this automatically, but you can change this by clicking *Edit* and then *Geometry* where you can change the angle or position of the polyline.

### Adjusting the angle

To change the angle, click on the arrow that shows the normal of the surface the border is adjacent to.

![Edit angle of flashing](img/flashingEditAngle.png)

After clicking on the arrow, click on the cursor icon and then select the area you want the fringe to adhere to.

![Edit angle of flashing- step 2](img/flashingEditAngleStep2.png)

### Edit position

Changing the position is done in the same way as changing the polyline geometry.

## Selecting the plating from the library

You can select different types of flashings from the [library](roofFlashingLibrary.md) for each flashing element. This can be done either for individual elements or for a whole group of elements at once.

## Types of flashings

Each part of the roof requires a specific type of flashings and flashings. HiStruct has a wide range of flashings and flashings to cover almost all parts of the roof. In the following we will go through each element in turn.

### Gable flashings
Gable flashings, also called leeward flashings, are special flashings used to finish the gable facade of a roof. The gable elevation is the portion of the roof that is located on the gable side of a building, and gable flashings are used to provide an aesthetic or protective finish to this portion of the roof.

![Flashing gable trim](img/flashingGableTrim.png)

### Ridge trim
A ridge trim is a roof element that is used to cover the ridge of a roof. This element is used to protect this area from weather, water intrusion and other potential problems. In this way, the ridge cap ensures a complete and safe roof finish.

![Flashing ridge cap](img/flashingRidgeCap.png)

### The chute
A valley is a point on a roof where two roof surfaces meet to form a valley. This feature is used to shed water and snow and protect the building from moisture infiltration.
 
![Flashing valley](img/flashingValley.png)

### Eaves
A gutter is a structural element located at the edge of a roof that serves to control the flow of rainwater into a gutter or downspout, thereby protecting the building from damage caused by water flowing into the roof structure.


![Flashing gutter apron](img/flashingGutterApron.png)

### Edging to the wall
This flashing is usually located where the roof meets the vertical wall and serves to provide a tight and aesthetically clean connection between the two parts of the building.

![Flashing wall trim](img/flashingWallTrim.png)

### Flashing the opening
This element is used to clad an opening in the roof to prevent water from flowing around the opening.

![Flashing roof opening](img/flashingRoofOpening.png)