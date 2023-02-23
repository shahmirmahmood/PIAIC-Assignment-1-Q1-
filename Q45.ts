function make_car(Mf,Md,...options){
 let car_dic={
  'Manufacturer':Mf,
  'Model':Md,
 }
 options.forEach((option)=>{
  let [key,value]=option;
  car_dic[key]=value;
 });
 return car_dic
}
console.log(make_car('Honda','City',['Color','white'],['Alloyrim','No']));
