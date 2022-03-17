
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  let result: number = 0;

  if (grades.length !== 0) {
    result = grades.reduce((prev, curr) => prev + curr, 0) / grades.length;
  }

  return result;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  return copyStudents.sort((currStudent: Student, nextStudent: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? currStudent[sortBy].localeCompare(nextStudent[sortBy])
          : nextStudent[sortBy].localeCompare(currStudent[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrade(currStudent[sortBy])
            - getAverageGrade(nextStudent[sortBy])
          : getAverageGrade(nextStudent[sortBy])
            - getAverageGrade(currStudent[sortBy]);

      default:
        return order === 'asc'
          ? +currStudent[sortBy] - +nextStudent[sortBy]
          : +nextStudent[sortBy] - +currStudent[sortBy];
    }
  });
}
