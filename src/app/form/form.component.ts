import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CompanyComponent } from "../company/company.component";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
    @ViewChild(CompanyComponent) companyComponent: CompanyComponent;
    form: FormGroup;


    constructor(private fb: FormBuilder){
    }

    initFrom(){
        this.form = this.fb.group({
            workshops: this.fb.array([], Validators.required),
            persons: this.fb.array([]),
            company: this.companyComponent.defineFormGroup()
        });
    }

    ngOnInit(){
        this.initFrom();
    }

    submit(){
        console.log(this.form.value);
    }
}
