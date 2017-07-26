
import { Training } from "./training.model";

export class Workshop {
    constructor(public id: number,
                public title: string,
                public content: string,
                public trainings: Training[]){
    }
}