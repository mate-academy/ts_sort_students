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
  AverageGrade = 'grade',
}

export type SortOrder = 'asc' | 'desc';

type Sorter = 'name' | 'surname';

function sortByAlphabet(
  arr: Student[],
  order: SortOrder,
  sorter: Sorter,
): Student[] {
  return arr.sort((a, b) => {
    return order === 'asc'
      ? a[sorter].localeCompare(b[sorter])
      : b[sorter].localeCompare(a[sorter]);
  });
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case 'name':
      return sortByAlphabet(studentsCopy, order, 'name');

    case 'surname':
      return sortByAlphabet(studentsCopy, order, 'surname');

    case 'age':
      return studentsCopy.sort((a, b) => {
        return order === 'asc' ? a.age - b.age : b.age - a.age;
      });

    case 'married':
      return studentsCopy.sort((a, b) => {
        return order === 'asc'
          ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);
      });

    case 'grade':
      return studentsCopy.sort((a, b) => {
        const averageA = a.grades.reduce((c, d) => c + d, 0) / a.grades.length;
        const averageB = b.grades.reduce((c, d) => c + d, 0) / b.grades.length;

        return order === 'asc'
          ? averageA - averageB
          : averageB - averageA;
      });

    default:
      return studentsCopy;
  }
}
