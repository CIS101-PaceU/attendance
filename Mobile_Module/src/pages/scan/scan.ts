import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { ScanResultPage } from "../scan-result/scan-result.ts";
import {Http } from '@angular/http';
import { Geolocation } from "@ionic-native/geolocation";
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {
  public scannedText: string;
  public buttonText: string;
  public loading: boolean;
  private eventId: number;
  public eventTitle: string;
  public userid: number;
  data1: any;
  items;
  uuid: string;
  longitude;
  latitude;


  constructor(
    private _nav: NavController,
    private _navParams: NavParams,
    private _barcodeScanner: BarcodeScanner,
    public http : Http,
    private device: Device,
    private geolocation: Geolocation) {
      //this.data = {};
  }

  ionViewDidLoad() {
    this.eventId = this._navParams.get('eventId');
    this.eventTitle = this._navParams.get('eventTitle');
    this.userid  = this._navParams.get('userid');

    this.buttonText = "Scan";
    this.loading = false;
    //alert(this.userid);
  }

  public scanQR() {
    this.buttonText = "Loading..";
    this.loading = true;

    this._barcodeScanner.scan().then((barcodeData) => {
      // if (barcodeData.cancelled) {
      //   console.log("User cancelled the action!");
      //   this.buttonText = "Scan";
      //   this.loading = false;
      //   return false;
      // }
      console.log("Scanned successfully!");
      console.log(barcodeData);
      this.goToResult(barcodeData);
    }, (err) => {
      console.log(err);
    });

    var items=[{key:'uuid',value: this.device.uuid},
    {key:'model',value: this.device.model},
    {key:'manufacturer',value: this.device.manufacturer},
    {key:'version',value: this.device.version},
    {key:'platform',value: this.device.platform}
    ];
    this.items=items;
    this.uuid = this.device.uuid;
    this.geolocation.getCurrentPosition().then((resp) => {
    resp.coords.latitude
    resp.coords.longitude
    this.longitude = resp.coords.longitude;
    this.latitude = resp.coords.latitude;
    //alert(this.longitude);
    //alert(this.latitude);

      //alert(JSON.stringify(resp));
    }).catch((error) => {
      alert('Error getting location'+JSON.stringify(error));
    });


  }
  //public scanQR(){



  public goToResult(barcodeData) {
    this._nav.push(ScanResultPage, {
      scannedText: barcodeData.text

    });
    //alert("hi");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let eventId = barcodeData.text;
    //let eventId = 2;
  //  alert(eventId);
  //  alert(this.userid);
    //alert(barcodeData.text);
    //alert(this.device.uuid);
    let data = JSON.stringify({eventId, userid:this.userid,uuid:this.uuid,longitude:this.longitude,latitude:this.latitude});
    this.http.post('https://attendancemobileapp.000webhostapp.com/Insert_Attendance.php',data)
    .map(res => res.json())
    .subscribe(res => {
    //alert("success "+res);
    console.log(res);
//    alert(res1);
    if (res == "0")
    {
      alert("Error While Scanning Barcode");
    //  alert(err);
    }
    else
    {

        this._nav.push(ScanResultPage, {
          scannedText: barcodeData.text
        });
      }
  }, (err) => {
  //  alert('j');
    alert(err);
    });
  }


}
