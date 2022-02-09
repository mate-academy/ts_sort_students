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
  const copy = [...students];

  const average = (student: Student): number => student.grades
    .reduce((acc, grade) => acc + grade) / student.grades.length;

  function rev(a: number, b: number): number {
    if (order === 'desc') {
      return b - a;
    }

    return a - b;
  }

  copy.sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.AverageGrade:
        return rev(average(a), average(b));

      case SortType.Age:

        return rev(a.age, b.age);

      case SortType.Surname:
      case SortType.Name:
        return a[sortBy].localeCompare(b[sortBy]);

      case SortType.Married:
        return rev(+a.married, +b.married);

      default:
        return 0;
    }
  });

  return copy;
}
