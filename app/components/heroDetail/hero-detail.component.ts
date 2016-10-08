import {Hero} from "../app/app.component";
import {Input, Component} from "@angular/core";

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/components/heroDetail/hero-detail.component.html'
})

export class HeroDetailComponent {
    @Input()
    hero: Hero;
}