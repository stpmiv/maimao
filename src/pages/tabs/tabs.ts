import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  customer:any=0;
  constructor(public navctrl: NavController,public navParam: NavParams, public http: Http){
    this.http.get('http://localhost:8080/product')
    .map(res=>res.json())
    .subscribe(data=>{
      this.customer = data;
    });
  
    }
  }

  constructor() {

  }
}
