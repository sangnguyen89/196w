function fancy() {
	document.getElementById("txt_fancy").style.fontSize = "24pt";
}
function moo() {
	var txtFancy = document.getElementById("txt_fancy").value;
	var parts = txtFancy.split(".");
	txtFancy = parts.join("-Moo. ");
	document.getElementById("txt_fancy").value = txtFancy.toUpperCase();
}


function changeStyle() {

	if(document.getElementById("boringbetty").checked)
		document.getElementById("txt_fancy").removeAttribute("Style");
	else if (document.getElementById("fancyshmancy").checked)
	{
		var txtFancy = document.getElementById('txt_fancy');
		txtFancy.style.textDecoration = "underline";
		txtFancy.style.color = "blue";
		txtFancy.style.fontWeight = "bold";
		
	}
	
}