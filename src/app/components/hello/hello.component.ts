import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent  {



  constructor(  public dialogRef: MatDialogRef<HelloComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {

          data.age = 18;
   }

   closeIt() {
     this.dialogRef.close();
   }
}
