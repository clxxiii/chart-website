const chart = {
         "chart_id": 3,
         "time_uploaded": getDate(),
         "data":{
            "title":"Flamewall",
            "artist":"Camellia",
            "album":"Tera I/O",
            "year":"2020",
            "charter":"clxxiii",
            "difficulty":{
               "band":-1,
               "guitar":6,
               "rhythm":-1,
               "drums":-1,
               "keys":-1,
               "guitargh1":-1,
               "bassgh1":-1
            }
         }
      }

function getDate() {
  let date = new Date();
  return date.getTime();
}

async function requestContent(url) {
  let params = {
    method: 'POST',
    headers: { 'Content-Type': 'application-json' },
    body: JSON.stringify(chart),
  }
  let requestData = await fetch("https://clxxiii-charts.herokuapp.com/charts", params);
}
