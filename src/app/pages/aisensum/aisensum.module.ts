import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular2-chartjs';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { AisensumComponent } from './aisensum.component';
import { SegmentChartComponent } from './segment-chart/segment-chart.component';
import { StatisticComponent } from './statistic/statistic.component';
import { ListObjectComponent } from './list-object/list-object.component';

const MATERIAL_MODULES = [MatButtonModule, MatSelectModule];

@NgModule({
  declarations: [
    AisensumComponent,
    SegmentChartComponent,
    StatisticComponent,
    ListObjectComponent,
  ],
  imports: [CommonModule, ChartModule, ...MATERIAL_MODULES],
})
export class AisensumModule {}
