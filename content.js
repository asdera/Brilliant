// content.js

window.onload = function() {
    console.log($(".nw")[0])
}

window.onkeyup = function(e) {
	e.which = e.which || e.keyCode;
	if (49 <= e.which && e.which <= 57) {
		document.getElementsByClassName("choice btn")[e.which-49].click();
	}
	if (e.which == 81 || e.which == 13) {
		document.getElementsByClassName("btn-accent")[0].click()
	}
	if (e.which == 69) {
		document.getElementsByClassName("btn-solution")[0].click()
	}
	if (e.which == 65) {
		document.getElementsByClassName("btn-prev")[0].click()
	}
	if (e.which == 68) {
		document.getElementsByClassName("btn-next")[0].click()
	}
	if (e.which == 87) {
		window.scrollBy(0, -250);
	}
	if (e.which == 83) {
		window.scrollBy(0, 250);
	}
}


