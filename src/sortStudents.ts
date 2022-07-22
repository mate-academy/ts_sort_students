
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((prev, current) => prev + current, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) : Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copyStudents.sort((a, b) => (a[sortBy]).localeCompare(b[sortBy]))
        : copyStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
      return order === 'asc'
        ? copyStudents.sort((a, b) => a.age - b.age)
        : copyStudents.sort((a, b) => b.age - a.age);

    case SortType.Married:
      return order === 'asc'
        ? copyStudents.sort((a, b) => Number(a.married) - Number(b.married))
        : copyStudents.sort((a, b) => Number(b.married) - Number(a.married));

    default:
      return order === 'asc'
        ? copyStudents.sort((a, b) => getAverageGrade(a.grades)
          - getAverageGrade(b.grades))
        : copyStudents.sort((a, b) => getAverageGrade(b.grades)
        - getAverageGrade(a.grades));
  }
}
