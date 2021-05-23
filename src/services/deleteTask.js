
import axios from "axios";

function deleteTask(id){



    const promise = axios({
        method : 'DELETE',
        url: `https://todos-go.herokuapp.com/api/todos/${id}`
    })

    return promise


}

export default deleteTask