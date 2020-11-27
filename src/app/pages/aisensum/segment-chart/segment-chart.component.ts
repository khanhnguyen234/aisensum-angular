import { Component } from '@angular/core';

@Component({
  selector: 'segment-chart',
  templateUrl: './segment-chart.component.html',
  styleUrls: ['./segment-chart.component.scss'],
})
export class SegmentChartComponent {
  data: {};
  options: any;
  overview: string;
  selectOptions: any[];
  selected: string;

  constructor() {
    this.overview = 'Growth: 47.1%';
    this.selected = 'Sales';
    this.selectOptions = [
      { value: 'Sales', viewValue: 'Sales' },
      { value: 'Quantity', viewValue: 'Quantity' },
      { value: 'No-of-Customer', viewValue: 'No of Customer' },
      { value: 'Transactions', viewValue: 'Transactions' },
      { value: 'Spend-Customer', viewValue: 'Spend / Customer' },
      { value: 'Spend-Transaction', viewValue: 'Spend / Transaction' },
      { value: 'Transaction-Customer', viewValue: 'Transaction / Customer' },
    ];

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          data: [70, 35, 45, 55, 40],
          borderColor: 'green',
          backgroundColor: 'green',
          fill: false,
          pointRadius: 8,
          pointHoverRadius: 10,
        },
      ],
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      hover: {
        mode: 'index',
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              display: true,
            },
            ticks: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    };
  }

  private random() {
    return Math.round(Math.random() * 100);
  }
}
