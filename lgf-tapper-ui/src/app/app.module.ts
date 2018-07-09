import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
 
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout'; 
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule
, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatStepperModule, MatTabsModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { TapperNavComponent } from './components/tapper-nav/tapper-nav.component';
import { TapperTableComponent } from './components/tapper-table/tapper-table.component';
import { ProductSelectorComponent } from './components/product-selector/product-selector.component';
import { RegisterConsumptionComponent } from './components/register-consumption/register-consumption.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ClubMemberSelectorComponent } from './components/club-member-selector/club-member-selector.component';
import { PhotoCaptureComponent } from './components/photo-capture/photo-capture.component';
import { ConsumptionsListComponent } from './components/consumptions-list/consumptions-list.component';
import { ClubMembersListComponent } from './components/club-members-list/club-members-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


// TODO: Implement different modules for lazy loading

@NgModule({
  declarations: [
    AppComponent,
    TapperNavComponent,
    TapperTableComponent,
    MainMenuComponent,
    ProductSelectorComponent,
    ClubMemberSelectorComponent,
    RegisterConsumptionComponent,
    PhotoCaptureComponent,
    ConsumptionsListComponent,
    ClubMembersListComponent,
    ProductListComponent,
    MessagesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
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
    MatTabsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
