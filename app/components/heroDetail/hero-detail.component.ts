import {Input, Component, OnInit} from "@angular/core";
import {HeroService} from "../../services/hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from '@angular/common';
import {Hero} from "../hero";

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/components/heroDetail/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    @Input()
    hero: Hero;

    constructor(private  heroService: HeroService, private route: ActivatedRoute, private location: Location) {

    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero).then(() => this.goBack());
    }
}