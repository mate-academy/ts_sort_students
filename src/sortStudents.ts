
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
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

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Student[] {
  const sortedStudents = [...students];

  function getAvarageGrade(grades: number[]): number {
    const sum = grades.reduce((a, b) => a + b, 0);

    return sum / grades.length;
  }

  const sortingFunction = (a: Student, b: Student): number => {
    switch (sortBy) {
      case SortType.Name:
        return a.name.localeCompare(b.name);
      case SortType.Surname:
        return a.surname.localeCompare(b.surname);
      case SortType.Age:
        return a.age - b.age;
      case SortType.Married:
        if (a.married === b.married) {
          return 0;
        }

        return a.married ? 1 : -1;
      case SortType.AverageGrade:
        return getAvarageGrade(a.grades) - getAvarageGrade(b.grades);
      default:
        throw new Error('Invalid sortType');
    }
  };

  sortedStudents.sort((a, b) => (order === 'asc'
    ? sortingFunction(a, b)
    : sortingFunction(b, a)));

  return sortedStudents;
}
