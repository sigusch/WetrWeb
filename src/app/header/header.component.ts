import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Station } from "../api/models"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  username: string;
  login: boolean;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.username = (sessionStorage.getItem('username'));
    this.login = (sessionStorage.getItem('login')) != null;
  }

  stationSelected(selectedStation: Station) {
    this.router.navigate(
      ["../stations", selectedStation.Id], {
        relativeTo: this.route
    });
  }

  logoutClick() {
    sessionStorage.clear();
    this.username = null;
    this.login = null;
    console.log('loggin out');
  }

}
