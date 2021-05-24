

import axios from "axios";

function create (data){


    const baseUrl = `https://todos-go.herokuapp.com/api/todos`;



    const promise = axios({
        method : 'POST',
        url: baseUrl,
        data : data
    })


    return promise

}

export default create