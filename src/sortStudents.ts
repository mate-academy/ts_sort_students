
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
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

function AverageGradesValue(student: Student): number {
  return student.grades.reduce((sum, n) => sum + n, 0) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) : Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        return studentsCopy
          .sort((s1, s2) => s1[sortBy].localeCompare(s2[sortBy]));
      }

      return studentsCopy
        .sort((s1, s2) => s2[sortBy].localeCompare(s1[sortBy]));

    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        return studentsCopy.sort((s1, s2) => +s1[sortBy] - +s2[sortBy]);
      }

      return studentsCopy.sort((s1, s2) => +s2[sortBy] - +s1[sortBy]);

    case SortType.AverageGrade:
      if (order === 'asc') {
        return studentsCopy
          .sort((s1, s2) => AverageGradesValue(s1) - AverageGradesValue(s2));
      }

      return studentsCopy
        .sort((s1, s2) => AverageGradesValue(s2) - AverageGradesValue(s1));

    default:
      return studentsCopy;
  }
}
