import { Component, OnInit } from '@angular/core';

import { StockNumber } from '../../Models/StockNumber';
import { HeroService } from '../../Services/hero.service';

@Component({
  selector: 'my-Stocknumber',
  templateUrl: './stocknumbers.Component.html',
  styleUrls: ['./stocknumbers.Component.css']
})
export class StockNumbersComponent implements OnInit {

  heroes: StockNumber[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getStocks()
      .then(heroes => this.heroes = heroes);
  }
}