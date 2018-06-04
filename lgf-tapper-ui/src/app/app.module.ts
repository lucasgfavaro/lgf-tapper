import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { TapperNavComponent } from './components/tapper-nav/tapper-nav.component';
import { TapperDashboardComponent } from './components/tapper-dashboard/tapper-dashboard.component';
import { TapperTableComponent } from './components/tapper-table/tapper-table.component';
import { ProductSelectorComponent } from './components/product-selector/product-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    TapperNavComponent,
    TapperDashboardComponent,
    TapperTableComponent,
    ProductSelectorComponent
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
