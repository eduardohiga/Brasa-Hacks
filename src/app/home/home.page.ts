import { Component, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from "chart.js";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage{
  @ViewChild('metas', {static: true}) metas: ElementRef;
  private barChart: Chart;


  constructor(private router: Router) {}
  go_to(path_to_go) { this.router.navigate([path_to_go],); }
  
  slideOpts = {
    initialSlide: 0,
    speed: 500
  };



  ngOnInit() {

    this.barChart = new Chart(this.metas.nativeElement, {
      type: "bar",
      data: {
        labels: ["Rest.", "Eletr.", "Lazer", "Outros", "Mercado", "Vest."],
        datasets: [
          {
            label: "R$",
            data: [221, 559, 300, 150, 400, 350],
            backgroundColor: [
              "green",
              "yellow",
              "red",
              "blue",
              "pink",
              "brown"
            ],
            //borderColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"],
            borderWidth: 2,
          }
        ]
        
      },
      options: {
        responsive: false,
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            display: false,
            ticks: {
                beginAtZero: true
            },
            gridLines: {
              drawOnChartArea: false
          }
          }],
          xAxes: [{
            display: true,
            ticks: {
              autoSkip: false,
              maxRotation: 0,
              minRotation: 0,
              padding: 10
            },
            gridLines: {
              display: false,
              drawOnChartArea: false
          }
          }]
        },
        "animation": {
          //"duration": 0,
          "onComplete": function() {
            var chartInstance = this.chart,
              ctx = chartInstance.ctx;
    
            ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';

    
            this.data.datasets.forEach(function(dataset, i) {
              var limite = ["R$ 300", "R$ 500", "R$ 400", "R$ 300", "R$ 500", "R$ 100", ];
              var atual = ["R$ 221", "R$ 559", "R$ 300", "R$ 150", "R$ 400", "R$ 350"]
              var meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function(bar, index) {
                var dataa = atual[index];
                ctx.fillText(dataa, bar._model.x, bar._model.y);
                var data = limite[index];
                ctx.fillText(data, bar._model.x, 180);
              });
            });
          }
        },

      }
    });

  }





}