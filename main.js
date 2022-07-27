const chart = require('chart.js');

let citiesJson = `[
    { "id": 0, "city": "Moscow", "latitude": 55.44, "longitude": 37.36, "collectedOrganic2022" : [2, 2.7, 3.1, 3.5, 3.6, 4.3, 4.4] },
    { "id": 1, "city": "Saint_Petersburg", "latitude": 59.57, "longitude": 30.19, "collectedOrganic2022" : [1.5, 2, 3.1, 3.4, 4, 4.2, 4.2]},
    { "id": 2, "city": "Novosibirsk", "latitude": 55.03, "longitude": 82.56, "collectedOrganic2022" : [1.3, 1.7, 2.1, 2.5, 3, 3.3, 3.8]},
    { "id": 3, "city": "Yekaterinburg", "latitude": 56.50, "longitude": 60.36, "collectedOrganic2022" : [1.3, 2, 2.1, 2.5, 3, 3.1, 3.4]},
    { "id": 4, "city": "Kazan", "latitude": 55.47, "longitude": 49.06, "collectedOrganic2022" : [1.2, 1.7, 2, 2.5, 3.1, 3.3, 3.5]},
    { "id": 5, "city": "Nizhny_Novgorod", "latitude": 56.19, "longitude": 44.00, "collectedOrganic2022" : [1, 1.5, 2, 2.1, 2.5, 3, 3.2]},
    { "id": 6, "city": "Chelyabinsk", "latitude": 55.09, "longitude": 61.22, "collectedOrganic2022" : [1.3, 1.7, 2.1, 2.5, 3, 3.3, 3.8]},
    { "id": 7, "city": "Samara", "latitude": 53.12, "longitude": 50.08, "collectedOrganic2022" : [1.2, 1.5, 2.1, 2.4, 3.3, 3.5, 3.7]},
    { "id": 8, "city": "Rostov-on-Don", "latitude": 47.14, "longitude": 39.42, "collectedOrganic2022" : [1.5, 1.7, 2.5, 2.7, 3.2, 3.5, 3.9]},
    { "id": 9, "city": "Ufa", "latitude": 54.43, "longitude": 55.56, "collectedOrganic2022" : [1, 1.7, 2.2, 2.5, 3, 3.1, 3.3]}
  ]`

let cities = JSON.parse(citiesJson);
let latitude;
let longitude;
let arrayData;
let arraySum;
let myStatistics = null;


global.chooseCity = function () {

    switch (document.getElementById("choice").value) {
        case "Moscow":
            latitude = cities[0].latitude;
            longitude = cities[0].longitude;
            arrayData = cities[0].collectedOrganic2022;
            arraySum = arrayData.reduce(function (sum, elem) { return sum + elem; }, 0);
            document.getElementById('map').innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d241660.81640145252!2d37.651910500619024!3d55.75514154136488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1657881349707!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
            break;
        case "Saint_Petersburg":
            latitude = cities[1].latitude;
            longitude = cities[1].longitude;
            arrayData = cities[1].collectedOrganic2022;
            arraySum = arrayData.reduce(function (sum, elem) { return sum + elem; }, 0);
            document.getElementById('map').innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d214932.51131001388!2d30.308034805991582!3d59.96749131982463!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1657881305263!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
            break;
        case "Novosibirsk":
            latitude = cities[2].latitude;
            longitude = cities[2].longitude;
            arrayData = cities[2].collectedOrganic2022;
            arraySum = arrayData.reduce(function (sum, elem) { return sum + elem; }, 0);
            document.getElementById('map').innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d146344.90049979926!2d82.92088584840468!3d55.032017552688195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1657881703877!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
            break;
        case "Yekaterinburg":
            latitude = cities[3].latitude;
            longitude = cities[3].longitude;
            arrayData = cities[3].collectedOrganic2022;
            arraySum = arrayData.reduce(function (sum, elem) { return sum + elem; }, 0);
            document.getElementById('map').innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d139706.5891902878!2d60.583397846691526!3d56.83023968625002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1657881773789!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
            break;
        case "Kazan":
            latitude = cities[4].latitude;
            longitude = cities[4].longitude;
            arrayData = cities[4].collectedOrganic2022;
            arraySum = arrayData.reduce(function (sum, elem) { return sum + elem; }, 0);
            document.getElementById('map').innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d120645.94677566538!2d49.107183230242256!3d55.81466504034507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1657881829556!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
            break;
        case "Nizhny_Novgorod":
            latitude = cities[5].latitude;
            longitude = cities[5].longitude;
            arrayData = cities[5].collectedOrganic2022;
            arraySum = arrayData.reduce(function (sum, elem) { return sum + elem; }, 0);
            document.getElementById('map').innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d115752.2307930215!2d43.93746803053951!3d56.29776065693892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1657881882524!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
            break;
        case "Chelyabinsk":
            latitude = cities[6].latitude;
            longitude = cities[6].longitude;
            arrayData = cities[6].collectedOrganic2022;
            arraySum = arrayData.reduce(function (sum, elem) { return sum + elem; }, 0);
            document.getElementById('map').innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d206339.9127220473!2d61.48256517920337!3d55.15255813847775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1657881945276!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
            break;
        case "Samara":
            latitude = cities[7].latitude;
            longitude = cities[7].longitude;
            arrayData = cities[7].collectedOrganic2022;
            arraySum = arrayData.reduce(function (sum, elem) { return sum + elem; }, 0);
            document.getElementById('map').innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76425.47581275052!2d50.25952086950693!3d53.230468817513504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1657882000875!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
            break;
        case "Rostov-on-Don":
            latitude = cities[8].latitude;
            longitude = cities[8].longitude;
            arrayData = cities[8].collectedOrganic2022;
            arraySum = arrayData.reduce(function (sum, elem) { return sum + elem; }, 0);
            document.getElementById('map').innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d86649.90770053309!2d39.710965392842056!3d47.25942710593538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1657882069576!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
            break;
        case "Ufa":
            latitude = cities[9].latitude;
            longitude = cities[9].longitude;
            arrayData = cities[9].collectedOrganic2022;
            arraySum = arrayData.reduce(function (sum, elem) { return sum + elem; }, 0);
            document.getElementById('map').innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d131171.92563805336!2d56.03097027150798!3d54.78779242697891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1657882135594!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
            break;
    }

    showInformation();
    document.getElementById('point').innerHTML = '';
}

function showInformation() {
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=627cf8a1454b6eb1a2023bc5580b2107'
    )
        .then((response) => response.json())
        .then((weather) => {
            document.getElementById("temperature").innerHTML =
                "Температура за окном: " + Math.round(weather.main.temp - 273) + ` <sup>o</sup>` + "C";
            document.getElementById("pressure").innerText =
                "Атмосферное давление: " +
                Math.round(weather.main.pressure / 1.333) +
                " мм.рт.ст";
        });
    fetch(
        'https://api.openweathermap.org/data/2.5/air_pollution?lat=' + latitude + '&lon=' + longitude + '&appid=627cf8a1454b6eb1a2023bc5580b2107'
    )
        .then((response) => response.json())
        .then((pollution) => {
            document.getElementById("co").innerHTML =
                "Уровень CO: " + pollution.list[0].components.co + " μg/m" + `<sup>3</sup>`;
            document.getElementById("no").innerHTML =
                "Уровень NO: " + pollution.list[0].components.no + " μg/m" + `<sup>3</sup>`;
            document.getElementById("no2").innerHTML =
                "Уровень NO" + `<sub>2</sub>: ` + pollution.list[0].components.no2 + " μg/m" + `<sup>3</sup>`;
            document.getElementById("so2").innerHTML =
                "Уровень SO" + `<sub>2</sub>: ` + pollution.list[0].components.so2 + " μg/m" + `<sup>3</sup>`;
        });

    document.getElementById('statisticsInfo').innerHTML = `За первое полугодие в вашем городе было собрано ${arraySum} т. органических отходов`

    const statistics = {
        labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'],
        datasets: [{
            label: 'количество органических отходов (тонн)',
            backgroundColor: '#68A225',
            data: arrayData
        }]
    };
    const statisticConfig = {
        type: 'bar',
        data: statistics
    };

    if (myStatistics != null) {
        myStatistics.destroy()
    }

    myStatistics = new Chart(
        document.getElementById('statistics'),
        statisticConfig
    );


}


