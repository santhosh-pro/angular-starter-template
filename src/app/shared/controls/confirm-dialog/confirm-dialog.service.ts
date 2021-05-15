import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ConfirmDialog } from './confirm-dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';
@Injectable()
export class ConfirmDialogService {
  constructor(private dialog: MatDialog) { }
  dialogRef: MatDialogRef<ConfirmDialogComponent>;
  
  public open(option:ConfirmDialog) {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, {    
         data: {
           title: option.title,
           message: option.message,
           cancelText: option.cancelText,
           confirmText: option.confirmText
         }
    });
  }
  public confirmed(): Observable<any> {
    
    return this.dialogRef.afterClosed().pipe(take(1), map(res => {
        return res;
      }
    ));
  }
}