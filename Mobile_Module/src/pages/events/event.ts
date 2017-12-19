import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EventListPage } from "../event-list/event-list";
import { ActiveEventPage } from "../active-event/active-event";

@Component({
  selector: 'EventPage',
  templateUrl: 'event.html'
})
export class EventPage {
  public userid :number;

  constructor(
    private _nav: NavController,
    private _navParams: NavParams){
    }
    ionViewDidLoad() {
      this.userid = this._navParams.get('userid');
      //alert(this.userid);
    }

public eventlist() {
      this._nav.push(EventListPage,{userid:this.userid});
  }
public active(){
      this._nav.push(ActiveEventPage,{userid:this.userid});
}
}
