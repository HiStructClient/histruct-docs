# HiStruct Roofs for roofers

**HiStruct Roofs** is a web-based application designed to quickly and easily generate professional roofing quotations. It automatically produces detailed bills of materials and installation plans for roofing systems, including roofing, flashings, trims, and gutter components. The platform offers multiple input modes to streamline project workflows and enhance efficiency.

HiStruct also supports seamless collaboration and project sharing. Whether you're providing a 3D roof model preview to an end client or co-working on a design with a colleague or installation company, the system makes it effortless to share complete projects or specific parts with others.

**❓How to process a roof enquiry in HiStruct?**

1.  Create a project [with or without a map](1_new_project.md)

2.  Model the roof

3.  Pick the sheeting

4.  Adjust automatically generated flashings and the gutter system

5.  Add windows and other openings

6.  Get your bill of materials, documents, drawings, and quotations in just a few clicks

**Done, time for a coffee ☕**😊

HiStruct can be extensively customized. The system for laying roofing, flashings and guttering is set up separately for each individual manufacturer in a separate set of configuration files. It contains information on how the roof area is to be laid with roof covering, possible colour combinations, information on the bill of materials and more. These and other customizations are done within the [customization project](18_customisationProject.md).

**👉 Let's take a closer look at the whole journey:**

## Creating a New Project

If you are processing a new request, the first thing you need to do is start a new project. A **Project** is a place that can contain one or more **components** - 3D models, i.e. configurations, variants or parts. The project page offers two views:

- The **Table** (default view) is a simple listing of established projects with components. It gives you a clear overview of all your projects. It's perfect for adding detailed notes, checking project status, and sharing content.

- The **Map** is ideal if you want to view projects by their location. Even better - you can place a 3D model of your building right on the map and see how it fits in with its surroundings.

**👉 We recommend combining both views depending on your current needs.**

**👉 Check article [How to start a new project](1_new_project.md) for more information.**

## 🏠 Modelling the Roof

In HiStruct, you can model a roof in several different ways. Each method has its own advantages and is suitable for different situations. **The most appropriate modelling approach depends on the available reference materials for the specific project**. As a general rule, the better the input data, the more efficiently the modelling process can be completed. The good news? You don't need perfect drawings -- even a hand sketch is enough to get started.

**Choose the way that best fits your project:**

- **I need to create a model of a simple, standard-shaped roof, and I have the dimensions available**

> 😊 Use one of our **templates** - HiStruct offers a wide range of pre-made templates, featuring the most common roof types. This option is perfect for modelling standard-shaped, simple roofs.
>
> **👉 *How to start with a template? [See this article](2_start_with_template.md)***.

- **I have a hand-drawn sketch or vector drawing**

> 😊😊 In this case, you can **generate roof shape from an outline or model them by planes**. If you have a vector drawing, you're already halfway there! HiStruct supports importing files in \*.dxf format, and you can also convert a vector-based PDF to \*.dxf for easy use. The advantage? Greater precision and a smoother 3D modelling experience.
>
> **👉 *How to generate a roof from an outline? [See this article](3_generate_from_DXF.md)***.
>
> **👉 *How to convert PDF to DXF? [See this article](4_PDF_to_DXF.md)***.

- **I have a model from a digital orientation**

> 😊😊😊 This is a real win! Use **satellite survey modelling** **(Remote geometry import) or any other 3D model**. If your roof model is available in a compatible format (such as a 3D PDF or directly as an \*.obj file), you can import the geometry straight into HiStruct.\
> Supported formats: \*.obj files or converted 3D PDFs.
>
> **👉 *How to use OBJ model to generate the roof automatically? [See this article](5_OBJ_model.md)***
>
> **👉 *How to convert PDF to DXF? [See this article](5_OBJ_model.md)***.

💡**How to convert your own models and drawings to use it in HiStruct**

Most of us have building plans in PDF and 3D models in various formats - from BIM software, drone scans, or satellite data. **The good news?** You can easily convert these into **DXF** and **OBJ** files - the perfect formats supported by HiStruct. And once you have them converted, uploading them into HiStruct is a breeze -just a few clicks and you're on your way to a precise, fully generated roof model. No fuss, no redraws, just fast results. Check guidelines:

- [How to convert PDF to DXF to use it in HiStruct](4_PDF_to_DXF.md)

- [Easy conversion of 3D model from PDF to OBJ](6_PDF_to_OBJ.md)

<span id="roofing"></span>
## 🧱 Roofing layout 

Once you've set up the roof geometry, it's time to move on to the **Sheeting menu**. The roof sheeting is generated automatically, but in the **Sheeting menu**, you have full control: you can **set the type of roof composition**, **choose the roof covering from the [library](7_flashing_libraries.md)**, and **also choose the secondary roof structure.**

For each roof plane, you can adjust the **tiling parameters** (the direction, angle, and offset for the placement of roof elements from the edge of the roof), **generate a bill of materials** for all roofing items, and even **create an editable drawing of the roof structure**.

**👉 How to work with the Sheeting menu step by step? [See this article](8_sheeting_menu.md).**

## 🌧️ Flashing & Gutter System

Now when your roof geometry and sheeting are complete, it's time to add the details. Adding flashings and gutters to the roof design are essential steps in creating a quality roofing project. In HiStruct, these elements are generated automatically by built-in [gutter and flashing generator](17_roofFlashingGenerator.md), so you already have a complete system in place. But every project is unique, and that's why you can customize automatically generated elements to fit your exact needs.  Whether it's adjusting the flashing type, changing materials, or fine-tuning the layout, HiStruct gives you precise control over every detail.

**👉 How to edit flashings and gutter system step by step? [See this article](9_flashing_and_gutter_system.md)**.

## 🪟 Openings - Adding Windows, Skylights, and More

The final touch for your model is adding openings. This can be done quickly and intuitively in the **Openings** menu. Here, you can create and edit various types of openings in individual roof planes - such as windows, skylights, or vents. With the **Control button**, you can insert new openings, adjust their dimensions and position, and fine-tune them directly in the 3D model. Default colour settings and measuring tools help you keep your design precise, clear, and consistent.

👉 **Let's take a look at how simple it is! To learn how to work with the Openings menu step [see this article](10_openings.md)**.

## 📐 Drawings, Documents, BOMs... Simply Outputs

Once your 3D model is ready, it's time to get your outputs - everything you need to prepare a polished quote for your client in just a few clicks!

- **📐 Drawings:** The  [Layout Drawings](11_installation_drawings.md) are generated automatically from the specified geometry and any changes you made. You can also add extra notes or annotations if needed.

- **📦 Bill of Materials (BOM):** The BOM is created automatically from the roof parts in your model. Each part shows what it's made of, and you can edit quantities or add new items. The way the BOM is generated can be adjusted within the [customization project](18_customisationProject.md).

- **🧾 Quote:** You can include the BOM, complete with a link to the manufacturer's price list, in your quote - or create a quote without it. How the quotation is generated can also be modified within the [customization project](18_customisationProject.md).

**📌 Any changes you make in your 3D model are automatically updated in all outputs - drawings, BOMs, and others.** **That means you don't need to worry about changes, and if last-minute adjustments are needed, a single click updates everything instantly. Fast, practical, and stress-free!**

> **👉 For a step-by-step guide on working with drawings, BOMs, and offers, check out [this chapter](12_outputs.md)**.

## ⚙️ Settings - Customize Your Modeling Space

HiStruct supports flexible workflows, letting you tailor the modeling experience to your needs. Using the **Settings** **button**, you can switch between **Basic** and **Advanced** **modes** and adjust modeling parameters, scene appearance, and performance settings.

**👉 For detailed guidance on all available options, see our full [Settings guide](13_settings.md)**.
