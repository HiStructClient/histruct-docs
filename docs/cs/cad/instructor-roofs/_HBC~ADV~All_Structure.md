<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Konstrukce</title>
</head>
<style>
    body{ /* Nastavení okrajů a řádkování pro celý dokument */
      line-height: 1.8;
      padding-top: 30px;
      padding-right: 30px;
      padding-bottom: 30px;
      padding-left: 30px;
    }
    h1{ /* Styl hlavního nadpisu */
      font-size: 28px;
      border-bottom: none;
      margin-top: 10px;
      margin-bottom: 0px;
    }
    h2{ /* Styl podnadpisů */
      font-size: 22px;
      border-bottom: none;
      margin-top: 10px;
      margin-bottom: 0px;
    }
    h3{ /* Styl podnadpisů */
      font-size: 18px;
      border-bottom: none;
      margin-top: 10px;
      margin-bottom: 0px;
    }
    p{ /* Styl odstavců */
      border-bottom: none;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    hr.main{ /* Hlavní oddělovací čára */
      border: none;
      border-top: 2px solid #555; /* čárkovaná čára */
      height: 1px; /* zruší výšku, protože border se použije místo background */
      margin-top: 20px;
      margin-bottom: 20px;
    }
    hr{ /* Běžná oddělovací čára */
      all: unset; /* zruší úplně veškeré defaultní styly */
      display: block;
      width: 100%;
      border-top: 2px dashed #555;
      margin: 20px 0;
    }
    .btn { /* Styl tlačítek */
      margin-top: 0px;
      padding: 12px 20px;
      background-color: rgb(27,122,187);
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
    }
    .btn:hover { /* Styl tlačítek při najetí myší */
      background-color: rgb(20,90,140);
    }
</style>

<body>

<h1>Konstrukce</h1>

<p>Menu <u><i>Konstrukce</i></u> umožňuje nastavit parametry primární nosné konstrukce, upravit materiály a průřezy prvků a přidávat stěnová a střešní ztužidla.</p>
<p>Nastavení a úpravy pro celou primární konstrukci je možné provádět kliknutím na <b><u>Ovládací tlačítko</u></b> ve středu modelu.</p>
<p><b><u>Kliknutím na vybraný prvek nosné konstrukce</u></b> se provádí editace vlastností pro celou skupinu, do které daný prvek náleží.</p>
<p>Pokud chcete upravit pouze jeden vybraný prvek, je třeba kliknout na jeho <b><u>Editační tlačítko</u></b> a vyřadit jej z jeho skupiny.</p>
<p>Kliknutím na tlačítko <b><u>Ztužidlo v rovině</u></b> je možné do příslušné části stěny nebo střechy přidat ztužidlo, kterému lze následně nastavit materiál, průřez, geometrii a rozmístění v rámci dané roviny. Úpravy jednotlivých sekcí ztužidel je možné provádět přímo kliknutím na daný prut. Do dané roviny je možné přidávat více typů ztužidel.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<p>
<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/MainSettings64x64.png" alt="MainSettings64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
          Nastavení
        </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Nastavení
    </td>
  </tr>
</table>
</p>

<p>...Funkcionalita tlačítka <u>Nastavení</u> se připravuje pro budoucí verzi programu...</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<p>
<table>
  <tr>
    <td><img src="img/ControlButton.png" alt="ControlButton.png" width="64"></td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Ovládácí tlačítko</td>
  </tr>
</table>
</p>

<p><b><u>Ovládací tlačítko uprostřed modelu umožňuje nastavit:</u></b></p>
<ul>
  <li><p>Typ primární konstrukce.</p></li>
  <li><p>Typ nosníku použitý pro přesah střechy.</p></li>
  <li><p>Minimální délku pro přesah střechy.</p></li>
  <li><p>Výškové umístění paty sloupu.</p></li>
  <li><p>Generování tlačených výztuh, pokud je uživatel chce v konstrukci použít.</p></li>
</ul>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<p>
<table>
  <tr>
    <td><img src="img/EditButton.png" alt="EditButton.png" width="64"></td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Editační tlačítko</td>
  </tr>
</table>
</p>

<p><b><u>Pro jednotlivé prvky primární konstrukce umožňuje:</u></b></p>
<ul>
  <li><p>Nastavení, zda má být prvek součástí defaultní skupiny prvků.</p></li>
</ul>
<p>Pokud je prvek z dané skupiny vyřazen, je možné jej dále upravovat nezávisle na původní skupině. Podle typu prvku je možné dále upravit jeho materiál, průřez, náběhy, umístění paty či aktivovat táhla.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<p>
<table>
  <tr>
    <td><img src="img/StiffenerButton.png" alt="StiffenerButton.png" width="64"></td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Ztužidlo v rovině</td>
  </tr>
</table>
</p>

<p><b><u>Pro jednotlivé střešní či stěnové roviny umožňuje:</u></b></p>
<ul>
  <li><p>Do příslušné části stěny nebo střechy přidat ztužidlo, kterému lze následně nastavit materiál, průřez, geometrii a rozmístění v rámci dané roviny.</p></li>
  <li><p>Úpravy jednotlivých sekcí ztužidel je možné provádět přímo kliknutím na daný prut.</p></li>
  <li><p>Do dané roviny je možné přidávat více typů ztužidel.</p></li>
</ul>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Nepomohla Vám nápověda?</h2>
<p>Pro více informací o funkcích HiStruct Building Configurator můžete navštívit náš blog nebo zaslat dotaz na naší podporu.</p>

<p>
<table>
  <tr>
    <td>
      <a href="https://docs.histruct.com/cs/" target="_blank" rel="noopener noreferrer">
        <button class="btn">Navštívit blog</button>
      </a>
    </td>
    <td style="padding-left: 30px;">
      <a href="mailto:support@histruct.com?subject=Dotaz na Support HiStruct">
        <button class="btn">Zaslat dotaz</button>
      </a>
    </td>
  </tr>
</table>
</p>

</body>
</html>
