import { Component, OnInit, Input } from '@angular/core';
import { TabsItem } from "./tabs.model";
import { trigger, style, animate, transition, state } from '@angular/animations';


@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
    animations: [
        trigger('fade', [
            state('*', style({
                opacity: 1
            })),
            state('void', style({
                opacity: 0
            })),
            transition('void => *', animate(400)),
            transition('* => void', animate(0))
        ]),
    ]
})
export class TabsComponent implements OnInit {

    @Input('items') items: TabsItem[];
    activeItem: TabsItem;

    constructor(){
    }

    onClick(item: TabsItem){
        this.activeItem = item;
    }

    ngOnInit(){
        this.activeItem = this.items[0];
    }
}
