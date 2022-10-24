import { series } from './data.js';
var tbody = document.getElementById('series');
function insertSeries(series) {
    console.log('Desplegando series.');
    series.forEach(function (s) {
        var tr = document.createElement('tr');
        tr.innerHTML = "  <td class=\"table-active\"> ".concat(s.id, " </td>\n                          <td class=\"table-active\"><a href=").concat(s.link, " target=\"_blank\"> ").concat(s.name, " </td>\n                          <td class=\"table-active\"> ").concat(s.channel, " </td>\n                          <td class=\"table-active\"> ").concat(s.seasons, " </td>");
        tbody.appendChild(tr);
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
insertSeries(series);
insertSeasonAverage(series);
