
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

function averageArray(arrayToFindAverage: number[]): number {
  return arrayToFindAverage.reduce((sum, num) => sum + num, 0)
  / arrayToFindAverage.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy: Student[] = [...students];

  return copy.sort((tutee1, tutee2) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        if (order === 'asc') {
          return tutee1[sortBy].localeCompare(tutee2[sortBy]);
        }

        return tutee1[sortBy].localeCompare(tutee2[sortBy]);

      case SortType.Age:
      case SortType.Married:
        if (order === 'asc') {
          return +tutee1[sortBy] - +tutee2[sortBy];
        }

        return +tutee2[sortBy] - +tutee1[sortBy];

      case SortType.AverageGrade:
        if (order === 'asc') {
          return averageArray(tutee1[sortBy]) - averageArray(tutee2[sortBy]);
        }

        return averageArray(tutee2[sortBy]) - averageArray(tutee1[sortBy]);

      default:
        return copy;
    }
  });
}
