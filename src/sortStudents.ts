
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function
sortStudents(students: Student[], sortBy: SortType, order: SortOrder)
  : Student[] {
  const dublicate = [...students];

  function average(array: number[]): number {
    const sum = array.reduce((prev, current) => prev + current);

    return sum / array.length;
  }

  switch (sortBy) {
    case SortType.Surname:
    case SortType.Name:
    case SortType.Married:
      if (order === 'asc') {
        dublicate
          .sort((a, b) => String(a[sortBy]).localeCompare(String(b[sortBy])));
      } else {
        dublicate
          .sort((a, b) => String(b[sortBy]).localeCompare(String(a[sortBy])));
      }
      break;

    case SortType.Age:
      if (order === 'asc') {
        dublicate.sort((a, b) => a.age - b.age);
      } else {
        dublicate.sort((a, b) => b.age - a.age);
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        dublicate.sort((a, b) => average(a.grades) - average(b.grades));
      } else {
        dublicate.sort((a, b) => average(b.grades) - average(a.grades));
      }
      break;

    default:
  }

  return dublicate;
}
