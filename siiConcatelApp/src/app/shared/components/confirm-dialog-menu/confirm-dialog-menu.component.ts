import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmModalInterface } from '../../interfaces/confirmModal.interface';

@Component({
  selector: 'app-confirm-dialog-menu',
  templateUrl: './confirm-dialog-menu.component.html',
  styleUrls: ['./confirm-dialog-menu.component.scss']
})
export class ConfirmDialogMenuComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: ConfirmModalInterface,
    public dialogRef: MatDialogRef<ConfirmDialogMenuComponent>,) { }

  ngOnInit(): void {
  }

  accept() {
    this.dialogRef.close({accept: true})
  }

  cancel() {
    this.dialogRef.close()
  }

}
