import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { PopUpComponent } from './pop-up.component';
@Injectable()
export class PopUpService {
  constructor(private dialog: MatDialog) { }
  dialogRef: MatDialogRef<PopUpComponent>;
  options:any;
  public open(options) {
    this.options=options;
    this.dialogRef = this.dialog.open(PopUpComponent, {    
        data:options,
        disableClose: true
    });
  }

  public getOptions():any {
    return this.options;
  }

  public confirmed(): Observable<any> {
    
    return this.dialogRef.afterClosed().pipe(take(1), map(res => {
        return res;
      }
    ));
  }
  
  public close() {
    this.dialogRef.close();
  }
}