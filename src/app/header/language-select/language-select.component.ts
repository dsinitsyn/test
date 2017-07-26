import { Component, ElementRef, OnInit } from '@angular/core';
import { Language } from "../../_models/language.model";

@Component({
    selector: 'app-language-select',
    templateUrl: './language-select.component.html',
    styleUrls: ['./language-select.component.scss'],
    host: {
        '(document:click)': 'closeSelect($event)',
    },
})
export class LanguageSelectComponent implements OnInit {

    languages: Language[] = [
        new Language('Nederlands', 'nl', '../../assets/img/flags/nl.png'),
        new Language('English', 'nl', '../../assets/img/flags/nl.png'),
        new Language('Ukrainian', 'nl', '../../assets/img/flags/nl.png')
    ];
    currentLanguage: Language = new Language('Nederlands', 'nl', '../../assets/img/flags/nl.png');

    isSelectOpened: boolean = false;

    constructor(private selectRef: ElementRef){
    }

    ngOnInit(){
    }

    onToggle(){
        this.isSelectOpened = !this.isSelectOpened;
    }

    onSelect(language){
        this.currentLanguage = language;
        this.isSelectOpened = false;
    }

    closeSelect(event){
        if (!this.selectRef.nativeElement.contains(event.target))
            this.isSelectOpened = false;
    }
}
