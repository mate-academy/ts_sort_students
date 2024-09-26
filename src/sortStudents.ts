// import { error } from 'console';

export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const copiedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? copiedStudents.sort(
          (prevStudent, currStudent) => prevStudent[sortBy]
            .localeCompare(currStudent[sortBy]),
        )
        : copiedStudents.sort(
          (prevStudent, currStudent) => currStudent[sortBy]
            .localeCompare(prevStudent[sortBy]),
        );
    case SortType.Age:
    case SortType.Married:
      return (order === 'asc')
        ? copiedStudents.sort(
          (prevStudent, currStudent) => +prevStudent[sortBy]
          - +currStudent[sortBy],
        )
        : copiedStudents.sort(
          (prevStudent, currStudent) => +currStudent[sortBy]
          - +prevStudent[sortBy],
        );
    case SortType.AverageGrade:
      return (order === 'asc')
        ? copiedStudents.sort((prevStudent, currStudent) => (prevStudent.grades
          .reduce((sum, num) => sum + num, 0)
          / prevStudent.grades.length) - (currStudent.grades
          .reduce((sum, num) => sum + num, 0)
          / currStudent.grades.length))
        : copiedStudents.sort((prevStudent, currStudent) => (currStudent.grades
          .reduce((sum, num) => sum + num, 0)
          / currStudent.grades.length) - (prevStudent.grades
          .reduce((sum, num) => sum + num, 0)
          / prevStudent.grades.length));
    default:
      return students;
  }
}
