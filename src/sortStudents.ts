
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

function getAverageGrade(grades: number[]): number {
  return grades.reduce((a, b) => a + b) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const StudentsCopy = [...students];
  const isOrderAscending: boolean = order === 'asc';

  switch (sortBy) {
    case SortType.Age:
      return StudentsCopy.sort((a: Student, b: Student) => {
        return isOrderAscending
          ? a.age - b.age
          : b.age - a.age;
      });

    case SortType.Name:
    case SortType.Surname:
      return StudentsCopy.sort((a: Student, b: Student) => {
        return isOrderAscending
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });

    case SortType.Married:
      return StudentsCopy.sort((a: Student, b: Student) => {
        return isOrderAscending
          ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);
      });

    case SortType.AverageGrade:
      return StudentsCopy.sort((a: Student, b: Student) => {
        const avgA: number = getAverageGrade(a.grades);
        const avgB: number = getAverageGrade(b.grades);

        return isOrderAscending
          ? avgA - avgB
          : avgB - avgA;
      });

    default: throw Error('input is not correct');
  }
}
