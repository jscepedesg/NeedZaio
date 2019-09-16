//Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//Importar componentes
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { VisualizacionComponent } from './componentes/visualizacion/visualizacion.component';
import { Page404Component } from './componentes/page404/page404.component';

//Importar guards
import {AuthGuard} from './guards/auth.guard';

//Array de rutas
const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'registro',component: RegistroComponent},
  { path: 'visualizacion',component: VisualizacionComponent, canActivate: [AuthGuard]},//Solo usuarios autenticados
  {path: '**',component: Page404Component}
];

//Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
