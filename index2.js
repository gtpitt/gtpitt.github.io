
function iload() {
	$(window).load(function () {
		setTimeout(loadDoc, 5000);
	});
}
function iresult() {
	var result = document.getElementById("result");
	result.innerHTML = 'The page will load after delay of 5 seconds using setTimeout()  method.';
}

$(document).ready(function () {
	event.preventDefault();

	function json1(id,name){
		this.id = id;
		this.name = name;
	}

	id_list = Array();
	id_list.push(new json1("1","TEST_1"));
	id_list.push(new json1("2","TEST_2"));

	id_list = JSON.stringify(id_list);
	document.write(id_list);
});



function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("result").innerHTML = this.responseText;
    }
  xhttp.open("GET", "in2.txt", true);
  xhttp.send();
}
