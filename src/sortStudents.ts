
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

function calcAverage(grades: number[]): number {
  const sumOfGrades: number = grades.reduce((sum: number, current: number) => (
    sum + current
  ));

  return sumOfGrades / grades.length;
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
      return studentsCopy.sort((student1, student2) => {
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      });

    case SortType.Age:
    case SortType.Married: {
      return studentsCopy.sort((student1, student2) => {
        return order === 'asc'
          ? Number(student1[sortBy]) - Number(student2[sortBy])
          : Number(student2[sortBy]) - Number(student1[sortBy]);
      });
    }

    case SortType.AverageGrade: {
      return studentsCopy.sort((student1, student2) => {
        return order === 'asc'
          ? calcAverage(student1[sortBy]) - calcAverage(student2[sortBy])
          : calcAverage(student2[sortBy]) - calcAverage(student1[sortBy]);
      });
    }

    default:
      return studentsCopy;
  }
}
