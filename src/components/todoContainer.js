import TaskCard from "./taskCard";
import {useEffect, useState} from "react";


const TodoContainer = ({data}) => {

    const [toWorkWithData, SetToWorkWithData] = useState(null);
    const [cardToggle, SetCardToggle] = useState(false)

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
                        <TaskCard task={element} key={element.id}/>
                    )
                })}
            </div>}



        </div>



)
}
export default TodoContainer