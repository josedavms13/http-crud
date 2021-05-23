import {useEffect} from "react";


const CreateTask = ({studentList})=>{

    useEffect(()=>{

        if(studentList) {

            console.log(studentList)

        }

    },[studentList])



    return(

        <div className={'create-task'}>

            <form action="">

                <select name="student-name-selection" id="student-selection">

                    {
                        // studentList && studentList.map((element)=>{
                        //     return(
                        //         <option value={element} key={index}>{element}</option>
                        //     )
                        // })
                    }
                </select>

                <label htmlFor="task-name">Type your pending</label>
                <input type="text"name={"task-name"}/>

                <button>Submit</button>


            </form>



        </div>



    )
}
export default CreateTask