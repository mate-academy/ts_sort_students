
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number [];
}

export enum SortType {
  // describe SortType enum
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

// create SortOrder type
export type SortOrder = 'asc'|'desc';

function getAverage(grades:number[]):number {
  const sum = grades.reduce((acc, val) => acc + val, 0);

  return sum / grades.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  // write your function
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return copyStudents.sort((firstStud, secondStud) => (
        order === 'asc' ? firstStud.name.localeCompare(secondStud.name)
          : secondStud.name.localeCompare(firstStud.name)));

    case SortType.Surname:
      return copyStudents.sort((firstStud, secondStud) => (
        order === 'asc' ? firstStud.surname.localeCompare(secondStud.surname)
          : secondStud.surname.localeCompare(firstStud.surname)));

    case SortType.Age:
      return copyStudents.sort((firstStud, secondStud) => (
        order === 'asc' ? firstStud.age - secondStud.age
          : secondStud.age - firstStud.age));

    case SortType.Married:
      return copyStudents.sort((firstStud, secondStud) => (
        order === 'asc' ? (+firstStud.married) - (+secondStud.married)
          : +secondStud.married - +firstStud.married));

    case SortType.AverageGrade:
      return copyStudents.sort((firstStud, secondStud) => (order === 'asc'
        ? getAverage(firstStud.grades) - getAverage(secondStud.grades)
        : getAverage(secondStud.grades) - getAverage(firstStud.grades)));

    default:
      return students;
  }
}
