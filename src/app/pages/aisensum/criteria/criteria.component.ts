import { Component } from '@angular/core';
import { SegmentChartService } from 'src/app/core/services/segment-chart.service';

@Component({
  selector: 'criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss'],
})
export class CriteriaComponent {
  items: any;
  criteriaUuid: string | any;

  constructor(private segmentChartService: SegmentChartService) {
    this.segmentChartService.getSegmentCriteria().subscribe((data) => {
      this.items = data;
      this.criteriaUuid = !!data.length && data[0].uuid;
      this.segmentChartService.onChangeCriteriaUuid(this.criteriaUuid);
    });
  }

  changeCriteriaUuid(criteriaUuid: string): void {
    this.criteriaUuid = criteriaUuid;
    this.segmentChartService.onChangeCriteriaUuid(criteriaUuid);
  }
}
