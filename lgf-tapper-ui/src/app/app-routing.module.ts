import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { BarConsumptionListComponent } from './components/bar-consumption-list/bar-consumption-list.component';
import { BarConsumptionComponent } from './components/bar-consumption/bar-consumption.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
{ path: 'bar-consumption', component: BarConsumptionComponent },
{ path: 'bar-consumption-list', component: BarConsumptionListComponent },
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
