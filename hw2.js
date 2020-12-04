var objectJ= require("./hw.json");
 for (let i=0; i <objectJ.length; i++ ) {
    for(let x=0; x<objectJ[i]. topping.length ; x++ ){
       console.log(objectJ[i].topping[x]. type); }}

console.log('--------------');

for( let i=0 ;i <objectJ.length;i++){
   for(let x=0 ; x<objectJ[i].batters.batter.length; x++){
      console.log(objectJ[i].batters.batter[x].type);

}} 
console.log('--------------');

var total = 0;

for (var i=0;i <objectJ.length; i++) { 
  total += objectJ[i].ppu;
}

var avg=total / objectJ.length;
console.log("the ppu avg" + avg);
console.log('--------------');
var sum=0;

for( let i=0;i<objectJ.length; i++){ 
  console.log(objectJ[i].ppu); 
  sum +=objectJ[i].ppu;
}
var totalsum=sum; 
console.log( "the ppu sum *totalsum"+totalsum);

console.log('--------------');

function ObjectId(){

console.log("all objectJ id : ");

for ( let i=0 ; i <objectJ.length; i++){

console.log(objectJ[i].id + " ");

}}

function batterId(){

console.log("all batter id : ");

for( let i=0; i <objectJ.length; i++){

for(let x=0; x<objectJ[i].batters.batter.length; x++){

console.log(objectJ[i].batters.batter[x].id + " ");
}}
}

function toppingId(){

console.log("all topping id : ");

for( let i=0 ;i<objectJ.length; i++ ) {
  for (let x=0 ; x<objectJ.topping.length; x++){

console.log(objectJ[i].topping[x].id +" " );
  }}}
  ObjectId();
  batterId();
  topping();

console.log('--------------');
