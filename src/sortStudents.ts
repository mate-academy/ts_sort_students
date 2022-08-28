
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

export function sortStudents(
  students: Array<Student>,
  sortBy: SortType,
  order: SortOrder,
): Array<Student> {
  const copyOfStudents: Array<Student> = [...students];

  switch (sortBy) {
    case 'name':
    case 'surname':
      copyOfStudents.sort((a: Student, b: Student): number => {
        const key1 = a[sortBy].toUpperCase();
        const key2 = b[sortBy].toUpperCase();

        if (key1 < key2) {
          return order === 'asc' ? -1 : 1;
        }

        if (key1 > key2) {
          return order === 'asc' ? 1 : -1;
        }

        return 0;
      });
      break;

    case 'age':
      copyOfStudents.sort((a: Student, b: Student): number => {
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;
      });
      break;

    case 'married':
      copyOfStudents.sort((a: Student, b: Student): number => {
        return order === 'asc'
          ? +a.married - +b.married
          : +b.married - +a.married;
      });
      break;

    case 'grades':
      copyOfStudents.sort((a: Student, b: Student): number => {
        const avg1 = a.grades.reduce((acc, prev) => acc + prev)
        / a.grades.length;

        const avg2 = b.grades.reduce((acc, prev) => acc + prev)
        / b.grades.length;

        return order === 'asc' ? avg1 - avg2 : avg2 - avg1;
      });
      break;

    default:
      break;
  }

  return copyOfStudents;
}
