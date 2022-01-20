import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ViewerPage } from './viewer.page';
import { PhotoviewerComponentModule } from '../components/photoviewer/photoviewer.module';
import { ViewerPageRoutingModule } from './viewer-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewerPageRoutingModule,
    PhotoviewerComponentModule
  ],
  declarations: [ViewerPage]
})
export class ViewerPageModule {}
