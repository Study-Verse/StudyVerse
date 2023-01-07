$(function (){
    console.log("hey")
    fetch("/current-user-quiz-api/api")
        .then(resp=> resp.json())
        .then(data => {
            console.log(data)
        })

})