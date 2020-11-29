import { Component, OnInit } from '@angular/core';
import { SegmentChartService } from 'src/app/core/services/segment-chart.service';

@Component({
  selector: 'segment-chart',
  templateUrl: './segment-chart.component.html',
  styleUrls: ['./segment-chart.component.scss'],
})
export class SegmentChartComponent implements OnInit {
  data: any;
  options: any;
  overview: string;
  selectOptions: any[];
  selected: string;

  criteriaUuid: string;
  typeUuid: string;

  constructor(private segmentChartService: SegmentChartService) {
    this.criteriaUuid = 'bc384c62-3251-11eb-adc1-0242ac120002';
    this.typeUuid = '48da8862-3250-11eb-adc1-0242ac120002';

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

  ngOnInit() {
    this.segmentChartService
      .getSegmentChart({
        criteriaUuid: this.criteriaUuid,
        typeUuid: this.typeUuid,
      })
      .subscribe((data) => {
        this.data = {
          labels: data.labels,
          datasets: [
            {
              data: data.dataChart,
              borderColor: 'green',
              backgroundColor: 'green',
              fill: false,
              pointRadius: 8,
              pointHoverRadius: 10,
            },
          ],
        };
      });
  }
}
