
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

function getAverage(numbers: number[]): number {
  return numbers.reduce((sum: number, currValue: number) => {
    return sum + currValue;
  }, 0) / numbers.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  return [...students].sort((firstStudent: Student, secondStudent: Student) => {
    switch (sortBy) {
      case SortType.Married:
        return order === 'asc'
          ? Number(firstStudent.married) - Number(secondStudent.married)
          : Number(secondStudent.married) - Number(firstStudent.married);

      case SortType.Age:
        return order === 'asc'
          ? firstStudent.age - secondStudent.age
          : secondStudent.age - firstStudent.age;

      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverage(firstStudent.grades) - getAverage(secondStudent.grades)
          : getAverage(secondStudent.grades) - getAverage(firstStudent.grades);

      default:
        return 0;
    }
  });
}
