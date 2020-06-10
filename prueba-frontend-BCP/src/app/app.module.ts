import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgenciesComponent } from './agencies/agencies.component';
import { AgencyComponent } from './agency/agency.component';
import { MapComponent } from './map/map.component';
import { AgencyDetailComponent } from './agency-detail/agency-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    AgenciesComponent,
    AgencyComponent,
    MapComponent,
    AgencyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
