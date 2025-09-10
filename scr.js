function validateForm() {
  var name = document.getElementById('na').value.trim();
  var namep = /^[a-zA-Z]+$/;
  var email = document.getElementById("em").value.trim();
  var number=document.getElementById("nm").value.trim();
  var number1=/^[0-9]+$/;

  if (name === "") {
    alert("Name must be filled out");
    return false;
  }

  if (!name.match(namep)) {
    document.getElementById('msg').innerHTML = "Only alphabets are allowed in name";
    return false;
  } else {
    document.getElementById('msg').innerHTML = "";
  }

  if (number === "") {
    document.getElementById('msgnum').innerHTML = "Phone number is not Entered";
    return false;
  }

  if (!number.match(number1)) {
    document.getElementById('msgnum').innerHTML = "Only Numbers are allowed";
    return false;
  } else {
    document.getElementById('msgnum').innerHTML = "";
  }

  if (email === "") {
    alert("Email must be filled out");
    return false;
  }

  return true; 
}
