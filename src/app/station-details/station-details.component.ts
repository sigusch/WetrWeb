import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Station, Measurement } from '../api/models'
import { StationService, MeasurementService } from '../api/services'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.scss']
})
export class StationDetailsComponent implements OnInit, OnDestroy {
  station: Station = new Station();
  favorites: Array<string>;

  @Input() stationInput: Station;

  constructor(
    private route: ActivatedRoute, private router: Router,
    private stationService: StationService, private measurementService: MeasurementService
  ) { }
  

  ngOnInit() {
    console.log("onInit");
    this.route.params.subscribe(parameters => 
      this.stationService.StationGetById(parameters["id"])
        .subscribe(station => this.station = station)
    );
    const parameters = this.route.snapshot.params;
    let data = localStorage.getItem("Dashboard");
    this.favorites = JSON.parse(data);
  }

  ngOnDestroy() {
    console.log("onDestroy");
  }
  

  addToDashboard() {
    const parameters = this.route.snapshot.params;
    let items: Array<string>;

    let data = localStorage.getItem("Dashboard");
    items = JSON.parse(data);
    if (items == null)
    {
      items = new Array<string>();
    }

    // case is favorite
    if (items.includes(parameters["id"],0)) {
      var idx = items.indexOf(parameters["id"]);
      items.splice(idx,1);
      localStorage.setItem("Dashboard", JSON.stringify(items));
      this.favorites = items;
      //this.toggleAddToDashboardBtn(true);
      return;
    }

    // case is not favorite
    items.push(parameters["id"]);
    localStorage.setItem("Dashboard", JSON.stringify(items));
    this.favorites = items;
    //this.toggleAddToDashboardBtn(false);
    
  }

  toggleAddToDashboardBtn(isFavorite: boolean) {
    var btn = document.getElementById('addToDashboardBtn');
    if (isFavorite) {
      btn.textContent = "Zum Dashboard hinzufügen";
      btn.setAttribute("color", "primary");
    }
    else {
      btn.textContent = "Vom Dashboard entfernen";
      btn.setAttribute("color", "danger");
    }
  }

}
