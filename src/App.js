import './App.css';
import {useEffect, useState} from "react";


//region  import SERVICES

import read from "./services/read";

//endregion import services

//region import UTILITIES

import getListOfStudents from './utilities/getListOfStudents'
import filterRepeatedTask from "./utilities/filterRepetedTask";

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
            .then(data => SetDataFromApi(filterRepeatedTask(data.todos)));


    }, [])


    //endregion



    //region  STUDENTS

    //region Get Students from api
    useEffect(() => {

        if (dataFromApi) {
            SetListOfStudents(getListOfStudents(dataFromApi));
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


    const [currentTasks, SetCurrentTaks] = useState(null)


    useEffect(()=>{

        if(dataFromApi){

            SetCurrentTaks(dataFromApi);


        }


    },[dataFromApi])
    //endregion read existing tasks




    //region CREATE NEW TASK

    const [createTaskToggle, SetCreateTaskToggle] = useState(null)

    const addNewTask = (data)=>{
        console.log(data);
        const addNewTaskArray = [...currentTasks];
        addNewTaskArray.push(data);
        SetCurrentTaks(addNewTaskArray);

    }

    //endregion create new task

    useEffect(()=>{
        console.log(currentTasks);
    },[currentTasks])


//endregion tasks



    return (
        <div className="App">


            <button onClick={() => SetNewStudentToggle(true)}>New Student</button>


            {newStudentToggle && <NewStudent onSubmit={(data => addNewStudent(data))} onSaveClick={() => SetNewStudentToggle(false)}
                students={listOfStudents}/>}


            {alreadyExistsMessageToggle && <ThisUserAlreadyExistCard/>}


            <button onClick={() => SetCreateTaskToggle(true)}>New Task</button>


            {createTaskToggle && <CreateTask studentList={listOfStudents} onsubmit={(data)=>{addNewTask(data)}}/>}


            <TodoContainer data={currentTasks}/>
        </div>
    );
}

export default App;
