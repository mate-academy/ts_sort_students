
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

export type SortOrder = 'asc' | 'desc';

function compareMarriedHelper(order: SortOrder):
(a: Student, b: Student) => number {
  function compareMarried(a: Student, b: Student): number {
    if (a.married === b.married) {
      return 0;
    }

    if (a.married) {
      return 1;
    }

    return -1;
  }

  return order === 'asc'
    ? (a: Student, b: Student): number => compareMarried(a, b)
    : (a: Student, b: Student): number => compareMarried(b, a);
}

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Student[] {
  const studentsCopy = [...students];

  studentsCopy.sort((a, b) => {
    let aGrade;
    let bGrade;

    switch (sortBy) {
      case SortType.Name:
        return a.name.localeCompare(b.name);
      case SortType.Surname:
        return a.surname.localeCompare(b.surname);
      case SortType.Age:
        return order === 'asc' ? a.age - b.age : b.age - a.age;

      case SortType.Married:
        if (order === 'asc') {
          return compareMarriedHelper('asc')(a, b);
        }

        return compareMarriedHelper('desc')(a, b);

      case SortType.AverageGrade:
        aGrade = a.grades.reduce((x, y) => x + y, 0) / a.grades.length;
        bGrade = b.grades.reduce((x, y) => x + y, 0) / b.grades.length;

        return order === 'asc' ? aGrade - bGrade : bGrade - aGrade;

      default:
        return a.name.localeCompare(b.name);
    }
  });

  return studentsCopy;
}
