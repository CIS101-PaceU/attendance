import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EventListPage } from "../event-list/event-list";

@Component({
  selector: 'EventPage',
  templateUrl: 'event.html'
})
export class EventPage {

  constructor(
    private _nav: NavController){
      
    }

public eventlist() {
      this._nav.push(EventListPage);
  }
}
