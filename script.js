// Varaibles
const body = document.getElementsByTagName("body");
const iconHamburgur = document.getElementById("icon-hamburger");
const nav = document.querySelector(".nav");
const testimonialsButton = document.getElementById("testimonials-button");
const profile1 = document.getElementById("profile-1");
const profile2 = document.getElementById("profile-2");
const profile3 = document.getElementById("profile-3");
const profile4 = document.getElementById("profile-4");
const dots = document.querySelectorAll(".dot-container span");
dots[0].classList.add("color-change");
dots.forEach((dot) => {
  dot.addEventListener("click" , (e) => {
    const dotId = e.currentTarget.id ; 
    switch (dotId) {
      case "one":
        profile1.classList.add("come-first");
        profile2.classList.remove("come-first");
        profile3.classList.remove("come-first");
        profile4.classList.remove("come-first");
        dots.forEach((x) => {
          if(x.id !== dotId){
            x.classList.remove("color-change");
          }
          else{
            x.classList.add("color-change")
          }
        })

        break;
      case "two":
        profile1.classList.remove("come-first");
        profile2.classList.add("come-first");
        profile3.classList.remove("come-first");
        profile4.classList.remove("come-first");
        dots.forEach((x) => {
          if(x.id !== dotId){
            x.classList.remove("color-change");
          }
          else{
            x.classList.add("color-change")
          }
        })
        

        break;
      case "three":
        profile1.classList.remove("come-first");
        profile2.classList.remove("come-first");
        profile3.classList.add("come-first");
        profile4.classList.remove("come-first");
        dots.forEach((x) => {
          if(x.id !== dotId){
            x.classList.remove("color-change");
          }
          else{
            x.classList.add("color-change")
          }
        })
        break;
      case "four":
        profile1.classList.remove("come-first");
        profile2.classList.remove("come-first");
        profile3.classList.remove("come-first");
        profile4.classList.add("come-first");
        dots.forEach((x) => {
          if(x.id !== dotId){
            x.classList.remove("color-change");
          }
          else{
            x.classList.add("color-change")
          }
        })
        break;
      
      default:
        break;
    }
  })
})

testimonialsButton.addEventListener("click", () => {
   profile4.classList.toggle("come-first") ; 
});





iconHamburgur.addEventListener("click" , () =>{
  nav.classList.toggle("open");
  iconHamburgur.classList.toggle("change-content");
  
})


function validateEmail() {
    var email = document.getElementById("email").value;
    var rel = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    if (!rel.test(email)) {
      document.getElementById("valid").innerHTML =
        "\nPlease Enter a valid email address";
      document.getElementById("email").style.border = "0.5px solid red";
      document.getElementById("email").style.color = "red";
      document.getElementById("valid").style.font = "bold";
      document.getElementById("valid").style.color = "red";
      
    } else {
      document.getElementById("valid").innerHTML = "";
      document.getElementById("email").style.border =
        "0.5px solid rgba(0,0,0,0.3)";
    }
  }
 

  