import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import { ScanPage } from "../scan/scan";
import {Http } from '@angular/http';
import 'rxjs/add/operator/map';

//@IonicPage()
@Component({
  selector: 'page-active-event',
  templateUrl: 'active-event.html',
})
export class ActiveEventPage {
  public events: Array<{ id: number, title: string, active: string }> = [];
  public userid: number;
  data :any;
  active: any;
  constructor(private _nav: NavController,private _navParams: NavParams,public http : Http,public alertCtrl: AlertController) { }
  ionViewDidLoad() {
    this.getEvents();
    this.userid = this._navParams.get('userid');
  }
  private getEvents() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.get('https://attendancemobileapp.000webhostapp.com/Active_Event.php')
    .map(res => res.json())
      .subscribe(res =>
      {
        console.log(res);
        this.data =res;

        for(let i =0;i<res.length;i++)
        {
        this.events.push({
          id:this.data[i].Event_id,
          title:this.data[i].Event_name,
          active: this.data[i].Active
        });
        console.log(this.data[0].Event_id);
        console.log(this.data[0].Event_name);
        console.log(this.data[0].Active);
      }
      });
  }
  public scanForEvent(id: number, title: string,active: string) {

    //alert(active);
    if (active == 'N')
    {
      let basicAlert = this.alertCtrl.create({
      title: 'Attendance Module',
      subTitle:"This event is not active",
      buttons: ['OK']
    });
     basicAlert.present();
    }
    else
    {
     this._nav.push(ScanPage, {
       eventId: id,
       eventTitle: title,
       userid : this.userid,
       active: active

    });
   }
  }
}
