export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
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
  const sum = student.grades.reduce((acc, grade) => acc + grade, 0);

  return sum / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let aAverageGrade = getAverageGrade(a);
    let bAverageGrade = getAverageGrade(b);

    switch (sortBy) {
      case SortType.Name:
        if (a.name === b.name) {
          return students.indexOf(a) - students.indexOf(b);
        }

        return order === 'asc' ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);

      case SortType.Surname:
        if (a.surname === b.surname) {
          return students.indexOf(a) - students.indexOf(b);
        }

        return order === 'asc' ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);

      case SortType.Age:
        if (a.age === b.age) {
          return students.indexOf(a) - students.indexOf(b);
        }

        return order === 'asc' ? a.age - b.age : b.age - a.age;

      case SortType.Married:
        return order === 'asc' ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);

      case SortType.AverageGrade:
        aAverageGrade = getAverageGrade(a);
        bAverageGrade = getAverageGrade(b);

        if (aAverageGrade === bAverageGrade) {
          return students.indexOf(a) - students.indexOf(b);
        }

        return order === 'asc' ? aAverageGrade - bAverageGrade
          : bAverageGrade - aAverageGrade;
      default:
        throw new Error('Invalid SortType');
    }
  });

  return sortedStudents;
}
