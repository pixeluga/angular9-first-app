import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CountrySelectButtonComponent } from './country-select-button/country-select-button.component';
import { CountriesListComponent } from './countries-list/countries-list.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        CountrySelectButtonComponent,
        CountriesListComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }