
import axios from "axios";

function deleteTask(id){

    const baseUrl = `https://todos-go.herokuapp.com/api/todos`;

    const promise = axios({
        method : 'DELETE',
        url: `${baseUrl}/${id}`
    })

    return promise


}

export default deleteTask