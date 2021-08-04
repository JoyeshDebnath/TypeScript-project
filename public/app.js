// const anchor = document.querySelector('a')!;
// if (anchor) {
//     console.log(anchor.href);
// }
// let docOne: HasFormatter;
// let docTwo:HasFormatter;
// docOne = new Invoice('Yoshi', 'Web Work', 25000);
// docTwo = new Payment('Luigii', 'Art Work', 27997);
//creating an array of all elements having HasFormatter Interface implementation
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
//Interfaces 
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(b: number): number;
// }//Interface IsPerson
// const me: IsPerson = {
//     name: 'Joyesh Debnath',
//     age: 21,
//     speak(text: string): void {
//         console.log(text);
//     },
//    spend(money: number): number {
//         console.log(money);
//         return money * 100;
//     }
// }
// const greetPerson = (person: IsPerson) => {
//     console.log('Hello ', person.name);
// }
// greetPerson(me);
// console.log(me);
// let Invoice1 = new Invoice('Joyesh Debnath', 'Building WebApps', 50000);
// let Invoice2 = new Invoice('Mario Rodriguez', 'Creating Architecture', 3000);
// console.log(Invoice1);
// console.log(Invoice2);
// console.log(Invoice1.format());
// console.log(Invoice2.format());
//Important concept 
// let invoices: Invoice[] = [];//only Invoice types are allowed in the array 
// invoices.push(Invoice1);
// invoices.push(Invoice2);
// console.log(invoices);
//loop through the invoices array 
// invoices.forEach((inv)=>{
//     console.log("Client", inv.client);
//     console.log("Details:", inv.details);
//     console.log("Amount", inv.amount);
//     console.log(inv.format());
// });
//
const form = document.querySelector('.new-item-form');
console.log(form.children);
//inputs ..... 
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
export {};
