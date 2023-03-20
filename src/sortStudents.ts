export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'gardes'
}

export type SortOrder = 'asc' | 'desc';

function average(array: number[]): number {
  const sum = array.reduce(
    (accamulator, currentValue) => accamulator + currentValue,
  );

  return sum / array.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newArray: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        return newArray.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      }

      return newArray.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Married:
    case SortType.Age:
      if (order === 'asc') {
        return newArray.sort((a, b) => +a[sortBy] - +b[sortBy]);
      }

      return newArray.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      if (order === 'asc') {
        return newArray.sort(
          (a, b) => (average(a.grades)) - (average(b.grades)),
        );
      }

      return newArray.sort(
        (a, b) => (average(b.grades)) - average(a.grades),
      );

    default: return newArray;
  }
}
