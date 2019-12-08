import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhonebookPage } from './phonebook';

@NgModule({
  declarations: [
    PhonebookPage,
  ],
  imports: [
    IonicPageModule.forChild(PhonebookPage),
  ],
})
export class PhonebookPageModule {}
