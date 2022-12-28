
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const copy = [...students];

  function averageGr(grades: number[]): number {
    return grades.reduce((a, b) => a + b, 0) / grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
      copy.sort((studA, studB) => studA.name.localeCompare(studB.name));

      if (order === 'desc') {
        copy.sort((studA, studB) => studB.name.localeCompare(studA.name));
      }
      break;
    case SortType.Surname:
      copy.sort((studA, studB) => studA.surname.localeCompare(studB.surname));

      if (order === 'desc') {
        copy.sort((studA, studB) => studB.surname.localeCompare(studA.surname));
      }
      break;
    case SortType.Age:
      copy.sort((studA, studB) => studA.age - studB.age);

      if (order === 'desc') {
        copy.sort((studA, studB) => studB.age - studA.age);
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
    case SortType.Married:
      copy.sort((studA, studB) => Number(studA.married)
        - Number(studB.married));

      if (order === 'desc') {
        copy.sort((studA, studB) => Number(studB.married)
          - Number(studA.married));
      }
      break;

    default:
  }

  return copy;
}
