import { Component } from '@angular/core';
import { SegmentChartService } from 'src/app/core/services/segment-chart.service';
import { CHART_OPTIONS } from './const';

@Component({
  selector: 'segment-chart',
  templateUrl: './segment-chart.component.html',
  styleUrls: ['./segment-chart.component.scss'],
})
export class SegmentChartComponent {
  data: any;
  options: any;
  overview: string;
  selectOptions: any;

  criteriaUuid: string | any;
  typeUuid: string | any;

  loading: boolean;

  constructor(private segmentChartService: SegmentChartService) {
    this.overview = 'Growth: 47.1%';
    this.options = CHART_OPTIONS;

    this.loading = !this.typeUuid && !this.criteriaUuid;

    this.segmentChartService.getSegmentType().subscribe(
      (data) => {
        this.selectOptions = data;
        this.typeUuid = !!data.length && data[0].uuid;
      },
      (error) => {
        console.log('Error getSegmentType', error);
      },
      () => {
        this.fetchChart(this.criteriaUuid, this.typeUuid);
      },
    );

    this.segmentChartService.changeCriteriaUuid$.subscribe((uuid) => {
      this.criteriaUuid = uuid;
      this.fetchChart(uuid, this.typeUuid);
    });
  }

  onChangeType(event: any): any {
    const typeUuid = event.value;
    this.typeUuid = typeUuid;
    this.fetchChart(this.criteriaUuid, typeUuid);
  }

  fetchChart(criteriaUuid: string, typeUuid: string): void {
    if (!criteriaUuid || !typeUuid) return;

    this.loading = true;
    this.segmentChartService
      .getSegmentChart({ criteriaUuid, typeUuid })
      .subscribe((data) => {
        this.loading = false;
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
