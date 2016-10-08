import {Component, OnInit} from "@angular/core";
import {Hero} from "../hero";
import {HeroService} from "../../services/hero.service";

@Component({
    selector: 'app',
    templateUrl: 'app/components/app/app.component.html',
    providers: [HeroService]
})

export class AppComponent implements OnInit {
    ngOnInit(): void {
        this.getHeroes();
    }

    selectedHero: Hero;
    title: string = 'Heroes app!';
    heroes: Hero[];

    constructor(private heroService: HeroService) {
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
}