import './componentsCss/todoContainer.css'

import TaskCard from "./taskCard";
import {useEffect, useState} from "react";


const TodoContainer = ({data, onTaskDelete, onTaskComplete}) => {

    const [toWorkWithData, SetToWorkWithData] = useState(null);

    useEffect(() => {
        if (data) {
                SetToWorkWithData(data)
        }
    }, [data])



    return (

        <div className={'todo-container'}>

            {toWorkWithData&&<div>
                {data.map((element)=>{
                    return(
                        <TaskCard task={element} key={element.id} onDelete={onTaskDelete} onTaskComplete={(id)=>onTaskComplete(id)}/>
                    )
                })}
            </div>}



        </div>



)
}
export default TodoContainer