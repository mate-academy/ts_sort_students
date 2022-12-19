
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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function calculateAvgGrade(marks: number[]): number {
  return marks
    .reduce((accum: number, currMark: number) => accum + currMark, 0)
    / marks.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((firstPerson, secondPerson) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? firstPerson[sortBy].localeCompare(secondPerson[sortBy])
          : secondPerson[sortBy].localeCompare(firstPerson[sortBy]);

      case SortType.Age:
        return order === 'asc'
          ? firstPerson[sortBy] - secondPerson[sortBy]
          : secondPerson[sortBy] - firstPerson[sortBy];

      case SortType.Married:
        return Number(secondPerson.married) - Number(firstPerson.married);

      case SortType.AverageGrade:
        return order === 'asc'
          ? calculateAvgGrade(firstPerson[sortBy])
          - calculateAvgGrade(secondPerson[sortBy])
          : calculateAvgGrade(secondPerson[sortBy])
          - calculateAvgGrade(firstPerson[sortBy]);

      default:
        return 0;
    }
  });
}
