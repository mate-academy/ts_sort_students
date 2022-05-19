
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

export function averageGrade(pupil: number[]): number {
  return pupil.reduce((first, second) => first + second, 0) / pupil.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy:Student[] = [...students];

  switch (sortBy) {
    case 'name':
    case 'surname':
      return order === 'asc'
        ? copy.sort((pupil1, pupil2) => pupil1[sortBy]
          .localeCompare(pupil2[sortBy]))
        : copy.sort((pupil1, pupil2) => pupil2[sortBy]
          .localeCompare(pupil1[sortBy]));

    case 'grades':
      return order === 'asc'
        ? copy.sort((pupil1, pupil2) => averageGrade(pupil1[sortBy])
          - averageGrade(pupil2[sortBy]))
        : copy.sort((pupil1, pupil2) => averageGrade(pupil2[sortBy])
          - averageGrade(pupil1[sortBy]));

    default:
      return order === 'asc'
        ? copy.sort((pupil1, pupil2) => +pupil1[sortBy] - +pupil2[sortBy])
        : copy.sort((pupil1, pupil2) => +pupil2[sortBy] - +pupil1[sortBy]);
  }
}
