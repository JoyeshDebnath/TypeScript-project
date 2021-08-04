export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.amount = amount;
        this.details = details;
    }
    format() {
        return `The Recipient: ${this.recipient}name is : ${this.recipient} and he/she ows RS. ${this.amount} for ${this.details}`;
    }
}
;
