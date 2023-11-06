---
sourceLang: cs
sourceHash: 5892688192faec0ad0338eccf2c47852
autoTranslated: true
---

# Use of model from digital building orientation

A widely used service for surveying a building using detailed maps or other data, it usually also provides a three-dimensional model as output. This model is usually provided in *.obj format or in 3D *.pdf format. HiStruct allows the model obtained in this way to be used for further processing.

The model in [3D *.pdf format can be converted to *.obj format](convert3dPdfToObj.md). The *.obj format can then be directly [imported](importObj.md) into the HiStruct scene.

The model from the digital orientation is usually more or less geometrically correct. Each roof surface is broken into a series of triangles, which is fine for displaying the imported file in the scene. For cladding, however, the roof surfaces must be unified. Therefore, after import, a geometry correction is automatically performed in which the triangles are unified into roof faces.

These corrected surface geometries are then saved with the project and the individual roof and wall surfaces can be converted to cladding elements.
