import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core'
import { Countries, Country } from '../app.component'

@Component({
    selector: 'country-select-button',
    templateUrl: './country-select-button.component.html'
})
export class CountrySelectButtonComponent implements OnInit {
    @Input() buttonId: string
    @Input() buttonText: string = 'Text'
    @Input() ulDisplay: boolean = false
    @Input() countries: Countries[] = []
    public countriesArray: Country[] = []
    @Output() onToogle = new EventEmitter<void>()

    constructor() {}

    ngOnInit() {
        this.countriesArray = (this.countries.find((item) => item.id === this.buttonId)).countriesArr
    }

    onChange() : void {
        this.onToogle.emit()
        this.ulDisplay = !this.ulDisplay;
    }
}