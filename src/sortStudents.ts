// describe Student type
// create and export SortType enum
// create SortOrder type

interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

type SortOrder = 'asc' | 'desc';

function getSum(student: Student) :number {
  return student.grades.reduce((sum: number, cur: number) => sum + cur, 0);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) :Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        studentsCopy.sort(
          (a: Student, b: Student) => a.name.localeCompare(b.name),
        );
      } else {
        studentsCopy.sort(
          (a: Student, b: Student) => b.name.localeCompare(a.name),
        );
      }
      break;

    case SortType.Surname:
      if (order === 'asc') {
        studentsCopy.sort(
          (a: Student, b: Student) => a.surname.localeCompare(b.surname),
        );
      } else {
        studentsCopy.sort(
          (a: Student, b: Student) => b.surname.localeCompare(a.surname),
        );
      }
      break;

    case SortType.Age:
      if (order === 'asc') {
        studentsCopy.sort((a: Student, b: Student) => a.age - b.age);
      } else {
        studentsCopy.sort((a: Student, b: Student) => b.age - a.age);
      }
      break;

    case SortType.Married:
      if (order === 'asc') {
        studentsCopy.sort((a: Student, b: Student) => +a.married - +b.married);
      } else {
        studentsCopy.sort((a: Student, b: Student) => +b.married - +a.married);
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        studentsCopy.sort((a: Student, b: Student) => getSum(a) - getSum(b));
      } else {
        studentsCopy.sort((a: Student, b: Student) => getSum(b) - getSum(a));
      }
      break;

    default:
      break;
  }

  return studentsCopy;
}
