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
            .then(data => {
                SetDataFromApi(data.todos);
                SetTaskList(data.todos)
            });


    }, [])


    //endregion



    //region  STUDENTS

    //region Get Students from api
    useEffect(() => {

        if (dataFromApi) {
            SetListOfStudents(getListOfStudents(dataFromApi));

            SetTaskList(dataFromApi);
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

                let lastIndex = (listOfStudents[listOfStudents.length-1]).id;
                const newStudent = {
                    id : lastIndex+ 1,
                    name: data.Student
                }
                currentStudents.push(newStudent);
                SetListOfStudents(currentStudents);
                SetNewStudentToggle(false);
            }
        }
    }


    //endregion create new student


    //endregion STUDENTS

//region TASKS

    const [taskList, SetTaskList] = useState(null)
    const [taskListToDisplay, SetTaskListToDisplay] = useState(null)

    useEffect(()=>{
        if(taskList) {
            SetTaskListToDisplay(taskList);
        }

    },[taskList])
    //region Read existing tasks







    //endregion read existing tasks




    //region CREATE NEW TASK

    const [createTaskToggle, SetCreateTaskToggle] = useState(null)

    const addNewTask = (data)=>{

        create(data)
            .then((res)=>{

                const addNewTaskArray = [...taskList];

                addNewTaskArray.push(res.data);
                SetTaskList(addNewTaskArray);
                SetCreateTaskToggle(false);
            }

)

    }


    //endregion create new task



    //region DELETE TASK


    const deleteFunction = (id)=>{

        deleteTask(id);

        const tempList = [...taskList];


        const index = ()=>{
            for(let i = 0; i<tempList.length; i++){
                if(tempList[i].id === id){
                    return i
                }
            }
        }
        tempList.splice(index(), 1)


        SetTaskList(tempList);



    }




    //endregion



    //region UPDATE TASK




    const updateTask = (id)=>{

        const tempArray = [...taskList];
        const itemToUpdate = tempArray.filter((element)=> element.id === id)[0];

        itemToUpdate.isCompleted = true;

        update(id, itemToUpdate);


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


                {newStudentToggle && <NewStudent onCancel={() => {
                    SetNewStudentToggle(false)
                }} onSubmit={(data => addNewStudent(data))} onSaveClick={() => SetNewStudentToggle(false)}
                                                 students={listOfStudents}/>}


                {createTaskToggle && <CreateTask studentList={listOfStudents} onsubmit={(data) => {
                    addNewTask(data)
                }}/>}

                {/*Display Tasks*/}
                {taskListToDisplay && <TodoContainer data={taskListToDisplay} onTaskDelete={(id) => {
                    deleteFunction(id)
                }} onTaskComplete={(id) => updateTask(id)}/>
                }            </div>
        </div>
    );
}

export default App;
