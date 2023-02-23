let ageee=[];
if(ageee.length>0){
 for(let i=0;i<ageee.length;i++){
  if(ageee[i]<2){
   console.log("baby");
  }
  if(ageee[i]>=2&&ageee[i]<4){
   console.log("toddler");
  }
  if(ageee[i]>=4&&ageee[i]<13){
   console.log("kid");
  }
  if(ageee[i]>=13&&ageee[i]<20){
   console.log("teenager");
  }
  if(ageee[i]>=20&&ageee[i]<65){
   console.log("adult");
  }
  if(ageee[i]>=65){
   console.log("person");
 }
}
}
else{
 console.log("user is Not registered to check the age");
} 


