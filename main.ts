import { Serie } from './serie.js';
import { series } from './data.js';

const tbody: HTMLElement = document.getElementById('series')!;

function insertSeries(series: Serie[]): void {
    console.log('Desplegando series.');
    series.forEach(s => {
        let tr: HTMLElement = document.createElement('tr');
        tr.innerHTML = `  <td class="table-active"> ${s.id} </td>
                          <td class="table-active"><a href="#" style="text-decoration: none;"> ${s.name} </td>
                          <td class="table-active"> ${s.channel} </td>
                          <td class="table-active"> ${s.seasons} </td>`;
        tbody.appendChild(tr);
        tr.addEventListener("click", () => insertCardDetail(s))   
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

const cardTbody: HTMLElement = document.getElementById("card")!

function insertCardDetail(serie: Serie): void {
    console.log('Insertando carta.');
    cardTbody.innerHTML=`
    <div class="card mx-auto mx-lg-1" style="width: 18rem;">
      <img src="${serie.cover}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${serie.name} </h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.link}">${serie.link}</a>
      </div>
    </div>`

    //cardTbody.appendChild(cardElement)


}

insertSeries(series);
insertSeasonAverage(series);

