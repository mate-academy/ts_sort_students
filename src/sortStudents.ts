
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

export type SortOrder = 'asc' | 'desc';

export function countAverageGrade(student: Student): number {
  const sum: number = student.grades
    .reduce((acc, curValue) => acc + curValue, 0);

  return sum / student.grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): object[] {
  const studentsCopy = [...students];

  const sortingFunction = (a: Student, b: Student): number => {
    switch (sortBy) {
      case SortType.Name:
        return a.name.localeCompare(b.name);

      case SortType.Age:
        return a.age - b.age;

      case SortType.Surname:
        return a.surname.localeCompare(b.surname);

      case SortType.Married:
        if (a.married === b.married) {
          return 0;
        }

        return a.married ? 1 : -1;

      case SortType.AverageGrade:
        return countAverageGrade(a) - countAverageGrade(b);

      default:
        throw new Error('Invalid sortType');
    }
  };

  return studentsCopy.sort((a, b) => (
    order === 'asc' ? sortingFunction(a, b) : sortingFunction(b, a)
  ));
}
