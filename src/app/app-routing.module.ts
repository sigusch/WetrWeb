import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeasurementManagementComponent } from './measurement-management/measurement-management.component';
import { StationManagementComponent } from './station-management/station-management.component';
import { StationDetailsComponent } from './station-details/station-details.component';
import { CreateStationComponent } from './create-station/create-station.component'
import { LoginComponent } from './login/login.component'
import { CheckLoginGuard } from './check-login-guard.guard'
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [ CheckLoginGuard ]
  },
  {
    path: "measurement-management",
    component: MeasurementManagementComponent
  },
  {
    path: "station-management",
    component: StationManagementComponent,
    canActivate: [ CheckLoginGuard ]
  },  
  {
    path: "create-station",
    component: CreateStationComponent,
    canActivate: [ CheckLoginGuard ]
  },
  {
    path: "stations/:id",
    component: StationDetailsComponent
  },
  {
    path: "login",
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
