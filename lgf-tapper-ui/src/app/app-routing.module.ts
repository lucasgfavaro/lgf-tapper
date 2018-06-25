import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { ConsumptionsListComponent } from './components/consumptions-list/consumptions-list.component';
import { OrderStepperComponent } from './components/order-stepper/order-stepper.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ClubMembersListComponent } from './components/club-members-list/club-members-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const appRoutes: Routes = [
{ path: 'order-consumption', component: OrderStepperComponent },
{ path: 'list-consumptions', component: ConsumptionsListComponent },
{ path: 'club-members', component: ClubMembersListComponent },
{ path: 'products', component: ProductListComponent },
{ path: '',   redirectTo: '/order-consumption', pathMatch: 'full' }
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
