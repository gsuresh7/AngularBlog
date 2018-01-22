import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent }        from './Views/Dashboard/dashboard.component'; 
import { StockNumbersComponent }        from './Views/StockNumber/stocknumbers.Component'; 
import { HeroDetailComponent } from './Views/HeroDetails/hero-detail.component';
import { HeroesComponent }        from './Views/Heros/heroes.component'; 
 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:Id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'stocknumbers',     component: StockNumbersComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
