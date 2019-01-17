import { Router, ActivatedRoute, } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Station } from '../api/models/station';
import { StationService } from '../api/services'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  favoriteStations: Station[] = [];
  stations: Station[] = [];
  favoriteStationIds: number[] = [];

  @Output() stationSelected = new EventEmitter<Station>();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private stationService: StationService
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

  }
  stationClicked(station: Station) {
    this.router.navigate(['/stations/' + station.Id]);
  }

}