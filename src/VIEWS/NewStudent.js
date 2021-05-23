import {useForm} from "react-hook-form";


const NewStudent = ({onSubmit})=>{


    const {handleSubmit, register} = useForm();




    return(

        <div className={'new-student-view'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="student-name">Type Name</label>
                <input type="text" name={"student-name"} placeholder={'Name...'} {...register('Student')} autoFocus={'autofocus'}/>

                <button>Save</button>
            </form>
        </div>


    )
}
export default NewStudent