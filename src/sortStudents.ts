
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

function calculateAverageGrade(gradesArray: number[]): number {
  const average = gradesArray.reduce((sum, x) => sum + x,
    0) / gradesArray.length;

  return average;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedArray = [...students];

  return sortedArray.sort((
    a: Student,
    b: Student,
  ): number => {
    switch (sortBy) {
      case SortType.Name:
        return (order === 'asc')
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);

      case SortType.Surname:
        return (order === 'asc')
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);

      case SortType.Age:
        return (order === 'asc')
          ? +a.age - +b.age
          : +b.age - +a.age;

      case SortType.Married:
        return (order === 'asc')
          ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);

      case SortType.AverageGrade:
        return (order === 'asc')
          ? calculateAverageGrade(a.grades) - calculateAverageGrade(b.grades)
          : calculateAverageGrade(b.grades) - calculateAverageGrade(a.grades);

      default:
        return 0;
    }
  });
}
