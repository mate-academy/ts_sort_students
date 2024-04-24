
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

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Object[] {
  const result = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return result.sort((a, b) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
    case SortType.AverageGrade:
      return result.sort((a, b) => {
        const sumaA: number = a.grades.reduce((x, y) => {
          return x + y;
        }, 0);
        const sumaB: number = b.grades.reduce((x, y) => {
          return x + y;
        }, 0);

        const avgA: number = sumaA / a.grades.length;
        const avgB: number = sumaB / b.grades.length;

        return order === 'asc'
          ? avgA - avgB
          : avgB - avgA;
      });
    case SortType.Married:
      return result.sort((a, b) => {
        if (a.married === b.married) {
          return 0;
        }

        if (a.married) {
          return order === 'asc' ? 1 : -1;
        }

        return order === 'asc' ? -1 : 1;
      });
    case SortType.Age:
      return result.sort((a, b) => {
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;
      });
    default:
      return [];
  }
}
