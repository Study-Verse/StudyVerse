$(function (){

        function getCardList(){
                fetch(`/${id}/card-api"`)
                .then(response => response.json())
                .then(data =>{
                    console.log(data)
                    data.forEach((card) =>{
                        console.log(card)
                        $("#study-card-container").append(`
                            <p>${card.frontFace}</p>
                            <p>${card.backFace}</p>
                        `)
                    })// end of for each
                })
}
getCardList()


    //get the first card in the array of objects from json
    function getFirstCard(){
    }

    //get the current card index in the list and add one to the index to get the next one
    function getNextCard(cardListArray){
    }





});