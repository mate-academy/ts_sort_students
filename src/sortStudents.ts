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
  AverageGrade = 'avGrade',
}

export type SortOrder = 'asc' | 'desc';

export function getAverageGrade(gradesArr: number[]):number {
  const sum = gradesArr.reduce(
    (accumulator, current) => accumulator + current, 0,
  );

  return sum / gradesArr.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? studentsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : studentsCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Surname:
      return order === 'asc'
        ? studentsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : studentsCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
      return order === 'asc'
        ? studentsCopy.sort((a, b) => a[sortBy] - (b[sortBy]))
        : studentsCopy.sort((a, b) => b[sortBy] - (a[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsCopy.sort(
          (a, b) => getAverageGrade(a.grades) - getAverageGrade(b.grades),
        )
        : studentsCopy.sort(
          (a, b) => getAverageGrade(b.grades) - getAverageGrade(a.grades),
        );

    case SortType.Married:
      return order === 'asc'
        ? studentsCopy.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : studentsCopy.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));

    default:
      return studentsCopy;
  }
}
