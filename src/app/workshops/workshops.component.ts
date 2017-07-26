import { Component, OnInit } from '@angular/core';
import { AccordionItem } from "../_components/accordion/accordion.model";
import { Workshop } from "./workshop.model";
import { StorageService } from "../_services/storage.service";

@Component({
    selector: 'app-workshops',
    templateUrl: './workshops.component.html',
    styleUrls: ['./workshops.component.scss']
})
export class WorkshopsComponent {

    workshops: Workshop[] = [];
    accordionWorkshops: AccordionItem[] = [];

    constructor(private _storage: StorageService){
        this.workshops = this._storage.workshops;
        this.assignAccordionWorkshops();
        
        console.log(this.workshops);
    }

    assignAccordionWorkshops(){
        this.accordionWorkshops = this.workshops.map((workshop) => {
            return new AccordionItem(workshop.title, workshop.content);
        });
    }
}
