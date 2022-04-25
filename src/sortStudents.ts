
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function CalculateGrades(array: number[]): number {
  return array.reduce((a, b) => a + b, 0) / array.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const arrayCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        return arrayCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      }

      return arrayCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        return arrayCopy.sort((a, b) => +(a[sortBy]) - +(b[sortBy]));
      }

      return arrayCopy.sort((a, b) => +(b[sortBy]) - +(a[sortBy]));

    case SortType.AverageGrade:
      return arrayCopy.sort((a, b) => {
        if (order === 'asc') {
          return CalculateGrades(a[sortBy]) - CalculateGrades(b[sortBy]);
        }

        return CalculateGrades(b[sortBy]) - CalculateGrades(a[sortBy]);
      });

    default:
      throw new Error('Error');
  }
}
