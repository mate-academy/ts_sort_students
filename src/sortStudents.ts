
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function grades(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsArr = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        return studentsArr.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      }

      return studentsArr.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        return studentsArr.sort((a, b) => +(a[sortBy]) - +(b[sortBy]));
      }

      return studentsArr.sort((a, b) => +(b[sortBy]) - +(a[sortBy]));

    case SortType.AverageGrade:
      return studentsArr.sort((a, b) => {
        if (order === 'asc') {
          return grades(a[sortBy]) - grades(b[sortBy]);
        }

        return grades(b[sortBy]) - grades(a[sortBy]);
      });

    default:
      throw new Error('Error');
  }
}
