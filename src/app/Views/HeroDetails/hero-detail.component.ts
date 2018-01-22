

import { Component, Input, OnInit ,Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from '../../Services/hero.service';

import { Hero } from '../../Models/hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit  {
 
@Input() hero: Hero;
@Input() FromHero=true;
Checkit:string;
@Output() add = new EventEmitter<Hero>();

constructor(private heroService: HeroService,private route: ActivatedRoute,private location: Location)
{ }

ngOnInit(): void {
 
  this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['Id']))
    .subscribe(hero => this.hero = hero);
    console.log( this.route.params['Id']);
    console.log(this.FromHero);
    console.log(this.Checkit);
}


goBack(): void {
  this.location.back();
}
save(): void {
  this.heroService.update(this.hero)
    .then(() => this.goBack());
}
  
}