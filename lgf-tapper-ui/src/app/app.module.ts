import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TapperNavComponent } from './tapper-nav/tapper-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { TapperDashboardComponent } from './tapper-dashboard/tapper-dashboard.component';
import { TapperTableComponent } from './tapper-table/tapper-table.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TapperNavComponent,
    TapperDashboardComponent,
    TapperTableComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, LayoutModule,
     MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
      MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
