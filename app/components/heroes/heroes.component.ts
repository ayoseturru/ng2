import {Component, OnInit} from "@angular/core";
import {HeroService} from "../../services/hero.service";
import {Hero} from "../hero";
import {Route, Router} from "@angular/router";

@Component({
    selector: 'my-heroes',
    moduleId: module.id,
    templateUrl: 'heroes.component.html',
})

export class HereosComponent implements OnInit {
    ngOnInit(): void {
        this.getHeroes();
    }

    selectedHero: Hero;
    heroes: Hero[];

    constructor(private heroService: HeroService, private router: Router) {
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    goToDetail(hero): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}