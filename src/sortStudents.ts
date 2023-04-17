
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
      return order === 'asc' ? copyStudents
        .sort((firstStud, secondStud) => firstStud.name
          .localeCompare(secondStud.name)) : copyStudents
        .sort((firstStud, secondStud) => secondStud.name
          .localeCompare(firstStud.name));

    case SortType.Surname:
      return order === 'asc' ? copyStudents
        .sort((firstStud, secondStud) => firstStud.surname
          .localeCompare(secondStud.surname))
        : copyStudents.sort((firstStud, secondStud) => secondStud.surname
          .localeCompare(firstStud.surname));

    case SortType.Age:
      return order === 'asc' ? copyStudents
        .sort((firstStud, secondStud) => firstStud.age - secondStud.age)
        : copyStudents.sort((firstStud, secondStud) => secondStud.age
         - firstStud.age);

    case SortType.Married:
      return order === 'asc' ? copyStudents
        .sort((firstStud, secondStud) => (+firstStud.married)
      - (+secondStud.married)) : copyStudents
        .sort((firstStud, secondStud) => +secondStud.married
        - +firstStud.married);

    case SortType.AverageGrade:
      return order === 'asc' ? copyStudents.sort((firstStud, secondStud) => (
        getAverage(firstStud.grades)) - (getAverage(secondStud.grades)))
        : copyStudents
          .sort((firstStud, secondStud) => getAverage(secondStud.grades)
        - getAverage(firstStud.grades));

    default:
      return students;
  }
}
