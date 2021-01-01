'use strict';
// describe Student type
// create SortField enum and export it
// create SortOrder literal type

type Student = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export function sortStudents(students: Array<Student>, sortBy: string, order: 'asc' | 'desc') {
  if (students || sortBy || order) {
    var st = students.map((student: Student) => student.name);
    console.log(st);
  }
}
