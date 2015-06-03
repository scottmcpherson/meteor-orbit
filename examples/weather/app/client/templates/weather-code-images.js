
//- 0 tornado
//- 1 tropical storm
//- 2 hurricane
//- 3 severe thunderstorms
//- 4 thunderstorms
//- 5 mixed rain and snow
//- 6 mixed rain and sleet
//- 7 mixed snow and sleet
//- 8 freezing drizzle
//- 9 drizzle
//- 10  freezing rain
//- 11  showers
//- 12  showers
//- 13  snow flurries
//- 14  light snow showers
//- 15  blowing snow
//- 16  snow
//- 17  hail
//- 18  sleet
//- 19  dust
//- 20  foggy
//- 21  haze
//- 22  smoky
//- 23  blustery
//- 24  windy
//- 25  cold
//- 26  cloudy
//- 27  mostly cloudy (night)
//- 28  mostly cloudy (day)
//- 29  partly cloudy (night)
//- 30  partly cloudy (day)
//- 31  clear (night)
//- 32  sunny
//- 33  fair (night)
//- 34  fair (day)
//- 35  mixed rain and hail
//- 36  hot
//- 37  isolated thunderstorms
//- 38  scattered thunderstorms
//- 39  scattered thunderstorms
//- 40  scattered showers
//- 41  heavy snow
//- 42  scattered snow showers
//- 43  heavy snow
//- 44  partly cloudy
//- 45  thundershowers
//- 46  snow showers
//- 47  isolated thundershowers

CLOUDY = ["27", "28"];
PARTLY_CLOUDY = ["19", "20", "21", "22", "23", "24", "25", "26", "29", "30", "44"];
SUNSHINE = ["31", "32", "33", "34", "36"];
RAIN = ["5", "6", "8", "9", "10", "11", "12", "35", "40"];
THUNDER_STORMS = ["0", "1", "2", "3", "4", "37", "38", "39", "45", "47"];
SNOW = ["7", "13", "14", "15", "16", "17", "18", "41", "42", "43", "46"];



CODE_IMAGES = {
  "0": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "1": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "2": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "3": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "4": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "5": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "6": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "7": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "8": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "9": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "10": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "11": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "12": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "13": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "14": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "15": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "16": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "17": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "18": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "19": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "20": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "21": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "22": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "23": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "24": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "25": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "26": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "27": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "28": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "29": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "30": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "31": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "32": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "33": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "34": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "35": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "36": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "37": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "38": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "39": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "40": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "41": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "42": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "43": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "44": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "45": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "46": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
  "47": "https://farm9.static.flickr.com/8062/8268024894_42497c6ceb_b.jpg",
}