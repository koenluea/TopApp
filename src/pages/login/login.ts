import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginResult;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
 if
  signIn(i_username, i_password){
    alert("Hello world"+i_username+" "+i_password);
    if (i_password == '1234'){
      this.loginResult = "Welcom" +i_username;
      this.navCtrl.push("PhonebookPage");
    }else{
      this.loginResult = "Failed : Try again";
    }

  }

}//end class
