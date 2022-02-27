
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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sorted = [...students];

  sorted.sort((first, second) => {
    let a: Student = first;
    let b: Student = second;

    function averageGrade(student: Student): number {
      return student.grades.reduce((prev, item) => prev + item, 0)
        / student.grades.length;
    }

    if (order === 'desc') {
      [a, b] = [b, a];
    }

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return a[sortBy].localeCompare(b[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return Number(a[sortBy]) - Number(b[sortBy]);
      case SortType.AverageGrade:
        return averageGrade(a) - averageGrade(b);
      default:
        return 0;
    }
  });

  return sorted;
}
