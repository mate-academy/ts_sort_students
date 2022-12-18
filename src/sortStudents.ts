
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function calcAvgGrade(arrayOfGrades: number[]): number {
  const sumOfGrades: number = arrayOfGrades
    .reduce((acc: number, current: number) => acc + current, 0);

  return sumOfGrades / arrayOfGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((studentA, studentB) => {
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);
      });
      break;

    case SortType.Age:
    case SortType.Married:
      studentsCopy.sort((studentA, studentB) => {
        return order === 'asc'
          ? Number(studentA[sortBy]) - Number(studentB[sortBy])
          : Number(studentB[sortBy]) - Number(studentA[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((studentA, studentB) => {
        return order === 'asc'
          ? calcAvgGrade(studentA[sortBy]) - calcAvgGrade(studentB[sortBy])
          : calcAvgGrade(studentB[sortBy]) - calcAvgGrade(studentA[sortBy]);
      });
      break;
    default:
      break;
  }

  return studentsCopy;
}
