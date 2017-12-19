import { Component } from '@angular/core';
import { NavController, ViewController,AlertController } from 'ionic-angular';
import { EventPage } from "../events/event";
import { ForgotPasswordPage } from "../forgot_password/frg_pass";
import {Http } from '@angular/http';
import { GooglePlus } from '@ionic-native/google-plus';
//import firebase from 'firebase';
//import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    data: any;
    output: number;
    public local: Storage;
    userProfile: any = null;
    displayName: any;

 email: any;
 familyName: any;
 givenName: any;
 userId: any;
 imageUrl: any;
 isLoggedIn:boolean = false;


  constructor(public navCtrl: NavController, private viewCtrl: ViewController, public http : Http,private googlePlus: GooglePlus,public alertCtrl: AlertController) {
  this.data = {};
  this.data.username = "";
  this.data.password = "";
  this.data.userid  = "";
 /*firebase.auth().onAuthStateChanged( user => {
     if (user){
       this.userProfile = user;
     } else {
       this.userProfile = null;
     }
   });*/

}
ionViewDidLoad() {
  console.log('ionViewDidLoad LoginPage');
}
public forgot_password() {
    this.navCtrl.push(ForgotPasswordPage);
}

/*public loginUser() {
  this.googlePlus.login({
    'webClientId': '916344351524-d4j5tm4e2m8e3lhvtqb14duii3nd0e8l.apps.googleusercontent.com',
    'offline': true
  })

  .then( res => {
    alert("login succ");
    console.log(res);
        this.displayName = res.displayName;
        this.email = res.email;
        this.familyName = res.familyName;
        this.givenName = res.givenName;
        this.userId = res.userId;
        this.imageUrl = res.imageUrl;
        this.isLoggedIn = true;

alert(this.displayName);
alert(this.email);
alert(res.userId);
window.setTimeout(() => {
    this.navCtrl.push(EventPage,{userid:this.data.userid});
  }, 3000);

  //alert("ere");
  /*  firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then( success => {
        alert("login success");
        //console.log("Firebase success: " + JSON.stringify(success));
      })
      .catch(err=>{alert("login fail");})*/
    //  .catch( error => console.log("Firebase failure: " + JSON.stringify(error)));
/*  }).catch(err=>{console.error(err); })


this.googlePlus.logout()
.then(res=>{alert("logout success");})
.catch(err=>{alert("error while logout");
})
}*/

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
  this.http.post('https://attendancemobileapp.000webhostapp.com/LoginPage.php',data,headers)
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
    let basicAlert = this.alertCtrl.create({
    title: 'Attendance Module',
    subTitle:"Login Failed. Please check Username and Password",
    buttons: ['OK']
  });
   basicAlert.present();
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
