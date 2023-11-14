---
sourceLang: cs
sourceHash: 29b3af03e9ed30f24e27d1dc4c8abd92
autoTranslated: false
proofRead: true
---

# Import of OBJ model
3D building models have huge potential, whether you are planning a new project or renovating an existing building. Using an OBJ model in HiStruct can significantly speed up your work and give you accurate results. But how to do it? It's actually quite simple, and I'll show you how to quickly create a roof using a model in OBJ format.

## Where to get such a model?
There are plenty of services that allow you to get a 3D model of your house, whether using satellite imagery or even using drones. The result of these measurements is usually a model in OBJ format. For our demonstration, I will use one of the freely available models from the internet to show you how to create a roof.

![Model OBJ](img/objModelBase.png)

## How to insert OBJ into HiStruct?
If you have a model in OBJ format, you can easily import it into your project. Just click on the *Import* button and select the file with the **.obj* extension.

![Import Button](img/importButton.png)

### Rotate the model and change the scale

After import, it is important to rotate the model correctly. You can do this using the tools you use for other objects in HiStruct. Next, you will need to change the scale of the OBJ model, which is easily done using the *Edit* button.

![Edit Scale](img/externalObjectEdit.png)

## How to add a roof to the model?
You can model a roof on an imported *.obj file by incrementally adding roof planes. Simply click on the vertices using [the general roof shape](modellingRoofs.md) tool.

![Model created with object](img/objModel.png)

In this way, you can create a detailed 3D model with which you can almost always use [the flashing and gutter generator](roofFlashingGenerator.md).

![Model with gutter systems](img/objModelFlashings.png)
