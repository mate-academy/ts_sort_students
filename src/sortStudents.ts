
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  function sortInOrder(n: number): number {
    return order === 'asc' ? n : -n;
  }

  function averageGrades(grades: number[]): number {
    const sum = grades.reduce((prev, current) => prev + current, 0);

    return sum / grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
      studentsCopy.sort((a, b) => {
        return sortInOrder(a.name.localeCompare(b.name));
      });
      break;

    case SortType.Surname:
      studentsCopy.sort((a, b) => {
        return sortInOrder(a.surname.localeCompare(b.surname));
      });
      break;

    case SortType.Age:
      studentsCopy.sort((a, b) => {
        return sortInOrder(Number(a.age) - Number(b.age));
      });
      break;

    case SortType.Married:
      studentsCopy.sort((a, b) => {
        return sortInOrder(Number(a.married) - Number(b.married));
      });
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((a, b) => {
        return sortInOrder(averageGrades(a.grades) - averageGrades(b.grades));
      });
      break;

    default:
      throw new Error('Huston, we have a problem!');
  }

  return studentsCopy;
}
