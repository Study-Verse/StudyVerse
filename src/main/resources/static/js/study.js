$(function (){

function getCardList(){

    let arrayOfCards =[]
    arrayOfCards =

        fetch("card-api")
        .then(response => response.json())
        .then(data =>{
            console.log(data)

            data.forEach((card) =>{
                console.log(card)
                $("#study-card-container").prepend(`
                    <p>${card.frontFace}</p>
                    <p>${card.backFace}</p>
                `)
            })// end of for each
        })


}
getCardList();




});