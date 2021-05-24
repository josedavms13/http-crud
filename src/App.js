import './App.css';
import {useEffect, useState} from "react";


//region  import SERVICES

import read from "./services/read";
import create from "./services/create";
import deleteTask from "./services/deleteTask";
import update from "./services/update";
//endregion import services

//region import UTILITIES

import getListOfStudents from './utilities/getListOfStudents'

//endregion import utilities

import CreateTask from "./components/createTask";
import NewStudent from "./VIEWS/NewStudent";
import ThisUserAlreadyExistCard from "./components/thisUserAlreadyExistCard";
import TodoContainer from "./components/todoContainer";

function App() {

    //region GET FROM API

    const [dataFromApi, SetDataFromApi] = useState(null);
    const [listOfStudents, SetListOfStudents] = useState(null);

    useEffect(() => {

        read()
            .then(data => SetDataFromApi(data.todos));


    }, [])


    //endregion



    //region  STUDENTS

    //region Get Students from api
    useEffect(() => {

        if (dataFromApi) {
            SetListOfStudents(getListOfStudents(dataFromApi));

            SetCurrentTask(dataFromApi);
        }
    }, [dataFromApi])
    //endregion get students from api


    //region Create New Student

    const [newStudentToggle, SetNewStudentToggle] = useState(false)


    //Add new student to the Students State Variable if it's new

    const [alreadyExistsMessageToggle, SetAlreadyExistsMessageToggle] = useState(false);

    function addNewStudent(data) {

        if (data !== null) {
            const currentStudents = [...listOfStudents]

            if (currentStudents.includes(data.Student)) {
                SetAlreadyExistsMessageToggle(true);
                SetNewStudentToggle(false);

                setTimeout(()=>{
                    SetAlreadyExistsMessageToggle(false);
                },2000)

            }
            else {
                currentStudents.push(data.Student);

                SetListOfStudents(currentStudents);
                SetNewStudentToggle(false);
            }
        }
    }


    //endregion create new student


    //endregion STUDENTS

//region TASKS

    //region Read existing tasks


    const [currentTasks, SetCurrentTask] = useState(null)





    //endregion read existing tasks




    //region CREATE NEW TASK

    const [createTaskToggle, SetCreateTaskToggle] = useState(null)

    const addNewTask = (data)=>{

        create(data)
            .then(()=>{
                read()
                    .then(data => SetCurrentTask(data.todos))
            })
        const addNewTaskArray = [...currentTasks];
        addNewTaskArray.push(data);
        SetCurrentTask(addNewTaskArray);
        SetCreateTaskToggle(false);
    }


    //endregion create new task



    //region DELETE TASK

    const [itemToDeleteId , SetItemToDeleteId] = useState(null);


    useEffect(() => {


            if (itemToDeleteId) {
                deleteTask(itemToDeleteId)
                deleteTaskFunction(itemToDeleteId)
            }
        }

        , [itemToDeleteId])





const deleteTaskFunction = (id)=> {

        const arrayWithoutDeleteTaskArray = [...currentTasks];


        const index = ()=>{
            for(let i = 0; i<arrayWithoutDeleteTaskArray.length; i++){
                if(arrayWithoutDeleteTaskArray[i].id === id){
                    return i
                }
            }
        }
        arrayWithoutDeleteTaskArray.splice(index(), 1)
        SetCurrentTask(arrayWithoutDeleteTaskArray);


}
























    //endregion



    //region UPDATE TASK

const [taskToUpdate, SetTaskToUpdate] = useState(null);

    useEffect(()=>{
        if(taskToUpdate){

            updateTask(taskToUpdate)
        }
    },[taskToUpdate])




    const updateTask = (id)=>{

        const itemToUpdate = ()=>{
            for(let i = 0; i<currentTasks.length; i++){

                if(currentTasks[i].id === id){
                    currentTasks[i].isCompleted = true;
                    return currentTasks[i]
                }

            }
        }

        update(id, itemToUpdate())

    }



    //endregion update task





//endregion tasks



    return (
        <div className="App">
            
            <div className="bg-image">

            </div>
            <div className="header">

                <h1>Task List</h1>
                <p>Hold click on a task to mark it as completed</p>
            </div>
            <div className="app-container">
                <div className="buttons-container">

                    {/*Add New Student*/}
                    <button onClick={() => SetNewStudentToggle(true)}>New Student</button>




                    {alreadyExistsMessageToggle && <ThisUserAlreadyExistCard/>}

                    {/*Create New Task*/}
                    <button onClick={() => SetCreateTaskToggle(true)}>New Task</button>
                </div>


                    {newStudentToggle && <NewStudent onCancel={()=>{SetNewStudentToggle(false)}} onSubmit={(data => addNewStudent(data))} onSaveClick={() => SetNewStudentToggle(false)}
                                                     students={listOfStudents}/>}


                {createTaskToggle && <CreateTask studentList={listOfStudents} onsubmit={(data)=>{addNewTask(data)}}/>}

                {/*Display Tasks*/}
                <TodoContainer data={currentTasks} onTaskDelete={(id)=>{SetItemToDeleteId(id)}} onTaskComplete={(id)=>SetTaskToUpdate(id)}/>
            </div>
        </div>
    );
}

export default App;
