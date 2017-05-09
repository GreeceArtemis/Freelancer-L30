/*
 * Archivo principal de JS
 */
window.addEventListener("scroll",function(){
var scroll= window.pageYOffset || document.documentElement.scrollTop;
var =document.getElementsByClassName("navt")
var header=document.getElementsByClassName("title-type")[0];
if(scroll<=90){
  header.style.height="100px";

}
else{
  header.style.height="70px";
}
})
