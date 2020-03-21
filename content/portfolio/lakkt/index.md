---
title: LaKKT
description: LaKKT is an analysis tool for the strategy game Lords & Knights
date: "2016-05-02T19:47:09+02:00"
jobDate: 2016
work: [PHP, MSSQL]
thumbnail: lakkt/lakkt.png
projectUrl: https://lakkt.de
---

[LaKKT](https://lakkt.de/en/) is an analysis tool for the strategy game [Lords & Knights](https://lordsandknights.com/). It keeps track of all the castles owned by all players
on the map and can help tracking captures and losses, can generate maps, calculate distances and attack times as well as helping the players organize their defenses.

I build this sonftware with a few other players of the game. It is build using [Bootstrap](https://getbootstrap.com/) as as `JS/CSS` library with a backend written in `PHP`. It uses a `MSSQL` database.

It stores about 2GB of data from about 40 different maps. The data was collected over a period of three years. This data includes all the castle wins/losses, their construction status and every renaming of every castle or player happened in these three years. Based on this data, the users can generate reports about the activity of other alliances spotting inactive or infrequently playing players.
