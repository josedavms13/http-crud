import './componentsCss/taskCard.css'
import {useEffect, useRef, useState} from "react";
import {TweenMax} from "gsap";

const TaskCard = ({onChange, task}) =>{


    let taskCard = useRef(null);

    const [isCompleted, SetIsCompleted] = useState('pending');
    const [buttonColor, SetButtonColor] = useState(' ')

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
        SetIsCompleted('Completed')
        SetButtonColor('completed')
    }

    return(
        <div className={`task-card ${buttonColor}`}>

            <div onPointerDown={clickPressed} onPointerUp={clickReleased} className="task-container" ref={element => taskCard = element}>
                <h2>Hacer la cama</h2>

                <h5>Jose</h5>
                <h4>{isCompleted}</h4>
            </div>


        </div>
    )
}


export default TaskCard