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

function getAverageGrade(arrayOfGrades:number[]):number {
  return arrayOfGrades
    .reduce((a:number, b:number) => a + b, 0) / arrayOfGrades.length;
}

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case 'name':
      studentsCopy.sort((a, b) => (
        order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)));
      break;
    case 'surname':
      studentsCopy.sort((a, b) => (
        order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname)));
      break;
    case 'age':
      studentsCopy.sort((a, b) => (
        order === 'asc' ? a.age - b.age : b.age - a.age));
      break;
    case 'married':
      studentsCopy.sort((a, b) => (
        order === 'asc'
          ? (a.married ? -1 : 1) - (b.married ? -1 : 1)
          : (a.married ? -1 : 1) - (b.married ? -1 : 1)));
      break;
    case 'grades':
      studentsCopy.sort((a, b) => (
        order === 'asc'
          ? getAverageGrade(a.grades) - getAverageGrade(b.grades)
          : getAverageGrade(b.grades) - getAverageGrade(a.grades)));
      break;
    default:
      break;
  }

  return studentsCopy;
}
