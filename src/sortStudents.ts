
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
      copy.sort((studA, studB) => studA[sortBy].localeCompare(studB[sortBy]));

      if (order === 'desc') {
        copy.sort((studA, studB) => studB[sortBy].localeCompare(studA[sortBy]));
      }
      break;
    case SortType.Age:
    case SortType.Married:
      copy.sort((studA, studB) => Number(studA[sortBy])
      - Number(studB[sortBy]));

      if (order === 'desc') {
        copy.sort((studA, studB) => Number(studB[sortBy])
        - Number(studA[sortBy]));
      }
      break;
    case SortType.AverageGrade:
      copy.sort((studA, studB) => averageGr(studA.grades)
        - averageGr(studB.grades));

      if (order === 'desc') {
        copy.sort((studA, studB) => averageGr(studB.grades)
          - averageGr(studA.grades));
      }
      break;

    default: throw new Error('Sort type is not supported');
  }

  return copy;
}
