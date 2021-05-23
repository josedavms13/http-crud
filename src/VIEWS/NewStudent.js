import {useForm} from "react-hook-form";


const NewStudent = ({onSubmit, onCancel})=>{


    const {handleSubmit, register} = useForm();




    return(

        <div className={'new-student-view'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="student-name">Type Name</label>
                <input type="text" name={"student-name"} placeholder={'Name...'} {...register('Student')} autoFocus={'autofocus'} required={'required'}/>

                <button>Save</button>
                <button onClick={onCancel}>Cancel</button>
            </form>
        </div>


    )
}
export default NewStudent