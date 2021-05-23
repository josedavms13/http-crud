function getListOfStudents(objectArray) {

    const arrayOfStudents = [];

    let temp = '';

    objectArray.forEach((element) => {

        const item = element.student;
        if (temp !== item) {
            arrayOfStudents.push(item);
            temp = item;
        }
    })

    return arrayOfStudents

}

export default getListOfStudents