import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { trigger, style, animate, transition, state } from '@angular/animations';
import { StorageService } from "../../_services/storage.service";


@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss'],
    animations: [
        trigger('slideToggle', [
            state('*', style({
                height: '*',
                opacity: 1
            })),
            state('void', style({
                height: 0,
                opacity: 0
            })),
            transition('void <=> *', animate(300))
        ]),
    ]
})
export class CompanyComponent {
    @Input('group') formGroup: FormGroup;
    isBillingAddress: boolean = false;
    countries: {
        id: string,
        text: string
    }[] = [];

    constructor(private _storage: StorageService){
        this.setCountries();
    }

    setCountries(){
        this._storage.getCountries().then(countries => {
            this.countries = countries.map( country => {
                return {
                    id: country['alpha2Code'],
                    text: country['name']
                }
            })
        });
    }
    
    defineFormGroup(){
        return new FormGroup({
            name: new FormControl('', Validators.required),
            street: new FormControl('', Validators.required),
            building: new FormControl('', Validators.required),
            zip: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            country: new FormControl('', Validators.required)
        });
    }

    toggleBillingAddress(){
        this.isBillingAddress = !this.isBillingAddress;

        this.isBillingAddress
            ? this.formGroup.addControl('billingAddress', this.defineFormGroup())
            : this.formGroup.removeControl('billingAddress');
    }

}
