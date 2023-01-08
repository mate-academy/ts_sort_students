
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

function averageGrade(person: Student): number {
  return person.grades
    .reduce((total: number, cur: number) => total + cur, 0)
    / person.grades.length;
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Surname:
    case SortType.Name:
      return order === 'asc'
        ? copy
          .sort((x: Student, y: Student) => x[sortBy].localeCompare(y[sortBy]))
        : copy
          .sort((x: Student, y: Student) => y[sortBy].localeCompare(x[sortBy]));

    case SortType.Married:
    case SortType.Age:
      return order === 'asc'
        ? copy.sort((x: Student, y: Student) => +x[sortBy] - +y[sortBy])
        : copy.sort((x: Student, y: Student) => +y[sortBy] - +x[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? copy
          .sort((x: Student, y: Student) => averageGrade(x) - averageGrade(y))
        : copy
          .sort((x: Student, y: Student) => averageGrade(y) - averageGrade(x));

    default:
      return copy;
  }
}
