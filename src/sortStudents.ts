
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

function calcAvgGrade(gradesArr: number[]): number {
  return gradesArr.reduce((x, y) => x + y, 0) / gradesArr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copyOfStudents.sort((studentA, studentB) => {
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return copyOfStudents.sort((studentA, studentB) => {
        return order === 'asc'
          ? +studentA[sortBy] - +studentB[sortBy]
          : +studentB[sortBy] - +studentA[sortBy];
      });

    case SortType.AverageGrade:
      return copyOfStudents.sort((studentA, studentB) => {
        return order === 'asc'
          ? calcAvgGrade(studentA[sortBy]) - calcAvgGrade(studentB[sortBy])
          : calcAvgGrade(studentB[sortBy]) - calcAvgGrade(studentA[sortBy]);
      });

    default:
      break;
  }

  return copyOfStudents;
}
