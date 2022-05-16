
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function averageGrade(grades: number[]):number {
  return grades.reduce((sum, numb) => sum + numb) / grades.length;
}

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? [...students].sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : [...students].sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
      return order === 'asc'
        ? [...students].sort((a, b) => a.age - b.age)
        : [...students].sort((a, b) => b.age - a.age);

    case SortType.Married:
      return order === 'asc'
        ? [...students].sort((a, b) => +a.married - +b.married)
        : [...students].sort((a, b) => +b.married - +a.married);
    default:
      return order === 'asc'
        ? [...students].sort((a, b) => averageGrade(a.grades)
        - averageGrade(b.grades))
        : [...students].sort((a, b) => averageGrade(b.grades)
        - averageGrade(a.grades));
  }
}
