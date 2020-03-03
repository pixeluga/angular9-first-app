import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core'
import { Country } from '../app.component'

@Component({
    selector: 'countries-list',
    templateUrl: './countries-list.component.html'
})
export class CountriesListComponent implements OnInit {
    @Input() countries: Country[] = []
    @Output() onChange = new EventEmitter<void>()
    private displayCountries: Country[] = []

    constructor() {}

    ngOnInit() {
        this.displayCountries = this.countries
    }

    onSelect(name: string) : void {
        this.onChange.emit()
        this.displayCountries = this.displayCountries.filter((country) => country.name === name)
    }
    onSearch(value: string) : void {
        this.onChange.emit()
        this.displayCountries = this.countries.filter((country) => ((country.name).toLocaleLowerCase('en-US')).includes(value.toLocaleLowerCase('en-US')))
    }
}