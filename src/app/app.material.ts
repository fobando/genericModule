 import { NgModule } from '@angular/core';
 import {MatButtonModule, MatCheckboxModule, MatToolbarModule,
  MatMenuModule, MatDialogModule,
   MatIconModule, MatFormFieldModule, MatInputModule, MatSnackBarModule} from '@angular/material';

const mariosMaterialModules = [
  MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule,
  MatToolbarModule, MatInputModule, MatMenuModule, MatDialogModule, MatSnackBarModule
];

 @NgModule({
  imports: [...mariosMaterialModules],
  exports: [...mariosMaterialModules]
})
export class MaterialModule { }
