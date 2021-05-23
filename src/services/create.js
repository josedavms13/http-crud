

function create (data){


    const baseUrl = `https://todos-go.herokuapp.com/api/todos`;



    fetch(baseUrl,{
        method : 'POST',
        body : data,
        headers : new Headers().set('content-type', 'application/json')
    })




}