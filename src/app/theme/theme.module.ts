import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { PageLayout } from './layouts/page/page.layout';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const COMPONENTS = [PageLayout, HeaderComponent, SidebarComponent];

@NgModule({
  imports: [CommonModule, MatIconModule],
  exports: [CommonModule, ...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class ThemeModule {}
