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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const newStudentsArr: Student[] = [...students];

  switch (sortBy) {
    case 'surname':
    case 'name':
      newStudentsArr.sort((a, b) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case 'age':
    case 'married':
      newStudentsArr.sort((a, b) => {
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      });
      break;

    default:
      newStudentsArr.sort((a, b) => {
        const firstAverageGrade
          = a.grades.reduce((q, w) => q + w) / a.grades.length;
        const secondAverageGrade
          = b.grades.reduce((e, r) => e + r) / b.grades.length;

        return order === 'asc'
          ? firstAverageGrade - secondAverageGrade
          : secondAverageGrade - firstAverageGrade;
      });
      break;
  }

  return newStudentsArr;
}
