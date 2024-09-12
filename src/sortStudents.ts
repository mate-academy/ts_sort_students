
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

export type SortOrder = 'asc' | 'dsc';

function calcAverage(gradesArray: number[]): number {
  return gradesArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0,
  ) / gradesArray.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsArray: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsArray.sort((studentA: Student, studentB: Student) => {
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : -studentA[sortBy].localeCompare(studentB[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return studentsArray.sort((studentA: Student, studentB: Student) => {
        return order === 'asc'
          ? +studentA[sortBy] - +studentB[sortBy]
          : -(+studentA[sortBy] - +studentB[sortBy]);
      });

    case SortType.AverageGrade:
      return studentsArray.sort((studentA: Student, studentB: Student) => {
        return order === 'asc'
          ? calcAverage(studentA[sortBy]) - calcAverage(studentB[sortBy])
          : -(calcAverage(studentA[sortBy]) - calcAverage(studentB[sortBy]));
      });

    default:
      return studentsArray;
  }
}
