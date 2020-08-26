import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserdataModule } from './userdata/userdata.module';
import { SrvUserService } from './srv-user.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserdataModule
  ],
  providers: [SrvUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
