import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular2-chartjs';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AisensumComponent } from './aisensum.component';
import { SegmentChartComponent } from './segment-chart/segment-chart.component';
import { StatisticComponent } from './statistic/statistic.component';
import { CriteriaComponent } from './criteria/criteria.component';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatSelectModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [
    AisensumComponent,
    SegmentChartComponent,
    StatisticComponent,
    CriteriaComponent,
  ],
  imports: [CommonModule, ChartModule, ...MATERIAL_MODULES],
})
export class AisensumModule {}
