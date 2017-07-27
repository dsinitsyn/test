import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CompanyComponent } from "./company/company.component";
import { AdditionComponent } from "./addition/addition.component";
import { WorkshopTableComponent } from "../workshops/workshop-table/workshop-table.component";
import { PersonsComponent } from "./persons/persons.component";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {

    @ViewChild(CompanyComponent) companyComponent: CompanyComponent;
    @ViewChild(WorkshopTableComponent) workshopTableComponent: WorkshopTableComponent;
    @ViewChild(AdditionComponent) additionComponent: AdditionComponent;
    @ViewChild(PersonsComponent) personsComponent: PersonsComponent;
    form: FormGroup;


    constructor(private fb: FormBuilder){
    }

    initFrom(){
        this.form = this.fb.group({
            workshops: this.workshopTableComponent.defineFormArray(),
            persons: this.personsComponent.defineFormArray(),
            company: this.companyComponent.defineFormGroup(),
            addition: this.additionComponent.defineFormGroup()
        });
    }

    ngOnInit(){
        this.initFrom();
    }

    submit(){
        console.log(this.form.value);
    }
}
