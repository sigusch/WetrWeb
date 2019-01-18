import { Router, ActivatedRoute, } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Station, Measurement } from '../api/models';
import { StationService, MeasurementService } from '../api/services'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  favoriteStations: Station[] = [];
  stations: Station[] = [];
  favoriteStationIds: number[] = [];
  favoriteStationTemp: {id: number, temperature: number}[] = [];

  @Output() stationSelected = new EventEmitter<Station>();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private stationService: StationService,
              private measurementService: MeasurementService
  ) { }

  ngOnInit() {
    let data = localStorage.getItem("Dashboard");
    let idStrings = JSON.parse(data);
    idStrings.forEach(id => {
      this.favoriteStationIds.push(parseInt(id,10))
    });
    
    this.stationService.StationGetAllStations()
      .subscribe(stations => this.stations = stations,() => { }, () => {
        this.stations.forEach( (station) => {
          if (this.favoriteStationIds.includes(station.Id))
           this.favoriteStations.push(station);
        })
      });
      var from = new Date();
      var fromDateString = from.getDate() + '-' + from.getMonth()+1 + '-' + from.getFullYear();
      var toDateString = from.getDate()+1 + '-' + from.getMonth()+1 + '-' + from.getFullYear();
    this.favoriteStationIds.forEach((Id) => {
      var tempMeasurements: Measurement[];
      this.measurementService.MeasurementGetMeasurementForStation({stationId: Id.toString(),from: fromDateString, to: toDateString})
        .subscribe((measurements) => {tempMeasurements = measurements}, () => {}, () => {
          if (tempMeasurements.length > 0)
            this.favoriteStationTemp.push({id: Id, temperature: tempMeasurements[tempMeasurements.length - 1].Temperature})
        })

    });
    console.log(this.favoriteStationTemp);

  }
  stationClicked(station: Station) {
    this.router.navigate(['/stations/' + station.Id]);
  }

  getTemp(station: Station) {
    var x = this.favoriteStationTemp.find((e) => e.id === station.Id);
    if (x != null)
      return x.temperature + '°'
    else
      return 'keine aktuelle Temperatur verfügbar';

  }

}