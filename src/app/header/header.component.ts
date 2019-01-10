import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Station } from "../api/models"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  stationSelected(selectedStation: Station) {
    this.router.navigate(
      ["../stations", selectedStation.Id], {
        relativeTo: this.route
    });
  }

}
