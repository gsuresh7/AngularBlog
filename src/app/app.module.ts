import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material'; 
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { AppComponent }        from './app.component'; 
import { HeroesComponent }        from './Views/Heros/heroes.component'; 
import { DashboardComponent }        from './Views/Dashboard/dashboard.component'; 
import { StockNumbersComponent }        from './Views/StockNumber/stocknumbers.Component';
import { HttpModule }    from '@angular/http';
import 'hammerjs';


import { HeroSearchComponent } from './Views/HeroSearch/hero-search.component';
import { HeroDetailComponent } from './Views/HeroDetails/hero-detail.component';
import { SidenavComponent } from './Views/Navigation/sidenav/sidenav.component';
import { NavItemComponent } from './Views/Navigation/nav-item';
import { HeroService } from './Services/hero.service';
import { HeroSearchService } from './Services/hero-search.service';
import { AppRoutingModule }     from './app-routing.module';

import {AccordionModule,PanelModule,GalleriaModule} from 'primeng/primeng';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    AccordionModule,
    PanelModule,
    GalleriaModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    StockNumbersComponent,
    SidenavComponent,
    NavItemComponent
  ],
  providers:[ 
    HeroService,
    HeroSearchService
     ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
