
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = [...students];

  copy.sort((a: Student, b: Student) => {
    const student1 = a.grades.reduce(
      (sum:number, num:number) => sum + num,
    ) / a.grades.length;
    const student2 = b.grades.reduce(
      (sum:number, num:number) => sum + num,
    ) / b.grades.length;

    if (order === 'desc') {
      copy.reverse();
    }

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
        return order === 'asc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];

      case SortType.Married:
        return order === 'asc'
          ? +a.married - +b.married
          : +b.married - +a.married;

      case SortType.AverageGrade:
        return order === 'asc'
          ? student1 - student2
          : student2 - student1;

      default:
        return 0;
    }
  });

  return copy;
}
