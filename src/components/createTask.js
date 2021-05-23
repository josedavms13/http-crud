import {useForm} from "react-hook-form";

const CreateTask = ({studentList, onsubmit})=>{



    const {handleSubmit, register} = useForm();

    return(

        <div className={'create-task'}>

            <form onSubmit={handleSubmit(onsubmit)}>

                <select name="student-name-selection" id="student-selection" {...register('student')}>

                    {
                        studentList && studentList.map((element)=>{
                            return(
                                <option value={element} key={element}>{element}</option>
                            )
                        })
                    }
                </select>

                <label htmlFor="task-name">Type your pending</label>
                <input type="text" name={"task-name"} {...register('task',{required:true})}/>
                <button>Submit</button>


            </form>



        </div>



    )
}
export default CreateTask