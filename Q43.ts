let q43=['Ali','Usman','Noman','Hasnain'];

function show_magi(q43){
 for(let i=0;i<q43.length;i++){
  console.log(q43[i]);
 }
 console.log("\n\n");
}


let newarr=[""];
function make_great(q43){
 for(let i=0;i<q43.length;i++){
  newarr[i]=q43[i]+' the great magician';
 }
 for(let i=0;i<q43.length;i++){
  console.log(q43[i]);
 }

}


show_magi(q43);
show_magi(newarr);