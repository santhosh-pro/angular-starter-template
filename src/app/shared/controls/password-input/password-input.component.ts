import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PasswordInputComponent),
    multi: true,
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordInputComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input() isFullWidth: boolean = true;
  @Input() isDisabled: boolean = false;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  
  @Output() changeValue: EventEmitter<any> = new EventEmitter<any>();

  public form: FormControl = new FormControl();

  onChange: any = () => { };
  onTouched: any = () => { };

  protected _onDestroy = new Subject<void>();
  constructor() { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((res:any)=>{
      this.onChange(res);
    })
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
