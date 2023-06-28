
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
  Married = 'maried',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const result = [...students];

  function getAverageGrade(grades: number[]):number {
    return grades.reduce((total: number, i: number) => total + i, 0)
      / grades.length;
  }

  switch (sortBy) {
    case SortType.Age:
      return (order === 'asc')
        ? result.sort((a, b) => a.age - b.age)
        : result.sort((a, b) => b.age - a.age);

    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? result.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : result.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Married:
      return (order === 'asc')
        ? result.sort((a, b) => +a.married - +b.married)
        : result.sort((a, b) => +b.married - +a.married);

    case SortType.AverageGrade:
      return (order === 'asc')
        ? result.sort((a, b) => (
          getAverageGrade(a.grades) - getAverageGrade(b.grades)
        ))
        : result.sort((a, b) => (
          getAverageGrade(b.grades) - getAverageGrade(a.grades)
        ));

    default:
      return [];
  }
}
