function sendMail(params){
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var mobile = document.getElementById("mobile").value.trim();
  var message = document.getElementById("message").value.trim();
  
  document.getElementById("nameErrorMsg").innerHTML = "";
  document.getElementById("emailErrorMsg").innerHTML = "";
  document.getElementById("mobileErrorMsg").innerHTML = "";
  document.getElementById("messageErrorMsg").innerHTML = "";

  if(name =="" || name == null){
    // alert("Name blank");
    document.getElementById("emailErrorMsg").innerHTML = "";
    document.getElementById("mobileErrorMsg").innerHTML = "";
    document.getElementById("messageErrorMsg").innerHTML = "";
    document.getElementById("nameErrorMsg").innerHTML = "Please enter name";
    return false;
  }
  else if(email =="" || email ==" "){
    // alert("email blank");
    document.getElementById("nameErrorMsg").innerHTML = "";
    document.getElementById("mobileErrorMsg").innerHTML = "";
    document.getElementById("messageErrorMsg").innerHTML = "";
    document.getElementById("emailErrorMsg").innerHTML = "Please enter email";
    return false;
  }
  else if(email !="" && !validateEmail()){
    // alert("ValidateEmail");
    // var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // var emailField = document.getElementById("email").value;
    // alert("reg.test(emailField.value)"+emailField.value);
    // alert("Inside:"+reg.test(emailField));
    // if (reg.test(emailField) == false) 
    // {
    //     alert('Invalid Email Address');
    //     document.getElementById("emailErrorMsg").innerHTML = "Please enter correct email Id";
    //     return false;
    // }
    
    // document.getElementById("nameErrorMsg").innerHTML = "";
    // document.getElementById("emailErrorMsg").innerHTML = "";
    // document.getElementById("mobileErrorMsg").innerHTML = "";
    // document.getElementById("messageErrorMsg").innerHTML = "";
    return false;
  }
  else if(mobile ==""|| mobile ==" "){
    // alert("mobile blank");
    document.getElementById("mobileErrorMsg").innerHTML = "Please enter phone number";
    document.getElementById("nameErrorMsg").innerHTML = "";
    document.getElementById("emailErrorMsg").innerHTML = "";
    document.getElementById("messageErrorMsg").innerHTML = "";
    return false;
  }
  else if(mobile !="" && isNaN(mobile)){
    // alert("mobile blank");
    document.getElementById("mobileErrorMsg").innerHTML = "Please enter valid phone number";
    document.getElementById("nameErrorMsg").innerHTML = "";
    document.getElementById("emailErrorMsg").innerHTML = "";
    document.getElementById("messageErrorMsg").innerHTML = "";
    return false;
  }
  else if(message ==""|| message ==" "){
    // alert("message blank");
    document.getElementById("messageErrorMsg").innerHTML = "Please enter message";
    document.getElementById("nameErrorMsg").innerHTML = "";
    document.getElementById("emailErrorMsg").innerHTML = "";
    document.getElementById("mobileErrorMsg").innerHTML = "";
    return false;
  }
  else{
    // alert("In else");
    // return false;
    var tempParams={
      from_name: document.getElementById("name").value,
      to_name: "V.S.Enterprises",
      message: document.getElementById("message").value,
      phone: document.getElementById("mobile").value,
      email: document.getElementById("email").value,
    };
    // alert("Value: "+document.getElementById("name").value);
    emailjs.send('service_b8ya86y','template_nnuzqdh',tempParams)
    .then(function(res){
      console.log("success",res.status);
    }, function(error) {
        console.log('FAILED...', error);
    });
    alert("Thank You, for your enquiry. Soon our team will contact with you. Have a great day.");
  }

  }

function validateEmail(){
  var emailId = document.getElementById("email").value;
  // alert("Email:" +emailId);
  // alert("in email validate");
  var atpos = emailId.indexOf("@");
  var dotpos = emailId.lastIndexOf(".");
  // alert("@:"+atpos);
  // alert("DOT:"+dotpos);
  // alert(" "+emailId.length);
  // alert(" "+dotpos-emailId.length  < 2);
  if(atpos < 1 || (dotpos < atpos+2) || (dotpos+ 2 >= emailId.length)){
    document.getElementById("emailErrorMsg").innerHTML = "Please enter correct email Id";
    return false;
  }
  else{
    // alert("In else validateEmail()");
    return true;
  }
}

// function validateEmail(){
//   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//   var emailField = document.getElementById("email").value;
//   if (reg.test(emailField.value) == false) 
//   {
//       alert('Invalid Email Address');
//       document.getElementById("emailErrorMsg").innerHTML = "Please enter correct email Id";
//       return false;
//   }

//   // return true;

// }