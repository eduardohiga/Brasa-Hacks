import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit {
  @ViewChild('doughnutCanvas', {static: true}) doughnutCanvas: ElementRef;
  @ViewChild('lineCanvas', {static: true}) lineCanvas: ElementRef;
  @ViewChild('economias', {static: true}) economias: ElementRef;

  private doughnutChart: Chart;
  private lineChart: Chart;


  constructor() {}



  ngOnInit() {

    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["Restaurante", "Eletrônicos", "Lazer", "Outros", "Supermercado", "Educação", "Transporte", "Casa", "Saúde", "Serviços", "Vestuário", "Viagem"],
        datasets: [
          {
            label: "# of Votes",
            data: [250, 190, 170, 150, 120, 110, 110, 60, 60, 40, 30, 30],
            backgroundColor: [
              "green",
              "yellow",
              "red",
              "blue",
              "pink",
              "brown",
              "orange",
              "lime",
              "silver",
              "turquoise",
              "tan",
              "indigo"

            ],
            //borderColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"],
            //borderWidth: 0
          }
        ]
        
      },
      options: {
        responsive: false,
        legend: {
          display: false
        },
        scales: {
        }

      }
    });

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "line",
      data: {
        labels: ["Outubro","Novembro","Dezembro","Janeiro", "Fevereiro", "Março"],
        datasets: [
          {
            label: "R$",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [3450, 3110, 4845, 4210, 4684, 3545],
            spanGaps: false
          }
        ]
      },
      options: {
        responsive: false,
        legend: {
          display: false,
        },
        scales: {
        }
      }
    });

    this.lineChart = new Chart(this.economias.nativeElement, {
      type: "line",
      data: {
        labels: ["Outubro","Novembro","Dezembro","Janeiro", "Fevereiro", "Março"],
        datasets: [
          {
            label: "R$",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [540, 650, -320, -102, -400, 100],
            spanGaps: false
          }
        ]
      },
      options: {
        responsive: false,
        legend: {
          display: false,
        },
        scales: {
        }
      }
    });


  }


}