
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
): Array<object> {
  const newStudentArray = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? newStudentArray.sort(
          (student, nextStudent) => (
            student[sortBy].localeCompare(nextStudent[sortBy])
          ),
        )
        : newStudentArray.sort(
          (student, nextStudent) => (
            nextStudent[sortBy].localeCompare(student[sortBy])
          ),
        );
    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? newStudentArray.sort(
          (
            student,
            nextStudent,
          ) => Number(student[sortBy]) - Number(nextStudent[sortBy]),
        )
        : newStudentArray.sort(
          (
            student,
            nextStudent,
          ) => Number(nextStudent[sortBy]) - Number(student[sortBy]),
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
      throw new Error('Wrong order type!');
  }
}
