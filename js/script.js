function sendMail(params){
    //alert("IN method");
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

  
