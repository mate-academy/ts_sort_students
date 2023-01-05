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

function sortByAlphabet(
  arr: Student[],
  order: SortOrder,
  sorter: SortType.Name | SortType.Surname,
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
    case 'surname':
      return sortByAlphabet(studentsCopy, order, sortBy);

    case 'age':
    case 'married':
      return studentsCopy.sort((a, b) => {
        return order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);
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
