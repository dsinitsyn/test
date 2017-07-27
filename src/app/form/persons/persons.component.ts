import { Component, Input } from '@angular/core';
import { FormArray, FormControl, Validators, FormGroup } from "@angular/forms";
import { trigger, style, animate, transition, state } from '@angular/animations';


@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html',
    styleUrls: ['./persons.component.scss'],
    animations: [
        trigger('slideToggle', [
            state('*', style({
                height: '*'
            })),
            state('void', style({
                height: 0
            })),
            transition('void <=> *', animate(300))
        ]),
    ]
})
export class PersonsComponent {
    @Input('control') formPersons: FormArray;
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    constructor(){
    }

    defineFormArray(){
        return new FormArray([
            new FormGroup({
                name: new FormControl('', Validators.required),
                email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
                phone: new FormControl('', Validators.required)
            })
        ]);
    }


    addPerson(){
        this.formPersons.push(
            new FormGroup({
                name: new FormControl('', []),
                email: new FormControl('', Validators.pattern(this.emailRegex)),
                phone: new FormControl('', [])
            })
        )
    }

}
