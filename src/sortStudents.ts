
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  let arrSort: Student[] = [];

  function getAverageAge(array: number[]): number {
    return array
      .reduce((sum: number, el: number) => sum + el, 0) / array.length;
  }

  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Age:
      arrSort = copyStudents.sort((aObj: Student, bObj: Student) => (
        (order === 'asc')
          ? aObj.age - bObj.age
          : bObj.age - aObj.age
      ));
      break;

    case SortType.Name:
    case SortType.Surname:
      arrSort = copyStudents.sort((aObj: Student, bObj: Student) => (
        (order === 'asc')
          ? aObj[sortBy].localeCompare(bObj[sortBy])
          : bObj[sortBy].localeCompare(aObj[sortBy])
      ));
      break;

    case SortType.Married:
      arrSort = copyStudents.sort((aObj: Student, bObj: Student) => (
        (order === 'asc')
          ? Number(aObj.married) - Number(bObj.married)
          : Number(bObj.married) - Number(aObj.married)
      ));
      break;

    case SortType.AverageGrade:
      arrSort = copyStudents.sort((aObj: Student, bObj: Student) => (
        (order === 'asc')
          ? getAverageAge(aObj.grades) - getAverageAge(bObj.grades)
          : getAverageAge(bObj.grades) - getAverageAge(aObj.grades)
      ));
      break;

    default: throw new Error('Error');
  }

  return arrSort;
}
