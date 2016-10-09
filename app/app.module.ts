import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HereosComponent} from "./components/heroes/heroes.component";
import {HeroDetailComponent} from "./components/heroDetail/hero-detail.component";
import {AppComponent} from "./components/app/app.component";
import {HeroService} from "./services/hero.service";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./components/dashboard/dashboard.component";


@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot([{
        path: 'heroes',
        component: HereosComponent
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
    }])],
    declarations: [HereosComponent, HeroDetailComponent, HereosComponent, AppComponent, DashboardComponent],
    providers: [HeroService],
    bootstrap: [AppComponent]
})

export class AppModule {

}