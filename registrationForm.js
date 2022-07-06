"use strict";

const form = document.querySelector("#registration-form");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	validateForm();
});

function validateForm() {
	//First Name
	if (firstName.value.trim() === "") {
		setError(firstName, "First Name cannot be empty");
	} else if (firstName.value.trim().length < 3) {
		setError(firstName, "First Name cannot be less than 3 characters");
	} else {
		setSuccess(firstName);
	}

	//Last Name
	if (lastName.value.trim() === "") {
		setError(lastName, "Last Name cannot be empty");
	} else if (lastName.value.trim().length < 3) {
		setError(lastName, "Last Name cannot be less than 3 characters");
	} else {
		setSuccess(lastName);
	}

	// Email
	if (email.value.trim() === "") {
		setError(email, "Provide email address");
	} else if (isEmailValid(email.value)) {
		setSuccess(email);
	} else {
		setError(email, "Looks like this is not an email");
	}

	// Password
	if (password.value.trim() === "") {
		setError(password, "Password cannot be empty");
	} else if (password.value.trim().length < 6) {
		setError(password, "Password min 6 and max 20 characters");
	} else {
		setSuccess(password);
	}

	function setError(element, errorMessage) {
		const parent = element.parentElement;
		if (parent.classList.contains("success")) {
			parent.classList.remove("success");
		}
		parent.classList.add("error");
		const paragraph = parent.querySelector("span");
		paragraph.textContent = errorMessage;
	}

	function setSuccess(element) {
		const parent = element.parentElement;
		if (parent.classList.contains("error")) {
			parent.classList.remove("error");
		}
		parent.classList.add("success");
	}
	function isEmailValid(email) {
		const emailRegex = new RegExp(
			"([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
		);
		return emailRegex.test(email);
	}
}
