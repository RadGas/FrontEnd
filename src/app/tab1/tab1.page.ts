import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  lat: any;
  lng: any;
  constructor(private geolocation: Geolocation) {}


  ionViewLoad()
  {
    this.geolocation.getCurrentPosition()
    .then( pos => {
      this.lat=pos.coords.latitude;
      this.lng=pos.coords.longitude;
    })
    .catch( err => console.log(err));
  }

  Martyntest(input){
    console.log("IS THIS CALLED?");
    console.log(input + " was passed");
    this.geolocation.getCurrentPosition()
    .then( pos => {
      this.lat=pos.coords.latitude;
      this.lng=pos.coords.longitude;
    })
    .catch( err => console.log(err));
  }
}
