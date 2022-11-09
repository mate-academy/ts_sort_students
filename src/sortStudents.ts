export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function getAverageGrade(student: Student) : number {
  return student.grades.reduce((prev: number, cur: number) => prev + cur, 0)
    / student.grades.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder) : Student[] {
  // write your function
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy.sort(
        (prev: Student, cur: Student) => {
          return order === 'asc'
            ? prev[sortBy].localeCompare(cur[sortBy])
            : cur[sortBy].localeCompare(prev[sortBy]);
        },
      );

    case SortType.Age:
    case SortType.Married:
      return studentsCopy.sort(
        (prev: Student, cur: Student) => {
          return order === 'asc'
            ? +prev[sortBy] - (+cur[sortBy])
            : +cur[sortBy] - (+prev[sortBy]);
        },
      );

    case SortType.AverageGrade:
      return studentsCopy.sort(
        (prev: Student, cur: Student) => {
          return order === 'asc'
            ? getAverageGrade(prev) - getAverageGrade(cur)
            : getAverageGrade(cur) - getAverageGrade(prev);
        },
      );

    default:
      throw new Error('Wrong func input');
  }
}
