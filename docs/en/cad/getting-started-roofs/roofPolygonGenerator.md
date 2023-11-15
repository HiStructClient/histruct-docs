---
sourceLang: cs
sourceHash: e51c064155c7f37907ea1cf3e9e95473
autoTranslated: true
---

# Utilizing the model from digital measurement

A widely used service for building measurements through detailed maps or other data sources usually provides a three-dimensional model in *.obj or 3D *.pdf format. HiStruct allows for efficient utilization of this acquired model for further processing.

The model in [3D *.pdf format can be converted to *.obj format](convert3dPdfToObj.md). The *.obj format can then be directly [imported](importObj.md) into the HiStruct scene.

The model from digital measurement is usually more or less geometrically correct. Each roof surface is divided into a series of triangles, which is perfectly fine for displaing of the imported file in the scene. However, for subsequent cladding process, it is necessary to unify the individual triangles into geometrically correct roof areas. Therefore, after import, geometry correction is automatically performed, during which the triangles are unified into roof surfaces.

These corrected surface geometries are then saved along with the project, and individual roof and wall surfaces can be converted into tiled areas.
