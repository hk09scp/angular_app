import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Sort, MatBottomSheet, MatBottomSheetRef, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

export interface People {
  name:string;
  mail:string;
  tel:string;
  age:number;
}

export interface DialogData {
  input:string;
  name:string;
  pass:string;
}

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  message:string;
  message3:string;
  message4:string;
  message5:string;
  myControl:FormGroup;
  myControl2:FormGroup;
  myControl3:FormGroup;
  data:People[];
  sortedData:People[];

  constructor(private bottomSheet:MatBottomSheet, private dialog:MatDialog) { }

  ngOnInit() {
    this.message = 'please select button.';
    this.message4 = 'bottom sheet.';
    this.message5 = 'dialog.';
    /*
    this.myControl = new FormGroup({
      name: new FormControl(''),
      number: new FormControl(0),
      email: new FormControl(''),
    });
    */
   this.myControl = new FormGroup({
     check: new FormControl(true),
     radio: new FormControl('male'),
   });
   
   this.myControl2 = new FormGroup({
     select1: new FormControl(''),
     select2: new FormControl(''),
     slider1: new FormControl(''),
     slider2: new FormControl(''),
     picker1: new FormControl(new Date()),
   });

   this.myControl3 = new FormGroup({
     list1: new FormControl(''),
   });

   this.data = [
     {name:'Leo', mail:'leo@mewo', tel:'012345', age:14},
     {name:'Hana', mail:'hana@mewo', tel:'123456', age:12},
     {name:'Joao', mail:'joao@mewo', tel:'234567', age:10},
     {name:'Chibi', mail:'chibi@mewo', tel:'345678', age:35},
     {name:'Shiro', mail:'shiro@mewo', tel:'456789', age:45},
   ];
   this.sortedData = this.data.slice();
  }

  sortData(sort:Sort) {
    const data = this.data.slice();
    if(!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a,b) => {
      const asc = sort.direction == 'asc' ? 1 : -1;
      switch(sort.active){
        case 'name': return (a.name < b.name ? 1 : -1) * asc;
        case 'mail': return (a.mail < b.mail ? 1 : -1) * asc;
        case 'tel': return (a.tel < b.tel ? 1 : -1) * asc;
        case 'age': return (a.age < b.age ? 1 : -1) * asc;
      }
    });
  }

  showDrag() {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '400px',
      data: { name:'?', pass:'' }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.message5 = JSON.stringify(result);
    })
  }

  click() {
    this.message = JSON.stringify(this.myControl.value);
  }

  click2() {
    this.message = JSON.stringify(this.myControl2.value);
  }

  click3() {
    this.message3 = JSON.stringify(this.myControl3.value);
  }

  change(v:string) {
    this.message = 'select; "' + v + '".';
  }

  showSheet() {
    this.bottomSheet.open(MysheetComponent);
  }
}

@Component({
  selector: 'app-mysheet',
  template: `
    <h2>Select item</h2>
    <mat-action-list>
      <button mat-list-item (click)="click('')">Top Page</button>
      <button mat-list-item (click)="click('hello')">Hello</button>
      <button mat-list-item (click)="click('msg')">Message</button>
    </mat-action-list>
  `,
})
export class MysheetComponent {
  
  constructor(private router:Router,
    private bottomSheetRef:
    MatBottomSheetRef<MysheetComponent>){}
  
  click(path:string): void {
    this.bottomSheetRef.dismiss();
    this.router.navigate([path]);
  }
}

@Component({
  selector: 'app-mydlog',
  template:`
  <mat-dialog-content style="height:250px;">
    <p>please input:</p>
    <mat-form-field>
      <input placeholder="name" type="text" matInput [(ngModel)]="data.name">
    </mat-form-field>
    <mat-form-field>
      <input placeholder="password" type="password" matInput [(ngModel)]="data.pass">
    </mat-form-field>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="data">OK</button>
      <button mat-button (click)="cancel()">Cancel</button>
    </div>
  <mat-dialog-content>
  `,
})
export class MyDialogComponent {
  constructor(public dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData) {}
  
  cancel(){
    this.dialogRef.close();
  }
}
