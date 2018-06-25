import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

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
import { PhotoCaptureComponent } from './components/photo-capture/photo-capture.component';
import { ConsumptionsListComponent } from './components/consumptions-list/consumptions-list.component';
import { ClubMembersListComponent } from './components/club-members-list/club-members-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    TapperNavComponent,
    TapperDashboardComponent,
    TapperTableComponent,
    ProductSelectorComponent,
    OrderStepperComponent,
    MessagesComponent,
    ClubMemberSelectorComponent,
    PhotoCaptureComponent,
    ConsumptionsListComponent,
    ClubMembersListComponent,
    ProductListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
