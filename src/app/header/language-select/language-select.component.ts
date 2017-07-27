import { Component, ElementRef, OnInit } from '@angular/core';
import { Language } from "./language.model";
import { trigger, style, animate, transition, state } from '@angular/animations';


@Component({
    selector: 'app-language-select',
    templateUrl: './language-select.component.html',
    styleUrls: ['./language-select.component.scss'],
    host: {
        '(document:click)': 'closeSelect($event)',
    },
    animations: [
        trigger('fade', [
            state('*', style({
                opacity: 1
            })),
            state('void', style({
                opacity: 0
            })),
            transition('void <=> *', animate(150))
        ]),
    ]
})
export class LanguageSelectComponent implements OnInit {

    languages: Language[] = [
        new Language('Nederlands', 'nl', '../../assets/img/flags/nl.svg'),
        new Language('English', 'en', '../../assets/img/flags/en.svg'),
        new Language('Germany', 'de', '../../assets/img/flags/de.svg')
    ];
    currentLanguage: Language = this.languages[0];
    remainingLanguages: Language[];

    isSelectOpened: boolean = false;

    constructor(private selectRef: ElementRef){
        this.setRemainingLanguages()
    }

    ngOnInit(){
    }

    setRemainingLanguages(){
        this.remainingLanguages = this.languages.filter(language =>{
            return this.currentLanguage !== language
        })
    }

    onToggle(){
        this.isSelectOpened = !this.isSelectOpened;
    }

    onSelect(language){
        this.currentLanguage = language;
        this.isSelectOpened = false;
        this.setRemainingLanguages();
    }

    closeSelect(event){
        if (!this.selectRef.nativeElement.contains(event.target))
            this.isSelectOpened = false;
    }
}
