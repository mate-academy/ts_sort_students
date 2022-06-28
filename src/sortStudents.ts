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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents = [...students];
  const sortOrder = order === 'asc' ? 1 : -1;
  const callbackSum = (sum: number, grade: number): number => sum + grade;

  switch (sortBy) {
    case SortType.Age:
    case SortType.Married:
      copyOfStudents.sort((student1, student2) => (
        (+student1[sortBy] - +student2[sortBy]) * sortOrder
      ));

      break;

    case SortType.AverageGrade:
      copyOfStudents.sort((student1, student2) => (
        (student1.grades.reduce(callbackSum, 0)
          / student1.grades.length
          - student2.grades.reduce(callbackSum, 0)
          / student2.grades.length) * sortOrder
      ));

      break;

    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        copyOfStudents.sort((student1, student2) => student1[sortBy]
          .localeCompare(student2[sortBy]));
      } else {
        copyOfStudents.sort((student1, student2) => student2[sortBy]
          .localeCompare(student1[sortBy]));
      }

      break;

    default:
      break;
  }

  return copyOfStudents;
}
