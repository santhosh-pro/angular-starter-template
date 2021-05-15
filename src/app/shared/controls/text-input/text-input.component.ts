import { Component, OnInit, ChangeDetectionStrategy, forwardRef, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextInputComponent),
    multi: true,
  }]
})
export class TextInputComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input() isFullWidth: boolean = true;
  @Input() isDisabled: boolean = false;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() errorMessage: string = '';
  
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
