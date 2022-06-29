
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  type Sum = (a: number, b: number) => number;

  const sortedStudents: Student[] = [...students];
  const sum: Sum = (a, b) => a + b;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        sortedStudents.sort((
          firstStudent: Student,
          secondStudent: Student,
        ) => firstStudent[sortBy].localeCompare(secondStudent[sortBy]));
      }
      break;
    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        sortedStudents
          .sort((
            firstStudent: Student,
            secondStudent: Student,
          ) => +firstStudent[sortBy] - +secondStudent[sortBy]);
      } else {
        sortedStudents
          .sort((
            firstStudent: Student,
            secondStudent: Student,
          ) => +secondStudent[sortBy] - +firstStudent[sortBy]);
      }
      break;
    default:
      if (order === 'asc') {
        sortedStudents.sort((
          firstStudent: Student,
          secondStudent: Student,
        ) => firstStudent.grades
          .reduce(sum, 0) / firstStudent.grades.length
            - secondStudent.grades.reduce(sum, 0)
            / secondStudent.grades.length);
      } else {
        sortedStudents.sort((
          firstStudent: Student,
          secondStudent: Student,
        ) => secondStudent.grades
          .reduce(sum, 0) / secondStudent.grades.length
            - firstStudent.grades.reduce(sum, 0)
            / firstStudent.grades.length);
      }
      break;
  }

  return sortedStudents;
}
