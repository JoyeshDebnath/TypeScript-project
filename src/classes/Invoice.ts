import { HasFormatter} from '../interfaces/HasFormatter.js';

export class Invoice implements HasFormatter{
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }//Invoice constructor 

    format():string {
       return `The Client name is : ${this.client} and he/she ows RS. ${this.amount} for ${this.details} ` 
    }
    
}//class Invoice