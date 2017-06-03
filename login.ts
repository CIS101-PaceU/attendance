import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EventListPage } from "../event-list/event-list";
import { EventPage } from "../events/event";
import { ForgotPasswordPage } from "../forgot_password/frg_pass";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public newUser = {
    email: '',
    password: ''
  };
  public loginFormControl: FormGroup;

  constructor(
    private _nav: NavController,
    public navParams: NavParams,
    private _loadingController: LoadingController,
    private _formBuilder: FormBuilder) {
      // Create FormControl to validate fields
    this.loginFormControl = new FormGroup({
      email: new FormControl('utk', [Validators.required]),
      password: new FormControl('12345678', [Validators.required, Validators.minLength(8)]),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  public forgot_password() {
      this._nav.push(ForgotPasswordPage);
  }

  public login() {

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
  }



}
