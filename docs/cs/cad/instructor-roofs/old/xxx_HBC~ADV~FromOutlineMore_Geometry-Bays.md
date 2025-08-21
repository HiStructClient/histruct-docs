<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Geometrie &gt; Pole</title>
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

<h1>Geometrie &gt; Pole</h1>

<p>Umožňuje nastavit počet rámů primární nosné konstrukce a rozteče polí mezi nimi při zachování nastavených půdorysných rozměrů.</p>

<p><b><u>Ovládací tlačítka</u> upravují vlastnosti konstrukce pouze na vybrané stěnové rovině.</b></p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Editace jednotlivých polí</h2>

<p><b>Délky a počty polí je možné upravovat po kliknutí na příslušný segment.</b></p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td>
      <div style="position: relative; width: 64px; height: 64px;">
        <img src="img/EditPropertiesIcon64x64.png" alt="EditPropertiesIcon64x64.png" width="64" height="64">
        <div style="position: absolute; bottom: 0; width: 100%; background: none; color: white; font-size: 12px; text-align: center;">
          Vlastnosti
        </div>
      </div>
    </td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">
      Vlastnosti
    </td>
  </tr>
</table>

<p>Tlačítkem <u>Vlastnosti</u> je možné nastavit pravidla pro generování polí mezi rámy primární nosné konstrukce.</p>
<p>Tytéž vlastnosti lze upravit pomocí <u>Ovládacího tlačítka</u> umístěného ve středu modelu.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td><img src="img/BayEditButton64.png" alt="BayEditButton64.png" width="64"></td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Rozteče</td>
  </tr> 
</table>

<p>Tlačítko <u>Rozteče</u> umožňuje upravit počet a délku polí mezi rámy hlavní nosné konstrukce.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<table>
  <tr>
    <td><img src="img/ControlButton.png" alt="ControlButton.png" width="64"></td>
    <td style="vertical-align: middle; font-size: 20px; padding-left: 30px;">Ovládací tlačítko</td>
  </tr> 
</table>

<p><u>Ovládací tlačítko</u> umožňuje přidání a nastavení portálových rámů v rámci jednotlivých polí.</p>
<p>Portálovým rámům je možné nastavit umístění pomocí vzdálenosti od konce pole a pomocí délky rámu. Rámu lze také nastavit vlastní výšku a případně vypnout jednotlivé sloupy.</p>
<p>Rám je možné ve stejné tabulce také smazat, toto lze provést pomocí tlačítka vpravo nahoře.</p>

<hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

<h2>Nepomohla Vám nápověda?</h2>
<p>Pro více informací o funkcích HiStruct Building Configurator můžete navštívit náš blog nebo zaslat dotaz na naší podporu.</p>

<table>
  <tr>
    <td>
      <a href="https://docs.histruct.com/cs/" target="_blank" rel="noopener noreferrer"> 
        <button class="btn">Navštívit blog</button>
      </a>
    </td>
    <td>
      <a href="mailto:support@histruct.com?subject=Dotaz na Support HiStruct">
         <button class="btn">Zaslat dotaz</button>
      </a>
    </td>
  </tr>
</table>

</body>
</html>
