var numRight=0;
var total=0;
	
function hide(Id) {
    document.getElementById(Id).style.display = 'none' // hides answerd question
	let whole = document.body.getElementsByTagName("fieldset")
	for(i=0;i<whole.length;i++){ // HIDES EVERYTHING ELSE
		whole[i].style.visibility = 'hidden'
	}
}

function show(Id) {
    document.getElementById(Id).style.display = ''
	document.getElementById(Id).style.visibility = ''
}

function addRight() {
    numRight++;
    total++;
    let correct = document.getElementById("correct")
	correct.innerHTML = "Correct! Your Score Is " + numRight + "/" + total + " (" + Math.floor(numRight/total*100) + "%)";
}
    
function addWrong() {
    total++;
    let correct = document.getElementById("correct")
	correct.innerHTML = "Incorrect Your Score Is " + numRight + "/" + total + " (" + Math.floor(numRight/total*100) + "%)";
}