import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Station } from '../api/models/station';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { switchMap, distinctUntilChanged, debounceTime, tap, startWith, map } from 'rxjs/operators';
import { StationService } from '../api/services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() stationSelected = new EventEmitter<Station>();

  searchControl = new FormControl();
  stations: Station[] = [];
  filteredOptions: Observable<Station[]>;

  private keyup = new EventEmitter<String>();

  constructor(private stationService: StationService, private fb: FormBuilder) { }

  ngOnInit() {
    this.stationService
    .StationGetAllStations()
    .subscribe(stations => this.stations = stations)

    this.filteredOptions = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value.Name))
      );

  }

  

  private _filter(value: string): Station[] {
    const filterValue = value.toLowerCase();

    return this.stations.filter(option => option.Name.toLowerCase().includes(filterValue));
  }

}
