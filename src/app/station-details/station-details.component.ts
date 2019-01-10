import { Component, OnInit } from '@angular/core';
import { Station, Measurement } from '../api/models'
import { StationService, MeasurementService } from '../api/services'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.scss']
})
export class StationDetailsComponent implements OnInit {

  station: Station = new Station();

  constructor(
    private route: ActivatedRoute, private router: Router,
    private stationService: StationService, private measurementService: MeasurementService
  ) { }
  

  ngOnInit() {
    this.route.params.subscribe(parameters => 
      this.stationService.StationGetById(parameters["id"])
        .subscribe(station => this.station = station)
    );

  }



}
