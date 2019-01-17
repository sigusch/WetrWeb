import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var random= Math.floor(Math.random() * 6) + 0;
    var backgrounds = ["../../img/4k-wallpaper-adventure-climb-691668.jpg",
                       "../../img/adventure-calm-clouds-414171.jpg",
                       "../../img/adventure-cold-daylight-291732.jpg",
                       "../../img/agriculture-alps-animal-552766.jpg",
                       "../../img/alps-clouds-cold-1303431.jpg",
                       "../../img/background-calm-clouds-747964.jpg"];
    document.getElementById("bg").style.backgroundImage=backgrounds[random];
    console.log("onInit Home");

  }

}
