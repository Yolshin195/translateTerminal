# translateTerminal

зависимости
-----------
0. node.js

Установка
---------
0. Склонировать репозиторий в любое место
1. src/conf.js
в поле key записать yandex api-key

Использование 
-------------
0. запуск через node.js 
```
  node index -ru|en text text ... 
```
1. в linux для удобства создайте два файла ru и en 
с содержимым: 
ru
```
#!/bin/bash
echo `node ~/pathFolder/index.js -ru $*`
```
en
```
#!/bin/bash
echo `node ~/pathFolder/index.js -en $*`
```
далее выполнить
```
chmod +x ru
xhmod +x en

ln ru /usr/local/bin
ln en /usr/local/bin
```
для доступа к программе из консоли 

теперь для перевода используйте команды
```
ru текст текст ...
en text text ...
```

