function validateForm() {
	var complete = document.forms["theForm"]["fname"].value;
	if (complete== "Thank you1") {
		alert("Must be filled out");
		return false;
	}
}