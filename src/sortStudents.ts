
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
  AverageGrade
}

export type SortOrder= 'asc' | 'desc';

export function getAverageGrade(grades: number[]): number {
  return (grades.reduce((sum, curr) => sum + curr, 0)) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];
  const areAscending = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
      sortedStudents.sort((first, second) => (areAscending
        ? first.name.localeCompare(second.name)
        : second.name.localeCompare(first.name)
      ));
      break;

    case SortType.Surname:
      sortedStudents.sort((first, second) => (areAscending
        ? first.surname.localeCompare(second.surname)
        : second.surname.localeCompare(first.surname)
      ));
      break;

    case SortType.Age:
      sortedStudents.sort((first, second) => (areAscending
        ? first.age - second.age
        : second.age - first.age
      ));
      break;

    case SortType.Married:
      sortedStudents.sort((first, second) => (areAscending
        ? Number(first.married) - Number(second.married)
        : Number(second.married) - Number(first.married)
      ));
      break;

    case SortType.AverageGrade:
      sortedStudents.sort((first, second) => (areAscending
        ? getAverageGrade(first.grades) - getAverageGrade(second.grades)
        : getAverageGrade(second.grades) - getAverageGrade(first.grades)
      ));
      break;

    default:
      throw new Error('Oops... Something went wrong');
  }

  return sortedStudents;
}
