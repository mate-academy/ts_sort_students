
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

export function sortStudents(
  students: [], sortBy: SortType, order: SortOrder,
) : object[] {
  const copyStudents: [] = [...students];

  const getAverage = (arrayOfgrades: number[], arrLength: number): number => {
    return arrayOfgrades.reduce((start, current) => (
      current + start), 0) / arrLength;
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copyStudents.sort(
        (studentFirst: Student, studentSecond: Student) => {
          return order === 'asc'
            ? studentFirst[sortBy].localeCompare(studentSecond[sortBy])
            : studentSecond[sortBy].localeCompare(studentFirst[sortBy]);
        },
      );

    case SortType.Age:
    case SortType.Married:
      return copyStudents.sort(
        (studentFirst: Student, studentSecond: Student) => {
          return order === 'asc'
            ? +studentFirst[sortBy] - +studentSecond[sortBy]
            : +studentSecond[sortBy] - +studentFirst[sortBy];
        },
      );

    case SortType.AverageGrade:
      return copyStudents.sort(
        (studentFirst: Student, studentSecond: Student) => {
          const gr1 = studentFirst[sortBy];
          const gr2 = studentSecond[sortBy];
          const arrLength1 = gr1.length;
          const arrLength2 = gr2.length;

          return order === 'asc'
            ? getAverage(gr1, arrLength1) - getAverage(gr2, arrLength2)
            : getAverage(gr2, arrLength2) - getAverage(gr1, arrLength1);
        },
      );

    default: return copyStudents;
  }
}
