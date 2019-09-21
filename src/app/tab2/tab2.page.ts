import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {HttpClient} from "@angular/common/http";
import {zipCode} from "../DataTypes/zipCode";
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  collapsed = true;

  results : Array<any> = [];

  passedZipCode;
  passedGasType;

  getGasStations(zipCode, gasType){
    return this.http.get<zipCode>(`https://secret-fortress-69641.herokuapp.com/api/zipcode/${zipCode}?fuel=${gasType}`).subscribe(val => {
      const {stations} = val;
      return this.results = stations;
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
    console.log(this.data.serviceLat);
    console.log(this.data.serviceLng);
    console.log(this.data.serviceZIP);
    if(this.data.serviceZIP)
    {
      console.log("ZIP passed: " + this.data.serviceZIP)
      this.getGasStations(this.data.serviceZIP,1);
    }
    else{

    }
  }

  ionViewLoad()
  {
    
  }

}
