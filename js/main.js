function validateForm() {
	var complete = document.forms["theForm"]["fname"][lname].value;
	if (complete== "Thank you") {
		alert("Must be filled out");
		return false;
	}
}