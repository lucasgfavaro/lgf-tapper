import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ConsumptionsListComponent } from './components/consumptions-list/consumptions-list.component';
import { TapperTableComponent } from './components/tapper-table/tapper-table.component';
import { RegisterConsumptionComponent } from './components/register-consumption/register-consumption.component';
import { ClubMembersListComponent } from './components/club-members-list/club-members-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
{ path: 'main-menu', component: MainMenuComponent },
{ path: 'list-consumptions', component: ConsumptionsListComponent },
{ path: 'tapper-table', component: TapperTableComponent },
{ path: 'products', component: ProductListComponent },
{ path: '',   redirectTo: '/main-menu', pathMatch: 'full' }
,{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
