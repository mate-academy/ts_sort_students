
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

function avgGrade(marks: number[]): number {
  return marks
    .reduce((accum: number, currMark: number) => accum + currMark, 0)
    / marks.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents = copyStudents
        .sort((firstPerson, secondPerson) => {
          return order === 'asc'
            ? firstPerson[sortBy].localeCompare(secondPerson[sortBy])
            : secondPerson[sortBy].localeCompare(firstPerson[sortBy]);
        });
      break;

    case SortType.Age:
    case SortType.Married:
      copyStudents = copyStudents
        .sort((firstPerson, secondPerson) => {
          return order === 'asc'
            ? firstPerson[sortBy] - secondPerson[sortBy]
            : secondPerson[sortBy] - firstPerson[sortBy];
        });
      break;

    case SortType.AverageGrade:
      copyStudents = copyStudents
        .sort((firstPerson, secondPerson) => {
          return order === 'asc'
            ? avgGrade(firstPerson[sortBy]) - avgGrade(secondPerson[sortBy])
            : avgGrade(secondPerson[sortBy]) - avgGrade(firstPerson[sortBy]);
        });
      break;

    default:
      break;
  }

  return copyStudents;
}
