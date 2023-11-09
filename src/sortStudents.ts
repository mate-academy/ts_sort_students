
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((personA, personB) => {
    let averageA: number;
    let averageB: number;

    switch (sortBy) {
      case 'name':
      case 'surname':
        return order === 'asc'
          ? personA[sortBy].localeCompare(personB[sortBy])
          : personB[sortBy].localeCompare(personA[sortBy]);

      case 'age':
      case 'married':
        return order === 'asc'
          ? +personA[sortBy] - +personB[sortBy]
          : +personB[sortBy] - +personA[sortBy];

      case 'grades':
        averageA = personA[sortBy]
          .reduce((sum: number, current: number) => sum + current, 0)
          / personA[sortBy].length;

        averageB = personB[sortBy]
          .reduce((sum: number, current: number) => sum + current, 0)
            / personB[sortBy].length;

        return order === 'asc'
          ? averageA - averageB
          : averageB - averageA;

      default:
        return 0;
    }
  });
}
