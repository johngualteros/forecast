import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import { WeatherResponse } from '../../../../core/infrastructure/responses/weather-forecast-response';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  @Input() weatherForecastInfo: WeatherResponse;
  public chart: any;

  ngOnInit(): void {
    if (this.weatherForecastInfo) {
      this.createChart();
    }
  }

  createChart(): void {
    const periods = this.weatherForecastInfo.properties.periods;

    const temperatures = periods.map((period: any) => period.temperature);

    const labelsWithPrettyClientTime = periods.map((period: any) => {
      const date = new Date(period.startTime);
      return date.toLocaleTimeString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });
    })

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: labelsWithPrettyClientTime,
        datasets: [{
          label: 'Temperature (°F)',
          data: temperatures,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
          tension: 0.1
        }]
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Date'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Temperature (°F)'
            }
          }
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        plugins: {
          tooltip: {
            callbacks: {
              title: (context) => {
                const date = new Date(context[0].label);
                return date.toLocaleTimeString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });
              },
              label: (context) => {
                return `Temperature: ${context.raw} °F`;
              }
            }
          }
        }
      }
    });

  }
}
