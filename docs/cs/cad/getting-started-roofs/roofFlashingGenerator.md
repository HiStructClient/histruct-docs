# 🚀 Jak funguje generátor lemovek a okapů v HiStruct

Je určen zejména k **úspoře času** pro zhotovení 3d modelu lemovek a okapů pro importované nebo zadané geometrie střešních rovin.

Generátor lze použít obecně i na geometrie ploch, které jsou zadané z výkresu nebo zcela ručně a jen upravené, aby co nejlépe seděly hrany střešních ploch, které se mají dotýkat. Nemusí sedět úplně, stačí se vejít do běžných tolerancí.

![Source geometry for flashing generator](img/sourceGeometryForFlashingGenerator.png)

HiStruct automaticky identifikuje potřebná umístění lemovky z geometrií blízkých střešních rovin a následně generuje odpovídající typy lemovky. Tyto vygenerované lemovky lze následně dále upravovat podle potřeby.

![Generated flashing result](img/generatedFlashingResult.png)
