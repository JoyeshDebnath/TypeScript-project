export class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    } //Invoice constructor 
    format() {
        return `The Client name is : ${this.client} and he/she ows RS. ${this.amount} for ${this.details} `;
    }
} //class Invoice
