import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';
import { StationService } from '../api/services'
import { Station, Community } from '../api/models'
import { StationManagementErrorMessages } from './station-management-error-messages'

@Component({
  selector: 'app-station-management',
  templateUrl: './station-management.component.html',
  styleUrls: ['./station-management.component.scss']
})
export class StationManagementComponent implements OnInit {
  @ViewChild('myForm') myForm: NgForm;
  selectedStation: Station = new Station();
  stations: Station[] = [];
  errors: { [key: string]: string } = {}
  resultSuccess: string;
  resultFailure: string;
  constructor(private stationService: StationService, private router: Router) { }

  ngOnInit() {
    this.myForm.statusChanges.subscribe(() => this.updateErrorMessages());
    var username = sessionStorage.getItem('username');
    this.stationService.StationGetByUsernameName(username)
      .subscribe(stations => this.stations = stations, () => {}, () => {
        if (this.stations != null) {
          this.selectedStation = this.stations[0];
        }
      });

  }

  stationClicked(station: Station) {
    this.selectedStation = station;
  }

  submitForm() {
    this.resultFailure = null;
    this.resultSuccess = null;
    console.log(this.selectedStation)
    var username = sessionStorage.getItem('username');
    this.stationService.StationUpdate(this.selectedStation, username)
      .subscribe(() => {}, () => {
        this.resultFailure = "Station nicht geändert"
      },
      () => {
        this.resultSuccess = "Station erfolgreich bearbeitet"
      }
      );
  }
  deleteStation() {
    this.resultFailure = null;
    this.resultSuccess = null;
    var username = sessionStorage.getItem('username');
    console.log(this.selectedStation);
    var id = this.selectedStation.Id;
    this.stationService.StationDelete(this.selectedStation, username)
    .subscribe(() => {}, () => {
      this.resultFailure = "Station konnte nicht gelöscht"
    },
    () => {
      this.resultSuccess = "Station erfolgreich gelöscht"
      this.stations.filter(function(station, idx, array) {
        return station.Id != id;
      })
    }
    );
  }

  addStationClick() {
    this.router.navigate(['/create-station']);
  }

  updateErrorMessages() {
    this.errors = {};
    for (const message of StationManagementErrorMessages) {
      const control = this.myForm.form.get(message.forControl);
      if (control &&
          control.dirty &&
          control.invalid &&
          control.errors[message.forValidator] &&
          !this.errors[message.forControl]) {
        this.errors[message.forControl] = message.text;
      }
    }
  }

}
