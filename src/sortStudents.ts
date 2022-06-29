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

function getAverageGrade(student: Student): number {
  return student.grades
    .reduce((a: number, b: number) => a + b) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  studentsCopy.sort((studentA: Student, studentB: Student) => {
    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? studentA.name.localeCompare(studentB.name)
          : studentB.name.localeCompare(studentA.name);
      case SortType.Surname:
        return order === 'asc'
          ? studentA.surname.localeCompare(studentB.surname)
          : studentB.surname.localeCompare(studentA.surname);
      case SortType.Age:
        return order === 'asc'
          ? studentA.age - studentB.age
          : studentB.age - studentA.age;
      case SortType.Married:
        return order === 'asc'
          ? +studentA.married - +studentB.married
          : +studentB.married - +studentA.married;
      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrade(studentA) - getAverageGrade(studentB)
          : getAverageGrade(studentB) - getAverageGrade(studentA);
      default:
        return 0;
    }
  });

  return studentsCopy;
}
