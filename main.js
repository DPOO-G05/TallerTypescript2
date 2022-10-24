import { series } from './data.js';
var tbody = document.getElementById('series');
function insertSeries(series) {
    console.log('Desplegando series.');
    series.forEach(function (s) {
        var tr = document.createElement('tr');
        tr.innerHTML = "  <td class=\"table-active\"> ".concat(s.id, " </td>\n                          <td class=\"table-active\"><a href=\"#\" style=\"text-decoration: none;\"> ").concat(s.name, " </td>\n                          <td class=\"table-active\"> ").concat(s.channel, " </td>\n                          <td class=\"table-active\"> ").concat(s.seasons, " </td>");
        tbody.appendChild(tr);
        tr.addEventListener("click", function () { return insertCardDetail(s); });
    });
}
function insertSeasonAverage(series) {
    console.log('Calculando promedio.');
    var sum = 0;
    series.forEach(function (s) { sum += s.seasons; });
    var average = sum / series.length;
    var table = document.getElementById("table-series");
    var html = '<p> &nbsp; Seasons average: ' + average + '</p>';
    table.insertAdjacentHTML("afterend", html);
}
var cardTbody = document.getElementById("card");
function insertCardDetail(serie) {
    console.log('Insertando carta.');
    cardTbody.innerHTML = "\n    <div class=\"card mx-auto mx-lg-1\" style=\"width: 18rem;\">\n      <img src=\"".concat(serie.cover, "\" class=\"card-img-top\" alt=\"...\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(serie.name, " </h5>\n        <p class=\"card-text\">").concat(serie.description, "</p>\n        <a href=\"").concat(serie.link, "\">").concat(serie.link, "</a>\n      </div>\n    </div>");
    //cardTbody.appendChild(cardElement)
}
insertSeries(series);
insertSeasonAverage(series);
