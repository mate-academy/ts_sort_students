
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
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const sortedSudents:Student[] = [...students];

  return sortedSudents.sort((a, b) => {
    const sum = (total:number, current:number):number => total + current;
    let studentA = a;
    let studentB = b;

    if (order === 'desc') {
      studentA = b;
      studentB = a;
    }

    switch (sortBy) {
      case 'name':
      case 'surname':
        return studentA[sortBy].localeCompare(studentB[sortBy]);
      case 'married':
      case 'age':
        return +studentA[sortBy] - +studentB[sortBy];
      case 'grades':
        return studentA[sortBy].reduce(sum, 0) / studentA[sortBy].length
          - studentB[sortBy].reduce(sum, 0) / studentB[sortBy].length;
      default:
        return 0;
    }
  });
}
