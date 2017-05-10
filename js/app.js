/*
 * Archivo principal de JS
 */
window.addEventListener("scroll",function(){
var scroll= window.pageYOffset || document.documentElement.scrollTop;
var titleStart=document.getElementsByClassName("title-start")[0];
var header=document.getElementsByClassName("title-type")[0];
if(scroll<=90){
  header.style.height="100px";
  titleStart.classList.add("startBig");
  titleStart.classList.remove("startSmall");

}
else{
  header.style.height="70px";
  titleStart.classList.add("startSmall");
  titleStart.classList.remove("startBig");
}
})
