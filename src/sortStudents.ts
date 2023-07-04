
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
export type SortOrder = 'desc' | 'asc';

function getAverage(arr: number[]): number {
  const sum = arr.reduce((acc, item) => acc + item, 0);

  return sum / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc' ? a[sortBy].localeCompare(b[sortBy])
          : a[sortBy].localeCompare(b[sortBy]) * -1;
      case SortType.Married:
        if (a.married > b.married) {
          return order === 'asc' ? 1 : -1;
        }

        if (a.married < b.married) {
          return order === 'asc' ? -1 : 1;
        }

        return 0;
      case SortType.AverageGrade:
        if (getAverage(a.grades) > getAverage(b.grades)) {
          return order === 'asc' ? 1 : -1;
        }

        if (getAverage(a.grades) < getAverage(b.grades)) {
          return order === 'asc' ? -1 : 1;
        }

        return 0;
      case SortType.Age:
        if (a.age > b.age) {
          return order === 'asc' ? 1 : -1;
        }

        if (a.age < b.age) {
          return order === 'asc' ? -1 : 1;
        }

        return 0;
      default:
        return 0;
    }
  });
}
