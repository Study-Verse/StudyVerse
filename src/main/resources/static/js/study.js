$(function (){

    function getCardList(){
        getFirstCard()
                fetch("card-api")
                .then(response => response.json())
                .then(data =>{
                    getFirstCard(data)
                    
                    // .then($("#study-card-container").append(`
                    //
                    //       <div class="carousel-inner">
                    //             <div class="carousel-item active">
                    //                   <p>${data.frontFace}</p>
                    //                   <p>${data.backFace}</p>
                    //             </div>
                    //       </div>
                    //     `)
                    // )
                    // data.forEach((card) =>{
                    //     console.log(card)
                    //     $("#study-card-container").append(`
                    //       <div class="carousel-inner">
                    //         <div class="carousel-item active">
                    //           <p>${card.frontFace}</p>
                    //           <p>${card.backFace}</p>
                    //         </div>
                    //       </div>
                    //     `)
                    // })// end of for each
                })
}// end of getCardList function
    getCardList()


    //get the first card in the array of objects from json
    function getFirstCard(array){
        return array[0]
    }

    //get the current card index in the list and add one to the index to get the next one
    function getNextCard(cardListArray){
    }




});