
function myFunc(event){

    event.preventDefault();

    var full_name=document.querySelector("#full_name").value
    var mail=document.querySelector("#mail").value
    var mesg_box=document.querySelector("#mesg_box").value
    // var submit_btn=document.getElementById("submit_btn").value

    localStorage.setItem('is_full_name',full_name)
    localStorage.setItem("is_mail",mail)
    localStorage.setItem('is_mesg_box',mesg_box)

   

    console.log("Full Name:", full_name);
    console.log("Email:", mail);
    console.log("Message:", mesg_box);

    alert("Form submitted and data saved!")
}



 // Set the offer end time (24 hours from now)
 var offerEndDate = new Date().getTime() + 24 * 60 * 60 * 1000;

 var x = setInterval(function() {
     var now = new Date().getTime();
     var distance = offerEndDate - now;

     if (distance <= 0) {
         clearInterval(x);
         document.getElementById("timer").innerHTML = "The offer has ended!";
     } else {
         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60)) / 1000);

         document.getElementById("timer").innerHTML = hours + "h " + minutes + "m " + seconds + "s";
     }
 }, 1000);