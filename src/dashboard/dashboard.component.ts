import { Component, inject } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { ExerciceService } from 'src/services/exercice.service';
Chart.register(...registerables);
@Component({
  selector: 'mg-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  private readonly exerciceService = inject(ExerciceService);

  weekSummary: any = [];
  constructor() { }

  ngOnInit(): void {
    this.exerciceService.getWeekSummary().subscribe((data) => {
      data.forEach((element: any) => {
        this.weekSummary.push(element);
      });
      console.log(this.weekSummary[0]);
    });
    this.RenderLineChart();
    this.RenderPieChart();
    this.RenderBarChart();
  }

  RenderBarChart() {
    new Chart("barChart", {
      type: 'bar',
      data: {
        labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        datasets: [{
          label: 'nb of Calories Burned',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }


  RenderLineChart() {
    new Chart("lineChart", {
      type: 'line',
      data: {
        labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        datasets: [{
          label: 'Number of Exercices done',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderWidth: 1
        }]
      },

      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  RenderPieChart() {
    new Chart("radarChart", {
      type: 'radar',
      data: {
        labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        datasets: [{
          label: 'exercices frequency',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderWidth: 1
        }]
      },

      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }






}
