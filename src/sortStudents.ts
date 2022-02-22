
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'avg'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy: Student[] = [...students];

  return copy.sort((a: Student, b: Student) => {
    const firstAverageGrade: number = a.grades.reduce(
      (sum, value) => sum + value,
    ) / a.grades.length;

    const secondAverageGrade: number = b.grades.reduce(
      (sum, value) => sum + value,
    ) / b.grades.length;

    if (order === 'asc') {
      switch (sortBy) {
        case SortType.Name:
          return a.name.localeCompare(b.name);
        case SortType.Surname:
          return a.surname.localeCompare(b.surname);
        case SortType.Age:
          return a.age - b.age;
        case SortType.Married:
          return +a.married - +b.married;
        case SortType.AverageGrade:
          return firstAverageGrade - secondAverageGrade;
        default:
          return a.name.localeCompare(b.name);
      }
    }

    switch (sortBy) {
      case SortType.Name:
        return b.name.localeCompare(a.name);
      case SortType.Surname:
        return b.surname.localeCompare(a.surname);
      case SortType.Age:
        return b.age - a.age;
      case SortType.Married:
        return +b.married - +a.married;
      case SortType.AverageGrade:
        return secondAverageGrade - firstAverageGrade;
      default:
        return b.name.localeCompare(a.name);
    }
  });
}
