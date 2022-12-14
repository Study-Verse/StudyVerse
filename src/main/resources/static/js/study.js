$(function (){

function getCardList(){

    fetch("card-api")
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            // data.forEach((card) =>{
            for (let card of data) {
                console.log(card)
                $("#study-card-container").prepend(`
                    <p>${card.frontFace}</p>
                    <p>${card.backFace}</p>
                `)
                // })
            }
        })
}
getCardList();




});