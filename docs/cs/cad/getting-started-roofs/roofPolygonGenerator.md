# 🏢 Možnosti využití modelu z digitálního zaměření budovy

Hojně využívaná služba zaměření budovy pomocí detailních mapových podkladů často poskytuje také trojrozměrný model ve formátu *.obj nebo 3D *.pdf. HiStruct umožňuje efektivně využít tento získaný model pro další zpracování.

Model ve formátu [3D *.pdf lze převést na formát *.obj](convert3dPdfToObj.md). Formát *.obj lze následně rovnou [importovat](importObj.md) do HiStruct scény.

Model z digitálního zaměření bývá většinou více či méně geometricky korektní. Každá střešní plocha je rozložena na řadu trojúhelníků, což pro zobrazení importovaného souboru ve scéně není problém. Avšak pro následné opláštění je nutné, aby střešní plochy byly sjednoceny. Po importu je proto automaticky provedeno zkorektnění geometrie,  v rámci kterého jsou trojúhelníky sjednoceny do střešních ploch.

Tyto korektní geometrie ploch jsou následně uloženy spolu s projektem, a jednotlivé střešní i stěnové plochy mohou být převedeny na opláštěné prvky.
