
export interface Student {
  students:string,
  surname:string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function average(num:number[]): number {
  return num.reduce((x:number, y:number) => x + y) / num.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  return studentsCopy.sort((studentA:Student, studentB:Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +studentA[sortBy] - +studentB[sortBy]
          : +studentB[sortBy] - +studentA[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? average(studentA[sortBy]) - average(studentB[sortBy])
          : average(studentB[sortBy]) - average(studentA[sortBy]);

      default:
        throw new Error('Error, pls fix someth:)))');
    }
  });
}
