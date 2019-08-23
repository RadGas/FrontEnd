import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  results : Array<any> = [];

  getGasStations(zipCode, gasType){
    // console.log(this.http.get(`https://secret-fortress-69641.herokuapp.com/api/zipcode/${zipCode}?fuel=${gasType}`).subscribe(val => console.log(val)));
    return this.http.get(`https://secret-fortress-69641.herokuapp.com/api/zipcode/${zipCode}?fuel=${gasType}`).subscribe(val => {
      // @ts-ignore
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
    this.getGasStations(33018,1);
  }

}
