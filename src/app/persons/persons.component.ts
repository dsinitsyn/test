import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html',
    styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {

    @Input('control') formPersons: FormArray;
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    constructor(private fb: FormBuilder){
    }

    ngOnInit(){
        this.addPerson(true);
    }


    addPerson(isRequired:boolean = false){
        this.formPersons.push(
            this.fb.group({
                name: new FormControl('', isRequired ? Validators.required : []),
                email: new FormControl('', isRequired ? [Validators.required, Validators.pattern(this.emailRegex)] : Validators.pattern(this.emailRegex)),
                phone: new FormControl('', isRequired ? Validators.required : [])
            })
        )
    }

}
