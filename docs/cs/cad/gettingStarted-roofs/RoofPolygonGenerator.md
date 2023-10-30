# Využití modelu z digitální zaměření budovy

Hojně využívaná služba pro zaměření budovy prostřednictvím detailních mapových případně dalších podkladů, poskytuje na svém výstupu většinou také trojrozměrný model. Tento model bývá poskytován ve formátu *.obj, případně ve formátu 3D *.pdf. HiStruct umožňuje takto získaný model využít pro další zpracování.

Model ve formátu [3D *.pdf lze převést na formát *.obj](Convert3dPdfToObj.md). Formát *.obj lze následně rovnou [importovat](ImportObj.md) do HiStruct scény.

Model z digitálního zaměření je většinou více nebo méně geometricky korektní. Každá střešní plocha je rozbitá na řadu trojůhelníků, což pro zobrazení importovaného souboru ve scéně nevadí. Pro opláštění však musí být střešní plochy sjednoceny. Po importu je proto automaticky provedeno zkorektnění geometrie, v rámci kterého jsou trojúhelníky sjednoceny do střešních ploch.

Tyto korektní geometrie ploch je následně uložena s projektem a jednotlivé střešní i stěnové plochy mohou být převedeny na opláštěné prvky.
