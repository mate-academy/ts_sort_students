export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
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
  const sortedStudents: Student[] = [...students];

  sortedStudents.sort((prev: Student, curr: Student): number => {
    switch (sortBy) {
      // Sort by name and surname and return result:
      case SortType.Name:
      case SortType.Surname:
        return prev[sortBy].localeCompare(curr[sortBy]);

      // Sort by age:
      case SortType.Age:
        return order === 'asc'
          ? prev[sortBy] - curr[sortBy]
          : curr[sortBy] - prev[sortBy];

      // Sort by married:
      case SortType.Married:
        return order === 'asc'
          ? Number(prev[sortBy]) - Number(curr[sortBy])
          : Number(curr[sortBy]) - Number(prev[sortBy]);

      // Sort by grades:
      case SortType.AverageGrade:
        // eslint-disable-next-line no-case-declarations
        const prevAverage = prev[sortBy].reduce(
          (accum: number, current: number) => accum + current,
        ) / prev[sortBy].length;

        // eslint-disable-next-line no-case-declarations
        const currAverage = curr[sortBy].reduce(
          (accum: number, current: number) => accum + current,
        ) / curr[sortBy].length;

        return order === 'asc'
          // ASC:
          ? prevAverage - currAverage
          // DESC:
          : currAverage - prevAverage;

      default:
        return 0;
    }
  });

  return sortedStudents;
}
