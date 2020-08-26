import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdatadatatableComponent } from './userdatadatatable/userdatadatatable.component';
import { MatTableModule }  from '@angular/material/table';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UserdatadatatableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule
  ],
  exports:[UserdatadatatableComponent]
})
export class UserdataModule { }
