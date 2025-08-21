<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Nastavení</title>
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

<h1>Nastavení</h1>

  <p>Přes tlačítko <u><i>Nastavení</i></u> je možné přizpůsobit funkce modelování a parametry modelovacího prostoru.</p>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <h2>Zadání</h2>
  <ul>
    <li><p><u><b>Základní</b></u> nastavení modelovacího prostoru nabídne redukované množství funkcí pro rychlejší modelování.</p></li>
    <li><p>Pro aktivaci všech dostupných funkcí v modelovacím prostoru je třeba přepnout verzi zadání na <u><b>Rozšířené</b></u>.</p></li>
  </ul>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <h2>Nastavení scény</h2>
  <ul>
    <li><p><u>Povrch terénu</u> umožňuje výběr vzhledu okolního terénu v modelovacím prostoru.</p></li>
    <li><p>Tlačítkem <u>Automatické kóty</u> je možné v modelovacím prostoru zapnout vykreslování půdorysných kót objektu. Zobrazení lze poté ovládat manuálně pomocí tlačítek v pravé části obrazovky.</p></li>
    <li><p><u>Měřítko přidávacích tlačítek</u> upravuje velikost tlačítek v modelu.</p></li>
    <li><p><u>Velikost značky souřadného systému</u>upravuje velikost značky souřadného systému v modelu.</p></li>
  </ul>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <h2>Výkon</h2>
  <ul>
  <li><p>Umožňuje ovládat uchopovací režimy.</p></li>
  </ul>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <h2>Tahání modelů</h2>
  <ul>
  <li><p>Umožňuje nastavit posuvy modelů pouze po zapnutých osách a s daným krokem.</p></li>
  </ul>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <h2>Údaje o projektu</h2>
  <ul>
  <li><p>Údaje o projektu se načítají z polohy projektu, pokud byla určena.</p></li>
  </ul>

  <hr class="main"> <!-- Vodorovná čára jako oddělovač sekce -->

  <h2>Nepomohla Vám nápověda?</h2>
  <p>Pro více informací o funkcích HiStruct Roofs můžete navštívit náš blog nebo zaslat dotaz na naši podporu.</p>

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
