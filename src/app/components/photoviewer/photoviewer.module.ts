import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoviewerComponent } from './photoviewer.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [PhotoviewerComponent],
  exports: [PhotoviewerComponent]
})
export class PhotoviewerComponentModule {}
