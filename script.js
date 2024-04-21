function validateForm() {
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  // Basic validation
  if (fullName === "" || email === "" || phone === "") {
    alert("Please fill out all required fields.");
    return false;
  }

  // Advanced validation (phone number)
  var phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid phone number (e.g., 123-456-7890).");
    return false;
  }

  return true;
}
