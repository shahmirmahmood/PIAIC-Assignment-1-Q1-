let q16=["Shahmir","Usama","wasiq"];
for(let i=0;i<q16.length;i++){
 console.log("welcome "+q16[i]+" I'll be really happy if yo accept my invitation.");
}

console.log("sorry but "+q16[2]+"couldn't attend the dinner");
q16[2]="shahzaib";

for(let i=0;i<q16.length;i++){
 console.log("Welcome! again "+q16[i]+"we did some changes regarding timing");
}

console.log("We arranged bigger table for you!")
q16.unshift("Sachal");
q16.push("wasiq");
q16.splice(2,0,"waleed")
for(let i=0;i<q16.length;i++){
 console.log("Welcome! again "+q16[i]+"we did some changes regarding timing");
}