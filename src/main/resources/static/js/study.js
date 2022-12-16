$(function (){

    // getting the ID from the window #no need for hidden div
    let cardSetId = window.location.pathname.split("/")[2];
        function getCardList(){
                fetch(`/card-api/${cardSetId}`)
                .then(response => response.json())
                .then(data =>{
                    console.log(data)
                    data.forEach((card) =>{
                        $("#study-card-container").append(`
                        <div class="carousel">
                               <div class="carousel__cell"
                                    <p>${card.frontFace}</p>
                                    <p>${card.backFace}</p>
                                </div>
                        </div>
                        `)
                        console.log(card)
                    })// end of for each
                })
}// end of getCardList function
    getCardList()





});