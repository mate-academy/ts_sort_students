
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

export function takeAverage(gradesAverage: number[]): number {
  const average: number
    = gradesAverage.reduce((sum: number, current: number) => (
      sum + current
    ), 0);

  return average / gradesAverage.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedStudents.sort((stdnt1: Student, stdnt2: Student) => {
        return order === 'asc'
          ? stdnt1[sortBy].localeCompare(stdnt2[sortBy])
          : stdnt2[sortBy].localeCompare(stdnt1[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return sortedStudents.sort((stdnt1: Student, stdnt2: Student) => {
        return order === 'asc'
          ? Number(stdnt1[sortBy]) - Number(stdnt2[sortBy])
          : Number(stdnt2[sortBy]) - Number(stdnt1[sortBy]);
      });

    case SortType.AverageGrade:
      return sortedStudents.sort((stdnt1: Student, stdnt2: Student) => {
        const stdnt1Average: number = takeAverage(stdnt1[sortBy]);
        const stdnt12Average: number = takeAverage(stdnt2[sortBy]);

        return order === 'asc'
          ? stdnt1Average - stdnt12Average
          : stdnt12Average - stdnt1Average;
      });

    default:
      return [];
  }
}
