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
import { PersonsComponent } from './form/persons/persons.component';
import { CompanyComponent } from './form/company/company.component';
import { AdditionComponent } from './form/addition/addition.component';
import { InfoTabsComponent } from './info-tabs/info-tabs.component';
import { TabsComponent } from './_components/tabs/tabs.component';
import { SelectModule } from "ng2-select";
import { ApiService } from "./_services/api.service";

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
        CompanyComponent,
        AdditionComponent,
        InfoTabsComponent,
        TabsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        OrderModule,
        SelectModule
    ],
    providers: [ApiService, StorageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
