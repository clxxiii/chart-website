const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const API_URL = "https://clxxiii-charts.herokuapp.com/charts";

async function onLoad() {
  let data = await getChartData()
  console.log(data)
  for (i = 0; i < data.length; i++) {
    createChartDiv(data[i])
  }
}


async function getChartData() {
  let params = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  let response = await fetch(API_URL, params);
  response = await response.json();
  return response;
}

function getDate(timestamp) {
let unix_timestamp = timestamp
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(unix_timestamp * 1000);
var dateString = date.toLocaleDateString("en-US");
var timeString = date.toLocaleTimeString("en-GB");

// Will display time in 10:30:23 format

return {date: dateString, time: timeString}
}
