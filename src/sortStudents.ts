
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

function average(values: number[]): number {
  return values
    .reduce((total: number, value: number) => total + value) / values.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsSort = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsSort.sort((studentOne: Student, studentTwo: Student) => {
        if (order === 'asc') {
          return studentOne[sortBy].localeCompare(studentTwo[sortBy]);
        }

        if (order === 'desc') {
          return studentTwo[sortBy].localeCompare(studentOne[sortBy]);
        }

        return 0;
      });
      break;

    case SortType.Age:
    case SortType.Married:
      studentsSort.sort((studentOne: Student, studentTwo: Student): number => {
        if (order === 'asc') {
          return Number(studentOne[sortBy]) - Number(studentTwo[sortBy]);
        }

        if (order === 'desc') {
          return Number(studentTwo[sortBy]) - Number(studentOne[sortBy]);
        }

        return 0;
      });
      break;

    case SortType.AverageGrade:
      studentsSort.sort((studentOne: Student, studentTwo: Student): number => {
        if (order === 'asc') {
          return average(studentOne[sortBy]) - average(studentTwo[sortBy]);
        }

        if (order === 'desc') {
          return average(studentTwo[sortBy]) - average(studentOne[sortBy]);
        }

        return 0;
      });
      break;

    default: break;
  }

  return studentsSort;
}
