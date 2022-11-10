
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: Student['grades']): number {
  return grades.reduce((acc: number, curr: number) => acc + curr, 0)
    / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy.sort((curr: Student, next: Student) => {
        return order === 'asc'
          ? curr[sortBy].localeCompare(next[sortBy])
          : next[sortBy].localeCompare(curr[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return studentsCopy.sort((curr: Student, next: Student) => {
        return order === 'asc'
          ? Number(curr[sortBy]) - Number(next[sortBy])
          : Number(next[sortBy]) - Number(curr[sortBy]);
      });

    case SortType.AverageGrade:
      return studentsCopy.sort((curr: Student, next: Student) => {
        return order === 'asc'
          ? getAverageGrade(curr[sortBy]) - getAverageGrade(next[sortBy])
          : getAverageGrade(next[sortBy]) - getAverageGrade(curr[sortBy]);
      });

    default:
      throw new Error('Invalid sort type');
  }
}
