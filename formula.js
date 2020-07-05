function insert(val){
  document.getElementById("output").value+=val;
}
function equal(){
  let x = document.getElementById("output").value;
  let y = eval(x); 
  document.getElementById("output").value=y; 
}
function clr(){
  document.getElementById("output").value="";
}