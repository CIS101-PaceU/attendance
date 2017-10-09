import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EventListPage } from "../event-list/event-list";
import { EventPage } from "../events/event";
import { ForgotPasswordPage } from "../forgot_password/frg_pass";
import {Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public newUser = {
    email: '',
    password: ''
  };
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
  constructor(public http:Http) { }

  login()
  {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let data=JSON.stringify({username:"raja"});
  this.http.post('https://attendancemobileapp.000webhostapp.com/login.php',data,headers)
  .map(res => res.json())
  .subscribe(res => {
  alert("success "+res);
  }, (err) => {
  alert("failed");
  });
  }



}
