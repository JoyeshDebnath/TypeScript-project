// let character = "SpiderMan";
// console.log(character);
// let age = 20;

// let isCoder = false;

// // character = 200;

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
// // // character.push(true)
// // character[1] = "AntMan";
// // character[1]=12

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
let character: string;
let age: number;
let isProgrammer: boolean;
// age="Twenty One "
age = 21;
character = "Joyesh";
isProgrammer = true;



//Arrays................................................................
let names: string[]=[];
names.push("Joyesh");
console.log(names);

//Union Types................................................................
//This lets u to decalre the mixd types ....
let players: (string | number | boolean)[] = [];//decalring an array to hold string number and boolean type values
 
players.push('Zlathan');
players.push(21);
players.push(100);
players.push("Messi");
players.push(true);
console.log(players);
 
let uid: string | number;
uid = "jgwdjqwdghqdh823346";
uid = 919749347;

//Objects................................................................

//$NOTE  an array is also an object in javascript 

let student1: object;

student1 = {
    name: "Joyesh Debnath",
    roll:1930125,
    age: 21,
    branch:"ECSE"
}

console.log(student1);

//Below is a more specific format of how to declare objects in an more appropriate way and precise way
//Note ann array is also an object so  student1=["Joyesh "] will also not return any error


// below is strictly an object   student2={}

let student2 : {
    name: string,
    email: string,
    roll: number,
    degree: string,
    isStudent: boolean,
    skills:string[]
}

student2 = {
    name: "Joyesh Debnath",
    email: "1930125@kiit.ac.in",
    roll: 1930125,
    degree: "B-Tech",
    isStudent: true,
    skills:["JavaScript","TypeScript","ReactJS"]
}

console.log(student2);