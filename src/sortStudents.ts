
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
  AverageGrade = 'grades'
}

function gradesCalc(arr: number[]): number {
  return arr.reduce((valueA, valueB) => valueA + valueB) / arr.length;
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const resArr = [...students];

  switch (sortBy) {
    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        return resArr.sort((a, b) => +(a[sortBy]) - +(b[sortBy]));
      }

      return resArr.sort((a, b) => +(b[sortBy]) - +(a[sortBy]));

    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        return resArr.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      }

      return resArr.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.AverageGrade:
      return resArr.sort((a, b) => {
        if (order === 'asc') {
          return gradesCalc(a[sortBy]) - gradesCalc(b[sortBy]);
        }

        return gradesCalc(b[sortBy]) - gradesCalc(a[sortBy]);
      });

    default:
      return students;
  }
}
