
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'avarage',
}

export type SortOrder = 'asc' | 'desc';

function findAvg(arr: number[]): number {
  return arr.reduce((sum, val) => sum + val) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studs: Student[] = [...students];

  studs.sort((stud1: Student, stud2: Student) => {
    if (typeof stud1[sortBy] === 'string') {
      const stud1Str = stud1[sortBy].toString();
      const stud2Str = stud2[sortBy].toString();

      if (order === 'desc') {
        return stud2Str.localeCompare(stud1Str);
      }

      return stud1Str.localeCompare(stud2Str);
    }

    if (sortBy === 'avarage') {
      const stud1Avg = findAvg(stud1.grades);
      const stud2Avg = findAvg(stud2.grades);

      if (order === 'desc') {
        return Number(stud2Avg) - Number(stud1Avg);
      }

      return Number(stud1Avg) - Number(stud2Avg);
    }

    if (order === 'desc') {
      return Number(stud2[sortBy]) - Number(stud1[sortBy]);
    }

    return Number(stud1[sortBy]) - Number(stud2[sortBy]);
  });

  return studs;
}
