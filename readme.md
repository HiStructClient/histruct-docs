# **NÁVOD**
<small>Autor: Šimon Glanc</small>

Abych příště nemusel zase žádat Honzu o pomoc s docs.histruct, je tady návod jak pracovat s Markdownem. Kdyby přsto byly nějaké nejasnosti ozvěte se mně a nebo Honzovi Kuboškovi.

## Nápověda na dcos.histruct.com

### Vytvoření Markdown souboru
Ve složce ***C:\GitHub\histruct-docs\docs*** jsou jednotlivé jazykové varianty naší napovědy rozdělené podle jazyků. Jako defaultní jazyk je zvolená angličtina, proto je vhodné vždy začínat s tímto jazykem a následně vytvořit jazykové mutace (příp. kuboja umí automaticky přeložit). 

#### Úvodní Stránka
Soubor ***C:\GitHub\histruct-docs\docs\en\index.md*** představuje úvodní stránku https://docs.histruct.com/. Slouží tedy jako úvod. Následné složky slouží k členění jednotlivých stránek. 

#### Podstránky
Složka ***C:\GitHub\histruct-docs\docs\en\cad\getting-started-roofs*** obsahuje popsané střechy odpovídající následně https://docs.histruct.com/cad/getting-started-roofs/, v této složce jsou jednotlivé Markdown soubory, které se následně zobrazují na webové stránce. 

#### Struktura
Jednotlivá struktura a odpovídající webová stránka je dána umístěním souboru, tedy:
- *docs.histruct.com + /cad/getting-started-roofs/ + názevSouboru + .html*

#### Strom a navigace jednotlivých stránek
Navigaci jednotlivých stránek udává soubor ***C:\GitHub\histruct-docs\mkdocs.yml***, kde je mimo jiné nastaven vzhled stránek. Část *nav:* udává navigaci na tomto webu

### Převod Markdown na HTML a umístění na web

#### Pro převod dodržuj následující postup:
1. Vymaž složku ***C:\GitHub\histruct-docs\\.venv***
1. Vymaž složku ***C:\GitHub\histruct-docs\site***
1. V příkazové řádce spusť ***C:\GitHub\histruct-docs\buildDocs.cmd***
1. V příkazové řádce spusť ***C:\GitHub\histruct-docs\buildInstructor.cmd***
1. Otevři GitHub repozitář ***HiStructClient.github.io***
1. Smaž všechny soubory kromě ***C:\GitHub\HiStructClient.github.io\robots.txt*** a ***C:\GitHub\HiStructClient.github.io\CNAME***
1. Nahraj celý obsah složky ***C:\GitHub\histruct-docs\site*** do ***HiStructClient.github.io***
1. Pushni to na GitHub a je to 

## Nápověda v modelovacím prostředí
Ve složce ***C:\GitHub\histruct-docs\docs\en\cad\instructor-roofs*** je náš instruktor, stejně jako nápověda, rozdělený podle jazyků. 

### Jednotlivé stránky
Jednotlivé stránky jsou bez jakéhokoliv třídění v této složce a zpravidla odpovídají jedné konkrétní navigaci následně v modelovacím prostředí.

### Převod Markdown na HTML
Pro převod dodržuj následující postup:
1. Vymaž složku C:\GitHub\histruct-docs\.venv
1. Vymaž složku C:\GitHub\histruct-docs\site
1. V příkazové řádce spusť C:\GitHub\histruct-docs\buildDocs.cmd
1. V příkazové řádce spusť C:\GitHub\histruct-docs\buildInstructor.cmd

### Spuštění lokální nápovědy 
Aby nebylo nutné každou novou verzi nahrávat na Azure odkud si construct-2 následně bere instruktora, tak je možné spusti localhost na kterém tyto stránky běží. Pro spuštění lokální nápovědy postupuj takto: 
1. Spusť ***C:\GitHub\histruct-docs\runInstructor.cmd***
1. Vytvoří se lokální nápověda na např ***http://localhost:8067**
1. Lze procházet jednotlivé stránky nápovědy pomocí URL: ***http://localhost:8067/cad/instructor-roofs/flashingBasic.html*** - jen pozor je to bílý text na průhledném pozadí, tak zpravidla nejde moc vidět
1. Zapni si lokální nápovědu v modelovacím prostředí, Zmáčkni ***e*** na klávesnici a přepni ***local help*** na ***true**

### Nahrání finální verze na azure
Pokud jsi s nápovědou spokojený nahraj ji na azure například pro angličtinu do složky ***https://cdn.histruct.com/docs/en/***, pro češtinu ***https://cdn.histruct.com/docs/cs/***.
