/*
	Used By:https://github.com/ookamiwatari/super-aardvark.github.io
*/

var WeatherFinder = {

getWeather(timeMillis, zone) {
   return this.weatherChances[zone](this.calculateForecastTarget(timeMillis));
},

calculateForecastTarget: function(timeMillis) { 
    // Thanks to Rogueadyn's SaintCoinach library for this calculation.
    // lDate is the current local time.

    var unixSeconds = Math.trunc(timeMillis / 1000);
    // Get Eorzea hour for weather start

    // Do the magic 'cause for calculations 16:00 is 0, 00:00 is 8 and 08:00 is 16
    var increment = (bell + 8 - (bell % 8)) % 24;

    // Take Eorzea days since unix epoch
    var totalDays = Math.trunc(unixSeconds / 4200);
    totalDays = (totalDays << 32) >>> 0; // Convert to uint

    // 0x64 = 100
    var calcBase = totalDays * 100 + increment;

    // 0xB = 11
    var step1 = ((calcBase << 11) ^ calcBase) >>> 0;
    var step2 = ((step1 >>> 8) ^ step1) >>> 0;

    // 0x64 = 100
    return step2 % 100;
},

getEorzeaHour: function(timeMillis) {
    var unixSeconds = Math.trunc(timeMillis / 1000);
    // Get Eorzea hour
    return Math.trunc(bell);
},

getWeatherTimeFloor: function(date) {
    var unixSeconds = Math.trunc(date.getTime() / 1000);
    // Get Eorzea hour for weather start
    var bell = unixSeconds / 175 % 24;
    var startBell = bell - (bell % 8);
    var startUnixSeconds = unixSeconds - (175 * (bell - startBell));
    return new Date(Math.round(startUnixSeconds) * 1000);
},

getWeatherName: function(id) {
	return $('#' + id.replace(/\s+/g, '') + 'Name').text();
},

weatherChances: {
"Limsa Lominsa": function(chance) { if (chance < 20) { return {"id":"Clouds","name":"曇り"}; } else if (chance < 50) { return {"id":"Clear Skies","name":"快晴"}; } else if (chance < 80) { return {"id":"Fair Skies","name":"晴れ"}; } else if (chance < 90) { return {"id":"Fog","name":"霧"}; } else { return {"id":"Rain","name":"雨"}; } },
"Middle La Noscea": function(chance) { if (chance < 20) { return {"id":"Clouds","name":"曇り"}; } else if (chance < 50) { return {"id":"Clear Skies","name":"快晴"}; } else if (chance < 70) { return {"id":"Fair Skies","name":"晴れ"}; } else if (chance < 80) { return {"id":"Wind","name":"風"}; } else if (chance < 90) { return {"id":"Fog","name":"霧"}; } else { return {"id":"Rain","name":"雨"}; } },
"Lower La Noscea": function(chance) { if (chance < 20) { return {"id":"Clouds","name":"曇り"}; } else if (chance < 50) { return {"id":"Clear Skies","name":"快晴"}; } else if (chance < 70) { return {"id":"Fair Skies","name":"晴れ"}; } else if (chance < 80) { return {"id":"Wind","name":"風"}; } else if (chance < 90) { return {"id":"Fog","name":"霧"}; } else { return {"id":"Rain","name":"雨"}; } },
"Eastern La Noscea": function(chance) { if (chance < 5) { return {"id":"Fog","name":"霧"}; } else if (chance < 50) { return {"id":"Clear Skies","name":"快晴"}; } else if (chance < 80) { return {"id":"Fair Skies","name":"晴れ"}; } else if (chance < 90) { return {"id":"Clouds","name":"曇り"}; } else if (chance < 95) { return {"id":"Rain","name":"雨"}; } else { return {"id":"Showers","name":"暴雨"}; } },
"Western La Noscea": function(chance) { if (chance < 10) { return {"id":"Fog","name":"霧"}; } else if (chance < 40) { return {"id":"Clear Skies","name":"快晴"}; } else if (chance < 60) { return {"id":"Fair Skies","name":"晴れ"}; } else if (chance < 80) { return {"id":"Clouds","name":"曇り"}; } else if (chance < 90) { return {"id":"Wind","name":"風"}; } else { return {"id":"Gales","name":"暴風"}; } },
"Upper La Noscea": function(chance) { if (chance < 30) { return {"id":"Clear Skies","name":"快晴"}; } else if (chance < 50) { return {"id":"Fair Skies","name":"晴れ"}; } else if (chance < 70) { return {"id":"Clouds","name":"曇り"}; } else if (chance < 80) { return {"id":"Fog","name":"霧"}; } else if (chance < 90) { return {"id":"Thunder","name":"雷"}; } else { return {"id":"Thunderstorms","name":"雷雨"}; } },
"Outer La Noscea": function(chance) { if (chance < 30) { return {"id":"Clear Skies","name":"快晴"}; } else if (chance < 50) { return {"id":"Fair Skies","name":"晴れ"}; } else if (chance < 70) { return {"id":"Clouds","name":"曇り"}; } else if (chance < 85) { return {"id":"Fog","name":"霧"}; } else { return {"id":"Rain","name":"雨"}; } },
"Mist": function(chance) { if (chance < 20) { return {"id":"Clouds","name":"曇り"}; } else if (chance < 50) { return {"id":"Clear Skies","name":"快晴"}; } else if (chance < 70) { return {"id":"Fair Skies","name":"晴れ"}; } else if (chance < 80) { return {"id":"Fair Skies","name":"晴れ"}; } else if (chance < 90) { return {"id":"Fog","name":"霧"}; } else { return {"id":"Rain","name":"雨"}; } },
"Gridania": function(chance) { if (chance < 5) { return {"id":"Rain","name":"雨"}; } else if (chance < 20) { return {"id":"Rain","name":"雨"}; } else if (chance < 30) { return {"id":"Fog","name":"霧"}; } else if (chance < 40) { return {"id":"Clouds","name":"曇り"}; } else if (chance < 55) { return {"id":"Fair Skies","name":"晴れ"}; } else if (chance < 85) { return {"id":"Clear Skies","name":"快晴"}; } else { return {"id":"Fair Skies","name":"晴れ"}; } },
"Central Shroud": function(chance) { if (chance < 5) { return {"id":"Thunder","name":"雷"}; } else if (chance < 20) { return {"id":"Rain","name":"雨"}; } else if (chance < 30) { return {"id":"Fog","name":"霧"}; } else if (chance < 40) { return {"id":"Clouds","name":"曇り"}; } else if (chance < 55) { return {"id":"Fair Skies","name":"晴れ"}; } else if (chance < 85) { return {"id":"Clear Skies","name":"快晴"}; } else { return {"id":"Fair Skies","name":"晴れ"}; } },
"East Shroud": function(chance) { if (chance < 5) { return {"id":"Thunder","name":"雷"}; } else if (chance < 20) { return {"id":"Rain","name":"雨"}; } else if (chance < 30) { return {"id":"Fog","name":"霧"}; } else if (chance < 40) { return {"id":"Clouds","name":"曇り"}; } else if (chance < 55) { return {"id":"Fair Skies","name":"晴れ"}; } else if (chance < 85) { return {"id":"Clear Skies","name":"快晴"}; } else { return {"id":"Fair Skies","name":"晴れ"}; } },
"South Shroud": function(chance) { if (chance < 5) { return {"id":"Fog","name":"霧"}; } else if (chance < 10) { return {"id":"Thunderstorms","name":"雷雨"}; } else if (chance < 25) { return {"id":"Thunder","name":"雷"}; } else if (chance < 30) { return {"id":"Fog","name":"霧"}; } else if (chance < 40) { return {"id":"Clouds","name":"曇り"}; } else if (chance < 70) { return {"id":"Fair Skies","name":"晴れ"}; } else { return {"id":"Clear Skies","name":"快晴"}; } },
"North Shroud": function(chance) { if (chance < 5) { return {"id":"Fog","name":"霧"}; } else if (chance < 10) { return {"id":"Showers","name":"暴雨"}; } else if (chance < 25) { return {"id":"Rain","name":"雨"}; } else if (chance < 30) { return {"id":"Fog","name":"霧"}; } else if (chance < 40) { return {"id":"Clouds","name":"曇り"}; } else if (chance < 70) { return {"id":"Fair Skies","name":"晴れ"}; } else { return {"id":"Clear Skies","name":"快晴"}; } },
"The Lavender Beds": function(chance) { if (chance < 5) { return {"id":"Clouds","name":"曇り"}; } else if (chance < 20) { return {"id":"Rain","name":"雨"}; } else if (chance < 30) { return {"id":"Fog","name":"霧"}; } else if (chance < 40) { return {"id":"Clouds","name":"曇り"}; } else if (chance < 55) { return {"id":"Fair Skies","name":"晴れ"}; } else if (chance < 85) { return {"id":"Clear Skies","name":"快晴"}; } else { return {"id":"Fair Skies","name":"晴れ"}; } },
"Ul'dah": function(chance) { if (chance < 40) { return {"id":"Clear Skies","name":"快晴"}; } else if (chance < 60) { return {"id":"Fair Skies","name":"晴れ"}; } else if (chance < 85) { return {"id":"Clouds","name":"曇り"}; } else if (chance < 95) { return {"id":"Fog","name":"霧"}; } else { return {"id":"Rain","name":"雨"}; } },
"Western Thanalan": function(chance) { if (chance < 40) { return {"id":"Clear Skies","name":"快晴"}; } else if (chance < 60) { return {"id":"Fair Skies","name":"晴れ"}; } else if (chance < 85) { return {"id":"Clouds","name":"曇り"}; } else if (chance < 95) { return {"id":"Fog","name":"霧"}; } else { return {"id":"Rain","name":"雨"}; } },
"Central Thanalan": function(chance) { if (chance < 15) { return {"id":"Dust Storms","name":"砂塵"}; } else if (chance < 55) { return {"id":"Clear Skies","name":"快晴"}; } else if (chance < 75) { return {"id":"Fair Skies","name":"晴れ"}; } else if (chance < 85) { return {"id":"Clouds","name":"曇り"}; } else if (chance < 95) { return {"id":"Fog","name":"霧"}; } else { return {"id":"Rain","name":"雨"}; } },
"Eastern Thanalan": function(chance) { if (chance < 40) { return {"id":"Clear Skies","name":"快晴"}; } else if (chance < 60) { return {"id":"Fair Skies","name":"晴れ"}; } else if (chance < 70) { return {"id":{"id":"Clouds","name":"曇り"},"name":"曇り"}; } else if (chance < 80) { return {"id":"Fog","name":"霧"}; } else if (chance < 85) { return {"id":"Rain","name":"雨"}; } else { return {"id":"Showers","name":"暴雨"}; } },
"Southern Thanalan": function(chance) { if (chance < 20) { return {"id":"Heat Waves","name":"灼熱波"}; } else if (chance < 60) { return {"id":{"id":"Clear Skies","name":"快晴"},"name":"快晴"}; } else if (chance < 80) { return {"id":"Fair Skies","name":"晴れ"}; } else if (chance < 90) { return {"id":"Clouds","name":"曇り"}; } else { return {"id":"Fog","name":"霧"}; } },
"Northern Thanalan": function(chance) { if (chance < 5) { return {"id":"Clear Skies","name":"快晴"}; } else if (chance < 20) { return {"id":"Fair Skies","name":"晴れ"}; } else if (chance < 50) { return {"id":"Clouds","name":"曇り"}; } else { return {"id":"Fog","name":"霧"}; } },
"The Goblet": function(chance) { if (chance < 40) { return {"id":"Clear Skies","name":"快晴"}; } else if (chance < 60) { return {"id":"Fair Skies","name":"晴れ"}; } else if (chance < 85) { return {"id":"Clouds","name":"曇り"}; } else if (chance < 95) { return {"id":"Fog","name":"霧"}; } else { return {"id":"Rain","name":"雨"}; } },
"Mor Dhona": function(chance) {if (chance < 15) {return {"id":"Clouds","name":"曇り"};}  else if (chance < 30) {return {"id":"Fog","name":"霧"};}  else if (chance < 60) {return {"id":"Gloom","name":"妖霧"};}  else if (chance < 75) {return {"id":"Clear Skies","name":"快晴"};}  else {return {"id":"Fair Skies","name":"晴れ"};}},
"Ishgard": function(chance) {if (chance < 60) {return {"id":"Snow","name":"雪"};}  else if (chance < 70) {return {"id":"Fair Skies","name":"晴れ"};}  else if (chance < 75) {return {"id":"Clear Skies","name":"快晴"};}  else if (chance < 90) {return {"id":"Clouds","name":"曇り"};}  else {return {"id":"Fog","name":"霧"};}},
"Coerthas Central Highlands": function(chance) {if (chance < 20) {return {"id":"Blizzards","name":"吹雪"};}  else if (chance < 60) {return {"id":"Snow","name":"雪"};}  else if (chance < 70) {return {"id":"Fair Skies","name":"晴れ"};}  else if (chance < 75) {return {"id":"Clear Skies","name":"快晴"};}  else if (chance < 90) {return {"id":"Clouds","name":"曇り"};}  else {return {"id":"Fog","name":"霧"};}},
"Coerthas Western Highlands": function(chance) {if (chance < 20) {return {"id":"Blizzards","name":"吹雪"};}  else if (chance < 60) {return {"id":"Snow","name":"雪"};}  else if (chance < 70) {return {"id":"Fair Skies","name":"晴れ"};}  else if (chance < 75) {return {"id":"Clear Skies","name":"快晴"};}  else if (chance < 90) {return {"id":"Clouds","name":"曇り"};}  else {return {"id":"Fog","name":"霧"};}},
"The Sea of Clouds": function(chance) {if (chance < 30) {return {"id":"Clear Skies","name":"快晴"};}  else if (chance < 60) {return {"id":"Fair Skies","name":"晴れ"};}  else if (chance < 70) {return {"id":"Clouds","name":"曇り"};}  else if (chance < 80) {return {"id":"Fog","name":"霧"};}  else if (chance < 90) {return {"id":"Wind","name":"風"};}  else {return {"id":"Umbral Wind","name":"霊風"};}},
"Azys Lla": function(chance) {if (chance < 35) {return {"id":"Fair Skies","name":"晴れ"};}  else if (chance < 70) {return {"id":"Clouds","name":"曇り"};}  else {return {"id":"Thunder","name":"雷"};}},
"The Dravanian Forelands": function(chance) {if (chance < 10) {return {"id":"Clouds","name":"曇り"};}  else if (chance < 20) {return {"id":"Fog","name":"霧"};}  else if (chance < 30) {return {"id":"Thunder","name":"雷"};}  else if (chance < 40) {return {"id":"Dust Storms","name":"砂塵"};}  else if (chance < 70) {return {"id":"Clear Skies","name":"快晴"};}  else {return {"id":"Fair Skies","name":"晴れ"};}},
"The Dravanian Hinterlands": function(chance) {if (chance < 10) {return {"id":"Clouds","name":"曇り"};}  else if (chance < 20) {return {"id":"Fog","name":"霧"};}  else if (chance < 30) {return {"id":"Rain","name":"雨"};}  else if (chance < 40) {return {"id":"Showers","name":"暴雨"};}  else if (chance < 70) {return {"id":"Clear Skies","name":"快晴"};}  else {return {"id":"Fair Skies","name":"晴れ"};}},
"The Churning Mists": function(chance) {if (chance < 10) {return {"id":"Clouds","name":"曇り"};}  else if (chance < 20) {return {"id":"Gales","name":"暴風"};}  else if (chance < 40) {return {"id":"Umbral Static","name":"放電"};}  else if (chance < 70) {return {"id":"Clear Skies","name":"快晴"};}  else {return {"id":"Fair Skies","name":"晴れ"};}},
"Idyllshire": function(chance) {if (chance < 10) {return {"id":"Clouds","name":"曇り"};}  else if (chance < 20) {return {"id":"Fog","name":"霧"};}  else if (chance < 30) {return {"id":"Rain","name":"雨"};}  else if (chance < 40) {return {"id":"Showers","name":"暴雨"};}  else if (chance < 70) {return {"id":"Clear Skies","name":"快晴"};}  else {return {"id":"Fair Skies","name":"晴れ"};}},
// Data format changed from aggregate to marginal breakpoints
"Rhalgr's Reach": function(chance) { if ((chance -= 15) < 0) { return {"id":"Clear Skies","name":"快晴"}; } else if ((chance -= 45) < 0) { return {"id":"Fair Skies","name":"晴れ"}; } else if ((chance -= 20) < 0) { return {"id":"Clouds","name":"曇り"}; } else if ((chance -= 10) < 0) { return {"id":"Fog","name":"霧"}; } else { return {"id":"Thunder","name":"雷"}; } },
"The Fringes": function(chance) { if ((chance -= 15) < 0) { return {"id":"Clear Skies","name":"快晴"}; } else if ((chance -= 45) < 0) { return {"id":"Fair Skies","name":"晴れ"}; } else if ((chance -= 20) < 0) { return {"id":"Clouds","name":"曇り"}; } else if ((chance -= 10) < 0) { return {"id":"Fog","name":"霧"}; } else { return {"id":"Thunder","name":"雷"}; } },
"The Peaks": function(chance) { if ((chance -= 10) < 0) { return {"id":"Clear Skies","name":"快晴"}; } else if ((chance -= 50) < 0) { return {"id":"Fair Skies","name":"晴れ"}; } else if ((chance -= 15) < 0) { return {"id":"Clouds","name":"曇り"}; } else if ((chance -= 10) < 0) { return {"id":"Fog","name":"霧"}; } else if ((chance -= 10) < 0) { return {"id":"Wind","name":"風"}; } else { return {"id":"Dust Storms","name":"砂塵"}; } },
"The Lochs": function(chance) { if ((chance -= 20) < 0) { return {"id":"Clear Skies","name":"快晴"}; } else if ((chance -= 40) < 0) { return {"id":"Fair Skies","name":"晴れ"}; } else if ((chance -= 20) < 0) { return {"id":"Clouds","name":"曇り"}; } else if ((chance -= 10) < 0) { return {"id":"Fog","name":"霧"}; } else { return {"id":"Thunderstorms","name":"雷雨"}; } },
"Kugane": function(chance) { if ((chance -= 10) < 0) { return {"id":"Rain","name":"雨"}; } else if ((chance -= 10) < 0) { return {"id":"Fog","name":"霧"}; } else if ((chance -= 20) < 0) { return {"id":"Clouds","name":"曇り"}; } else if ((chance -= 40) < 0) { return {"id":"Fair Skies","name":"晴れ"}; } else { return {"id":"Clear Skies","name":"快晴"}; } },
"The Ruby Sea": function(chance) { if ((chance -= 10) < 0) { return {"id":"Thunder","name":"雷"}; } else if ((chance -= 10) < 0) { return {"id":"Wind","name":"風"}; } else if ((chance -= 15) < 0) { return {"id":"Clouds","name":"曇り"}; } else if ((chance -= 40) < 0) { return {"id":"Fair Skies","name":"晴れ"}; } else { return {"id":"Clear Skies","name":"快晴"}; } },
"Yanxia": function(chance) { if ((chance -= 5) < 0) { return {"id":"Showers","name":"暴雨"}; } else if ((chance -= 10) < 0) { return {"id":"Rain","name":"雨"}; } else if ((chance -= 10) < 0) { return {"id":"Fog","name":"霧"}; } else if ((chance -= 15) < 0) { return {"id":"Clouds","name":"曇り"}; } else if ((chance -= 40) < 0) { return {"id":"Fair Skies","name":"晴れ"}; } else { return {"id":"Clear Skies","name":"快晴"}; } },
"The Azim Steppe": function(chance) { if ((chance -= 5) < 0) { return {"id":"Gales","name":"暴風"}; } else if ((chance -= 5) < 0) { return {"id":"Wind","name":"風"}; } else if ((chance -= 7) < 0) { return {"id":"Rain","name":"雨"}; } else if ((chance -= 8) < 0) { return {"id":"Fog","name":"霧"}; } else if ((chance -= 10) < 0) { return {"id":"Clouds","name":"曇り"}; } else if ((chance -= 40) < 0) { return {"id":"Fair Skies","name":"晴れ"}; } else { return {"id":"Clear Skies","name":"快晴"}; } },
"Anemos": function(chance) {
  if (chance < 30) {return {"id":"Fair Skies","name":"晴れ"};}
  else if (chance < 60) {return {"id":"Gales","name":"暴風"};}
  else if (chance < 90) {return {"id":"Showers","name":"暴雨"};}
  else {return {"id":"Snow","name":"雪"};}
},
"Pagos": function(chance) {
  if (chance < 10) {return {"id":"Fair Skies","name":"晴れ"};}
  else if (chance < 28) {return {"id":"Fog","name":"霧"};}
  else if (chance < 46) {return {"id":"Heat Waves","name":"灼熱波"};}
  else if (chance < 64) {return {"id":"Snow","name":"雪"};}
  else if (chance < 82) {return {"id":"Thunder","name":"雷"};}
  else {return {"id":"Blizzards","name":"吹雪"};}
}
},

weatherLists: {
"Limsa Lominsa": [{"id":"Clouds","name":"曇り"},{"id":"Clear Skies","name":"快晴"},{"id":"Fair Skies","name":"晴れ"},{"id":"Fog","name":"霧"},{"id":"Rain","name":"雨"}],
"Middle La Noscea": [{"id":"Clouds","name":"曇り"},{"id":"Clear Skies","name":"快晴"},{"id":"Fair Skies","name":"晴れ"},{"id":"Wind","name":"風"},{"id":"Fog","name":"霧"},{"id":"Rain","name":"雨"}],
"Lower La Noscea": [{"id":"Clouds","name":"曇り"},{"id":"Clear Skies","name":"快晴"},{"id":"Fair Skies","name":"晴れ"},{"id":"Wind","name":"風"},{"id":"Fog","name":"霧"},{"id":"Rain","name":"雨"}],
"Eastern La Noscea": [{"id":"Fog","name":"霧"},{"id":"Clear Skies","name":"快晴"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clouds","name":"曇り"},{"id":"Rain","name":"雨"},{"id":"Showers","name":"暴雨"}],
"Western La Noscea": [{"id":"Fog","name":"霧"},{"id":"Clear Skies","name":"快晴"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clouds","name":"曇り"},{"id":"Wind","name":"風"},{"id":"Gales","name":"暴風"}],
"Upper La Noscea": [{"id":"Clear Skies","name":"快晴"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clouds","name":"曇り"},{"id":"Fog","name":"霧"},{"id":"Thunder","name":"雷"},{"id":"Thunderstorms","name":"雷雨"}],
"Outer La Noscea": [{"id":"Clear Skies","name":"快晴"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clouds","name":"曇り"},{"id":"Fog","name":"霧"},{"id":"Rain","name":"雨"} ],
"Mist": [{"id":"Clouds","name":"曇り"},{"id":"Clear Skies","name":"快晴"},{"id":"Fair Skies","name":"晴れ"},{"id":"Fog","name":"霧"},{"id":"Rain","name":"雨"} ],
"Gridania": [{"id":"Rain","name":"雨"},{"id":"Fog","name":"霧"},{"id":"Clouds","name":"曇り"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clear Skies","name":"快晴"}],
"Central Shroud": [{"id":"Thunder","name":"雷"},{"id":"Rain","name":"雨"},{"id":"Fog","name":"霧"},{"id":"Clouds","name":"曇り"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clear Skies","name":"快晴"}],
"East Shroud": [{"id":"Thunder","name":"雷"},{"id":"Rain","name":"雨"},{"id":"Fog","name":"霧"},{"id":"Clouds","name":"曇り"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clear Skies","name":"快晴"}],
"South Shroud": [{"id":"Fog","name":"霧"},{"id":"Thunderstorms","name":"雷雨"},{"id":"Thunder","name":"雷"},{"id":"Clouds","name":"曇り"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clear Skies","name":"快晴"}],
"North Shroud": [{"id":"Fog","name":"霧"},{"id":"Showers","name":"暴雨"},{"id":"Rain","name":"雨"},{"id":"Clouds","name":"曇り"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clear Skies","name":"快晴"}],
"The Lavender Beds": [{"id":"Clouds","name":"曇り"},{"id":"Rain","name":"雨"},{"id":"Fog","name":"霧"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clear Skies","name":"快晴"}],
"Ul'dah": [{"id":"Clear Skies","name":"快晴"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clouds","name":"曇り"},{"id":"Fog","name":"霧"},{"id":"Rain","name":"雨"}],
"Western Thanalan": [{"id":"Clear Skies","name":"快晴"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clouds","name":"曇り"},{"id":"Fog","name":"霧"},{"id":"Rain","name":"雨"}],
"Central Thanalan": [{"id":"Dust Storms","name":"砂塵"},{"id":"Clear Skies","name":"快晴"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clouds","name":"曇り"},{"id":"Fog","name":"霧"},{"id":"Rain","name":"雨"}],
"Eastern Thanalan": [{"id":"Clear Skies","name":"快晴"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clouds","name":"曇り"},{"id":"Fog","name":"霧"},{"id":"Rain","name":"雨"},{"id":"Showers","name":"暴雨"}],
"Southern Thanalan": [{"id":"Heat Waves","name":"灼熱波"},{"id":"Clear Skies","name":"快晴"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clouds","name":"曇り"},{"id":"Fog","name":"霧"}],
"Northern Thanalan": [{"id":"Clear Skies","name":"快晴"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clouds","name":"曇り"},{"id":"Fog","name":"霧"}],
"The Goblet": [{"id":"Clear Skies","name":"快晴"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clouds","name":"曇り"},{"id":"Fog","name":"霧"},{"id":"Rain","name":"雨"}],
"Mor Dhona": [{"id":"Clouds","name":"曇り"}, {"id":"Fog","name":"霧"}, {"id":"Gloom","name":"妖霧"}, {"id":"Clear Skies","name":"快晴"}, {"id":"Fair Skies","name":"晴れ"}],
"Ishgard": [{"id":"Snow","name":"雪"}, {"id":"Fair Skies","name":"晴れ"}, {"id":"Clear Skies","name":"快晴"}, {"id":"Clouds","name":"曇り"}, {"id":"Fog","name":"霧"}],
"Coerthas Central Highlands": [{"id":"Blizzards","name":"吹雪"}, {"id":"Snow","name":"雪"}, {"id":"Fair Skies","name":"晴れ"}, {"id":"Clear Skies","name":"快晴"}, {"id":"Clouds","name":"曇り"}, {"id":"Fog","name":"霧"}],
"Coerthas Western Highlands": [{"id":"Blizzards","name":"吹雪"}, {"id":"Snow","name":"雪"}, {"id":"Fair Skies","name":"晴れ"}, {"id":"Clear Skies","name":"快晴"}, {"id":"Clouds","name":"曇り"}, {"id":"Fog","name":"霧"}],
"The Sea of Clouds": [{"id":"Clear Skies","name":"快晴"}, {"id":"Fair Skies","name":"晴れ"}, {"id":"Clouds","name":"曇り"}, {"id":"Fog","name":"霧"}, {"id":"Wind","name":"風"}, {"id":"Umbral Wind","name":"霊風"}],
"Azys Lla": [{"id":"Fair Skies","name":"晴れ"}, {"id":"Clouds","name":"曇り"}, {"id":"Thunder","name":"雷"}],
"The Dravanian Forelands": [{"id":"Clouds","name":"曇り"}, {"id":"Fog","name":"霧"}, {"id":"Thunder","name":"雷"}, {"id":"Dust Storms","name":"砂塵"}, {"id":"Clear Skies","name":"快晴"}, {"id":"Fair Skies","name":"晴れ"}],
"The Dravanian Hinterlands": [{"id":"Clouds","name":"曇り"}, {"id":"Fog","name":"霧"}, {"id":"Rain","name":"雨"}, {"id":"Showers","name":"暴雨"}, {"id":"Clear Skies","name":"快晴"}, {"id":"Fair Skies","name":"晴れ"}],
"The Churning Mists": [{"id":"Clouds","name":"曇り"}, {"id":"Gales","name":"暴風"}, {"id":"Umbral Static","name":"放電"}, {"id":"Clear Skies","name":"快晴"}, {"id":"Fair Skies","name":"晴れ"}],
"Idyllshire": [{"id":"Clouds","name":"曇り"}, {"id":"Fog","name":"霧"}, {"id":"Rain","name":"雨"}, {"id":"Showers","name":"暴雨"}, {"id":"Clear Skies","name":"快晴"}, {"id":"Fair Skies","name":"晴れ"}],
"Rhalgr's Reach": [{"id":"Clear Skies","name":"快晴"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clouds","name":"曇り"},{"id":"Fog","name":"霧"},{"id":"Thunder","name":"雷"}],
"The Fringes": [{"id":"Clear Skies","name":"快晴"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clouds","name":"曇り"},{"id":"Fog","name":"霧"},{"id":"Thunder","name":"雷"}],
"The Peaks": [{"id":"Clear Skies","name":"快晴"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clouds","name":"曇り"},{"id":"Fog","name":"霧"},{"id":"Wind","name":"風"},{"id":"Dust Storms","name":"砂塵"}],
"The Lochs": [{"id":"Clear Skies","name":"快晴"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clouds","name":"曇り"},{"id":"Fog","name":"霧"},{"id":"Thunderstorms","name":"雷雨"}],
"Kugane": [{"id":"Rain","name":"雨"},{"id":"Fog","name":"霧"},{"id":"Clouds","name":"曇り"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clear Skies","name":"快晴"}],
"The Ruby Sea": [{"id":"Thunder","name":"雷"},{"id":"Wind","name":"風"},{"id":"Clouds","name":"曇り"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clear Skies","name":"快晴"}],
"Yanxia": [{"id":"Showers","name":"暴雨"},{"id":"Rain","name":"雨"},{"id":"Fog","name":"霧"},{"id":"Clouds","name":"曇り"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clear Skies","name":"快晴"}],
"The Azim Steppe": [{"id":"Gales","name":"暴風"},{"id":"Wind","name":"風"},{"id":"Rain","name":"雨"},{"id":"Fog","name":"霧"},{"id":"Clouds","name":"曇り"},{"id":"Fair Skies","name":"晴れ"},{"id":"Clear Skies","name":"快晴"}],
"Anemos": [{"id":"Fair Skies","name":"晴れ"},{"id":"Gales","name":"暴風"},{"id":"Showers","name":"暴雨"},{"id":"Snow","name":"雪"},{"id":"unknown","name":"不明"}],
"Pagos": [{"id":"Fair Skies","name":"晴れ"},{"id":"Fog","name":"霧"},{"id":"Heat Waves","name":"灼熱波"},{"id":"Snow","name":"雪"},{"id":"Thunder","name":"雷"},{"id":"Blizzards","name":"吹雪"}]
}
};
