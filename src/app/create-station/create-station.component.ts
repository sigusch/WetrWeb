import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';
import { StationService } from '../api/services'
import { Station, Community } from '../api/models'
import { CreateStationErrorMessages } from './create-station-error-messages'

@Component({
  selector: 'app-create-station',
  templateUrl: './create-station.component.html',
  styleUrls: ['./create-station.component.scss']
})
export class CreateStationComponent implements OnInit {
  @ViewChild('myForm') myForm: NgForm;
  communities: Community[] = [];
  errors: { [key: string]: string } = {}
  resultSuccess: string;
  resultFailure: string;
  station = new Station();

  constructor(private stationService: StationService) { }

  ngOnInit() {
    this.stationService.StationGetCommunities()
      .subscribe((communities) => this.communities = communities);
    this.station.Coordinate = {Longitude: null, Latitude: null};
    this.station.StationType = {Id: 1, Brand: "Marke 1", Name: "Typ 1"};
  }

  submitForm() {
    this.resultFailure = null;
    this.resultSuccess = null;
    console.log(this.station);
    this.station.Id = -1;
    var username = sessionStorage.getItem('username');
    this.station.User = {Id: 0, Username: username, Password: null};
    this.stationService.StationInsert(this.station, username)
      .subscribe(() => {}, () => {
        this.resultFailure = "Station konnte nicht angelegt werden"
      },
      () => {
        this.resultSuccess = "Station erfolgreich angelegt"
      }
      );
  }

  updateErrorMessages() {
    this.errors = {};
    for (const message of CreateStationErrorMessages) {
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
