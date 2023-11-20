
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

function averageGrade(gradeArr: number[]): number {
  return gradeArr.reduce((sum: number, subject: number) => sum + subject, 0)
    / gradeArr.length;
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
      return studentsCopy.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return studentsCopy.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? +student1[sortBy] - +student2[sortBy]
          : +student2[sortBy] - +student1[sortBy];
      });

    case SortType.AverageGrade:
      return studentsCopy.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? averageGrade(student1[sortBy]) - averageGrade(student2[sortBy])
          : averageGrade(student2[sortBy]) - averageGrade(student1[sortBy]);
      });
    default:
      return studentsCopy;
  }
}
