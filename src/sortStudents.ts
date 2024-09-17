
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  averGrades: number;
}

export enum SortType {
  name = 'name',
  surname = 'surname',
  age = 'age',
  married = 'married',
  avarageGrade = 'aver',
}

export type SortOrder = 'asc' | 'desc';

function averGrades(grades: number[]): number {
  const result = grades.reduce((a, b) => (a + b), 0) / grades.length;

  return result;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const newStudArr: Student[] = [...students];

  switch (sortBy) {
    case SortType.name:
    case SortType.surname:
      return newStudArr.sort((a, b) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });

    case SortType.age:
      return newStudArr.sort((a, b) => {
        return order === 'asc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      });

    case SortType.avarageGrade:
      return newStudArr.sort((a, b) => {
        return order === 'asc'
          ? averGrades(a[sortBy]) - averGrades(b[sortBy])
          : averGrades(b[sortBy]) - averGrades(a[sortBy]);
      });

    default:
      throw Error('Enter a valid sort value.');
  }
}
