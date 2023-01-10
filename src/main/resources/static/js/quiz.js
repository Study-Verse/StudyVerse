    console.log("hey")
    function getQuizzes (){

        fetch(`/quiz-api/api`).then(response => response.json())
            .then(data => {
                console.log(data)
                data.forEach((quiz)=>{
                    console.log(quiz)
                });// end of forEach
            })
            .catch(rejected => {
            console.log(rejected);
        });

}// end of getQuizzes function
getQuizzes()

    function otherApiForQuiz(){
    fetch("current-user-quiz-api")
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => {
            console.log(err);
        })
    }