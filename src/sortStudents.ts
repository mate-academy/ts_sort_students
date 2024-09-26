
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedStudents.sort((firstSt: Student, secondSt: Student) => {
        return order === 'asc'
          ? firstSt[sortBy].localeCompare(secondSt[sortBy])
          : secondSt[sortBy].localeCompare(firstSt[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return sortedStudents.sort((firstSt: Student, secondSt: Student) => {
        return order === 'asc'
          ? Number(firstSt[sortBy]) - Number(secondSt[sortBy])
          : Number(secondSt[sortBy]) - Number(firstSt[sortBy]);
      });

    case SortType.AverageGrade:
      return sortedStudents.sort((firstSt: Student, secondSt: Student) => {
        const firstStAverage: number = takeAverage(firstSt[sortBy]);
        const secondStAverage: number = takeAverage(secondSt[sortBy]);

        return order === 'asc'
          ? firstStAverage - secondStAverage
          : secondStAverage - firstStAverage;
      });

    default:
      return [];
  }
}
