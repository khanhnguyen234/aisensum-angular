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
    return this.apiService
      .get(`/segment-criterias?limit=8`)
      .pipe(map((data) => data.data));
  }

  getSegmentType(): Observable<SegmentType[]> {
    return this.apiService
      .get(`/segment-types?limit=8`)
      .pipe(map((data) => data.data));
  }
}
