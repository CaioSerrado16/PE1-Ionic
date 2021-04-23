import { ComponentModule } from './../../component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPageRoutingModule } from './forgot-routing.module';

import { ForgotPage } from './forgot.page';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      ComponentModule,
      ForgotPageRoutingModule
    ],
    declarations: [ForgotPage]
})
export class ForgotPageModule {}
