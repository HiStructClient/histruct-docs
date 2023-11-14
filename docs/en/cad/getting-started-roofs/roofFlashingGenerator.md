---
sourceLang: cs
sourceHash: 0ec09804c11db8487d8a751ce3e4af21
autoTranslated: false
proofRead: true
---

# Flashings and gutter system generator

It is mainly designed to **save time** for making 3d model of flashings and gutters for imported or specified roof plane geometries.

The generator can also be used more broadly for plane geometries entered from a drawing or created entirely by hand, and then modified to best fit the edges of the roof planes to be covered. It doesn't have to fit perfectly but should fall within normal tolerances.

![Source geometry for flashing generator](img/sourceGeometryForFlashingGenerator.png)

HiStruct automatically identifies the required flashing locations from the geometries of nearby roof planes, and then generates the corresponding flashing types. These generated flashings can then be further modified as required.

![Generated flashing result](img/generatedFlashingResult.png)
