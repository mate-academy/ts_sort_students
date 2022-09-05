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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function avGrades(grades: number[]): number {
  return grades.reduce((sum, num) => sum + num, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:

      return order === 'asc'
        ? copyStudents.sort((st1, st2) => st1[sortBy]
          .localeCompare(st2[sortBy]))
        : copyStudents.sort((st1, st2) => st2[sortBy]
          .localeCompare(st1[sortBy]));

    case SortType.Age:
    case SortType.Married:

      return order === 'asc'
        ? copyStudents.sort((st1, st2) => +st1[sortBy] - +st2[sortBy])
        : copyStudents.sort((st1, st2) => +st2[sortBy] - +st1[sortBy]);

    case SortType.AverageGrade:

      return order === 'asc'
        ? copyStudents
          .sort((st1, st2) => avGrades(st1[sortBy]) - avGrades(st2[sortBy]))
        : copyStudents
          .sort((st1, st2) => avGrades(st2[sortBy]) - avGrades(st1[sortBy]));

    default:

      return copyStudents;
  }
}
