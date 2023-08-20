
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
  const studentsCopy = [...students];

  function organizeStudents(a: Student, b: Student): number {
    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);

      case SortType.Surname:
        return order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);

      case SortType.Age:
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;

      case SortType.Married:
        return order === 'asc'
          ? (a.married ? -1 : 1) - (b.married ? -1 : 1)
          : (a.married ? -1 : 1) - (b.married ? -1 : 1);

      case SortType.AverageGrade:
        return order === 'asc'
          ? calcGrade(a.grades) - calcGrade(b.grades)
          : calcGrade(b.grades) - calcGrade(a.grades);

      default:
        throw new Error('Nieprawidłowy typ sortowania');
    }
  }

  return studentsCopy.sort(organizeStudents);
}
