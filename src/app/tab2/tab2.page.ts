import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  results : Array<any> = [];

  constructor(public navCtrl: NavController) {
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
  }

}
