var x = 220;
var y = "Hello";
var z = undefined;
        
x || y    // Returns 220 since the first value is truthy
        
x || z   // Returns 220 since the first value is truthy
        
x && y    // Returns "Hello" since both the values are truthy
        
y && z   // Returns undefined since the second value is falsy
        
if( x && y ){ 
  console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
}   
        
if( x || z ){
  console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
}

// var y = #8454; // y pointing to address of the value 234

// var z = y; 
     
// var z = #5411; // z pointing to a completely new address of the value 234
     
// // Changing the value of y
// y = 23;
// console.log(z);  // Returns 234, since z points to a new address in the memory so changes in y will not effect z


function higherOrder(fn) {
  fn();
}
   
higherOrder(function() { console.log("Hello world") });  


function higherOrder2() {
  return function() {
    return "Do something";
  }
}      
var x = higherOrder2();
x()  