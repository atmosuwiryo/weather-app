import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnChanges {
  @Input() chartData: any;
  chartInstance: Chart | null = null; // Store the reference to the Chart instance

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData'] && !changes['chartData'].firstChange) {
      this.renderChart();
    }
  }
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    if (this.chartInstance) {
      this.chartInstance.destroy(); // Destroy existing chart instance
    }

    const dates = this.chartData.properties.periods.map((period:any) => period.startTime);
    const temperatures = this.chartData.properties.periods.map((period:any) => period.temperature);

    this.chartInstance = new Chart('canvas', {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            data: temperatures,
            label: 'Temperature',
            borderColor: 'blue',
            fill: false,
            tension: 0.5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: false
        },
        legend: {
          display: false
        }
      },
      }
    });
  }
}
