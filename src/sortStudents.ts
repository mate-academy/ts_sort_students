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

function getAverageGrade(grades: number[]): number {
  return grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  function sortInOrder(num: number): number {
    return order === 'asc' ? num : -num;
  }

  studentsCopy.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return sortInOrder(a[sortBy].localeCompare(b[sortBy]));

      case SortType.Age:
      case SortType.Married:
        return sortInOrder(Number(a[sortBy]) - Number(b[sortBy]));

      case SortType.AverageGrade:
        return (
          sortInOrder(getAverageGrade(a[sortBy]) - getAverageGrade(b[sortBy]))
        );

      default:
        throw new Error('Can not sort Studens by non existing parameters');
    }
  });

  return studentsCopy;
}
