---
sourceLang: cs
sourceHash: e51c064155c7f37907ea1cf3e9e95473
autoTranslated: true
---

# Use of model from digital building orientation

A widely used service for surveying a building using detailed maps or other documents usually provides a three-dimensional model in *.obj or 3D *.pdf format. HiStruct allows this obtained model to be used efficiently for further processing.

The model in [3D *.pdf format can be converted to *.obj format](convert3dPdfToObj.md). The *.obj format can then be directly [imported](importObj.md) into the HiStruct scene.

The model from the digital orientation is usually more or less geometrically correct. Each roof surface is decomposed into a series of triangles, which is not a problem for displaying the imported file in the scene. However, for subsequent cladding, the roof surfaces need to be unified. Therefore, after import, a geometry correction is automatically performed in which the triangles are unified into roof surfaces.

These corrected surface geometries are then saved with the project, and the individual roof and wall surfaces can be converted into cladding elements.
