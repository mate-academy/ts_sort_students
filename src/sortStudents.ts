
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
      studentsCopy.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? student1.name.localeCompare(student2.name)
          : student2.name.localeCompare(student1.name);
      });

      break;
    case SortType.Surname:
      studentsCopy.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? student1.surname.localeCompare(student2.surname)
          : student2.surname.localeCompare(student1.surname);
      });

      break;

    case SortType.Age:
      studentsCopy.sort((student1:Student, student2: Student) => {
        return order === 'asc'
          ? student1.age - student2.age
          : student2.age - student1.age;
      });

      break;

    case SortType.Married:
      studentsCopy.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? Number(student1.married) - Number(student2.married)
          : Number(student2.married) - Number(student1.married);
      });
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((student1: Student, student2: Student) => {
        const averageGrade1 = student1.grades.reduce((a, b) => a + b, 0)
          / student1.grades.length;
        const averageGrade2 = student2.grades.reduce((a, b) => a + b, 0)
          / student2.grades.length;

        return order === 'asc'
          ? averageGrade1 - averageGrade2
          : averageGrade2 - averageGrade1;
      });
      break;

    default:
      throw Error('something went wrong');
  }

  return studentsCopy;
}
