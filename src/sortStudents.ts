
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function average(gradesArray: number[]): number {
  return gradesArray.reduce((sum, num) => sum + num, 0) / gradesArray.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const result = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:

      return (order === 'asc')
        ? result.sort((firstName, secondName) => firstName[sortBy]
          .localeCompare(secondName[sortBy]))
        : result.sort((firstName, secondName) => secondName[sortBy]
          .localeCompare(firstName[sortBy]));

    case SortType.Age:
    case SortType.Married:

      return (order === 'asc')
        ? result.sort((a, b) => +(a[sortBy]) - +(b[sortBy]))
        : result.sort((a, b) => +(b[sortBy]) - +(a[sortBy]));

    case SortType.AverageGrade:

      return result.sort((a, b) => {
        return (order === 'asc')
          ? average(a[sortBy]) - average(b[sortBy])
          : average(b[sortBy]) - average(a[sortBy]);
      });

    default:
      return students;
  }
}
