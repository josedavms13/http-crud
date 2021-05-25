import './componentsCss/thisUserAlreadyExists.css'

const ThisUserAlreadyExistCard = ()=>{

    return(

        <div className={'this-user-already-exists'}>
            <h4>This name already exists</h4>
            <h5>Please type a new one, or select an existing one when create a new task</h5>
        </div>

    )
}


export default ThisUserAlreadyExistCard