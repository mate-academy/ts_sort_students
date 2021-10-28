
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: true,
  grades: Array<number>,
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

function getAverageGrades(number:Array<number>):number {
  const sumGrade = number.reduce((gradeOne, grateTwo) => gradeOne + grateTwo);

  return sumGrade / number.length;
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Array<Student>,
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Array<Student> = [...students];
  const isAscending: boolean = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
      copyStudents.sort((studentFirst, studentSecond) => (isAscending
        ? studentFirst.name.localeCompare(studentSecond.name)
        : studentSecond.name.localeCompare(studentFirst.name)
      ));
      break;

    case SortType.Surname:
      copyStudents.sort((studentFirst, studentSecond) => (isAscending
        ? studentFirst.surname.localeCompare(studentSecond.surname)
        : studentSecond.surname.localeCompare(studentFirst.surname)
      ));
      break;

    case SortType.Age:
      copyStudents.sort((studentFirst, studentSecond) => (isAscending
        ? studentFirst.age - studentSecond.age
        : studentSecond.age - studentFirst.age));
      break;

    case SortType.Married:
      copyStudents.sort((studentFirst, studentSecond) => (isAscending
        ? +studentFirst.married - +studentSecond.married
        : +studentSecond.married - +studentFirst.married));
      break;

    case SortType.AverageGrade:
      copyStudents.sort((studentFirst, studentSecond) => (isAscending
        ? getAverageGrades(studentFirst.grades)
          - getAverageGrades(studentSecond.grades)
        : getAverageGrades(studentSecond.grades)
          - getAverageGrades(studentFirst.grades)
      ));
      break;

    default:
      throw new Error('ERROR');
  }

  return copyStudents;
}
