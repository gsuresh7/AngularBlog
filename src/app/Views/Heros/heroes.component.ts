import { Component ,OnInit,ViewChild} from '@angular/core';
import { Router }   from '@angular/router';

import { Location }                 from '@angular/common';
import { Hero } from '../../Models/hero';
import { HeroService } from '../../Services/hero.service';
import {HeroDetailComponent } from '../HeroDetails/hero-detail.component';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['../../ViewStyles.css']
 
})
export class HeroesComponent implements OnInit {
 
 @ViewChild(HeroDetailComponent) herodetailChildView: HeroDetailComponent
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  FromHeroFlag:boolean;
 


 constructor(
    private router: Router,
    private heroService: HeroService,private location: Location) {  }
 
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
 
  ngOnInit(): void {
    
   
    this.getHeroes();
  }
 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.FromHeroFlag=false;
    this.herodetailChildView.Checkit=hero.Name;
    console.log(this.FromHeroFlag);
    console.log(this.herodetailChildView.Checkit);

  }

  add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService.create(name)
    .then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
      
    });   
}

updateToDB(hero: Hero): void {
  this.heroService.update(hero)
    .then(() => this.goBack());
}
goBack(): void {
  this.location.back();
}
delete(hero: Hero): void {
  this.heroService
      .delete(hero.Id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
}

  gotoDetail(): void {
    console.log(this.FromHeroFlag);
    this.FromHeroFlag=true;
     console.log(this.FromHeroFlag);
  this.router.navigate(['/detail', this.selectedHero.Id]);
}
}
    
