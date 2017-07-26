import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LanguageSelectComponent } from './header/language-select/language-select.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { ContentComponent } from './main/content/content.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { AccordionComponent } from './_components/accordion/accordion.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormComponent } from './form/form.component';
import { WorkshopTableComponent } from './workshops/workshop-table/workshop-table.component';
import { StorageService } from "./_services/storage.service";
import { OrderModule } from "ngx-order-pipe";
import { PersonsComponent } from './persons/persons.component';
import { CompanyComponent } from './company/company.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LanguageSelectComponent,
        MainComponent,
        SidebarComponent,
        ContentComponent,
        WorkshopsComponent,
        AccordionComponent,
        FormComponent,
        WorkshopTableComponent,
        PersonsComponent,
        CompanyComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        OrderModule
    ],
    providers: [StorageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
