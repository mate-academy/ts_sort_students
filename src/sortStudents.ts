
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: true,
  grades: number[],
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const compare = (a: Student, b: Student): number => {
    let valueA: string | number | boolean;
    let valueB: string | number | boolean;

    switch (sortBy) {
      case SortType.Name:
        valueA = a.name;
        valueB = b.name;
        break;
      case SortType.Surname:
        valueA = a.surname;
        valueB = b.surname;
        break;
      case SortType.Age:
        valueA = a.age;
        valueB = b.age;
        break;
      case SortType.Married:
        valueA = a.married;
        valueB = b.married;
        break;
      case SortType.AverageGrade:
        valueA = a.grades.reduce((sum,
          grade) => sum + grade, 0) / a.grades.length;

        valueB = b.grades.reduce((sum,
          grade) => sum + grade, 0) / b.grades.length;
        break;
      default:
        throw new Error(`Invalid SortType: ${sortBy}`);
    }

    if (valueA < valueB) {
      return order === 'asc' ? -1 : 1;
    }

    if (valueA > valueB) {
      return order === 'asc' ? 1 : -1;
    }

    return 0;
  };

  return students.slice().sort(compare);
}
