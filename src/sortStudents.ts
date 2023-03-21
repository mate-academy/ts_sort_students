
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function getAverage(array: number[]): number {
  return array.reduce((a, b) => a + b) / array.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents: Student[] = [...students];
  const chooseOrder: boolean = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname: copiedStudents.sort(
      (a, b) => {
        return chooseOrder
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      },
    );
      break;
    case SortType.Age: copiedStudents.sort(
      (a: Student, b: Student) => {
        return chooseOrder
          ? a.age - b.age
          : b.age - a.age;
      },
    );
      break;
    case SortType.Married: copiedStudents.sort(
      (a: Student, b: Student) => {
        return chooseOrder
          ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);
      },
    );
      break;
    case SortType.AverageGrade: copiedStudents.sort(
      (a: Student, b: Student) => {
        return chooseOrder
          ? getAverage(a.grades) - getAverage(b.grades)
          : getAverage(b.grades) - getAverage(a.grades);
      },
    );
      break;
    default: return copiedStudents;
  }

  return copiedStudents;
}
