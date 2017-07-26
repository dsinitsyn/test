import * as moment from 'moment';


export class Training {
    selected: boolean = false;

    constructor(public id: number,
                public date: any,
                public time: string,
                public workshop: string,
                public priceFrom: string,
                public priceTo: string,
                public location: string,
                public availability: number){

        this.date = new Date(moment(date, 'DD-MM-YYYY').format('MM-DD-YYYY'));
    }
}
