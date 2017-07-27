import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Workshop } from "../workshop.model";
import { StorageService } from "../../_services/storage.service";
import { FormArray, FormControl, Validators } from "@angular/forms";
import { Training } from "../training.model";

@Component({
    selector: 'app-workshop-table',
    templateUrl: './workshop-table.component.html',
    styleUrls: ['./workshop-table.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class WorkshopTableComponent {
    @Input('array') formWorkshops: FormArray;
    workshops: Workshop[] = [];
    trainings: Training[] = [];

    constructor(private _storage: StorageService){
        this.workshops = _storage.workshops;
        this.assignTrainings();
    }

    assignTrainings(){
        this.workshops.forEach(workshop => {
            this.trainings = this.trainings.concat(workshop.trainings);
        })
    }

    defineFormArray(){
        return new FormArray([], Validators.required)
    }

    onSelect(training){
        training.selected = !training.selected;

        if (training.selected){
            this.formWorkshops.push(new FormControl(training.id));
        }else{
            let index = this.formWorkshops.controls.findIndex(workshop => workshop.value == training.id);
            this.formWorkshops.removeAt(index);
        }
    }
}
