export interface Student {
  // describe Student interface'
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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function sorted(
  studentArray: Student[],
  sortBy: SortType,
  order: string,
): object[] {
  return studentArray
    .sort((student1: Student, student2: Student) => {
      const output = typeof student1[sortBy] === 'string'
        ? student1[sortBy].toString().localeCompare(student2[sortBy].toString())
        : Number(student1[sortBy]) - Number(student2[sortBy]);

      return order === 'asc' ? output : -output;
    });
}

export function sortStudents(
  // eslint-disable-next-line @typescript-eslint/no-shadow
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  if (sortBy === 'grades') {
    const average = (array: number[]): number => {
      return array.reduce((a: number, b: number) => a + b, 0) / array.length;
    };

    return students.sort((student1: Student, student2: Student) => {
      const output = average(student1.grades) - average(student2.grades);

      return order === 'asc' ? output : -output;
    });
  }

  return sorted(students, sortBy, order);
}
