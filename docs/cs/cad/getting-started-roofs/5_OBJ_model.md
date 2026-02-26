---
sourceLang: en
sourceHash: b19295ae6f483236663b205d0c047661
autoTranslated: true
---

# 🏠 Použití OBJ modelu k automatickému vytvoření střechy

Máte 3D model z BIM projektu, sken z dronu nebo satelitní průzkum? Skvělé — HiStruct formát OBJ plně podporuje. S OBJ HiStruct automaticky vygeneruje 3D model střechy. Pokud takový model nemáte k dispozici, existují firmy, které nabízejí 3D zaměření existujících budov. Ať už je zaměření provedeno drony nebo satelity, výsledkem je obvykle podrobný 3D model ve formátu OBJ.

**❓Co když obdržím 3D model ve formátu PDF a nemám OBJ?**

Pokud máte 3D model ve formátu PDF, je třeba jej převést do formátu OBJ, který HiStruct podporuje. Je to snadné. Podívejte se na [tento návod](6_PDF_to_OBJ.md), jak rychle převést 3D model z PDF do OBJ.

Výsledný model může vypadat takto:

![OBJ model](img/5objModelBase.png)


## Jak vložit OBJ model do HiStruct

1. **Klikněte na tlačítko Import.obj.** Otevře se dialogové okno, kde můžete nahrát svůj model.

2. **Vyberte bod vložení.** Po výběru souboru klikněte kdekoli ve scéně, kde chcete model umístit.

3. **Nechte generátor střechy pracovat.** HiStruct automaticky detekuje plochy a hrany střechy a následně vytvoří 3D model z trojúhelníkových ploch definovaných těmito hranami.

4. **Proveďte ruční úpravy podle potřeby.** I když je generátor téměř bezchybný, občas může být některá hrana opomenuta nebo plocha nesprávně klasifikována. Můžete doladit jakékoli vygenerované hrany nebo plochy přímo v modelu.

5. **Když je vše v pořádku, klikněte na "Další"** a nechte HiStruct udělat zbytek.

6. Generátor vás provede dalšími kroky a pomůže vám bez námahy vytvořit požadovanou střechu — včetně všech doplňků.

![Model střechy](img/5roofModelObj.png)



## 🔧 Doladění vašeho modelu

![Model](img\5rosolModelObj.png)

  <u>**Hrany**</u>

  - **Klikněte na libovolnou hranu** pro úpravu jejích **vlastností**

  - **Jednotlivé hrany jsou barevně rozděleny do 3 skupin podle jejich funkce:**

    * **🟦 Štítová hrana** - šikmá hrana na konci střešní plochy; označuje hranici této plochy.
    * **🟩 Okapová hrana** - vodorovná hrana střešní plochy.
    * **🟥 Vnitřní hrana** - hrana uvnitř střešní roviny, slouží pouze k rozdělení ploch; při generování střechy se ignoruje.

  - **Každou hranu můžete zapnout nebo vypnout a nastavit, zda má být považována za vodorovnou.**

  <u>**Plochy**</u>

  - Stejně jako u hran můžete **změnit vlastnosti každé rozpoznané plochy**.

  - Na základě její orientace HiStruct rozhodne, zda je součástí střechy.

  - Klikněte na libovolnou plochu, abyste ji zahrnuli nebo vyloučili ze střechy. Zahrnuté plochy budou mít vygenerovanou krytinu, sekundární konstrukce a oplechování.

  - Plochy jsou barevně rozděleny do dvou skupin:

    * 🟦 **Modrá** - součást střechy; použitá při generování.
    * ⬜ **Bílá** - není součástí střechy; vyloučená.


**👉 [*Přejít na další kroky*](8_sheeting_menu.md)** 

**👉 [*Zpět na hlavní článek*](index.md)**