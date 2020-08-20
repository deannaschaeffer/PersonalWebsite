var movieButton = document.querySelector("#movie");
var musicButton = document.querySelector("#song");
var bookButton = document.querySelector("#book");
var treeButton = document.querySelector("#tree");
var list = document.querySelectorAll(".favItems");
var interests = document.querySelector("#interests");

var movies = document.querySelector(".movies");
var music = document.querySelector(".music");
var books = document.querySelector(".books");
var outdoor = document.querySelector(".outdoor");

function listLoop(){
	for(var i=0; i<list.length; i++){
		list[i].classList.remove("gray");
	}
}

movieButton.addEventListener("click", function(){
	listLoop();
	this.classList.add("gray");
	interests.style.display = "block";
	movies.style.display = "block";
	music.style.display = "none";
	books.style.display = "none";
	outdoor.style.display = "none";
});

musicButton.addEventListener("click", function(){
	listLoop();
	this.classList.add("gray");
	interests.style.display = "block";
	movies.style.display = "none";
	music.style.display = "block";
	books.style.display = "none";
	outdoor.style.display = "none";
});

bookButton.addEventListener("click", function(){
	listLoop();
	this.classList.add("gray");
	interests.style.display = "block";
	movies.style.display = "none";
	music.style.display = "none";
	books.style.display = "block";
	outdoor.style.display = "none";
});

treeButton.addEventListener("click", function(){
	listLoop();
	this.classList.add("gray");
	interests.style.display = "block";
	movies.style.display = "none";
	music.style.display = "none";
	books.style.display = "none";
	outdoor.style.display = "block";
});

