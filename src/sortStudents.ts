
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAvarageGrade(grades: number[]): number {
  return grades.reduce((prev: number, sum: number) => prev + sum, 0)
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
      return studentsCopy.sort(
        (student1: Student, student2: Student) => {
          return order === 'desc'
            ? student2[sortBy].localeCompare(student1[sortBy])
            : student1[sortBy].localeCompare(student2[sortBy]);
        },
      );

    case SortType.Age:
    case SortType.Married:
      return studentsCopy.sort(
        (student1: Student, student2: Student) => {
          return order === 'desc'
            ? +student2[sortBy] - +student1[sortBy]
            : +student1[sortBy] - +student2[sortBy];
        },
      );

    case SortType.AverageGrade:
      return studentsCopy.sort(
        (student1: Student, student2: Student) => {
          return order === 'desc'
            ? getAvarageGrade(student2[sortBy])
              - getAvarageGrade(student1[sortBy])
            : getAvarageGrade(student1[sortBy])
              - getAvarageGrade(student2[sortBy]);
        },
      );

    default: throw new Error('Invalid Data');
  }
}
