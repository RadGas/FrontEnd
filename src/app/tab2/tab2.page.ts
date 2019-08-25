import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {HttpClient} from "@angular/common/http";
import {zipCode} from "../DataTypes/zipCode";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  collapsed = true;

  results : Array<any> = [];

  getGasStations(zipCode, gasType){
    return this.http.get<zipCode>(`https://secret-fortress-69641.herokuapp.com/api/zipcode/${zipCode}?fuel=${gasType}`).subscribe(val => {
      const {stations} = val;
      return this.results = stations;
    });

  }
  constructor(public navCtrl: NavController, private http: HttpClient) {
    
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
    this.getGasStations(33174,1);
  }

}
