import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutes } from './app.route';

import { PlotComponent } from './plot/plot.component';
import { HomeComponent } from './home.component';
import { EncryptComponent } from './encrypt/encrypt.component';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlotComponent,
    EncryptComponent,
    OperacionesComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    MaterializeModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
