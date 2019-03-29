import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPage } from './detail';
import { http } from '@angular/http'
import 'rxjs'

@NgModule({
  declarations: [
    DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailPage),
  ],
})
export class DetailPageModule {}
