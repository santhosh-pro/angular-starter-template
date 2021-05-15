import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsModule } from './controls/controls.module';
import { AppMaterialModule } from './app-material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ControlsModule,
    AppMaterialModule
  ],
  exports:[
    ControlsModule,
    AppMaterialModule
  ]
})
export class SharedModule { }
