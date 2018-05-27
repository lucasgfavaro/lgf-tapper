import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TapperNavComponent } from './tapper-nav/tapper-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TapperNavComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
