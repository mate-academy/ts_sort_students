// import { type } from "os";

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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents: Student[] = [...students];

  // students.forEach((item) => copyOfStudents.push({ ...item }));

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyOfStudents.sort((a: Student, b: Student): number => {
        if (order === 'asc') {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case SortType.Married:
    case SortType.Age:
      copyOfStudents.sort((a: Student, b: Student): number => {
        if (order === 'asc') {
          return +a[sortBy] - +b[sortBy];
        }

        return +b[sortBy] - +a[sortBy];
      });
      break;

    case SortType.AverageGrade:
      copyOfStudents.sort((a: Student, b: Student):number => {
        function sumOfArray(arrey: number[]):number {
          return arrey.reduce((acc, mark) => acc + mark)
              / arrey.length;
        }

        const avarSumOne = sumOfArray(a.grades);
        const avarSumTwo = sumOfArray(b.grades);

        if (order === 'asc') {
          return avarSumOne >= avarSumTwo
            ? 1
            : -1;
        }

        return avarSumTwo >= avarSumOne
          ? 1
          : -1;
      });
      break;

    default:
      throw new Error('not correct sort style');
  }

  return copyOfStudents;
}
