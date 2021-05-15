import { Component, OnInit, ChangeDetectionStrategy, Input, forwardRef, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatRadioGroup } from '@angular/material/radio';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioGroupComponent),
    multi: true,
  },
  {provide: MatRadioGroup, useExisting: RadioGroupComponent}],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioGroupComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input() isFullWidth: boolean = true;
  @Input() isDisabled: boolean = false;
  @Input() label: string = '';
  @Input() display: string = '';
  @Input() value: string = '';

  @Input() items:RadioOption[]  = [];
  @Output() changeValue: EventEmitter<any> = new EventEmitter<any>();

  public form: FormControl = new FormControl();

  onChange: any = () => { };
  onTouched: any = () => { };

  protected _onDestroy = new Subject<void>();
  constructor() { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((res:any)=>{
      this.onChange(res);
    });
  }

  writeValue(obj: any): void {
    this.form.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

}

export class RadioOption
{
    id:string|number
    title:string
}
