import { Serie } from './serie.js';
import { series } from './data.js';

const tbody: HTMLElement = document.getElementById('series')!;

function insertSeries(series: Serie[]): void {
    console.log('Desplegando series.');
    series.forEach(s => {
        let tr: HTMLElement = document.createElement('tr');
        tr.innerHTML = `  <td class="table-active"> ${s.id} </td>
                          <td class="table-active"><a href=${s.link} target="_blank"> ${s.name} </td>
                          <td class="table-active"> ${s.channel} </td>
                          <td class="table-active"> ${s.seasons} </td>`;
        tbody.appendChild(tr);
    });
}

function insertSeasonAverage(series: Serie[]): void {
    console.log('Calculando promedio.');
    let sum: number = 0;
    series.forEach(s => {sum += s.seasons});
    const average: number = sum / series.length;
    let table: HTMLElement = document.getElementById("table-series")!;
    const html: string = '<p> &nbsp; Seasons average: '+average+'</p>'
    table.insertAdjacentHTML("afterend",html)

}


insertSeries(series);
insertSeasonAverage(series);