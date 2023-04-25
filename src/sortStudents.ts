
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: Array<number>,
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
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

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? newStudentArray.sort(
          (student, nextStudent) => (
            student.name.localeCompare(nextStudent.name)
          ),
        )
        : newStudentArray.sort(
          (student, nextStudent) => (
            nextStudent.name.localeCompare(student.name)
          ),
        );
    case SortType.Surname:
      return order === 'asc'
        ? newStudentArray.sort((
          student,
          nextStudent,
        ) => student.surname.localeCompare(nextStudent.surname))
        : newStudentArray.sort((
          student,
          nextStudent,
        ) => nextStudent.surname.localeCompare(student.surname));
    case SortType.Age:
      return order === 'asc'
        ? newStudentArray.sort(
          (student, nextStudent) => student.age - nextStudent.age,
        )
        : newStudentArray.sort(
          (student, nextStudent) => nextStudent.age - student.age,
        );
    case SortType.Married:
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
    case SortType.AverageGrade:
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
    default:
      return undefined;
  }
}
