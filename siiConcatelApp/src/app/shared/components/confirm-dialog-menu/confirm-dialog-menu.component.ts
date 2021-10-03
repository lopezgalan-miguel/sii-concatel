import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog-menu',
  templateUrl: './confirm-dialog-menu.component.html',
  styleUrls: ['./confirm-dialog-menu.component.scss']
})
export class ConfirmDialogMenuComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialogRef: MatDialogRef<ConfirmDialogMenuComponent>,) { }

  ngOnInit(): void {
    console.log(this.dialogData)
  }

  accept() {
    this.dialogRef.close({accept: true})
  }

  cancel() {
    this.dialogRef.close()
  }

}
