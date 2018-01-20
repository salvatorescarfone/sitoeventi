function switchPage(x){
  var div = document.getElementById("contenuto");
  var tutorial= "ciao";
  var esempi ="swag";

  if(x==0)
    div.innerHTML = tutorial;
  else
    div.innerHTML = esempi;

}
