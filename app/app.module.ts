import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./components/app/app.component";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./components/heroDetail/hero-detail.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, HeroDetailComponent],
    bootstrap: [AppComponent]
})

export class AppModule {

}