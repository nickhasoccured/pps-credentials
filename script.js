function refreshDOBEnabled() {
	const dateOfBirth = document.getElementById("dateOfBirth");

	document.getElementById("higherGrade").checked
		? (dateOfBirth.disabled = true)
		: (dateOfBirth.disabled = false);
}

function displayResults() {
	const dateOfBirth = document.getElementById("dateOfBirth").value.split("-");
	const documentPassword = document.getElementById("password");
	document.getElementById("higherGrade").checked
		? (documentPassword.value = `Pps${document
				.getElementById("studentID")
				.value.substr(0, 6)}`)
		: (documentPassword.value = `${dateOfBirth[1]}${dateOfBirth[2]}`);

	const username = `${document.getElementById("firstName").value.charAt(0)}${
		document.getElementById("lastName").value
	}`;

	document.getElementById("email").value = `${username}@student.pps.net`;
	document.getElementById("username").value = username;
}

function copyElementValue(elementID) {
	const element = document.getElementById(elementID);

	element.select();
	element.setSelectionRange(0, 99999);

	document.execCommand("copy");

	alert(`Copied ${elementID}`);
}

function displayPassword() {
	const password = document.getElementById("password");

	document.getElementById("showPassword").checked
		? (password.type = "text")
		: (password.type = "password");
}
