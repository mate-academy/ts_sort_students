
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const StudentsCopy: Student[] = [...students];

  function findAvaragegrade(gradesArray: number[]): number {
    return gradesArray.reduce((acc, grade) => acc
    + grade, 0) / gradesArray.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? StudentsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : StudentsCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? StudentsCopy.sort((a, b) => +a[sortBy] - +b[sortBy])
        : StudentsCopy.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? StudentsCopy.sort((a, b) => findAvaragegrade(a.grades)
        - findAvaragegrade(b.grades))
        : StudentsCopy.sort((a, b) => findAvaragegrade(b.grades)
        - findAvaragegrade(a.grades));

    default:
      return students;
  }
}
