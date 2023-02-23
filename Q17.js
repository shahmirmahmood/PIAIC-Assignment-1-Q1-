var q17 = ["Shahmir", "Usama", "wasiq"];
for (var i_1 = 0; i_1 < q17.length; i_1++) {
    console.log("welcome " + q17[i_1] + " I'll be really happy if yo accept my invitation.");
}
console.log("sorry but " + q17[2] + "couldn't attend the dinner");
q17[2] = "shahzaib";
for (var i_2 = 0; i_2 < q17.length; i_2++) {
    console.log("Welcome! again " + q17[i_2] + "we did some changes regarding timing");
}
console.log("We arranged bigger table for you!");
q17.unshift("Sachal");
q17.push("wasiq");
q17.splice(2, 0, "waleed");
for (var i_3 = 0; i_3 < q17.length; i_3++) {
    console.log("Welcome! again " + q17[i_3] + "we did some changes regarding timing");
}
console.log("Sorry we have only space for two");
console.log(q17[0] + " sorry we can't invite you");
q17.splice(0, 1);
console.log(q17[0] + " sorry we can't invite you");
q17.splice(0, 1);
console.log(q17[0] + " sorry we can't invite you");
q17.splice(0, 1);
console.log(q17[0] + " sorry we cant invite you");
q17.splice(0, 1);
for (var i_4 = 0; i_4 < q17.length; i_4++) {
    console.log("Glad to inform that you are still invited " + q17[i_4]);
}
q17.splice(0, 1);
q17.splice(0, 1);
for (var i = 0; i < q17.length; i++) {
    console.log(q17[i]);
}
