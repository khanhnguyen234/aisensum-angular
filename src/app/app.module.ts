import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AisensumModule } from './pages/aisensum/aisensum.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AisensumModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
