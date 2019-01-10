import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Station } from '../api/models/station';
import { switchMap, distinctUntilChanged, debounceTime, tap } from 'rxjs/operators';
import { StationService } from '../api/services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  isLoading = false;
  foundStations: Station[] = [];
  @Output() stationSelected = new EventEmitter<Station>();

  private keyup = new EventEmitter<String>();

  constructor(private stationService: StationService) { }

  ngOnInit() {
    this.keyup.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.isLoading = true),
      switchMap(searchTerm => this.stationService.StationGetLikeStationName(searchTerm.toString())), // toString is used to avoid a unexplainable type mismatch between String and string
      tap(() => this.isLoading = false)
    ).subscribe(stations => this.foundStations = stations);

    
  }

  

}
