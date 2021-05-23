import TaskCard from "./taskCard";
import {useEffect, useState} from "react";


const TodoContainer = ({data, onTaskDelete}) => {

    const [toWorkWithData, SetToWorkWithData] = useState(null);

    useEffect(() => {
        if (data) {

            SetToWorkWithData(data)
            console.log(data);
        }
    }, [data])


    return (

        <div>

            {toWorkWithData&&<div>
                {data.map((element)=>{
                    return(
                        <TaskCard task={element} key={element.id} onDelete={onTaskDelete}/>
                    )
                })}
            </div>}



        </div>



)
}
export default TodoContainer