import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from './services/api.service';
import { SegmentChartService } from './services/segment-chart.service';

@NgModule({
  imports: [CommonModule],
  providers: [ApiService, SegmentChartService],
})
export class CoreModule {}
