import {useForm} from "react-hook-form";
import './componentsCss/createTask.css'

const CreateTask = ({studentList, onsubmit})=>{



    const {handleSubmit, register} = useForm();

    return(

        <div className={'create-task'}>

            <form onSubmit={handleSubmit(onsubmit)}>
                <div className="select-section">

                    <label htmlFor="student-name-selection">Pick someone from list</label>
                    <select name="student-name-selection" id="student-selection" {...register('student')}>

                        {
                            studentList && studentList.map((element)=>{
                                return(
                                    <option value={element} key={element}>{element}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="inputs-container">

                    <label htmlFor="task-name">Type the pending</label>
                    <input type="text" name={"task-name"} {...register('task')} required={'required'} autoFocus={'autofocus'}/>
                </div>
                <button>Submit</button>


            </form>



        </div>



    )
}
export default CreateTask