import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { AppConfig, APP_CONFIG } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
  ],
  exports: [RouterModule],
  providers: [{
    provide: APP_CONFIG, useValue: AppConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
