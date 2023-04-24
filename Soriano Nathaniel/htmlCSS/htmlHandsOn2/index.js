console.log("test good");

function alertLogSuccess() {
    alert("Log in successful");
}

function alertResetSuccess() {
    alert("Password reset was successful");
}

function formcheck() {
    var fields = $('.ss-item-required').find('select, textarea, input').serializeArray();
  
    $.each(fields, function (i, field) {
      if (!field.value) alert(field.name + ' is required');
    });
}
//this code is still flawed. checking a checkbox then hitting the register button will display that the account is successfully registered. I dont even know the formcheck() function.
//root problem- checkbox attribute required
function alertRegisterSuccess() {
    const morning = document.getElementById("preferredMorning").checked;
    const afternoon = document.getElementById("preferredAfternoon").checked;
    const evening = document.getElementById("preferredEvening").checked;
    const fName = document.getElementById("firstName").value;

    if (morning || afternoon || evening === true) {
        alert("Hi! "+ fName + ", your account is Successfully Registered");
        formcheck();
        
    } else {
        alert("Please fill up the necessary fields in the form")
    }
}