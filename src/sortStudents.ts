
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,

}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function calcGrade(grades: number[]): number {
  if (grades.length === 0) {
    return 0;
  }

  const sum = grades.reduce((total, grade) => total + grade, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? studCopy.sort((a, b) => a.name.localeCompare(b.name))
        : studCopy.sort((a, b) => b.name.localeCompare(a.name));

    case SortType.Surname:
      return order === 'asc'
        ? studCopy.sort((a, b) => a.surname.localeCompare(b.surname))
        : studCopy.sort((a, b) => b.surname.localeCompare(a.surname));

    case SortType.Age:
      return order === 'asc'
        ? studCopy.sort((a, b) => a.age - b.age)
        : studCopy.sort((a, b) => b.age - a.age);

    case SortType.Married:
      return order === 'asc'
        ? studCopy.sort((a, b) => (a.married ? -1 : 1) - (b.married ? -1 : 1))
        : studCopy.sort((a, b) => (a.married ? -1 : 1) - (b.married ? -1 : 1));

    case SortType.AverageGrade:
      return order === 'asc'
        ? studCopy.sort((a, b) => calcGrade(a.grades) - calcGrade(b.grades))
        : studCopy.sort((a, b) => calcGrade(b.grades) - calcGrade(a.grades));

    default:
      throw new Error('Nieprawidłowy typ sortowania');
  }
}
