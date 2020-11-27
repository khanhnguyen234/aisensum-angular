import { Component } from '@angular/core';

@Component({
  selector: 'statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent {
  items: any;

  constructor() {
    this.items = [
      {
        imageUrl: 'https://image.flaticon.com/icons/png/128/3813/3813842.png',
        des: 'Segment Size/%',
        statistic: '242 (100.0%)',
      },
      {
        imageUrl: 'https://image.flaticon.com/icons/png/128/3814/3814002.png',
        des: 'Average Purchase/Customer',
        statistic: 'IDR 142,447',
      },
      {
        imageUrl: 'https://image.flaticon.com/icons/png/128/3815/3815690.png',
        des: 'Frequency',
        statistic: '1.1 times',
      },
      {
        imageUrl: 'https://image.flaticon.com/icons/png/128/3815/3815657.png',
        des: 'Segment Revenue',
        statistic: 'IDR 34,472,150',
      },
    ];
  }
}
