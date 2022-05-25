
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
      return sortedStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return sortedStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);
      });

    case SortType.AverageGrade:
      return sortedStudents.sort((a: Student, b: Student) => {
        const student1: number = takeAverage(a[sortBy]);
        const student2: number = takeAverage(b[sortBy]);

        return order === 'asc'
          ? student1 - student2
          : student2 - student1;
      });
    default:
      return [];
  }
}
