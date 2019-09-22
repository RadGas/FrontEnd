import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {HttpClient} from "@angular/common/http";
import {zipCode} from "../DataTypes/zipCode";
import { DataService } from './../services/data.service';
import { Welcome } from '../DataTypes/fuels';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  collapsed = true;

  results : Array<any> = [];
  stationids = [];
  results2 = [];

  passedZipCode;
  passedGasType;

  getGasStations(zipCode, gasType){
    return this.http.get<zipCode>(`https://secret-fortress-69641.herokuapp.com/api/zipcode/${zipCode}?fuel=${gasType}`).subscribe(val => {
      const {stations} = val;
      let i;
      for(i = 0; i < val.stations.length; i++){
        this.stationids.push(val.stations[i].id);
      }
      this.results = stations;
      this.getprices();
    });
  }

  getprices()
  {
    console.log(this.stationids);
    let endpoint = "https://secret-fortress-69641.herokuapp.com/api/gasstation?stationIds=";
    for(let i = 0; i < this.stationids.length; i++){
      if(i == 0){
        endpoint += this.stationids[i];
      }
      else{
        endpoint += "&stationIds=" + this.stationids[i];
      }
    }
    return this.http.get<Welcome>(endpoint).subscribe(prices => {
      this.results2 = prices.fuels;
      console.log("yes", this.results2);
    });
  }

  getGasStationsCoords(lat, lng, gasType){
    return this.http.get<zipCode>(`https://secret-fortress-69641.herokuapp.com/api/coordinates?${lat}&lng=${lng}?fuel=${gasType}`).subscribe(val => {
      const {stations} = val;
      return this.results = stations;
      let i;
      for(i = 0; i < val.stations.length; i++){
        this.stationids.push(val.stations[i].id);
      }
      return this.results = stations;
      this.getprices();
    });
  }
  
  constructor(public navCtrl: NavController, private http: HttpClient,public data: DataService) {
    
    this.results = [
      {
        "Name" : " Exxon",
        "Address": "123 new 12321 "
      },
      {
        "Name" : " Shell",
        "Address": "123 new 12321 "
      },      {
        "Name" : " Something",
        "Address": "123 new 12321 "
      },      {
        "Name" : " Mobil",
        "Address": "123 new 12321 "
      }
    ]
    this.results2 = [];
    console.log(this.data.serviceLat);
    console.log(this.data.serviceLng);
    console.log(this.data.serviceZIP);
    if(this.data.serviceZIP)
    {
      console.log("ZIP passed: " + this.data.serviceZIP);
      this.getGasStations(this.data.serviceZIP,1);
    }
    else{
      this.getGasStationsCoords(this.data.serviceLat, this.data.serviceLng, 1);
    }
  }

  ionViewLoad()
  {
    
  }

}
