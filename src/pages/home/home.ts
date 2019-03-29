import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Detail} from '/detail,/detail';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  customer:any=0;
  constructor(public navctrl: NavController,public navParam: NavParams, public http: Http){
    this.http.get('http://localhost:8080/product')
    .map(res=>res.json())
    .subscribe(data=>{
      this.customer = data;
    });
  }
showDetail(id){
  this.navctrl.push(DetailPage,{customerID:id});
  
}
 

}
