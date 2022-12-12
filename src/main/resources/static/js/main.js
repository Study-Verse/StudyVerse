let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");




$(".signup").click(function(){
    $(".slider").classList.add("moveslider");
    $(".form-section").classList.add("form-section-move");
})

// signup.addEventListener("click", function() {
//     slider.
//     formSection
// });

login.click(function() {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});