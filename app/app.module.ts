import './rxjs-extensions';
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HeroesComponent} from "./components/heroes/heroes.component";
import {HeroDetailComponent} from "./components/heroDetail/hero-detail.component";
import {AppComponent} from "./components/app/app.component";
import {HeroService} from "./services/hero.service";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./services/in-memory-data.service";
import {HeroSearchComponent} from "./components/heroSearch/hero-search.component";
import {HeroSearchService} from "./services/hero-search.service";

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot([{
        path: 'heroes',
        component: HeroesComponent
    }, {
        path: 'dashboard',
        component: DashboardComponent
    }, {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }, {
        path: 'detail/:id',
        component: HeroDetailComponent
    }]), HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService)],
    declarations: [HeroesComponent, HeroDetailComponent, AppComponent, DashboardComponent, HeroSearchComponent],
    providers: [HeroService, HeroSearchService],
    bootstrap: [AppComponent]
})

export class AppModule {

}