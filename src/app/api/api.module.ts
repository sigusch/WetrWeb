/* tslint:disable */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';

import { MeasurementService } from './services/measurement.service';
import { StationService } from './services/station.service';
import { UserService } from './services/user.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    MeasurementService,
    StationService,
    UserService
  ],
})
export class ApiModule { }
