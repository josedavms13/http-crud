import './componentsCss/taskCard.css'
import {useEffect, useState} from "react";

const TaskCard = ({task,onChange}) =>{


    console.log(task);


    const [isTaskCompleted, SetIsTaskCompleted] = useState(task.isCompleted)
    const [isCompletedText, SetIsCompletedText] = useState('pending');
    const [buttonColor, SetButtonColor] = useState(' ')

    useEffect(()=>{
        if(isTaskCompleted){
            SetIsCompletedText('Completed');
        }
        else{
            SetIsCompletedText('pending');
        }
    },[isTaskCompleted])




    //region HOLD CLICK SECTION
    let timer;



    function clickPressed() {
        console.log('click pressed')

        timer = setTimeout(()=>{
            afterTimeOut();
        },1000)
    }

    function clickReleased() {
        console.log('click Released')
        cancelTimer();

    }

    function cancelTimer(){
        clearTimeout(timer);
    }

    function afterTimeOut(){
        console.log('time Out')
        SetIsTaskCompleted(true);
        SetButtonColor('completed')
    }

    //endregion hold click section

    return(
        <div className={`task-card ${buttonColor}`}>

            <div onPointerDown={clickPressed} onPointerUp={clickReleased} className="task-container">
                <h2>{task.task}</h2>

                <h5>{task.student}</h5>
                <h4>{isCompletedText}</h4>
            </div>


        </div>
    )
}


export default TaskCard