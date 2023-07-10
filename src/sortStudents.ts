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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  function calcAvgGrades(grades: number[]): number {
    return grades.reduce((acc, x) => acc + x) / grades.length;
  }

  if (sortBy) {
    sortedStudents.sort((s1, s2): number => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          if (order === 'asc') {
            return s1[sortBy].localeCompare(s2[sortBy]);
          }

          return s2[sortBy].localeCompare(s1[sortBy]);

        case SortType.Age:
        case SortType.Married:
          if (order === 'asc') {
            return +s1[sortBy] - +s2[sortBy];
          }

          return +s2[sortBy] - +s1[sortBy];

        case SortType.AverageGrade:
          if (order === 'asc') {
            return calcAvgGrades(s1[sortBy]) - calcAvgGrades(s2[sortBy]);
          }

          return calcAvgGrades(s2[sortBy]) - calcAvgGrades(s1[sortBy]);

        default:
          return 0;
      }
    });
  }

  return sortedStudents;
}
