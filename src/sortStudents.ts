
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

const averageGrade = (grades: number[]): number => grades
  .reduce((prev: number, curr: number) => prev + curr, 0) / grades.length;

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  return studentsCopy.sort((first: Student, second: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? first[sortBy].localeCompare(second[sortBy])
          : second[sortBy].localeCompare(first[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +first[sortBy] - +second[sortBy]
          : +second[sortBy] - +first[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? averageGrade(first[sortBy]) - averageGrade(second[sortBy])
          : averageGrade(second[sortBy]) - averageGrade(first[sortBy]);

      default:
        throw new Error('Wrong Sort Type');
    }
  });
}
