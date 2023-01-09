$(function (){
    console.log("hey")
    fetch("/current-user-quiz-api")
        .then(resp=> resp.json())
        .then(data => {
            data.forEach(quiz => {
                console.log(quiz)
            })
        })

})

