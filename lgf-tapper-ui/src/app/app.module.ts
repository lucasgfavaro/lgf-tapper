import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule
, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatStepperModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { TapperNavComponent } from './components/tapper-nav/tapper-nav.component';
import { TapperDashboardComponent } from './components/tapper-dashboard/tapper-dashboard.component';
import { TapperTableComponent } from './components/tapper-table/tapper-table.component';
import { ProductSelectorComponent } from './components/product-selector/product-selector.component';
import { OrderStepperComponent } from './components/order-stepper/order-stepper.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ClubMemberSelectorComponent } from './components/club-member-selector/club-member-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    TapperNavComponent,
    TapperDashboardComponent,
    TapperTableComponent,
    ProductSelectorComponent,
    OrderStepperComponent,
    MessagesComponent,
    ClubMemberSelectorComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, LayoutModule,
     MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
      MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule,
      MatSortModule, AppRoutingModule, MatStepperModule, MatFormFieldModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
