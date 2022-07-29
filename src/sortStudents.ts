
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

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Student[] {
  let copyOfStudents: Student[] = [];

  function calulateAverageGrade(grades: number[]): number {
    return grades
      .reduce((sum: number, x: number) => sum + x, 0)
      / grades.length;
  }

  function sorting(
    a: string | number,
    b: string | number,
    sortingType: SortOrder,
  ): number {
    let result: number = 0;

    if (typeof a === 'number' && typeof b === 'number') {
      result = sortingType === 'asc'
        ? a - b
        : b - a;
    }

    if (typeof a === 'string' && typeof b === 'string') {
      result = sortingType === 'asc'
        ? a.localeCompare(b)
        : b.localeCompare(a);
    }

    return result;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyOfStudents = [...students].sort((a: Student, b: Student) => {
        return sorting(a[sortBy], b[sortBy], order);
      });
      break;

    case SortType.Age:
      copyOfStudents = [...students].sort((a: Student, b: Student) => {
        return sorting(a.age, b.age, order);
      });
      break;

    case SortType.Married:
      copyOfStudents = [...students].sort((a: Student, b: Student) => {
        const stringFromA = a.married.toString();
        const stringFromB = b.married.toString();

        return sorting(stringFromA, stringFromB, order);
      });
      break;

    case SortType.AverageGrade:
      copyOfStudents = [...students].sort((a: Student, b: Student) => {
        return sorting(
          calulateAverageGrade(a.grades),
          calulateAverageGrade(b.grades),
          order,
        );
      });
      break;

    default:
      break;
  }

  return copyOfStudents;
}
