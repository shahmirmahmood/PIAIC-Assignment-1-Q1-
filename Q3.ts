let Q3Name="Shahmir Mahmood";
console.log(Q3Name.toLowerCase());
console.log(Q3Name.toUpperCase());
let titleN=Q3Name.replace(/(^|\s)\S/g,function(title){return title.toUpperCase()});
console.log(titleN);