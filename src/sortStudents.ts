
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudents: Student[] = [...students];

  const getAverageGrade = (grades: number[]): number => {
    return grades.reduce((acc: number, el: number) => acc + el, 0)
    / grades.length;
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? newStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : newStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? newStudents.sort((a, b) => +(a[sortBy]) - +(b[sortBy]))
        : newStudents.sort((a, b) => +(b[sortBy]) - +(a[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? newStudents.sort((a, b) => getAverageGrade(a.grades)
        - getAverageGrade(b.grades))
        : newStudents.sort((a, b) => getAverageGrade(b.grades)
        - getAverageGrade(a.grades));

    default:
      return newStudents;
  }
}
