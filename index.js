/********************************* article object Constructor ************************ */
function Article(y) {
  this.article = y.dataset.article;
  this.items = 0;
  this.price = y.dataset.price;
  this.img = y.dataset.img;

  this.add = function () {
    this.items += 1;
  }

  this.dec = function () {
    if (this.items > 0) {this.items -= 1;}
  }

  this.reset = function () {
    this.items = 0;
  }
}



/*************************************   Main   ********************************************** */


let articles = [];
let articlesObjects = [];

let cartValueOutput = document.getElementById("items-carted");

let priceAdders = document.querySelectorAll(".priceAdder");

for (let i = 0; i < priceAdders.length; i++) { priceAdders[i].addEventListener('click',function() {
  console.log("clicked again !")
  if (articles.includes(priceAdders[i].dataset.article) == true) {

    window[priceAdders[i].dataset.article].add() ;

  }else{

    articles.push(priceAdders[i].dataset.article);
    window[priceAdders[i].dataset.article] = new Article(priceAdders[i]);

    articlesObjects.push(window[priceAdders[i].dataset.article]) ;
    window[priceAdders[i].dataset.article].add();
  }
  cartValueOutput.innerHTML = window[priceAdders[i].dataset.article].items;
} ) }

/************************************* Calcul ********************************************** */


function rem_article(j) {
  j.reset();

  let index1 = articles.indexOf(j.article);
  if (index1 !== -1) articles.splice(index1, 1);

  let index2 = articlesObjects.indexOf(j);
  if (index2 !== -1) articlesObjects.splice(index, 1);
}



/*************************************Modal********************************************** */
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  if ( articles.includes("Happiness") == true) { 
    document.getElementsByClassName("happi")[0].style.display = "flex" ;
    document.getElementsByClassName("qh")[0].innerHTML = Happiness.items ;
    document.getElementsByClassName("subtotal")[0].innerHTML = Happiness.items*Happiness.price ;
  }else{ document.getElementsByClassName("happi")[0].style.display = "none";}

  if ( articles.includes("Joy") == true) { 
    document.getElementsByClassName("joyi")[0].style.display = "flex" ;
    }else{ 
      document.getElementsByClassName("joyi")[0].style.display = "none" ;
      document.getElementsByClassName("qj")[0].innerHTML = Joy.items ;
      document.getElementsByClassName("subtotal")[1].innerHTML = Joy.items*Joy.price ;
    }

  document.getElementById("thetotal").innerHTML = Happiness.items*Happiness.price + Joy.items*Joy.price ;
}
document.getElementById("ad1").onclick = function () {
  Happiness.add();
  document.getElementsByClassName("qh")[0].innerHTML = Happiness.items ;
  document.getElementsByClassName("subtotal")[0].innerHTML = Happiness.items*Happiness.price ;
  document.getElementById("thetotal").innerHTML = Happiness.items*Happiness.price + Joy.items*Joy.price ;
}
document.getElementById("ad2").onclick = function () {
  Joy.add();
  document.getElementsByClassName("qj")[0].innerHTML = Joy.items ;
  document.getElementsByClassName("subtotal")[1].innerHTML = Joy.items*Joy.price ;
  document.getElementById("thetotal").innerHTML = Happiness.items*Happiness.price + Joy.items*Joy.price ;
}
document.getElementById("dec1").onclick = function () {
  Happiness.dec();
  document.getElementsByClassName("qh")[0].innerHTML = Happiness.items ;
  document.getElementsByClassName("subtotal")[0].innerHTML = Happiness.items*Happiness.price ;
  document.getElementById("thetotal").innerHTML = Happiness.items*Happiness.price + Joy.items*Joy.price ;
}
document.getElementById("dec2").onclick = function () {
  Joy.dec();
  document.getElementsByClassName("qj")[0].innerHTML = Joy.items ;
  document.getElementsByClassName("subtotal")[1].innerHTML = Joy.items*Joy.price ;
  document.getElementById("thetotal").innerHTML = Happiness.items*Happiness.price + Joy.items*Joy.price ;
}

document.getElementsByClassName("remover")[0].onclick = function () {
  document.getElementsByClassName("happi")[0].style.display = "none";
  Happiness.reset();
  document.getElementById("thetotal").innerHTML = Happiness.items*Happiness.price + Joy.items*Joy.price ;
}
document.getElementsByClassName("remover")[1].onclick = function () {
  document.getElementsByClassName("joyi")[0].style.display = "none";
  Joy.reset();
  document.getElementById("thetotal").innerHTML = Happiness.items*Happiness.price + Joy.items*Joy.price ;
}


function lasttotal() {
  document.getElementsByClassName("pricetotal")[0].innerHTML= Happiness.items*Happiness.price + Joy.items*Joy.price;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*************************************end Modal********************************************** */
/*
let line = document.createElement("div");
let img = document.createElement("img");
let article_name = document.createElement("h3");
let decreaser = document.createElement("p");
let quantity = document.createElement("p");
let adder = document.createElement("p");
let subtotal = document.createElement("p");
let closer = document.createElement("p");

let nodeText = document.createTextNode(currentInput.value);*/