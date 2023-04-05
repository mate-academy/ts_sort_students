
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

function calcAverGrade(grades: number[]): number {
  // eslint-disable-next-line
  const average: number = grades.reduce((acc: number, curr: number) => acc + curr, 0) / grades.length;

  return average;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((student1, student2) => (order === 'asc'
        ? student1[sortBy].localeCompare(student2[sortBy])
        : student2[sortBy].localeCompare(student1[sortBy])
      ));
      break;

    case SortType.Age:
    case SortType.Married:
      studentsCopy.sort((student1, student2) => (order === 'asc'
        ? Number(student1[sortBy]) - Number(student2[sortBy])
        : Number(student2[sortBy]) - Number(student1[sortBy])
      ));
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((student1, student2) => (order === 'asc'
        ? calcAverGrade(student1[sortBy]) - calcAverGrade(student2[sortBy])
        : calcAverGrade(student2[sortBy]) - calcAverGrade(student1[sortBy])
      ));
      break;

    default:
      return studentsCopy;
  }

  return studentsCopy;
}
