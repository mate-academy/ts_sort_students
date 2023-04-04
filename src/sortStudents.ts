
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

function countAvg(array: number[]): number {
  return array.reduce((count: number, num: number) => count + num, 0)
  / array.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudents: Student[] = [...students];

  newStudents.sort((student1: Student, student2: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        if (order === 'asc') {
          return student1[sortBy].localeCompare(student2[sortBy]);
        }

        return student2[sortBy].localeCompare(student1[sortBy]);

      case SortType.Age:
      case SortType.Married:
        if (order === 'asc') {
          return Number(student1[sortBy]) - Number(student2[sortBy]);
        }

        return Number(student2[sortBy]) - Number(student1[sortBy]);

      case SortType.AverageGrade:
        if (order === 'asc') {
          return countAvg(student1[sortBy]) - countAvg(student2[sortBy]);
        }

        return countAvg(student2[sortBy]) - countAvg(student1[sortBy]);

      default:
        throw new Error('error');
    }
  });

  return newStudents;
}
