import {useForm} from "react-hook-form";
import './newStudent.css'

const NewStudent = ({onSubmit, onCancel})=>{


    const {handleSubmit, register} = useForm();




    return(

        <div className={'new-student-view'}>
            <div className="tittle">

                <h1>Add New Student</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="inputs-section">

                    <label htmlFor="student-name">Type Name</label>
                    <input type="text" name={"student-name"} placeholder={'Name...'} {...register('Student')} autoFocus={'autofocus'} required={'required'}/>
                </div>
                <div className="button-section">

                    <button>Save</button>
                    <button onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>


    )
}
export default NewStudent