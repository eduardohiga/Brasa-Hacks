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
        labels: ["Casa", "Restaurante", "Educação", "Eletrônicos", "Transporte", "Lazer", "Outros", "Saúde", "Serviços", "Supermercado", "Vestuário", "Viagem"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
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
            label: "Gastos ao longo dos últimos meses",
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
          display: true,
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
            label: "Economia ao longo dos últimos meses",
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
          display: true,
        },
        scales: {
        }
      }
    });


  }


}