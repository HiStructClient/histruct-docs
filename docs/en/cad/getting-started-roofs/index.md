---
sourceLang: cs
sourceHash: 45b551bb45740da6145ffeadb59303b5
autoTranslated: true
---


# HiStruct for roofers

HiStruct is a web application that allows easy collaboration or sharing of a project or parts of a project. In this way, you can give a preview of the 3D roof model to the end customer, collaborate on a project with a colleague or an installation company.
It is used to quickly create quotations, bills of materials and laying plans for roofing, flashings, flashings and gutter systems. The system allows for several entry modes to increase efficiency when working with a project.

## How to process a roof enquiry in HiStruct?

1.
1. I model the roof surfaces by redrawing or importing
1. Edit the generated layout
1. select the flashing and eaves system or have it automatically generated
1. Edit the beautiful bid that wins us the contract
1. I share the project with the customer

Done, I'm off for coffee 😊

HiStruct can be extensively customized. The system for laying roof fittings, flashings, flashings and guttering is set up separately for each specific manufacturer in a separate set of configuration files. It contains information on how the roof area is to be laid with fittings, possible colour combinations, information on the bill of materials and more. These and other customizations are done within the [customization project](customisationProject.md).

## Now, in more detail...

### 1. I'm processing a new request

Is this for Jirka or Hank?

### 2. Modeling of roof surfaces

We usually start by **choosing the type of roofing, flashing and gutter system** (which can be changed later) from the libraries. This is followed by creating a roof model from the individual roof planes, or more advanced modelling methods. The appropriate modelling method depends on what supporting documents are available for a given enquiry. The better the foundation, the less work the modelling will take.

#### **I only have a few sketches with dimensions 😊**

If I don't have a digital substrate, I have to redraw the roof planes. In order to redraw better, I have several options available. If the roof plane shape is simple, I can [model](modellingRoofs.md) by inserting roof planes of predefined shapes, or directly clip the shape in the modelling space.

#### **I have a vector drawing of the roof plan 😊😊**

If I have a vector drawing, it will be easier to model. You can [import *.dxf](importDxf.md) into HiStruct, or [convert vector *.pdf to *.dxf](convertPdfToDxf.md) and [import that into HiStruct](importDxf.md). The imported *.dxf can be snapped to, and specifying individual roof surfaces is then done by clipping the floor plan with the addition of a slope for each roof surface. The advantage is the accuracy and ease of making the 3D model. Almost always the [flashing and gutter generator](roofFlashingGenerator.md) can be used.

#### **I have a 3D model from a digital orientation 😊😊😊**

The model from the digital focus is a win. If I have this model in a suitable format (3D *.pdf or directly *.obj), I can import the geometry directly. I can [import *.obj](importObj.md) into HiStruct, or [convert 3D *.pdf to *.obj](convert3dPdfToObj.md) and [import that into HiStruct](importObj.md).

After importing, HiStruct will offer recognized surfaces from which you can choose how to convert them to HiStruct geometry. The [Surface Generator](roofPolygonGenerator.md) then performs the conversion to roof or wall cladding surfaces, which can then be worked on in the normal way

After the roof surfaces have been generated, I can use [roofFlashingGenerator.md](roofFlashingGenerator.md).

#### **Simple shape 😊😊😊**

Rectangular roof types for the increasingly popular bungalows are available in HiStruct directly as a whole building, which is automatically sheathed with the chosen roofing material and oiled with fittings.

### 3. Roofing installation

For us, libraries of coverings and flashings mean not only size and colour, but a whole approach to cladding specific roof areas. Thanks to the variable generator, we are able to enter the specific installation procedure of a particular manufacturer's roofing into the library. We do this as part of [customisation project](customisationProject.md). A well-designed generator then eliminates the necessary interventions in the automatic laying process.

The [RoofPolygonTilling](roofPolygonTillingOptions.md) takes place automatically according to the configuration settings of the roofing. It is also possible to set the start of the laying (left, right, center to centerline, center to panel edge) to achieve the smallest cut. The information about the ratio of the cut to the roof plane area is displayed during the laying adjustments.

### 4. How to trim and gutter system?

Of course, [flashings, flashings](roofFlashingOptions.md) and [gutter system](roofFlashingGutterOptions.md) can be specified anywhere in the space by grabbing onto already specified roof surfaces, imported geometry or other objects. In addition, it is possible to use the addition of edges to individual sides of roof planes, or directly to the [generator over a group of roof planes](roofFlashingGenerator.md). For the generated elements, the slope of the associated roof planes is automatically adjusted, thus correctly setting the bending angles of the flashings and hooks of the eaves system.

HiStruct includes comprehensive [gutter system settings](roofFlashingGutterOptions.md) options. By specifying a polyline defining the downstream gutter, the gutter slope can be set. For each part of the gutter, we also set the slope of the downstream roof plane for the correct calculation of the bend and hook length. It is possible to add clamps to each gutter section, which have additional [setting options](roofFlashingGutterOptions.md).

### 5. Pieces, documents, drawings... simply outputs

**Sketch**
The [Piece List](roofBom.md) is created automatically from roof parts inserted into the model space. The individual parts of the model have information next to them about which parts they are created from, with the possibility of editing the number and possibly adding more items.

The way the BOM is generated can then be modified within the [customisation project](customisationProject.md).

**Offer**
The generated BOM, complete with a link to the manufacturer's price list, can be part of the [offer](roofQuote.md). However, the offer can be prepared without the BOM. The method of generating the quote can then be modified within the [customisation project](customisationProject.md).

**Plans**
The [Layout Drawings](roofPolygonTillingDrawing.md) are generated automatically from the specified geometry and any changes made by the user. If necessary, additional notes or annotations can be added to the drawing.

![example of roof tilling drawing](img\roofTillingPlane1.png)
![example of roof tilling drawing](img\roofTillingPlane2.png)

### 6. Sharing with the client

Is this written by Jirka or Hanka?