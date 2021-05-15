import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopUpComponent implements OnInit {

  portal: ComponentPortal<any>;
  title:string;
  constructor(
    public dialogRef: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.portal = new ComponentPortal(this.data.component);
    this.title=this.data.title;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  public cancel() {
    this.close(false);
  }
  public close(value) {
    this.dialogRef.close(value);
  }
  public confirm() {
    this.close(true);
  }

}
