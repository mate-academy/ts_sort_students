
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: Array<number>,
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let aValue,
      bValue;

    switch (sortBy) {
      case SortType.Name:
        aValue = a.name;
        bValue = b.name;
        break;
      case SortType.Surname:
        aValue = a.surname;
        bValue = b.surname;
        break;
      case SortType.Age:
        aValue = a.age;
        bValue = b.age;
        break;
      case SortType.Married:
        aValue = a.married;
        bValue = b.married;
        break;
      case SortType.AverageGrade:

        aValue = a.grades.reduce((acc, curr) => acc
        + curr, 0) / a.grades.length;

        bValue = b.grades.reduce((acc, curr) => acc
        + curr, 0) / b.grades.length;
        break;
      default:

        aValue = a.name;
        bValue = b.name;
        break;
    }

    if (aValue < bValue) {
      if (order === 'asc') {
        return -1;
      }

      return 1;
    }

    if (aValue > bValue) {
      if (order === 'asc') {
        return 1;
      }

      return -1;
    }

    return 0;
  });

  return sortedStudents;
}
