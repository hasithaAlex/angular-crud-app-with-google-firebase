import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

export const firebaseConfig = {
  apiKey: "AIzaSyAtt4M9PEioX0xD2Ze9TKHkFEW3DSU3Kpg",
  authDomain: "chatapp-21d95.firebaseapp.com",
  databaseURL: "https://chatapp-21d95.firebaseio.com",
  projectId: "chatapp-21d95",
  storageBucket: "chatapp-21d95.appspot.com",
  messagingSenderId: "483452859100"
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
