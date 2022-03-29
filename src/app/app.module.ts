import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { Hello2Component } from './hello2/hello2.component';
import { Hello3Component } from './hello3/hello3.component';
import { Hello4Component } from './hello4/hello4.component';
import { MessageComponent } from './message/message.component';
import { MystyleDirective } from './mystyle.directive';
import { MycheckService } from './mycheck.service';
import { MaterialComponent, MysheetComponent, MyDialogComponent } from './material/material.component';
//import { FireComponent } from './fire/fire.component';

import { MatButtonModule, MatNativeDateModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule} from '@angular/material/tabs';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
//import { AngularFireModule } from '@angular/fire';
//import { AngularFireAuthModule } from '@angular/fire/auth';
//import { AngularFirestoreModule } from '@angular/fire/firestore';


const routes: Routes = [
  //{ path: 'fire', component: FireComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'hello', component: Hello4Component },
  { path: 'msg', component: MessageComponent },
];

/*
var config = {
  apiKey: "AIzaSyCX3MC94PJCe-IKqQFHQ7EtTJIMm9rvsMU",
  authDomain: "angularapps-b7b13.firebaseapp.com",
  databaseURL: "https://angularapps-b7b13-default-rtdb.firebaseio.com",
  projectId: "angularapps-b7b13",
  storageBucket: "angularapps-b7b13.appspot.com",
  messagingSenderId: "138155357334"
}
*/

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    Hello2Component,
    Hello3Component,
    Hello4Component,
    MessageComponent,
    MystyleDirective,
    MaterialComponent,
    MysheetComponent,
    MyDialogComponent,
    //FireComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    ),
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatSortModule,
    MatTabsModule,
    MatBottomSheetModule,
    MatDialogModule,
    //AngularFireModule.initializeApp(config),
    //AngularFirestoreModule,
    //AngularFireAuthModule,
  ],
  entryComponents: [
    MysheetComponent,
    MyDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {}
}
