import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule
, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatButtonToggleModule, MatSelectModule} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout'; 

import { AppRoutingModule } from './app-routing.module';
import { AppMenuComponent } from './components/app-menu/app-menu.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { BarConsumptionComponent } from './components/bar-consumption/bar-consumption.component';
import { BarConsumptionListComponent } from './components/bar-consumption-list/bar-consumption-list.component';
import { BarProductListComponent } from './components/bar-product-list/bar-product-list.component';
import { ClubMemberSelectorComponent } from './components/selectors/club-member-selector/club-member-selector.component';
import { ProductSelectorComponent } from './components/selectors/product-selector/product-selector.component';
import { PhotoCaptureComponent } from './components/photo-capture/photo-capture.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// TODO: Implement different modules for lazy loading

@NgModule({
  declarations: [
    AppMenuComponent,
    AppHeaderComponent,
    AppNavbarComponent,
    AppFooterComponent,
    BarConsumptionComponent,
    BarConsumptionListComponent,
    BarProductListComponent,
    ProductSelectorComponent,
    ClubMemberSelectorComponent,
    PhotoCaptureComponent,
    MessagesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppMenuComponent]
})
export class AppModule { }
