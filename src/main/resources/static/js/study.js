$(function (){

function getCardList(){
    fetch("card-api")
        .then(response => response.json())
        .then(data =>
        console.log(data))
}
getCardList();




});