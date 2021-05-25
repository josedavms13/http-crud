function getListOfStudents(objectArray) {


    const arrayOfStudents = [];

    let temp= '';
    let temporalObject = {};
    for(let i = 0; i< objectArray.length; i++){

        if(objectArray[i].student !== temp){

            temporalObject ={
                id : i,
                name : objectArray[i].student,
            }

            arrayOfStudents.push(temporalObject);
        }



    }


    return arrayOfStudents

}

export default getListOfStudents