import { Component, OnInit } from '@angular/core';
import { TabsItem } from "../_components/tabs/tabs.model";

@Component({
    selector: 'app-info-tabs',
    templateUrl: './info-tabs.component.html',
    styleUrls: ['./info-tabs.component.scss']
})
export class InfoTabsComponent implements OnInit {

    infoTabsItems: TabsItem[] = [
        new TabsItem('Praktische info', '<ul> <li> De workshops vangen telkens aan om 09.00 uur en eindigen rond 17.00 uur.</li><li> De prijs voor deelname hangt af van het type workshop en varieert per persoon tussen €100,- en €259,-. Deze bedragen zijn exclusief 21% BTW en onder voorbehoud van prijswijzigingen. De exacte prijs per module vind je in bovenstaande tabel.<br> In deze prijs zit inbegrepen: <ul> <li> Workshop gegeven door ervaren trainers</li> <li> Gebruik van trainingsmaterialen</li> <li> Lunch</li> <li> 3M Basic Toolbag met applicatietools</li> </ul> </li> </ul>'),
        new TabsItem('Algemene voorwaarden', ' <h3> Inschrijven</h3> <ul> <li> Inschrijven kan door bovenstaande gegevens in te vullen en een datum van de gewenste workshop aan te vinken. </li><li> De workshops zullen doorgaan bij minimaal 4 ingeschreven personen. Voor een goede begeleiding en verloop is het maximum aantal personen vastgelegd op 8.</li> <li> Indien er minder dan 4 personen ingeschreven zijn, zullen de ingeschrevenen een andere datum voorgesteld krijgen. Indien er meer dan 8 personen zich inschreven voor een zelfde sessie, zullen de eerste 8 personen voorrang krijgen en worden de anderen geïnformeerd en kunnen zij een andere datum kiezen.</li> <li> U kan uw inschrijving enkel annuleren, door een mailtje te sturen naar commgraphics.be@mmm.com, tot een week voor aanvang van de gekozen workshop. De kost voor annuleren bedraagt 25€ per persoon, excl BTW. Bij niet-annulatie of annulatie op minder dan een week voor de gekozen workshop, wordt u 100% van het inschrijvingsgeld doorgerekend.</li> <li> De trainingen zijn uitsluitend voorbehouden aan folie verwerkende partijen (signmakers), 3M behoudt zich het recht voor partijen die hier niet aan voldoen uit te sluiten voor training.<br> Uw persoonsgegevens worden uitsluitend door 3M België ter bevestiging en reservering van uw deelname aan de 3M Signmaker Workshop gebruikt. Meer informatie kunt u vinden in onze <a href="/wps/portal/3M/nl_NL/EU2/Country/Corp/Privacy/">Privacy Policy</a>.</li> </ul>')
    ];

    constructor(){
    }

    ngOnInit(){
    }

}
