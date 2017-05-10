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
if(scroll>677&&scroll<1584){
  document.getElementsByClassName("portfolio")[0].style.background="#18BC9C";
}
else{
  document.getElementsByClassName("portfolio")[0].style.background="#2C3E50";
}
if(scroll>=1584&&scroll<2125){
  document.getElementsByClassName("about")[0].style.background="#18BC9C";
}
else{
  document.getElementsByClassName("about")[0].style.background="#2C3E50";
}
if(scroll>=2125){
  document.getElementsByClassName("contact")[0].style.background="#18BC9C";
}
else{
  document.getElementsByClassName("contact")[0].style.background="#2C3E50";
}
})

var images=document.getElementsByClassName("img");
for(var i=0;i<images.length;i++){
  var div=document.createElement("div");
  span.setAttribute("class","search");
  var lupa=document.createElement("span");
  lupa.setAttribute("class","fa fa-search-plus");
  div.appendChild(lupa);
  images[i].appendChild(div);
}
