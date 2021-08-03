// let character = "SpiderMan";
// console.log(character);
// let age = 20;

// let isCoder = false;

 // character = 200;

// character = "BatMan";
// console.log(character);
// age = 21;
// isCoder = true;

// const Area_circle = (radius:number) => {
//     return radius * radius * Math.PI;
// }

// const area = Area_circle(14.45);
// console.log(area);



// let character = ["SpiderMan", "BatMan", "SuperMan", "IronMan"];

// character.push('Thor');
// console.log(character);
 // character.push(true)
// character[1] = "AntMan";
// character[1]=12

// let mixed = ["abc", 123, 'red', 'blue', 'yellow', 456, true];
// mixed.push("BatMan");
// mixed.push(100);
// mixed[0] = false;
// console.log(mixed);


// let Player = {
//     name: "Lionel Messi",
//     age: 34,
//     Nation: "Argentina",
//     IsLegend:true,
//   skills:["NutMeg","Chop","Penalty","FreeKick","Curl","Dribbling"]
// }
// console.log(Player);

// Player = {
//     name: "Cristiano Ronaldo",
//     age:36,
//     Nation: "Portugal",
//     IsLegend: true,
//     skills:["NutMeg","Chop","Penalty","KnuckleShot"]
// }
// console.log(Player);

//Explicit Types................................................................
// let character: string;
// let age: number;
// let isProgrammer: boolean;
 // age="Twenty One "
// age = 21;
// character = "Joyesh";
// isProgrammer = true;



//Arrays................................................................
// let names: string[]=[];
// names.push("Joyesh");
// console.log(names);

//Union Types................................................................
//This lets u to decalre the mixd types ....
// let players: (string | number | boolean)[] = [];//decalring an array to hold string number and boolean type values
 
// players.push('Zlathan');
// players.push(21);
// players.push(100);
// players.push("Messi");
// players.push(true);
// console.log(players);
 
// let uid: string | number;
// uid = "jgwdjqwdghqdh823346";
// uid = 919749347;

//Objects................................................................

//$NOTE  an array is also an object in javascript 

// let student1: object;

// student1 = {
//     name: "Joyesh Debnath",
//     roll:1930125,
//     age: 21,
//     branch:"ECSE"
// }

// console.log(student1);

//Below is a more specific format of how to declare objects in an more appropriate way and precise way
 //Note ann array is also an object so  student1=["Joyesh "] will also not return any error


 // below is strictly an object   student2={}

// let student2 : {
//     name: string,
//     email: string,
//     roll: number,
//     degree: string,
//     isStudent: boolean,
//     skills:string[]
// }

// student2 = {
//     name: "Joyesh Debnath",
//     email: "1930125@kiit.ac.in",
//     roll: 1930125,
//     degree: "B-Tech",
//     isStudent: true,
//     skills:["JavaScript","TypeScript","ReactJS"]
// }

// console.log(student2);

//Any type (Dynamic type..)
//any is used to denote that the variable is of any datatype ie dynamic type 

// let age: any;
// age = 54;
// age = "Joyesh Debnath";
// age = true;
// let mixed: any[] = [];
// mixed.push("ABCD");
// mixed.push(false);
// mixed.push(2000);

// console.log(mixed);

// let obj: {
//     name: any,
//     age:any
// }

// obj = {
//     name: true,
//     age:"Twenty One"
// }

// console.log(obj);

// let greet: Function;

// greet = () => {
//     console.log("Welcome to the world of typescript!!");
    
// }

// let add: Function;

// add = (a: number, b: number, c: number | string=100):void => {
//     console.log(a + b );
//     console.log(c);
// }

// add(12, 18);

// const minus = (a:number,b:number):number => {
//   let diff = a - b;
//     return diff;
// }

// let result: number;
// result = minus(100, 55);
// console.log("Result",result);





//$NOTE  Functions Signature ..

//example 1:

// let greet: (a: string, b: string) => void

// greet = (name,surname) => {
//     console.log(`Hello MR/MISS/MRS ${name} ${surname} welcome To the World of TypeScript..`);
// }

// greet("Joyesh", "Debnath");

// //Example 2:

// let calc: (a:number,b:number,c:string) => number;

// calc = (n1, n2, action) => {
//     if (action == 'ADD') {
//         return n1 + n2;
//     }
//     else {
//         return n1 - n2;
//     }
// }

// console.log(calc(12, 14, 'ADD'));


// //Example 3:

// let StudentInfo: (stud_obj: { name: string, roll: number, email: string }) => void;
// //using type alias 
// type Person = { name: string, roll: number, email: string };
// StudentInfo = (Student: Person) => {
//     console.log("Student Name:", Student.name);
//     console.log("Student Roll:", Student.roll);
//     console.log("Student Email:",Student.email); 
// }