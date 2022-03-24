import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { Hello2Component } from './hello2/hello2.component';
import { Hello3Component } from './hello3/hello3.component';
import { MessageComponent } from './message/message.component';
import { MystyleDirective } from './mystyle.directive';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    Hello2Component,
    Hello3Component,
    MessageComponent,
    MystyleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [Hello3Component]
})
export class AppModule { }
