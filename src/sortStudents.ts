
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: Array<number>,
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export const averageArray = (arr: Array<number>): number => {
  return arr.reduce((acc: number, prev: number): number => acc + prev)
  / arr.length;
};

export function sortStudents(
  students: Array<Student>,
  sortBy: SortType,
  order: SortOrder,
): Array<Student> {
  const copyOfStudents: Array<Student> = [...students];

  switch (sortBy) {
    case 'name':
    case 'surname':
      copyOfStudents.sort((student1: Student, student2: Student): number => {
        const key1 = student1[sortBy].toUpperCase();
        const key2 = student2[sortBy].toUpperCase();

        const orderDirection: number = order === 'asc' ? -1 : 1;

        return key1 <= key2
          ? orderDirection
          : (-1) * orderDirection;
      });
      break;

    case 'married':
    case 'age':
      copyOfStudents.sort((student1: Student, student2: Student): number => {
        return order === 'asc'
          ? +student1[sortBy] - +student2[sortBy]
          : +student2[sortBy] - +student1[sortBy];
      });
      break;

    case 'grades':
      copyOfStudents.sort((student1: Student, student2: Student): number => {
        const avg1 = averageArray(student1.grades);

        const avg2 = averageArray(student2.grades);

        return order === 'asc' ? avg1 - avg2 : avg2 - avg1;
      });
      break;

    default:
      break;
  }

  return copyOfStudents;
}
