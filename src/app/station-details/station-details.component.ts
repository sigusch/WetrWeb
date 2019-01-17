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
  measurements: Array<Measurement>;
  login: boolean;

  public chartType: string = 'line';
  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 70, .2)',
      borderColor: 'rgba(200, 27, 27, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(140, 130, 0, .2)',
      borderColor: 'rgba(250, 240, 0, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(30, 130, 50, .2)',
      borderColor: 'rgba(0, 140, 30, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];
  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  public chartDatasets: Array<any> = [
    { data: [], label: 'Temperatur' },
    { data: [], label: 'Luftdruck' },
    { data: [], label: 'Niederschlagsmenge' },
    { data: [], label: 'Luftfeuchtigkeit in %' },
    { data: [], label: 'Windgeschwindigkeit' },
  ];

  public chartLabels: Array<any> = [];


  @Input() stationInput: Station;

  constructor(
    private route: ActivatedRoute, private router: Router,
    private stationService: StationService, private measurementService: MeasurementService
  ) { }
  

  ngOnInit() {
    this.login = (sessionStorage.getItem('login')) != null;
    this.route.params.subscribe(parameters => 
      //this.measurementService.MeasurementGetMeasurementForStation({stationId: parameters["id"],from: "01-11-2018", to: "01-12-2018"})
      this.measurementService.MeasurementGetAccumulationForStation({stationId: parameters["id"],from: "01-01-2018", to: "01-12-2018", intervalType: "1", accumulationType: "3"})
        .subscribe(measurements => {
          this.measurements = measurements;
          
          measurements.forEach(measurement => {
            this.chartDatasets[0].data.push(measurement.Temperature);
            this.chartDatasets[1].data.push(measurement.Pressure);
            this.chartDatasets[2].data.push(measurement.Rainfall);
            this.chartDatasets[3].data.push(measurement.Moisture*100);
            this.chartDatasets[4].data.push(measurement.Velocity);
            this.chartLabels.push(measurement.DateTime);
            
          });
        })
    );
    this.route.params.subscribe(parameters => 
      this.stationService.StationGetById(parameters["id"])
        .subscribe(station => this.station = station)
    );

    const parameters = this.route.snapshot.params;
    let data = localStorage.getItem("Dashboard");
    this.favorites = JSON.parse(data);
  }

  ngOnDestroy() {
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
