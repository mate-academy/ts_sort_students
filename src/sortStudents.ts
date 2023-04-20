
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: Array<number>,
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(student: Student): number {
  return student.grades.reduce(
    (acc, grade) => acc + grade, 0,
  ) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Array<object> | undefined {
  const newStudentArray = [...students];

  if (sortBy === SortType.Name) {
    return order === 'asc'
      ? newStudentArray.sort(
        (student, nextStudent) => student.name.localeCompare(nextStudent.name),
      )
      : newStudentArray.sort(
        (student, nextStudent) => nextStudent.name.localeCompare(student.name),
      );
  }

  if (sortBy === SortType.Surname) {
    return order === 'asc'
      ? newStudentArray.sort((
        student,
        nextStudent,
      ) => student.surname.localeCompare(nextStudent.surname))
      : newStudentArray.sort((
        student,
        nextStudent,
      ) => nextStudent.surname.localeCompare(student.surname));
  }

  if (sortBy === SortType.Age) {
    return order === 'asc'
      ? newStudentArray.sort(
        (student, nextStudent) => student.age - nextStudent.age,
      )
      : newStudentArray.sort(
        (student, nextStudent) => nextStudent.age - student.age,
      );
  }

  if (sortBy === SortType.Married) {
    return order === 'asc'
      ? newStudentArray.sort(
        (
          student,
          nextStudent,
        ) => Number(student.married) - Number(nextStudent.married),
      )
      : newStudentArray.sort(
        (
          student,
          nextStudent,
        ) => Number(nextStudent.married) - Number(student.married),
      );
  }

  if (sortBy === SortType.AverageGrade) {
    return order === 'asc'
      ? newStudentArray.sort(
        (
          student,
          nextStudent,
        ) => getAverageGrade(student) - getAverageGrade(nextStudent),
      )
      : newStudentArray.sort(
        (
          student,
          nextStudent,
        ) => getAverageGrade(nextStudent) - getAverageGrade(student),
      );
  }

  return undefined;
}
