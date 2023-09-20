function validateForm(event) {
  event.preventDefault();

  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  if (nameInput.value === "") {
    alert("Please enter your name.");
    nameInput.focus();
    return;
  }

  if (emailInput.value === "") {
    alert("Please enter your email address.");
    emailInput.focus();
    return;
  }

  if (messageInput.value === "") {
    alert("Please enter your message.");
    messageInput.focus();
    return;
  }

  alert("Enquiry submitted successfully!");
  document.getElementById("enquiryForm").reset();
}
