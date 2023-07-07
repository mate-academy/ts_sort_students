
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
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? sortedStudents
            .sort((s1, s2) => s1[sortBy].localeCompare(s2[sortBy]))

          : sortedStudents
            .sort((s1, s2) => s2[sortBy].localeCompare(s1[sortBy]));

      case SortType.Age:
        return order === 'asc'
          ? sortedStudents.sort((s1, s2) => s1[sortBy] - (s2[sortBy]))
          : sortedStudents.sort((s1, s2) => s2[sortBy] - (s1[sortBy]));

      case SortType.Married:
        return order === 'asc'
          ? sortedStudents
            .sort((s1, s2) => Number(s1[sortBy]) - Number((s2[sortBy])))
          : sortedStudents
            .sort((s1, s2) => Number(s2[sortBy]) - Number((s1[sortBy])));

      case SortType.AverageGrade:
        return order === 'asc'
          ? sortedStudents
            .sort((s1, s2) => calcAvgGrades(s1[sortBy])
                - calcAvgGrades(s2[sortBy]))

          : sortedStudents
            .sort((s1, s2) => calcAvgGrades(s2[sortBy])
                - calcAvgGrades(s1[sortBy]));

      default:
        return sortedStudents;
    }
  }

  return sortedStudents;
}
