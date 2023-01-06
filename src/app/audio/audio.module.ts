import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudioRoutingModule } from './audio-routing.module';
import { AudioComponent } from './audio.component';
import { SharedModule } from '../core/shared/shared.module';


@NgModule({
  declarations: [
    AudioComponent
  ],
  imports: [
    CommonModule,
    AudioRoutingModule,
    SharedModule
  ],
  exports: [
    AudioComponent
]
})
export class AudioModule { }
