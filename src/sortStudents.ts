
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
)
  : Student[] {
  const copy = [...students];

  function averageGr(grades: number[]): number {
    return grades.reduce((a, b) => a + b, 0) / grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copy.sort((studA, studB) => studA[sortBy]
          .localeCompare(studB[sortBy]))
        : copy.sort((studA, studB) => studB[sortBy]
          .localeCompare(studA[sortBy]));
    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copy.sort((studA, studB) => Number(studA[sortBy])
          - Number(studB[sortBy]))
        : copy.sort((studA, studB) => Number(studB[sortBy])
          - Number(studA[sortBy]));
    case SortType.AverageGrade:
      return order === 'asc'
        ? copy.sort((studA, studB) => averageGr(studA.grades)
          - averageGr(studB.grades))
        : copy.sort((studA, studB) => averageGr(studB.grades)
          - averageGr(studA.grades));

    default: throw new Error('Sort type is not supported');
  }
}
