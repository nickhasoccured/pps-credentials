function generate() {
	let firstName = prompt("Enter your First Name", "John");
	let lastName = prompt("Enter your Last Name", "Doe");
	let studentID = prompt("Enter your Student ID", "123456");
	document.getElementById("username").innerHTML = "<strong>USERNAME: </strong>" + firstName.charAt(0) + lastName + studentID.substr(2);
	document.getElementById("email").innerHTML = "<strong>EMAIL: </strong>" + firstName.charAt(0) + lastName + studentID.substr(2) + "@student.pps.net";
	document.getElementById("password").innerHTML = "<strong>PASSWORD: </strong>Pps" + studentID;
}