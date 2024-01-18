let name= " Hadijat is good"

//string template

let text= `Hello Academy 4.0` //back-tic syntax

let price=15,  quantity=20;
let totalCost=`Total cost of my goods is ${ price * quantity}`; //template literal
console.log(totalCost);

//type of
console.log(typeof name);
console.log(typeof price);

//string length
let word= "my name is Hadijat"
console.log(word.length)

//string escape
 let escape= "My class students are doing \"great\ "
 console.log(escape);

 //string methods
 let states= "Ondo, Bauchi, Lagos, Kano";
 let state=states.slice (0,4);
 console.log(state);

 console.log(states.slice (6,12));
 console.log(states.slice (21,25));
 console.log(states.substring(14,19));

 let states2=states.slice(-11); //negative indexing
 console.log(states2);

 //replace

 let rep= "I love Angular";
 let replaced = rep.replace("Angular", "React") ;
 console.log(replaced);