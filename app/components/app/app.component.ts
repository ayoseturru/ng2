import {Component} from "@angular/core";
import {Hero} from "../hero";

@Component({
    selector: 'app',
    templateUrl: 'app/components/app/app.component.html'
})

export class AppComponent {
    selectedHero: Hero;
    title: string = 'Heroes app!';
    heroes: Hero[] = HEROES;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}

const HEROES: Hero[] = [
    {id: 11, name: 'Mr. Nice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bombasto'},
    {id: 14, name: 'Celeritas'},
    {id: 15, name: 'Magneta'},
    {id: 16, name: 'RubberMan'},
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr IQ'},
    {id: 19, name: 'Magma'},
    {id: 20, name: 'Tornado'}
];