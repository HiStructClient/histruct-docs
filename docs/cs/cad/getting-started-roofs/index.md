---
sourceLang: en
sourceHash: af050fc01015b10b51a71506fe46235a
autoTranslated: true
---

# HiStruct Roofs pro pokrývače

**HiStruct Roofs** je webová aplikace navržená pro rychlou a snadnou tvorbu profesionálních cenových nabídek na střechy. Automaticky vytváří detailní výkazy materiálu a montážní plány střešních systémů, včetně střešní krytiny, lemování, oplechování a okapových prvků. Platforma nabízí více režimů zadávání pro zjednodušení pracovních postupů a zvýšení efektivity.

HiStruct také podporuje plynulou spolupráci a sdílení projektů. Ať už poskytujete 3D náhled střechy koncovému zákazníkovi, nebo spolupracujete na návrhu s kolegou či realizační firmou, systém vám umožní snadno sdílet celé projekty nebo jen jejich konkrétní části s ostatními.

**❓Jak zpracovat poptávku na střechu v HiStructu?**

1.  Vytvořte projekt [s mapou nebo bez ní](1_new_project.md)

2.  Vymodelujte střechu

3.  Vyberte krytinu

4.  Upravte automaticky generované oplechování a okapový systém

5.  Přidejte okna a další prostupy

6.  Získejte výkaz materiálu, dokumenty, výkresy a cenovou nabídku na pár kliknutí

**Hotovo, čas na kávu ☕**😊

HiStruct lze rozsáhle přizpůsobit. Systém hry pokládky krytiny, oplechování a okapů je nastaven samostatně pro každého jednotlivého výrobce v samostatné sadě konfiguračních souborů. Obsahuje informace o způsobu pokládky střešní krytiny, možných barevných kombinacích, informace o výkazu materiálu a další. Tyto a další úpravy provádíte v rámci [projektu pro úpravu přizpůsobení](18_customisationProject.md).

**👉 Pojďme se na celý proces podívat podrobněji:**

## Vytvoření nového projektu

Pokud zpracováváte novou poptávku, první co potřebujete udělat, je založit nový projekt. **Projekt** je místo, které může obsahovat jeden nebo více **komponentů** – 3D modelů, tzn. konfigurací, variant či částí. Stránka projektu nabízí dva pohledy:

- **Tabulka** (výchozí pohled) je jednoduchý seznam založených projektů s jejich komponenty. Poskytuje jasný přehled o všech vašich projektech. Skvělá je pro doplňování podrobných poznámek, kontrolu stavu projektu a sdílení obsahu.

- **Mapa** je ideální, pokud chcete projekty zobrazit podle jejich umístění. Ještě lepší – 3D model vaší stavby můžete umístit přímo do mapy a vidět, jak zapadne do okolí.

**👉 Doporučujeme kombinovat oba pohledy podle aktuální potřeby.**

**👉 Pro více informací si přečtěte článek [Jak začít nový projekt](1_new_project.md).**

## 🏠 Modelování střechy

V HiStructu lze střechu modelovat několika různými způsoby. Každá metoda má své výhody a je vhodná pro jiné situace. **Nejvhodnější způsob modelování závisí na kvalitě podkladů, které máte k dispozici pro daný projekt.** Obecně platí: čím lepší vstupní data, tím efektivněji lze modelování dokončit. Dobrá zpráva? Nemusíte mít dokonalé výkresy – k zahájení práce stačí i ruční skica.

**Vyberte si způsob, který nejlépe vyhovuje vašemu projektu:**

- **Potřebuji vytvořit model jednoduché střechy běžného tvaru a mám k dispozici rozměry**

> 😊 Použijte některou z našich **šablon** – HiStruct nabízí širokou škálu předpřipravených šablon pro nejběžnější typy střech. Tato volba je ideální pro modelování standardních jednoduchých střech.
>
> **👉 *Jak začít se šablonou? [Přečtěte si tento článek](2_start_with_template.md)***.

- **Mám ruční skicu nebo vektorový výkres**

> 😊😊 V tomto případě můžete **vygenerovat tvar střechy z obrysu nebo je modelovat po plochách**. Pokud máte vektorový výkres, jste už v polovině! HiStruct podporuje import souborů ve formátu \*.dxf, případně můžete snadno převést vektorové PDF na \*.dxf. Výhodou je vyšší přesnost a plynulejší modelování ve 3D.
>
> **👉 *Jak vytvořit střechu podle obrysu? [Přečtěte si tento článek](3_generate_from_DXF.md)***.
>
> **👉 *Jak převést PDF na DXF? [Přečtěte si tento článek](4_PDF_to_DXF.md)***.

- **Mám model z digitálního zaměření**

> 😊😊😊 To je výhra! Využijte **modelování podle satelitního zaměření** **(vzdálený import geometrie) nebo jakýkoli jiný 3D model**. Pokud je model střechy k dispozici v podporovaném formátu (třeba 3D PDF nebo přímo jako \*.obj soubor), můžete geometrii importovat rovnou do HiStructu.\
> Podporované formáty: \*.obj soubory nebo převedené 3D PDF.
>
> **👉 *Jak použít OBJ model pro automatické vytvoření střechy? [Přečtěte si tento článek](5_OBJ_model.md)***
>
> **👉 *Jak převést PDF na DXF? [Přečtěte si tento článek](5_OBJ_model.md)***.

💡**Jak převést vlastní modely a výkresy pro použití v HiStructu**

Většina z nás má stavební plány v PDF nebo 3D modely v různých formátech – z BIM softwaru, dronových skenů nebo satelitních dat. **Dobrá zpráva?** Tyto soubory snadno převedete na **DXF** a **OBJ** – ideální formáty podporované v HiStructu. Jakmile je máte převedené, jejich nahrání do HiStructu je otázka pár kliknutí – jste na cestě k přesnému a plně vygenerovanému 3D modelu střechy. Žádné složité překreslování, jen rychlé výsledky. Podívejte se na návody:

- [Jak převést PDF na DXF pro použití v HiStructu](4_PDF_to_DXF.md)

- [Snadná konverze 3D modelu z PDF na OBJ](6_PDF_to_OBJ.md)

<span id="roofing"></span>
## 🧱 Rozvržení krytiny 

Jakmile máte geometrii střechy připravenou, je čas přejít do **menu Krytina**. Těsnicí vrstvy střechy se generují automaticky, ale v **menu Krytina** máte plnou kontrolu: můžete **nastavit typ skladby střechy**, **vybrat krytinu z [knihovny](7_flashing_libraries.md)** a také **zvolit sekundární nosnou konstrukci**.

U každé střešní plochy můžete upravit **parametry kladení** (směr, úhel a posun umístění střešních prvků od hrany střechy), **generovat výkaz materiálu** pro všechny střešní prvky a také **vytvořit editovatelný výkres skladby střechy**.

**👉 Jak krok za krokem pracovat s menu Krytina? [Přečtěte si tento článek](8_sheeting_menu.md).**

## 🌧️ Oplechování & Okapový systém

Teď když je geometrie i krytina hotová, je čas na detaily. Přidání oplechování a okapů je nezbytným krokem pro kvalitní střešní projekt. V HiStructu se tyto prvky generují automaticky vestavěným [generátorem okapů a oplechování](17_roofFlashingGenerator.md), takže už máte kompletní systém připraven. Ale každý projekt je jedinečný, proto si můžete automaticky generované prvky upravit podle svých potřeb. Ať už měníte typ oplechování, materiály, nebo si jemně dolaďujete rozvržení, HiStruct dává plnou kontrolu nad každým detailem.

**👉 Jak krok za krokem upravit oplechování a okapový systém? [Přečtěte si tento článek](9_flashing_and_gutter_system.md)**.

## 🪟 Prostupy – přidání oken, světlíků a dalších otvorů

Poslední tečkou v modelu je přidání prostupů. To lze rychle a intuitivně provést v menu **Otvorů**. Zde můžete vytvářet a upravovat různé typy otvorů v jednotlivých střešních plochách – například okna, světlíky či větrací průduchy. Pomocí **Ovládacího tlačítka** můžete vkládat nové otvory, měnit jejich rozměry a polohu, a jemně je dolaďovat přímo ve 3D modelu. Výchozí nastavení barev a měřicí nástroje pomáhají udržet návrh přesný, přehledný a jednotný.

👉 **Podívejte se, jak je to jednoduché! Jak krok za krokem pracovat s menu Otvory [viz tento článek](10_openings.md)**.

## 📐 Výkresy, dokumenty, výkazy... jednoduše výstupy

Jakmile je váš 3D model hotový, je čas získat výstupy – vše, co potřebujete pro rychlou přípravu precizní nabídky pro zákazníka během pár minut!

- **📐 Výkresy:** [Montážní výkresy](11_installation_drawings.md) se generují automaticky ze zadané geometrie a všech provedených změn. Samozřejmě, pokud je potřeba, můžete doplnit své poznámky a značky.

- **📦 Výkaz materiálu (BOM):** Výkaz je automaticky generován z dílů střechy v modelu. Každý díl ukazuje, z čeho je vyroben, můžete upravit množství nebo přidat nové položky. Princip tvorby výkazu lze upravit v [projektu pro úpravy přizpůsobení](18_customisationProject.md).

- **🧾 Cenová nabídka:** Výkaz materiálu s odkazem na ceník výrobce můžete přidat do nabídky – nebo vytvořit nabídku bez něj. Způsob generování nabídky lze také měnit v [projektu pro úpravy přizpůsobení](18_customisationProject.md).

**📌 Veškeré změny ve 3D modelu se automaticky aktualizují i ve výstupech – ve výkresech, výkazech a dalších dokumentech.** **Nemusíte se tedy strachovat o změny, pokud dojde na poslední chvíli k úpravám, jedním klikem ihned vše aktualizujete. Rychlé, praktické a bez stresu!**

> **👉 Pro krok za krokem návod, jak pracovat s výkresy, výkazy materiálu i nabídkami, si přečtěte [tuto kapitolu](12_outputs.md)**.

## ⚙️ Nastavení – přizpůsobte si pracovní prostor

HiStruct podporuje flexibilní pracovní postupy a umožní vám přizpůsobit si pracovní prostředí podle vlastních potřeb. Pomocí tlačítka **Nastavení** můžete přepínat mezi režimem **Základní** a **Pokročilý** a nastavovat parametry modelování, vzhled scény i výkonnostní limity.

**👉 Kompletní přehled všech možností najdete v našem [průvodci nastavením](13_settings.md)**.