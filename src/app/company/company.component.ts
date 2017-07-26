import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss']
})
export class CompanyComponent  {
    @Input('group') formGroup: FormGroup;
    isBillingAdderss: boolean = false;

    constructor(private fb: FormBuilder){
    }

    defineFormGroup(){
        return new FormGroup({
            name: new FormControl('123', Validators.required),
            street: new FormControl('234')
        });
    }

    toggleBillingAddress(){
        this.isBillingAdderss = !this.isBillingAdderss;
    }

}
