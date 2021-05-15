import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {

  constructor(private _snackBar: MatSnackBar) { }
  success(title: string, message: string) {
    this._snackBar.open(message, 'Okay', {
      duration: 2000,
      panelClass: ['success-snackbar']
    });
  }

  error(title: string, message: string) {
    this._snackBar.open(message, 'Okay', {
      duration: 4000,
      // horizontalPosition:"center",
      // verticalPosition:"top",
      panelClass: ['error-snackbar']
    });
  }

  warning(title: string, message: string) {
    this._snackBar.open(message, 'Okay', {
      duration: 2000,
    });
  }

  info(title: string, message: string) {
    this._snackBar.open(message, 'Okay', {
      duration: 2000,
    });
  }
  snackBar(message: string) {
    this._snackBar.open(message, 'Okay', {
      duration: 2000,
    });
  }
}
