import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  serviceLat;
  serviceLng;

  serviceZIP;

  constructor() { }

  setLat(lat){
    this.serviceLat = lat;
  }

  setLng(lng){
    this.serviceLng = lng;
  }

  setZIP(zip){
    this.serviceZIP = zip;
  }
}
