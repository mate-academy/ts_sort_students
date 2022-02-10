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
): Student {
  const copy = [...students];

  const average = (student: Student): number => student.grades
    .reduce((acc, grade) => acc + grade) / student.grades.length;

  const reverce = (a: number, b: number): number => {
    if (order === 'desc') {
      return a - b;
    }

    return b - a;
  };

  copy.sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.AverageGrade:
        return reverce(average(b), average(a));

      case SortType.Age:
        return reverce(b.age, a.age);

      case SortType.Surname:
      case SortType.Name:
        return a[sortBy].localeCompare(b[sortBy]);

      case SortType.Married:
        return reverce(+b.married, +a.married);

      default:
        return 0;
    }
  });

  return copy;
}
