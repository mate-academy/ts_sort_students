
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

function average(numbers: number[]): number {
  return numbers.reduce((acc, num) => (acc + num)) / numbers.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  studentsCopy.sort((current: Student, next: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? current[sortBy].localeCompare(next[sortBy])
          : next[sortBy].localeCompare(current[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +current[sortBy] - +next[sortBy]
          : +next[sortBy] - +current[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? average(current[sortBy]) - average(next[sortBy])
          : average(next[sortBy]) - average(current[sortBy]);

      default:
        throw new Error(`Inappropriate argument: ${sortBy}`);
    }
  });

  return studentsCopy;
}
