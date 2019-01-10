import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeasurementManagementComponent } from './measurement-management/measurement-management.component';
import { StationManagementComponent } from './station-management/station-management.component';
import { StationDetailsComponent } from './station-details/station-details.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "measurement-management",
    component: MeasurementManagementComponent
  },
  {
    path: "station-management",
    component: StationManagementComponent
  },
  {
    path: "stations/:id",
    component: StationDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
