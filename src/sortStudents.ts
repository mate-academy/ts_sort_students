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
  AverageGrade = 'averageGrade'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  function calculateAverage(grade: number[]): number {
    return grade.reduce((acc, note) => acc + note, 0) / grade.length;
  }

  return [...students]
    .sort((a: Student, b: Student): number => {
      const averageA = calculateAverage(a.grades);
      const averageB = calculateAverage(b.grades);

      let comparison = 0;

      switch (sortBy) {
        case SortType.Name:
          comparison = a.name.localeCompare(b.name);
          break;
        case SortType.Surname:
          comparison = a.surname.localeCompare(b.surname);
          break;
        case SortType.Age:
          comparison = a.age - b.age;
          break;
        case SortType.Married:
          comparison = Number(a.married) - Number(b.married);
          break;
        case SortType.AverageGrade:
          comparison = averageA - averageB;
          break;
        default:
          throw new Error('Invalid sort type');
      }

      return order === 'asc' ? comparison : -comparison;
    });
}
