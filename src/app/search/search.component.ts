import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Station } from '../api/models/station';
import { StationService } from '../api/services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  foundStations: Station[] = [];
  stations: Station[] = [];
  value: string;

  @Output() stationSelected = new EventEmitter<Station>();

  private keyup = new EventEmitter<String>();

  constructor(private stationService: StationService) { }

  ngOnInit() {
    this.stationService.StationGetAllStations()
      .subscribe(stations => this.stations = stations);
  }

  filterStations(searchTerm: string) {
    if (searchTerm == "") {
      this.foundStations = [];
      return;
    }
    
    searchTerm = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);
    this.foundStations = this.stations.filter(station => station.Name.startsWith(searchTerm));
  }

  stationClicked(station: Station) {
    this.value = "";
    this.foundStations = [];
  }

  

}
