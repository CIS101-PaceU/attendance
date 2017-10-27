import { Component } from '@angular/core';
//import { NavController, NavParams, LoadingController } from 'ionic-angular';
//import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, ViewController } from 'ionic-angular';
//import { EventListPage } from "../event-list/event-list";
//import {ScanPage} from "../scan/scan";
import { EventPage } from "../events/event";
import { ForgotPasswordPage } from "../forgot_password/frg_pass";
import {Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    data: any;
    output: number;


    public local: Storage;
  //};
//  public loginFormControl: FormGroup;

 /*constructor(
    private _nav: NavController,
    public navParams: NavParams,
    private _loadingController: LoadingController,
    private _formBuilder: FormBuilder) /*{
      // Create FormControl to validate fields
    this.loginFormControl = new FormGroup({
      email: new FormControl('utk', [Validators.required]),
      password: new FormControl('as', [Validators.required, Validators.minLength(8)]),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  public forgot_password() {
      this._nav.push(ForgotPasswordPage);
  }*/

  /*public login() {

    // Validation
    if (!this.loginFormControl.valid) {
      alert("Invalid fields!");
      return;
    }

    let loading = this._loadingController.create({
      content: "Please wait...",
      duration: 3000
    });

    loading.present();

    //Take the values from  the form control
    this.newUser.email = this.loginFormControl.get("email").value.trim();
    this.newUser.password = this.loginFormControl.get("password").value;

    // To simulate Logging in Server Response
    window.setTimeout(() => {
      this._nav.push(EventPage);
    }, 3000);
  } */

  constructor(public navCtrl: NavController, private viewCtrl: ViewController, public http : Http) {
  this.data = {};
  this.data.username = "";
  this.data.password = "";
  this.data.userid  = "";


}
ionViewDidLoad() {
  console.log('ionViewDidLoad LoginPage');
}
public forgot_password() {
    this.navCtrl.push(ForgotPasswordPage);
}

  public login()
  {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  //alert(this.data.username);
  let username = this.data.username;
  let password = this.data.password;
  //let userid = this.data.userid = null;
//  alert(username);
//  alert(password);
  let data = JSON.stringify({username, password});
  this.http.post('https://attendancemobileapp.000webhostapp.com/PostResponse.php',data,headers)
  .map(res => res.json())
  .subscribe(res => {
  //alert("success "+res);
  console.log(res);
  //this.data = JSON.parse(res['_body']).results;
  this.data.userid= JSON.parse(res);
  //this.data = res;
  //this.output = this.data;
  //alert(this.data.userid);


  if (res == "0")
  {
    alert("Login Failed. Please check Username and Password");
  }
  else
  {
    window.setTimeout(() => {
        this.navCtrl.push(EventPage,{userid:this.data.userid});
      }, 3000);
  }
}, (err) => {
  alert(err);
  });
}
}
