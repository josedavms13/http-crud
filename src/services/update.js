import axios from "axios";

function update(id, item){

    console.log(item );

    const baseUrl = `https://todos-go.herokuapp.com/api/todos/${id}`;

    const promise = axios({
        method : 'PUT',
        url: baseUrl,
        data : item
    })
        .then(data=>console.log(data))


    return promise;


}

export default update