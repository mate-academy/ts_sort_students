
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

const calculateAverage = (grades: number[]): number => {
  return grades.reduce((a: number, b: number) => a + b, 0) / grades.length;
};

const sortByType = (
  array: Student[],
  type: keyof Student,
  order: SortOrder,
): Student[] => {
  return array.sort((a, b) => {
    if (a[type] > b[type]) {
      return (order === 'asc') ? 1 : -1;
    }

    if (b[type] > a[type]) {
      return (order === 'asc') ? -1 : 1;
    }

    return 0;
  });
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      return sortByType(copyOfStudents, 'name', order);

    case SortType.Age:
      return sortByType(copyOfStudents, 'age', order);

    case SortType.Surname:
      return sortByType(copyOfStudents, 'surname', order);

    case SortType.Married:
      return sortByType(copyOfStudents, 'married', order);

    default:
      return (order === 'asc')
        ? copyOfStudents.sort(
          (a, b) => calculateAverage(a.grades) - calculateAverage(b.grades),
        )
        : copyOfStudents.sort(
          (a, b) => calculateAverage(b.grades) - calculateAverage(a.grades),
        );
  }
}
