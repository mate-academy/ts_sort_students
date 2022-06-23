
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
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
  const copyOfStudents = [...students];
  const sortOrder: 1 | -1 = order === 'asc' ? 1 : -1;
  const callbeckSum = (sum: number, grade: number): number => sum + grade;

  switch (sortBy) {
    case SortType.Age:
      copyOfStudents.sort((student1, student2) => (
        (student1[SortType.Age] - student2[SortType.Age]) * sortOrder
      ));

      break;

    case SortType.Married:
      copyOfStudents.sort((student1, student2) => (
        (+student1[SortType.Married] - +student2[SortType.Married]) * sortOrder
      ));

      break;

    case SortType.AverageGrade:
      copyOfStudents.sort((student1, student2) => (
        (student1.grades.reduce(callbeckSum, 0)
          / student1.grades.length
          - student2.grades.reduce(callbeckSum, 0)
          / student2.grades.length) * sortOrder
      ));

      break;

    case SortType.Name:
      if (order === 'desc') {
        copyOfStudents.sort((student1, student2) => student2[SortType.Name]
          .localeCompare(student1[SortType.Name]));
      } else {
        copyOfStudents.sort((student1, student2) => student1[SortType.Name]
          .localeCompare(student2[SortType.Name]));
      }

      break;

    case SortType.Surname:
      if (order === 'desc') {
        copyOfStudents.sort((student1, student2) => student2[SortType.Surname]
          .localeCompare(student1[SortType.Surname]));
      } else {
        copyOfStudents.sort((student1, student2) => student1[SortType.Surname]
          .localeCompare(student2[SortType.Surname]));
      }

      break;

    default:
      break;
  }

  return copyOfStudents;
}
