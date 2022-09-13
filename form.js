function fnamevalid() {
  // first name
  let regex = /^[a-zA-Z]{2,}$/;
  let name = document.getElementById("name").value;
  if (regex.test(name)) {
    console.log("match");
    let name = document.getElementById("name");
    name.classList.remove("is-invalid");
  } else {
    console.log("not matched");
    let name = document.getElementById("name");
    name.classList.add("is-invalid");
  }
}

function lnamevalid() {
  let regex = /^[a-zA-Z]{2,}$/;
  let lname = document.getElementById("lname").value;
  if (regex.test(lname)) {
    console.log("match");
    let lname = document.getElementById("lname");
    lname.classList.remove("is-invalid");
  } else {
    console.log("not matched");
    let lname = document.getElementById("lname");
    lname.classList.add("is-invalid");
  }
}

// phone no
function pvalid() {
  let regexp = /^([+]\d{2}[ ])?\d{10}$/;
  let phone = document.getElementById("phone").value;
  if (regexp.test(phone)) {
    console.log("match");
    let phone = document.getElementById("phone");
    phone.classList.remove("is-invalid");
  } else {
    console.log("not matched");
    let phone = document.getElementById("phone");
    phone.classList.add("is-invalid");
  }
}
// email
function evalid() {
  let regexe = /^\S+@\S+\.\S+$/;
  let email = document.getElementById("email").value;
  if (regexe.test(email)) {
    console.log("match");
    let email = document.getElementById("email");
    email.classList.remove("is-invalid");
  } else {
    console.log("not matched");
    let email = document.getElementById("email");
    email.classList.add("is-invalid");
  }
}

function btnd() {
  // let submit = document.getElementById("submit");
  // submit.classList.remove("d-none");
  let name = document.getElementById("name").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let dob = document.getElementById("dob").value;
  let regex = /^[a-zA-Z]${2,}/;
  let regexp = /^([+]\d{2}[ ])?\d{10}$/;
  let regexe = /^\S+@\S+\.\S+$/;


  if (
    regex.test(name) &&
    regex.test(lname) &&
    regexp.test(phone) &&
    regexe.test(email) &&
    dob.length !=0
  )
  {
    document.getElementById("boxcheck")
    let submit = document.getElementById("submit");
  submit.disabled = false;
  console.log("correct")
  
  } else {
    document.getElementById("boxcheck").checked = false;
    alert("Fill Correct information")
  }
}
