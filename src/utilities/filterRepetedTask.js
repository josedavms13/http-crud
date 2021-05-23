

function filterRepetedTask(objectArray){

    const array = [...objectArray]



    const taskArray = [];

    let temp = {task : '', student: '', isCompleted :''};

    array.forEach((element)=>{
        if(temp.task !== element.task && temp.student !== element.student && temp.isCompleted !== element.isCompleted ){
            taskArray.push(element);
            temp = element;
        }
    })

    return taskArray

}

export default filterRepetedTask













