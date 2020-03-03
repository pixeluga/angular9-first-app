import { Component } from '@angular/core';
import './css/styles.css';

export interface Countries {
    id: string
    countriesArr: Array<{ name: string, flag: string }>
}

export interface Country {
    flag: string
    name: string
}

const countriesList1: Country[] = [
    { name: 'Austria', flag: '🇦🇹' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Cyprus', flag: '🇨🇾' },
    { name: 'Estonia', flag: '🇪🇪' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'Iceland', flag: '🇮🇸' },
    { name: 'Italy', flag: '🇮🇹' },
    { name: 'Spain', flag: '🇪🇸' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'United States', flag: '🇺🇸' },
    { name: 'Ukraine', flag: '🇺🇦' }
]

const countriesList2: Country[] = [
    {name: 'Aruba', flag: '🇦🇼'},
    {name: 'Argentina', flag: '🇦🇷'},
    {name: 'Barbados', flag: '🇧🇧'},
    {name: 'Bermuda', flag: '🇧🇲'},
    {name: 'Chile', flag: '🇨🇱'},
    {name: 'Dominica', flag: '🇩🇲'},
    {name: 'Micronesia', flag: '🇫🇲'},
    {name: 'New Zealand', flag: '🇳🇿'},
    {name: 'Panama', flag: '🇵🇦'},
    {name: 'Sri Lanka', flag: '🇱🇰'}
]

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public buttonId: string
    public buttonText: string
    public ulDisplay: boolean = false
    public countries: Countries[] = [
        { id: 'countriesList1', countriesArr: countriesList1 },
        { id: 'countriesList2', countriesArr: countriesList2 }
    ]
}