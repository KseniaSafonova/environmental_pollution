let citiesJson = `[
  { "id": 0, "city": "Moscow", "latitude": 55.44, "longitude": 37.36 },
  { "id": 1, "city": "Saint_Petersburg", "latitude": 59.57, "longitude": 30.19},
  { "id": 2, "city": "Novosibirsk", "latitude": 55.03, "longitude": 82.56},
  { "id": 3, "city": "Yekaterinburg", "latitude": 56.50, "longitude": 60.36},
  { "id": 4, "city": "Kazan", "latitude": 55.47, "longitude": 49.06},
  { "id": 5, "city": "Nizhny_Novgorod", "latitude": 56.19, "longitude": 44.00},
  { "id": 6, "city": "Chelyabinsk", "latitude": 55.09, "longitude": 61.22},
  { "id": 7, "city": "Samara", "latitude": 53.12, "longitude": 50.08},
  { "id": 8, "city": "Rostov-on-Don", "latitude": 47.14, "longitude": 39.42},
  { "id": 9, "city": "Ufa", "latitude": 54.43, "longitude": 55.56}
]`

let cities = JSON.parse(citiesJson);
let latitude;
let longitude;

function chooseCity() {
  switch (document.getElementById("choice").value) {
    case "Moscow":
      latitude = cities[0].latitude;
      longitude = cities[0].longitude;
      break;
    case "Saint_Petersburg":
      latitude = cities[1].latitude;
      longitude = cities[1].longitude;
      break;
    case "Novosibirsk":
      latitude = cities[2].latitude;
      longitude = cities[2].longitude;
      break;
    case "Yekaterinburg":
      latitude = cities[3].latitude;
      longitude = cities[3].longitude;
      break;
    case "Kazan":
      latitude = cities[4].latitude;
      longitude = cities[4].longitude;
      break;
    case "Nizhny_Novgorod":
      latitude = cities[5].latitude;
      longitude = cities[5].longitude;
      break;
    case "Chelyabinsk":
      latitude = cities[6].latitude;
      longitude = cities[6].longitude;
      break;
    case "Samara":
      latitude = cities[7].latitude;
      longitude = cities[7].longitude;
      break;
    case "Rostov-on-Don":
      latitude = cities[8].latitude;
      longitude = cities[8].longitude;
      break;
    case "Ufa":
      latitude = cities[9].latitude;
      longitude = cities[9].longitude;
      break;
  }
  showInformation();
}

function showInformation() {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=627cf8a1454b6eb1a2023bc5580b2107'
  )
    .then((response) => response.json())
    .then((weather) => {
      document.getElementById("temperature").innerText =
        "Температура: " + Math.round(weather.main.temp - 273) + " C";
      document.getElementById("pressure").innerText =
        "Давление: " +
        Math.round(weather.main.pressure / 1.333) +
        " мм.рт.ст";
    });
  fetch(
    'https://api.openweathermap.org/data/2.5/air_pollution?lat=' + latitude + '&lon=' + longitude + '&appid=627cf8a1454b6eb1a2023bc5580b2107'
  )
    .then((response) => response.json())
    .then((pollution) => {
      document.getElementById("co").innerHTML =
        "CO: " + pollution.list[0].components.co + " μg/m3";
      document.getElementById("no").innerHTML =
        "NO: " + pollution.list[0].components.no + " μg/m3";
      document.getElementById("no2").innerText =
        "NO2: " + pollution.list[0].components.no2 + " μg/m3";
      document.getElementById("so2").innerText =
        "SO2: " + pollution.list[0].components.so2 + " μg/m3";
    });

}

