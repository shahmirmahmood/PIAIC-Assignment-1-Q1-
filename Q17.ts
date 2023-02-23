let q17=["Shahmir","Usama","wasiq"];
for(let i=0;i<q17.length;i++){
 console.log("welcome "+q17[i]+" I'll be really happy if yo accept my invitation.");
}

console.log("sorry but "+q17[2]+"couldn't attend the dinner");
q17[2]="shahzaib";

for(let i=0;i<q17.length;i++){
 console.log("Welcome! again "+q17[i]+"we did some changes regarding timing");
}

console.log("We arranged bigger table for you!")
q17.unshift("Sachal");
q17.push("wasiq");
q17.splice(2,0,"waleed")
for(let i=0;i<q17.length;i++){
 console.log("Welcome! again "+q17[i]+"we did some changes regarding timing");
}



console.log("Sorry we have only space for two")

console.log(q17[0]+" sorry we can't invite you")
q17.splice(0,1)

console.log(q17[0]+" sorry we can't invite you")
q17.splice(0,1)
console.log(q17[0]+" sorry we can't invite you")
q17.splice(0,1)

console.log(q17[0]+" sorry we cant invite you")
q17.splice(0,1)


for(let i=0;i<q17.length;i++){
 console.log("Glad to inform that you are still invited "+q17[i])}

 
 q17.splice(0,1)
 q17.splice(0,1)

 for (var i = 0; i < q17.length; i++) {
  console.log(q17[i])
 }