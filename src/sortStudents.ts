
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

function getAverageGrade(
  firstStudent: Student,
  secondStudent: Student,
): number {
  type Sum = (a: number, b: number) => number;

  const sum: Sum = (a, b) => a + b;

  return firstStudent.grades.reduce(sum, 0) / firstStudent.grades.length
    - secondStudent.grades.reduce(sum, 0)
    / secondStudent.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        sortedStudents.sort((
          firstStudent,
          secondStudent,
        ) => firstStudent[sortBy].localeCompare(secondStudent[sortBy]));
      }
      break;
    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        sortedStudents
          .sort((
            firstStudent,
            secondStudent,
          ) => +firstStudent[sortBy] - +secondStudent[sortBy]);
      } else {
        sortedStudents
          .sort((
            firstStudent,
            secondStudent,
          ) => +secondStudent[sortBy] - +firstStudent[sortBy]);
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        sortedStudents.sort((
          firstStudent,
          secondStudent,
        ) => getAverageGrade(firstStudent, secondStudent));
      } else {
        sortedStudents.sort((
          firstStudent,
          secondStudent,
        ) => getAverageGrade(secondStudent, firstStudent));
      }
      break;
    default:
      throw new Error('Incorrect Sort type');
  }

  return sortedStudents;
}
