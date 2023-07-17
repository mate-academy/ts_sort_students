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
  AverageGrade = 'average-grade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];
  const modifier = order === 'asc' ? 1 : -1;

  function getAverageGrade(array: number[]): number {
    const average = array.reduce((sum, current) => sum + current, 0);

    return average / array.length;
  }

  studentsCopy.sort((studentA: Student, studentB: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return studentA[sortBy].localeCompare(studentB[sortBy]) * modifier;

      case SortType.Age:
      case SortType.Married:
        return (
          +studentA[sortBy] - +studentB[sortBy]
        ) * modifier;

      case SortType.AverageGrade:
        return (getAverageGrade(studentA.grades)
          - getAverageGrade(studentB.grades)) * modifier;

      default:
        return 0;
    }
  });

  return studentsCopy;
}
