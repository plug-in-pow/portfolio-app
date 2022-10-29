import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PortfolioDashboardModule } from './portfolio-dashboard/portfolio-dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PortfolioDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
