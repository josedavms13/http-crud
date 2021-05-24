import './componentsCss/taskCard.css'
import {useEffect, useState} from "react";



const TaskCard = ({task, onDelete, onTaskComplete}) =>{



    const [isTaskCompleted, SetIsTaskCompleted] = useState(task.isCompleted)
    const [isCompletedText, SetIsCompletedText] = useState('pending');
    const [buttonColor, SetButtonColor] = useState(' ')

    useEffect(()=>{
        if(isTaskCompleted){
            SetIsCompletedText('Completed');
            SetButtonColor('completed')
        }
        else{

            SetIsCompletedText('pending');
        }
    },[isTaskCompleted])




    //region HOLD CLICK SECTION
    let timer;



    function clickPressed() {

        timer = setTimeout(()=>{
            afterTimeOut();
        },1000)
    }

    function clickReleased() {
        cancelTimer();

    }

    function cancelTimer(){
        clearTimeout(timer);
    }

    function afterTimeOut(){
        SetIsTaskCompleted(true);
        onTaskComplete(task.id);
        SetButtonColor('completed')
    }

    //endregion hold click section

    return(
        <div className={`task-card ${buttonColor}`}>
            <div className="task-container">

                <div onPointerDown={clickPressed} onPointerUp={clickReleased} className="task-container">
                    <div className="task-name">

                        <h2>{task.task}</h2>
                    </div>
                    <div className="details-container">

                        <h5>{task.student}</h5>
                        <h4>{isCompletedText}</h4>
                    </div>
                </div>
                <div className="delete">
                    <button onClick={()=>{onDelete(task.id)}}>Delete</button>
                </div>
            </div>


        </div>
    )
}


export default TaskCard