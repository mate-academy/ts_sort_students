
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

  function sortAsc(
    a: string | number,
    b: string | number,
  ): number {
    let result: number = 0;

    if (typeof a === 'number' && typeof b === 'number') {
      result = a - b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
      result = a.localeCompare(b);
    }

    return result;
  }

  function sortDesc(
    a: string | number,
    b: string | number,
  ): number {
    let result: number = 0;

    if (typeof a === 'number' && typeof b === 'number') {
      result = b - a;
    }

    if (typeof a === 'string' && typeof b === 'string') {
      result = b.localeCompare(a);
    }

    return result;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyOfStudents = [...students].sort((a: Student, b: Student) => {
        return order === 'asc'
          ? sortAsc(a[sortBy], b[sortBy])
          : sortDesc(a[sortBy], b[sortBy]);
      });
      break;

    case SortType.Age:
      copyOfStudents = [...students].sort((a: Student, b: Student) => {
        return order === 'asc'
          ? sortAsc(a.age, b.age)
          : sortDesc(a.age, b.age);
      });
      break;

    case SortType.Married:
      copyOfStudents = [...students].sort((a: Student, b: Student) => {
        const stringFromA = a.married.toString();
        const stringFromB = b.married.toString();

        return order === 'asc'
          ? sortAsc(stringFromA, stringFromB)
          : sortDesc(stringFromA, stringFromB);
      });
      break;

    case SortType.AverageGrade:
      copyOfStudents = [...students].sort((a: Student, b: Student) => {
        return order === 'asc'
          ? sortAsc(
            calulateAverageGrade(a.grades),
            calulateAverageGrade(b.grades),
          )
          : sortDesc(
            calulateAverageGrade(a.grades),
            calulateAverageGrade(b.grades),
          );
      });
      break;

    default:
      break;
  }

  return copyOfStudents;
}
