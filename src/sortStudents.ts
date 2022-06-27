
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
  const sortOrder = order === 'asc' ? 1 : -1;
  const callbackSum = (sum: number, grade: number): number => sum + grade;

  function getAvarageGrade(student: Student): number {
    return student.grades.reduce(callbackSum, 0) / student.grades.length;
  }

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
        (getAvarageGrade(student1) - getAvarageGrade(student2)) * sortOrder
      ));

      break;

    case SortType.Name:
      return order === 'desc'
        ? copyOfStudents.sort((student1, student2) => student2[SortType.Name]
          .localeCompare(student1[SortType.Name]))
        : copyOfStudents.sort((student1, student2) => student1[SortType.Name]
          .localeCompare(student2[SortType.Name]));

    case SortType.Surname:
      return order === 'desc'
        ? copyOfStudents.sort((student1, student2) => student2[SortType.Surname]
          .localeCompare(student1[SortType.Surname]))
        : copyOfStudents.sort((student1, student2) => student1[SortType.Surname]
          .localeCompare(student2[SortType.Surname]));

    default:
      break;
  }

  return copyOfStudents;
}
