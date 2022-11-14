
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

function getAverageGrade(grades: number[]): number {
  return grades.reduce((prev, item) => prev + item, 0) / grades.length;
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  return studentsCopy.sort((student: Student, nextStudent: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? student[sortBy].localeCompare(nextStudent[sortBy])
          : nextStudent[sortBy].localeCompare(student[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +student[sortBy] - +nextStudent[sortBy]
          : +nextStudent[sortBy] - +student[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrade(student[sortBy])
          - getAverageGrade(nextStudent[sortBy])
          : getAverageGrade(nextStudent[sortBy])
          - getAverageGrade(student[sortBy]);

      default: throw new Error('Something went wrong');
    }
  });
}
