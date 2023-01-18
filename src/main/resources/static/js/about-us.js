$(function (){

    const card= $('.card-inner > div')



$(card).on("click", function (){
    console.log("hey");
    if(!$(this).hasClass("flipCard")){
        $(this).addClass("flipCard")
    } else{
        $(this).removeClass("flipCard")
    }
})

})
