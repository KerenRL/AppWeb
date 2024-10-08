import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { AgendaComponent } from './components/agenda/agenda.component.spec';
import { ReportesComponent } from './components/reportes/reportes.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'pacientes', component:PacientesComponent},
    {path:'agenda', component:AgendaComponent},
    {path:'reportes', component:ReportesComponent},
    {path:'home', component:HomeComponent}
];
