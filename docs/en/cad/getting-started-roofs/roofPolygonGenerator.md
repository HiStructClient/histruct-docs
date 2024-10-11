---
sourceLang: cs
sourceHash: 50e6b6a8e62ae06d886fb82a718134ea
autoTranslated: true
---

# 🏢 Possibilities of using the model from the digital building orientation

The widely used service of surveying a building using detailed maps often also provides a three-dimensional model in *.obj or 3D *.pdf format. HiStruct allows you to efficiently use this obtained model for further processing.

The model in [3D *.pdf format can be converted to *.obj format](convert3dPdfToObj.md). The *.obj format can then be directly [imported](importObj.md) into the HiStruct scene.

The model from the digital orientation is usually more or less geometrically correct. Each roof surface is decomposed into a series of triangles, which is not a problem for displaying the imported file in the scene. However, for subsequent cladding, the roof surfaces need to be unified. Therefore, after import, a geometry correction is automatically performed in which the triangles are unified into roof surfaces.

These corrected surface geometries are then saved with the project, and the individual roof and wall surfaces can be converted into cladding elements.
