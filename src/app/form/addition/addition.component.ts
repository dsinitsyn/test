import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'app-addition',
    templateUrl: 'addition.component.html',
    styleUrls: ['addition.component.scss']
})
export class AdditionComponent implements OnInit {

    @Input('group') formGroup: FormGroup;
    questions: any[] = ['Question 1','Question 2','Question 3','Question 4'];

    constructor(){
    }

    ngOnInit(){
    }

    defineFormGroup(){
        return new FormGroup({
            poNumber: new FormControl(''),
            closedQuestion: new FormControl('', Validators.required),
            newsletter: new FormControl(false),
            terms: new FormControl(false,  Validators.pattern('true')),
            discount: new FormControl('',  Validators.required),
        });
    }

}
