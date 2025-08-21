
<h1>Geometrie &gt; Budova &gt; Rozměry</h1>

  <p>Umožňuje kreslit střešní roviny, měnit jejich tvary, rozměry či sklony, a nastavit jejich propojení.</p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <table>
    <tr>
      <td>
        <div style="position: relative; width: 64px; height: 64px;">
          <img src="img/ImportDxfIcon64x64.png" alt="ImportDxfIcon64x64.png" width="64" height="64">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
            Podklad
          </div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
        Podklad
      </td>
    </tr>
  </table>

  <p>Tlačítko <u>Podklad</u> slouží k importu podkladu pro rychlejší kreslení obrysu střešních rovin. Po importu pokladu je třeba zkontrolovat jeho rozměry a případně upravit měřítko.</p>

  <p><b><u>Úprava měřítka importovaného podkladu</u></b></p>
  <ul>
    <li><p>Po kliknutí na importovaný podklad je možné měřítko změnit přímo v příslušné buňce v otevřené tabulce.</p></li>
    <li><p>Pro úpravu měřítka je taktéž možné použít tlačítko <u>Měřítko</u>, které je umístěno v horní části otevřené tabulky. Pomocí tohoto tlačítka je možné nastavit měřítko podkladu pomocí zvolené hrany, u které známe její skutečné rozměry.</p></li>
  </ul>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <table>
    <tr>
      <td>
        <div style="position: relative; width: 64px; height: 64px;">
          <img src="img/TiledAreaGeneralIcon64x64.png" alt="TiledAreaGeneralIcon64x64.png" width="64" height="64">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
            Plocha
          </div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
        Plocha
      </td>
    </tr>
  </table>

  <p>Tlačítko <u>Plocha</u> slouží k zakreslení půdorysného obrysu střešní roviny. Střešní roviny lze kreslit pomocí předdefinovaných tvarů ploch:</p>

  <table>
    <tr>
      <td>
        <div style="position: relative; width: 55px; height: 55px;">
          <img src="img/GeneralLoopIcon64x64.png" alt="GeneralLoopIcon64x64.png" width="55" height="55">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
            Obecný
          </div>
        </div>
      </td>
      <td>
        <div style="position: relative; width: 55px; height: 55px;">
          <img src="img/ClassRectLoopIcon64x64.png" alt="ClassRectLoopIcon64x64.png" width="55" height="55">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
            Obdélník
          </div>
        </div>
      </td>
      <td>
        <div style="position: relative; width: 55px; height: 55px;">
          <img src="img/ClassTriangleLoopIcon64x64.png" alt="ClassTriangleLoopIcon64x64.png" width="55" height="55">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
            Trojúhelník
          </div>
        </div>
      </td>
      <td>
        <div style="position: relative; width: 55px; height: 55px;">
          <img src="img/ClassTrapezoidLoopIcon64x64.png" alt="ClassTrapezoidLoopIcon64x64.png" width="55" height="55">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
            Lichoběžník
          </div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
        ... a další
      </td>
    </tr>
  </table>

  <p>Po zakreslení či vložení plochy je možné v závislosti na typu plochy upravovat její rozměry a sklon, a také výšku i směr okapové hrany v příslušné otevřené tabulce.</p>

  <hr> <!-- Vodorovná čára jako oddělovač sekce -->

  <table>
    <tr>
      <td>
        <div style="position: relative; width: 64px; height: 64px;">
          <img src="img/GeneralLoopIcon64x64.png" alt="GeneralLoopIcon64x64.png" width="64" height="64">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
            Obecný
          </div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
        Obecný
      </td>
    </tr>
  </table>

  <p>Tlačítkem <u>Obecný</u> je možné kreslit střešní rovinu libovolného půdorysného tvaru. K tomu lze využít:</p>

  <p><b><u>Volné kreslení pomocí kurzoru</u></b></p>
  <ul>
    <li><p>Hrany lze kreslit volným klikáním do modelovacího prostoru.</p></li>
    <li><p>Během kreslení hran je možné využít funkce zarovnávání kurzoru podle směrů os X a Y, případně zarovnávání kurzoru kolmo k poslední zadané hraně.</p></li>
  </ul>

{{ modal_video_button("img/VideoOutlineFree.mp4") }}

  <p><b><u>Globální souřadnice vrcholů polygonu</u></b></p>
  <ul>
    <li><p>Globální souřadnice pro následující vrchol se zapíší ve formátu "X;Y", tedy např. <b>2;4</b></p></li>
  </ul>

{{ modal_video_button("img/VideoOutlineGlobal.mp4") }}

  <p><b><u>Relativní souřadnice vrcholů polygonu</u></b></p>
  <ul>
    <li><p>Relativní souřadnice pro následující vrchol se zapíší ve formátu "@X;Y", tedy např. <b>@2;4</b></p></li>
  </ul>

{{ modal_video_button("img/VideoOutlineRelative.mp4") }}

  <p><b><u>Polární souřadnice vrcholů polygonu</u></b></p>
  <ul>
    <li><p>Polární souřadnice pro následující vrchol se zapíší ve formátu "&gt;alfa;L", tedy např. <b>&gt;135;6</b></p></li>
    <li><p>Zadávaný úhel se odměřuje o kladného směru globální osy X proti směru hodinových ručiček.</p></li>
  </ul>

{{ modal_video_button("img/VideoOutlinePolar.mp4") }}

  <p>Poslední vložený bod je možné smazat pomocí klávesy <b><u>DELETE</u></b>.</p>

  <hr> <!-- Vodorovná čára jako oddělovač sekce -->

  <table>
    <tr>
      <td>
        <div style="position: relative; width: 64px; height: 64px;">
          <img src="img/ClassRectLoopIcon64x64.png" alt="ClassRectLoopIcon64x64.png" width="64" height="64">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
            Obdélník
          </div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
        Obdélník
      </td>
    </tr>
  </table>

  <p>Střešní rovinu obdélníkového tvaru lze zadat volným klikáním do půdorysné roviny nebo pomocí jeho rozměrů ve tvaru "X;Y", tedy např. <b>2;4</b>.</p>

  <hr> <!-- Vodorovná čára jako oddělovač sekce -->

  <table>
    <tr>
      <td>
        <div style="position: relative; width: 55px; height: 55px;">
          <img src="img/ClassTriangleLoopIcon64x64.png" alt="ClassTriangleLoopIcon64x64.png" width="55" height="55">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
            Trojúhelník
          </div>
        </div>
      </td>
      <td>
        <div style="position: relative; width: 55px; height: 55px;">
          <img src="img/ClassTrapezoidLoopIcon64x64.png" alt="ClassTrapezoidLoopIcon64x64.png" width="55" height="55">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 10px; text-align: center;">
            Lichoběžník
          </div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
        ... a další
      </td>
    </tr>
  </table>

  <p>Střešní rovinu dalších tvarů lze zadat přímo kliknutím do modelovacího prostoru, následně lze v editační tabulce upravit rozměry.</p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <h2>Editace střešních rovin</h2>

  <p><b><u>Tabulku pro editaci roviny je možné otevřít kliknutím na zvolenou rovinu.</u></b></p>

  <p>Plochu lze pomocí tlačítek v horní části tabulky kopírovat, smazat, otáčet v půdorysné rovině nebo v rovině plochy, a také posouvat ve všech 3 směrech.</p>

{{ modal_video_button("img/VideoEditPlanes.mp4") }}

<details>
  <summary>
    <span>Další možnosti editace střešních rovin</span>
  </summary>
{{ include_md("__sub_Geometry_Dimension_Plane.md") }}
</details>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <table>
    <tr>
      <td>
        <div style="position: relative; width: 64px; height: 64px;">
          <img src="img/ClassRectLoopIcon64x64.png" alt="ClassRectLoopIcon64x64.png" width="64" height="64">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
            Otvor
          </div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
        Otvor
      </td>
    </tr>
  </table>

  <p>Tlačítkem <u>Otvor</u> je možné do vygenerované střešní roviny vsadit otvor, zakresluje se jako půdorysný průmět.</p>
  <p>Otvor může být obdélníkový či obecného tvaru a lze mu přiřadit typ otvoru pro komín.</p>
  <p>Otvor obdélníkového tvaru lze zadat volným klikáním do půdorysné roviny nebo pomocí jeho rozměrů ve tvaru "X;Y", tedy např. <b>2;4</b>. Otvor obecného tvaru lze zakreslit volným klikáním nebo pomocí souřadnicových systémů podobně jako obrys střešní konstrukce.</p>
  <p>Po kliknutí na příslušný otvor lze pomocí tlačítek v horní části otevřené tabulky měnit jeho typ, polohu či jej smazat.</p>

{{ modal_video_button("img/VideoEditOpenings.mp4") }}

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <table>
    <tr>
      <td>
        <div style="position: relative; width: 64px; height: 64px;">
          <img src="img/PreviewGeometry64x64.png" alt="PreviewGeometry64x64.png" width="64" height="64">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
            Propojit
          </div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
        Propojit
      </td>
    </tr>
  </table>

  <p>Tlačítko <u>Propojení</u> slouží k nastavení maximální vzdálenosti bodů, které lze považovat za totožné. Generátor následně body splňující nastavenou maximální vzdálenost sloučí.</p>

  <p><b><u>Úprava měřítka importovaného podkladu</u></b></p>
  <ul>
    <li><p>Po kliknutí na importovaný podklad je možné měřítko změnit přímo v příslušné buňce v otevřené tabulce.</p></li>
    <li><p>Pro úpravu měřítka je taktéž možné použít tlačítko <u>Měřítko</u>, které je umístěno v horní části otevřené tabulky. Pomocí tohoto tlačítka je možné nastavit měřítko podkladu pomocí zvolené hrany, u které známe její skutečné rozměry.</p></li>
  </ul>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <table>
    <tr>
      <td>
        <div style="position: relative; width: 64px; height: 64px;">
          <img src="img/DimensionLinearIcon64x64.png" alt="DimensionLinearIcon64x64.png" width="64" height="64">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
            Anotace
          </div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
        Anotace
      </td>
    </tr>
  </table>

  <p>Tlačítko <u>Anotace</u> umožňuje do modelu přidávat libovolné půdorysné kóty.</p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <table>
    <tr>
      <td>
        <div style="position: relative; width: 64px; height: 64px;">
          <img src="img/TapeMeasureIcon64x64.png" alt="TapeMeasureIcon64x64.png" width="64" height="64">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
            Měření
          </div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
        Měření
      </td>
    </tr>
  </table>

  <p>Tlačítkem <u>Měření</u> je možné zkontrolovat rozměry modelu.</p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <table>
    <tr>
      <td>
        <div style="position: relative; width: 64px; height: 64px;">
          <img src="img/MainInsert64x64.png" alt="MainInsert64x64.png" width="64" height="64">
          <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
            Přidat
          </div>
        </div>
      </td>
      <td style="vertical-align: middle; font-size: 20px; padding-left: 30px">
        Přidat
      </td>
    </tr>
  </table>

  <p>Tlačítkem <u>Přidat</u> je možné do modelového prostoru přidat další (vedlejší) střešní konstrukce.</p>
  <ul>
    <li><p>Střechu definovanou obrysem</p></li>
    <li><p>Další střechu modelovanou po plochách</p></li>
  </ul>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<!-- product: HiStruct Roofs -->
