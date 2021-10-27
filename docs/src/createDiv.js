
function createChartDiv(data) {
  let chartWrapper = document.getElementById("chart-list-wrapper");

  console.log(data);
  // Create all elements
  let chart = document.createElement('div');
  let title = document.createElement('div');
  let artist = document.createElement('div');
  let timestamp = document.createElement('div');
  let date = document.createElement('div');
  let time = document.createElement('div');
  let charter = document.createElement('div');
  let titleArtistCharter = document.createElement('div');

  // Edit all elements
    // Assign Classes
    chart.classList.add("chart");
    title.classList.add("title");
    artist.classList.add("artist");
    titleArtistCharter.classList.add("titleArtistCharter");
    timestamp.classList.add("timestamp");
    charter.classList.add("charter");

    // Insert content
    console.log(getDate(data.time_uploaded))
    title.innerHTML = data.data.title;
    artist.innerHTML = data.data.artist;
    date.innerHTML = getDate(data.time_uploaded).date;
    time.innerHTML = getDate(data.time_uploaded).time;
    charter.innerHTML = "charted by <i>" + data.data.charter + "</i>";

  // Assemble all elements
  chart.appendChild(titleArtistCharter)
  titleArtistCharter.appendChild(title);
  titleArtistCharter.appendChild(artist);
  titleArtistCharter.appendChild(charter);
  chart.appendChild(timestamp);
  timestamp.appendChild(date);
  timestamp.appendChild(time);

  chartWrapper.appendChild(chart);
}
