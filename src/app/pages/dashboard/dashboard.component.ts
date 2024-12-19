import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  chart: Chart<"line", number[], string> | undefined;

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    if (typeof document !== 'undefined') {
      const ctx = document.getElementById('myChart') as HTMLCanvasElement;
  
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgba(255, 6, 6, 0.2)', // Use rgba for transparency
            borderColor: 'rgb(29, 25, 84)',
            data: [0, 10, 5, 2, 20, 30],
            fill: true // Fill the area under the line
          }]
        },
        options: {
          layout: {
            padding:10
        },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              ticks: {
                font: {
                  size: 20 // Set font size for x-axis labels
                }
              }
            },
            y: {
              ticks: {
                font: {
                  size: 20 // Set font size for y-axis labels
                }
              }
            }
          },
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 20 // Set font size for legend labels
                }
              }
            },
            tooltip: {
              bodyFont: {
                size: 20 // Set font size for tooltip text
              }
            },
            title: {
              display: true,
              text: 'My Chart Title',
              font: {
                size: 16 // Set font size for the title
              }
            }
          }
        }
      });
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize( ) {
    if (this.chart) {
      this.chart.resize();
    }
  }
}