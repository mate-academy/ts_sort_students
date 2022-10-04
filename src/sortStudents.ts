
export interface Student {
  // describe Student interface
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
  AverageGrade = 'grades'
}

function AverageGrades(grade:number[]):number {
  return grade.reduce((acc: number, number: number) => acc + number)
    / grade.length;
}
// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedStudents.sort((prev: Student, curr: Student) => {
        if (order === 'asc') {
          return prev[sortBy].localeCompare(curr[sortBy]);
        }

        return curr[sortBy].localeCompare(prev[sortBy]);
      });
      break;

    case SortType.Age:
    case SortType.Married:
      sortedStudents.sort((prev: Student, curr: Student) => {
        if (order === 'asc') {
          return Number(prev[sortBy]) - Number(curr[sortBy]);
        }

        return Number(curr[sortBy]) - Number(prev[sortBy]);
      });
      break;
    case SortType.AverageGrade:
      sortedStudents.sort((prev: Student, curr: Student) => {
        const previousAverage = AverageGrades(prev[sortBy]);

        const currentAverage = AverageGrades(curr[sortBy]);

        if (order === 'asc') {
          return previousAverage - currentAverage;
        }

        return currentAverage - previousAverage;
      });
      break;
    default:
      break;
  }

  return sortedStudents;
}
