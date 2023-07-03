
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(students: Student) : number {
  const gradesLength: number = students.grades.length;
  const averageGrade: number = students.grades.reduce(
    (total, num) => total + num, 0,
  );

  return averageGrade / gradesLength;
}

export function sortStudents(students:Student[],
  sortBy: SortType, order:SortOrder):Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return copyStudents.sort((a, b) => a.name.localeCompare(b.name));

    case SortType.Surname:
      return copyStudents.sort((a, b) => a.surname.localeCompare(b.surname));

    case SortType.Age:
      return copyStudents.sort(
        (a, b) => (
          order === 'asc' ? a.age - b.age : b.age - a.age),
      );

    case SortType.Married:
      return copyStudents.sort((a, b) => (
        b.married ? 1 : 0) - (a.married ? 1 : 0));

    case SortType.AverageGrade:
      return copyStudents.sort((a, b) => (
        order === 'desc' ? getAverageGrade(b) - getAverageGrade(a)
          : getAverageGrade(a) - getAverageGrade(b)));

    default:
      break;
  }

  return copyStudents;
}
