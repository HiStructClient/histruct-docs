---
sourceLang: cs
sourceHash: decff2fa38de31ff1060f45f406c0f95
autoTranslated: true
---


# HiStruct for roofing specialist

HiStruct is a web application facilitating seamless collaboration and project sharing. Whether previewing a 3D roof model for a client, collaborating with a colleague, or coordinating with an installation company, HiStruct makes the process easy and efficient.

To enhance efficiency in project work, HiStruct swiftly generates quotations, bills of materials, and tiling plans for roofing, flashings, and gutter systems. The system offers multiple entry modes, ensuring a quick and adaptable approach to project management.

## How to process a roof enquiry in HiStruct?

1. Create a project with or without a map.
1. Model the roof planes by redrawing or importing them.
1. Edit the generated tilling.
1. Select the flashing and gutter system or have them generated automatically.
1. Generate BOMs, documents, and drawings.


Done, I'm going for a coffee 😊

HiStruct can be highly customized. The system for tiling roof planes, flashings, and gutter systems is configured separately for each manufacturer in dedicated sets of configuration files. These files contain details on how to lay out the roof area with fittings, potential color combinations, information on the bill of materials, and more. Such customizations are carried out within the [customization project](customisationProject.md).

## Now, in more detail...

### 1. I create a project with or without a map

I'm processing a new request. The initial step is to start a new project. A project is a space that can encompass one or more components, such as 3D models, configurations, model variants, or parts. The project page offers two views. The default view presents a simple list of established projects with associated components. If I wish to include a location for a project, I can utilize the map view of projects, allowing me to specify a location directly on the map.

### 2. Modeling roof planes

We usually start by **selecting the type of roofing, flashings and gutter system** (these can be changed later) from the libraries. This is followed by creating a roof model from the individual roof planes, possibly using more advanced modelling methods. The appropriate modelling method depends on the available documents for a particular enquiry. The better the quality of the documentation, the more efficiently the modelling process can be carried out.

#### **I only have a few sketches with dimensions 😊**

If the roof shape is simple, I can [model it](modellingRoofs.md) by inserting roof planes with predefined shapes or create a general roof area shape in the modelling space. The general input shape utilizes tracing and other familiar input tools, similar to other CAD programs. If the slope is known, the roof planes can be rotated and moved in space to match the actual roof shape. If the roof can be built in space with sufficient accuracy, the [flashing and gutter generator](roofFlashingGenerator.md) can be used.

#### **I have a vector drawing of the roof plan 😊😊**

If I have a vector drawing, it will be easier to model. It is possible to import [files in *.dxf format](importDxf.md) into HiStruct, or convert vector[ *.pdf files to *.dxf](convertPdfToDxf.md) to [import into HiStruct](importDxf.md). The imported *.dxf allows for easy snapping and entering of individual roof planes is done by clicking through the floor plan with the option of adding a slope for each roof surface. The advantage is the accuracy and ease of making a 3D model. Almost always the [flashing and eaves generator](roofFlashingGenerator.md) can be used.

#### **I have a 3D model from a digital orientation 😊😊😊**

The model from the digital focus is a win. If I have this model in a suitable format (3D *.pdf or directly *.obj), I can import the geometry directly. I can [import *.obj](importObj.md) into HiStruct, or [convert 3D *.pdf to *.obj](convert3dPdfToObj.md) and [import that into HiStruct](importObj.md).

After importing, HiStruct will offer recognized surfaces from which you can choose how to convert them to HiStruct geometry. The [surface generator](roofPolygonGenerator.md) then performs the conversion to roof or wall cladding surfaces, which can then be worked on in the normal way.

After the roof surfaces have been generated, I can still use [roof flashing generator](roofFlashingGenerator.md). This method of input is almost work-free.

#### **Simple shape 😊😊😊**

Rectangular roof types for the increasingly popular bungalows are available directly in HiStruct as complete structures. These structures are automatically covered with the selected roofing material and equipped with flashings and gutters.

### 3. Roofing installation

For us, libraries of coverings and flashings mean not only size and colour, but a whole approach to cladding specific roof surfaces. Thanks to the variable generator, we are able to enter the specific installation procedure of a particular manufacturer's roofing into the library. We do this as part of [customisation project](customisationProject.md). A well-designed generator then eliminates the necessary interventions in the automatic laying process.

The [roof tiling](roofPolygonTillingOptions.md) process occurs automatically based on the roofing configuration settings. It is also possible to adjust the starting position of the tiling (left, right, center to centerline, center to panel edge) to achieve the smallest possible cut. Information about the ratio of the cut to the roof plane area is displayed during the tiling adjustments.

### 4. How to use flashings and a gutter system?

Of course, [flashings](roofFlashingOptions.md) and [gutter system](roofFlashingGutterOptions.md) can be specified anywhere in the space by grabbing onto already specified roof surfaces, imported geometry, or other objects. Additionally, it is possible to add them to the edges of individual roof planes or directly use [the generator over a group of roof planes](roofFlashingGenerator.md). For the generated elements, the slope of the associated roof planes is automatically adjusted, thus correctly setting the bending angles of the flashings and hooks of the eaves system.

HiStruct includes comprehensive [gutter system settings](roofFlashingGutterOptions.md). By specifying a polyline defining the downstream gutter, the gutter slope can be set. For each part of the gutter, we also set the slope of the downstream roof plane for the correct calculation of the bend and hook length. It is possible to add clamps to each gutter section, which have additional [setting options](roofFlashingGutterOptions.md).

### 5. BOMs, documents, drawings... simply outputs

**BOM**
The [BOM](roofBom.md) is created automatically from roof parts inserted into the model space. The individual parts of the model have information next to them about which parts they are created from, with the possibility of editing the number and possibly adding more items.

The way the BOM is generated can then be modified within the [customisation project](customisationProject.md).

**Quotation**
The generated BOM, complete with a link to the manufacturer's price list, can be part of the [quote](roofQuote.md). However, the offer can be prepared without the BOM. The method of generating the quote can then be modified within the [customisation project](customisationProject.md).

**Drawings**
The [layout drawings](roofPolygonTillingDrawing.md) are generated automatically from the specified geometry and any changes made by the user. If necessary, additional notes or annotations can be added to the drawing.

![example of roof tilling drawing](img\roofTillingPlane1.png)
![example of roof tilling drawing](img\roofTillingPlane2.png)
