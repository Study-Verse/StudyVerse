$(function (){

    let cardList =
        function getCardList(){
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

    //get the first card in the array of objects from json
    function getFirstCard(){
        return cardList()
    }

    //get the current card index in the list and add one to the index to get the next one
    function getNextCard(cardListArray){


}



});