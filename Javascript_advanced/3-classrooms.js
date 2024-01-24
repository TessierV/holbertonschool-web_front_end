function createClassRoom(numberOfStudents) {

    function studentSeat(seat) {
        return function () {
            return seat;
        };
    }

    var students = [];

    for (var iteration = 0; iteration < numberOfStudents; iteration++) {
        students.push(studentSeat(iteration + 1));
    }
    return students;
}

var classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());