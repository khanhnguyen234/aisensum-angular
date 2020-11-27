import { Component } from '@angular/core';

@Component({
  selector: 'list-object',
  templateUrl: './list-object.component.html',
  styleUrls: ['./list-object.component.scss'],
})
export class ListObjectComponent {
  items: any;
  activeId: string;

  constructor() {
    this.activeId = '1';
    this.items = [
      {
        id: '1',
        name: 'Sales Trends',
      },
      {
        id: '2',
        name: 'Product',
      },
      {
        id: '3',
        name: 'Product Attributes',
      },
      {
        id: '4',
        name: 'Product Combination',
      },
      {
        id: '5',
        name: 'Price Discount & Payment',
      },
      {
        id: '6',
        name: 'Purchase Time',
      },

      {
        id: '7',
        name: 'Demography',
      },
      {
        id: '8',
        name: 'Top Insights',
      },
    ];
  }
}
