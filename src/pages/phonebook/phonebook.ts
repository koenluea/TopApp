import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhonebookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phonebook',
  templateUrl: 'phonebook.html',
})
export class PhonebookPage {

  contactArray = [{name: 'fon', telephone:'0622420327', imageUrl: 'assets/imgs/t1.jpg'},
  {name: 'kong', telephone:'0622420327', imageUrl: 'assets/imgs/t2.jpg'},
  {name: 'wat', telephone:'0622420327', imageUrl: 'assets/imgs/t3.jpg'},
  {name: 'sun', telephone:'0622420327', imageUrl: 'assets/imgs/t4.jpg'}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhonebookPage');
  }

}//end
