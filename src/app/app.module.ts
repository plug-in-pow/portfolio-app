import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortfolioDashboardModule } from './portfolio-dashboard/portfolio-dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PortfolioDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
