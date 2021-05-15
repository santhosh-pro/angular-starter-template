import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';
import { AppMaterialModule } from '../app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordInputComponent } from './password-input/password-input.component';
import { ButtonComponent } from './button/button.component';
import { ExpandableComponent } from './expandable/expandable.component';
import { StepperComponent } from './stepper/stepper.component';
import { StepComponent } from './stepper/step/step.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { SelectComponent } from './select/select.component';
import { SliderComponent } from './slider/slider.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { SwitchComponent } from './switch/switch.component';
import { TableComponent } from './table/table.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CardComponent } from './card/card.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ConfirmDialogService } from './confirm-dialog/confirm-dialog.service';
import { PopUpComponent } from './pop-up/pop-up.component';
import { PopUpService } from './pop-up/pop-up.service';
import { ReOrderTaskComponent } from './re-order-task/re-order-task.component';

@NgModule({
  declarations: [
    TextInputComponent, 
    PasswordInputComponent, 
    ButtonComponent, 
    ExpandableComponent, 
    StepperComponent, 
    StepComponent, 
    CheckBoxComponent, 
    SelectComponent, 
    SliderComponent, 
    RadioGroupComponent, 
    SwitchComponent, 
    TableComponent, SideNavComponent, CardComponent, TopBarComponent, ConfirmDialogComponent, PopUpComponent, ReOrderTaskComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    TextInputComponent, 
    PasswordInputComponent, 
    ButtonComponent, 
    ExpandableComponent, 
    StepperComponent, 
    StepComponent, 
    CheckBoxComponent, 
    SelectComponent, 
    SliderComponent, 
    RadioGroupComponent, 
    SwitchComponent, 
    TableComponent, SideNavComponent, CardComponent, TopBarComponent, ConfirmDialogComponent, PopUpComponent, ReOrderTaskComponent
  ],
  providers:[
    ConfirmDialogService,
    PopUpService
  ]
})
export class ControlsModule { }
