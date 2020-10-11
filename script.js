function generate() {
	let firstName = prompt("Enter your First Name");
	let lastName = prompt("Enter your Last Name");
	let studentID = prompt("Enter your Student ID");
	document.getElementById("username").innerHTML = "<strong>USERNAME: </strong>" + firstName.charAt(0) + lastName + studentID.substr(2);
	document.getElementById("email").innerHTML = "<strong>EMAIL: </strong>" + firstName.charAt(0) + lastName + studentID.substr(2) + "@student.pps.net";
	document.getElementById("password").innerHTML = "<strong>PASSWORD: </strong>Pps" + studentID;
}