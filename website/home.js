var bookButton = document.querySelector("#book");
var treeButton = document.querySelector("#tree");
var volunteerButton = document.querySelector("#help");

var list = document.querySelectorAll(".favItems");
var interests = document.querySelector("#interests");

var button1 = document.querySelector("#button1");
var modal1 = document.querySelector("#overlay1");
var close1 = document.querySelector("#close1");

var button2 = document.querySelector("#button2");
var modal2 = document.querySelector("#overlay2");
var close2 = document.querySelector("#close2");

var button3 = document.querySelector("#button3");
var modal3 = document.querySelector("#overlay3");
var close3 = document.querySelector("#close3");

var button4 = document.querySelector("#button4");
var modal4 = document.querySelector("#overlay4");
var close4 = document.querySelector("#close4");

var button5 = document.querySelector("#button5");
var modal5 = document.querySelector("#overlay5");
var close5 = document.querySelector("#close5");

var books = document.querySelector(".books");
var outdoor = document.querySelector(".outdoor");
var volunteer = document.querySelector(".volunteer")

if (volunteerButton) {
	volunteerButton.classList.add("gray");
}
// volunteer.style.display = "block";

function listLoop() {
	for (var i = 0; i < list.length; i++) {
		list[i].classList.remove("gray");
	}
}

// function grayHover() {
// 	volunteerButton.addEventListener("hover", function () {
// 		volunteer.style.color = "#9d9d9d";
// 	})
// }

if (volunteerButton) {
	volunteerButton.addEventListener("click", function () {
		// volunteerButton.style.color = "#9d9d9d";
		listLoop();
		this.classList.add("gray");
		interests.style.display = "block";
		volunteer.style.display = "block";
		books.style.display = "none";
		outdoor.style.display = "none";
	});
}

if (bookButton) {
	bookButton.addEventListener("click", function () {
		// volunteerButton.style.color = "#060029";
		listLoop();
		// grayHover();
		this.classList.add("gray");
		interests.style.display = "block";
		volunteer.style.display = "none";
		books.style.display = "block";
		outdoor.style.display = "none";
	});
}

if (treeButton) {
	treeButton.addEventListener("click", function () {
		// volunteerButton.style.color = "#060029";
		listLoop();
		// grayHover();
		this.classList.add("gray");
		interests.style.display = "block";
		volunteer.style.display = "none";
		books.style.display = "none";
		outdoor.style.display = "block";
	});
}

if (button1) {
	button1.addEventListener("click", function () {
		modal1.style.display = "block";
	});
}

if (close1) {
	close1.addEventListener("click", function () {
		modal1.style.display = "none";
	})
}

if (button2) {
	button2.addEventListener("click", function () {
		modal2.style.display = "block";
	});
}

if (close2) {
	close2.addEventListener("click", function () {
		modal2.style.display = "none";
	})
}

if (button3) {
	button3.addEventListener("click", function () {
		modal3.style.display = "block";
	});
}

if (close3) {
	close3.addEventListener("click", function () {
		modal3.style.display = "none";
	})
}

if (button4) {
	button4.addEventListener("click", function () {
		modal4.style.display = "block";
	});
}

if (close4) {
	close4.addEventListener("click", function () {
		modal4.style.display = "none";
	})
}

if (button5) {
	button5.addEventListener("click", function () {
		modal5.style.display = "block";
	});
}

if (close5) {
	close5.addEventListener("click", function () {
		modal5.style.display = "none";
	})
}

