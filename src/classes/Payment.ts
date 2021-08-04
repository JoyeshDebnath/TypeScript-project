import { HasFormatter } from '../interfaces/HasFormatter';

export class Payment implements HasFormatter {

recipient: string;
 amount: number;
    details: string;
    
constructor(recipient: string,  details: string,amount: number){
    this.recipient = recipient;
    this.amount = amount;
    this.details = details;
}
    format(): string {
        return `The Recipient: ${this.recipient}name is : ${this.recipient} and he/she ows RS. ${this.amount} for ${this.details}`
    }
};
