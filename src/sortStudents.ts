/* eslint-disable max-len */

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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades:number[]):number {
  return grades.reduce((sum, currentValue) => sum
  + currentValue, 0) / grades.length;
}

export function sortStudents(students: Student, sortBy: SortType, order: SortOrder): Student[] {
  // write your function
  const copy: Student[] = Object.assign([], students);

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copy.sort((firstStuden, secondStudent) => {
          return firstStuden[sortBy].localeCompare(secondStudent[sortBy]);
        })
        : copy.sort((firstStuden, secondStudent) => {
          return secondStudent[sortBy].localeCompare(firstStuden[sortBy]);
        });
    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copy.sort((firstStuden, secondStudent) => {
          return +(firstStuden[sortBy]) - +(secondStudent[sortBy]);
        })
        : copy.sort((firstStuden, secondStudent) => {
          return +(secondStudent[sortBy]) - +(firstStuden[sortBy]);
        });
    case SortType.AverageGrade:
      return order === 'asc'
        ? copy.sort((firstStuden, secondStudent) => {
          return getAverageGrade(firstStuden[sortBy])
        - getAverageGrade(secondStudent[sortBy]);
        })
        : copy.sort((firstStuden, secondStudent) => {
          return getAverageGrade(secondStudent[sortBy])
        - getAverageGrade(firstStuden[sortBy]);
        });

    default:
      return copy;
  }
}
