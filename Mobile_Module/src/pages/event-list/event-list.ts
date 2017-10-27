import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ScanPage } from "../scan/scan";

@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html'
})
export class EventListPage {
  public events: Array<{ id: number, title: string }> = [];
  public userid: number;
  constructor(private _nav: NavController,private _navParams: NavParams) { }

  ionViewDidLoad() {
    this.getEvents();
    this.userid = this._navParams.get('userid');
    //alert(this.userid);
  }

  private getEvents() {
    for (var index = 1; index < 10; index++) {
      this.events.push({ id: index, title: "Week " + index });
    }
  }

  public scanForEvent(id: number, title: string) {
    this._nav.push(ScanPage, {
      eventId: id,
      eventTitle: title,
      userid : this.userid
    });
  }

}
