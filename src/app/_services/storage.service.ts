import { Injectable } from '@angular/core';
import { Workshop } from "../workshops/workshop.model";
import { Training } from "../workshops/training.model";
import { ApiService } from "./api.service";

@Injectable()
export class StorageService {

    workshops: Workshop[] = [
        new Workshop(
            1,
            'Workshop Basis Applicatie',
            '<p>In deze workshop worden de fundamenten van de verschillende folies en plaktechnieken behandeld. De theoretische uitleg wordt gecombineerd met hands-on activiteiten. Deze workshop is geschikt voor een beginnende signmaker en vormt een opstap naar de andere modules die u bij de 3M Signmaker Workshops kunt volgen.</p>',
            [
                new Training(
                    11,
                    '14.02.2017',
                    '12:20',
                    'Basis',
                    '169',
                    'p.p',
                    'Breda',
                    8
                ),
                new Training(
                    12,
                    '24.02.2017',
                    '12:20',
                    'Basis',
                    '169',
                    'p.p',
                    'Breda',
                    8
                ),
                new Training(
                    13,
                    '04.03.2017',
                    '12:20',
                    'Basis',
                    '169',
                    'p.p',
                    'Breda',
                    8
                ),
                new Training(
                    14,
                    '04.03.2017',
                    '12:20',
                    'Basis',
                    '169',
                    'p.p',
                    'Breda',
                    8
                )
            ]
        ),
        new Workshop(
            2,
            'Workshop Car Wrap',
            '<p>Tijdens deze intensieve workshop worden de deelnemers getraind om auto’s gedeeltelijk of geheel in te pakken met folie. Door middel van praktijkvoorbeelden en het zelf toepassen leert u stapsgewijs de belangrijkste tips & tricks voor een perfecte car wrap. Deze workshop is geschikt voor ervaren signmakers.</p>',
            [
                new Training(
                    21,
                    '10.02.2017',
                    '15:30',
                    'Carwrap',
                    '199',
                    'p.p',
                    'Zwaag',
                    8
                ),
                new Training(
                    22,
                    '12.02.2017',
                    '15:30',
                    'Carwrap',
                    '199',
                    'p.p',
                    'Zwaag',
                    8
                ),
                new Training(
                    23,
                    '28.02.2017',
                    '15:30',
                    'Carwrap',
                    '199',
                    'p.p',
                    'Zwaag',
                    8
                ),
                new Training(
                    24,
                    '02.03.2017',
                    '15:30',
                    'Carwrap',
                    '199',
                    'p.p',
                    'Zwaag',
                    8
                )
            ]
        ),
        new Workshop(
            3,
            'Workshop DI-NOC',
            '<p>Deze speciale workshop heeft tot doel de plaatsers wegwijs te maken in de applicatie van DI-NOC. Tijdens de workshop zal er stil gestaan worden bij allerlei praktische applicatievoorbeelden en krijgt de plaatser de gelegenheid om onder begeleiding van ervaren instructeurs zelf te oefenen. Na de workshop wordt elke deelnemer geacht de belangrijkste basisonderdelen voor een goede 3M DI-NOC applicatie te beheersen.</p>',
            [
                new Training(
                    31,
                    '15.02.2017',
                    '09:20',
                    'Gevels',
                    '249',
                    'p.p',
                    'Zwaag',
                    8
                ),
                new Training(
                    32,
                    '20.02.2017',
                    '09:20',
                    'Gevels',
                    '249',
                    'p.p',
                    'Zwaag',
                    8
                ),
                new Training(
                    33,
                    '25.02.2017',
                    '09:20',
                    'Gevels',
                    '249',
                    'p.p',
                    'Zwaag',
                    8
                ),
                new Training(
                    34,
                    '01.03.2017',
                    '09:20',
                    'Gevels',
                    '249',
                    'p.p',
                    'Zwaag',
                    8
                ),
            ]
        )
    ];
    countries: any[] = [];


    constructor(private _api: ApiService){
        this._api.get('https://restcountries.eu/rest/v2/all').then((data: any[]) => {
            this.countries = data;
        });
    }

    getCountries(): Promise<any[]>{
        return new Promise(resolve =>{
            (this.countries.length)
                ? resolve(this.countries)
                : this._api.get('https://restcountries.eu/rest/v2/all').then(
                    (data: any[]) =>{
                        resolve(this.countries);
                    }
                )
        })
    }
}
