import { Component, Input, OnInit } from '@angular/core';
import { AccordionItem } from "./accordion.model";
import { trigger, style, animate, transition, state } from '@angular/animations';


@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss'],
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
export class AccordionComponent implements OnInit{

    @Input('items') items: AccordionItem[] = [];

    activeItem: AccordionItem;

    constructor(){
    }

    onClick(item: AccordionItem){
        this.activeItem = item;
    }

    ngOnInit(){
        this.activeItem = this.items[0];
    }
}
