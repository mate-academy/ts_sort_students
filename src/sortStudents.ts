
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: Array <number>,
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Array <Student>,
  sortBy: SortType,
  order: SortOrder,
) : Array <Student> {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
      studentsCopy.sort((student1, student2) => {
        if (order === 'asc') {
          return student1.name.localeCompare(student2.name);
        }

        return student2.name.localeCompare(student1.name);
      });
      break;

    case SortType.Surname:
      studentsCopy.sort((student1, student2) => {
        if (order === 'asc') {
          return student1.surname.localeCompare(student2.surname);
        }

        return student2.surname.localeCompare(student1.surname);
      });
      break;

    case SortType.Age:
      studentsCopy.sort((student1, student2) => {
        if (order === 'asc') {
          return student1.age - student2.age;
        }

        return student2.age - student1.age;
      });
      break;

    case SortType.Married:
      studentsCopy.sort((student1, student2) => {
        if (order === 'asc') {
          return +student1.married - +student2.married;
        }

        return +student2.married - +student1.married;
      });
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((student1, student2) => {
        if (order === 'asc') {
          return student1.grades.reduce((point1, point2) => point1 + point2)
            / student1.grades.length
            - student2.grades.reduce((point1, point2) => point1 + point2)
            / student2.grades.length;
        }

        return student2.grades.reduce((point1, point2) => point1 + point2)
        / student2.grades.length
        - student1.grades.reduce((point1, point2) => point1 + point2)
        / student1.grades.length;
      });
      break;

    default:
      break;
  }

  return studentsCopy;
}
