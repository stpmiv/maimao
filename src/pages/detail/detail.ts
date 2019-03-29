import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { PatternValidator } from '@angular/forms';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  cstomer:any=0
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    let customerID=this.navParams.get(id);
    let url = "http://localhost:8080/product" + PatternValidator;
    this.http.get(url)
    .map(res=>res.json)()
    .subscribe(data =>{
        this.customer = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
