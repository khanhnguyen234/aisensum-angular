import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ApiService } from 'src/app/core/services/api.service';
import {
  SegmentChart,
  SegmentCriteria,
  SegmentType,
} from '../interfaces/segment-chart';
import { map } from 'rxjs/operators';

@Injectable()
export class SegmentChartService {
  constructor(private apiService: ApiService) {}

  private changeCriteriaUuidSource = new Subject<string>();

  changeCriteriaUuid$ = this.changeCriteriaUuidSource.asObservable();

  onChangeCriteriaUuid(mission: string): any {
    this.changeCriteriaUuidSource.next(mission);
  }

  getSegmentChart(query: any): Observable<SegmentChart> {
    return this.apiService.get(`/segment-chart`, query).pipe(
      map((data) => {
        const labels = data.data.map((value: any) => value.timeline);
        const dataChart = data.data.map((value: any) => value.index);
        return {
          labels,
          dataChart,
        };
      }),
    );
  }

  getSegmentCriteria(): Observable<SegmentCriteria[]> {
    return this.apiService.get(`/segment-chart?limit=8`).pipe(
      map((data) => {
        return [
          {
            uuid: 'bc384c62-3251-11eb-adc1-0242ac120002',
            name: 'Sales Trends',
          },
          {
            uuid: '658a72cc-32e3-11eb-adc1-0242ac120002',
            name: 'Product',
          },
          {
            uuid: '658a7538-32e3-11eb-adc1-0242ac120002',
            name: 'Product Attributes',
          },
          {
            uuid: '658a7632-32e3-11eb-adc1-0242ac120002',
            name: 'Product Combination',
          },
          {
            uuid: '658a7704-32e3-11eb-adc1-0242ac120002',
            name: 'Price Discount & Payment',
          },
          {
            uuid: '658a77cc-32e3-11eb-adc1-0242ac120002',
            name: 'Purchase Time',
          },
          {
            uuid: '658a788a-32e3-11eb-adc1-0242ac120002',
            name: 'Demography',
          },
          {
            uuid: '658a7b46-32e3-11eb-adc1-0242ac120002',
            name: 'Top Insights',
          },
        ];
      }),
    );
  }

  getSegmentType(): Observable<SegmentType[]> {
    return this.apiService.get(`/segment-chart?limit=8`).pipe(
      map((data) => {
        return [
          {
            uuid: '48da8862-3250-11eb-adc1-0242ac120002',
            name: 'Sales',
          },
          {
            uuid: '48da8862-3250-11eb-adc1-0242ac120003',
            name: 'Quantity',
          },
          {
            uuid: '658a72cc-32e3-11eb-adc1-0242ac120002',
            name: 'No of Customer',
          },
          {
            uuid: '658a7538-32e3-11eb-adc1-0242ac120002',
            name: 'Transactions',
          },
          {
            uuid: '658a7632-32e3-11eb-adc1-0242ac120002',
            name: 'Spend / Customer',
          },
          {
            uuid: '658a7704-32e3-11eb-adc1-0242ac120002',
            name: 'Spend / Transaction',
          },
          {
            uuid: '658a77cc-32e3-11eb-adc1-0242ac120002',
            name: 'Transaction / Customer',
          },
        ];
      }),
    );
  }
}
