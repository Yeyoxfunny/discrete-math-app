import { Routes } from '@angular/router';
import { PlotComponent } from './plot/plot.component';
import { HomeComponent } from './home.component';
import { EncryptComponent } from './encrypt/encrypt.component';
import { OperacionesComponent } from './operaciones/operaciones.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'plot',
    component: PlotComponent
  },
  {
    path: 'encrypt',
    component: EncryptComponent
  },
  {
    path: 'operaciones',
    component: OperacionesComponent
  }
];
