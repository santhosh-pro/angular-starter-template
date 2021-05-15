import { Component, OnInit, ChangeDetectionStrategy, forwardRef, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckBoxComponent),
    multi: true,
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckBoxComponent implements OnInit, OnDestroy, ControlValueAccessor {

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

  inputChange() {
    this.changeValue.emit(this.form.value);
    this.onChange(this.form.value);
  }

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
