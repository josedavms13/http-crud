

function read(){

    const url = `https://todos-go.herokuapp.com/api/todos`



    return fetch(url)
        .then(response=>response.json())
}







export default read