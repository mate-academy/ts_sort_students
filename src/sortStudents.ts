
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
  AverageGrade = 'averageGrade',
}

function getAverage(numbers: number[]): number {
  return numbers.reduce((sum, value) => sum + value) / numbers.length;
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentList: Student[] = [...students];

  return studentList.sort((a, b): number => {
    switch (sortBy) {
      case SortType.Surname:
      case SortType.Name:
        if (order === 'asc') {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
        if (order === 'asc') {
          return a.age - b.age;
        }

        return b.age - a.age;

      case SortType.Married:
        if (order === 'asc') {
          return Number(a.married) - Number(b.married);
        }

        return Number(b.married) - Number(a.married);

      case SortType.AverageGrade:
        if (order === 'asc') {
          return getAverage(a.grades) - getAverage(b.grades);
        }

        return getAverage(b.grades) - getAverage(a.grades);
      default:
        return 0;
    }
  });
}
