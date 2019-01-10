import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Measurement } from '../api/models/measurement'
import { MeasurementManagementErrorMessages } from './measurement-management-error-messages'
import { MeasurementService } from '../api/services/measurement.service'
import { Station } from '../api/models/station'
import { StationService } from '../api/services/station.service'

@Component({
  selector: 'app-measurement-management',
  templateUrl: './measurement-management.component.html',
  styleUrls: ['./measurement-management.component.scss']
})
export class MeasurementManagementComponent implements OnInit {
  @ViewChild('myForm') myForm: NgForm;
  measurement = new Measurement();
  stations: Station[];
  errors: { [key: string]: string } = {};

  constructor(private measurementService: MeasurementService, private stationService: StationService) { }

  ngOnInit() {
    this.myForm.statusChanges.subscribe(() => this.updateErrorMessages());
    this.stationService
    .StationGetAllStations()
    .subscribe(stations => this.stations = stations);
  }

  submitForm() {
    // unnecessary, because we already use two-way binding
    //this.book.author = this.myForm.value.author;
    console.log(this.measurement)
    this.measurementService.MeasurementInsert(this.measurement)
      .subscribe(() => {
        this.measurement = new Measurement();
        this.myForm.reset(this.measurement); // reset the validators
        alert("Messung hinzugefügt");
      });
  }

  updateErrorMessages() {
    this.errors = {};
    for (const message of MeasurementManagementErrorMessages) {
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
