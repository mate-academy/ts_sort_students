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
      return newArray.sort((a, b) => (order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])
      ));

    case SortType.Married:
    case SortType.Age:
      return newArray.sort((a, b) => (order === 'asc'
        ? +a[sortBy] - +b[sortBy]
        : +b[sortBy] - +a[sortBy]
      ));

    case SortType.AverageGrade:
      return newArray.sort((a, b) => (order === 'asc'
        ? average(a.grades) - average(b.grades)
        : average(b.grades) - average(a.grades)
      ));
    default: return newArray;
  }
}
