import axios from "axios";

function update(id, item){


    const baseUrl = `https://todos-go.herokuapp.com/api/todos/${id}`;

    const promise = axios({
        method : 'PUT',
        url: baseUrl,
        data : item
    })


    return promise;


}

export default update