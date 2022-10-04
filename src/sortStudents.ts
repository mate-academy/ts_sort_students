
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

function getAverageGrade(grades: number[]): number {
  return grades.reduce((acc, current) => acc + current, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copy.sort((firstStudent, secondStudent) => {
          return firstStudent[sortBy].localeCompare(secondStudent[sortBy]);
        })
        : copy.sort((firstStudent, secondStudent) => {
          return secondStudent[sortBy].localeCompare(firstStudent[sortBy]);
        });

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copy.sort((firstStudent, secondStudent) => {
          return +(firstStudent[sortBy]) - +(secondStudent[sortBy]);
        })
        : copy.sort((firstStudent, secondStudent) => {
          return +(secondStudent[sortBy]) - +(firstStudent[sortBy]);
        });

    case SortType.AverageGrade:
      return order === 'asc'
        ? copy.sort((firstStudent, secondStudent) => {
          return getAverageGrade(firstStudent[sortBy])
          - getAverageGrade(secondStudent[sortBy]);
        })
        : copy.sort((firstStudent, secondStudent) => {
          return getAverageGrade(secondStudent[sortBy])
          - getAverageGrade(firstStudent[sortBy]);
        });

    default:
      return copy;
  }
}
