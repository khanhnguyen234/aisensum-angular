import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from 'src/app/core/services/api.service';
import { SegmentChart } from '../../pages/aisensum/segment-chart/segment-chart.interfaces';
import { map } from 'rxjs/operators';

@Injectable()
export class SegmentChartService {
  constructor(private apiService: ApiService) {}

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
}
