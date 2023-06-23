
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(student: Student): number {
  const grades = [...student.grades];
  const gradesLength = grades.length;

  if (gradesLength === 0) {
    return 0;
  }

  return grades.reduce((total, grade) => total + grade) / gradesLength;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      return sortedStudents.sort((s1, s2) => {
        return order === 'asc'
          ? s1.name.localeCompare(s2.name)
          : s2.name.localeCompare(s1.name);
      });
    case SortType.Surname:
      return sortedStudents.sort((s1, s2) => {
        return order === 'asc'
          ? s1.surname.localeCompare(s2.surname)
          : s2.surname.localeCompare(s1.surname);
      });
    case SortType.Age:
      return sortedStudents.sort((s1, s2) => {
        return order === 'asc'
          ? s1.age - s2.age
          : s2.age - s1.age;
      });
    case SortType.Married:
      return sortedStudents.sort((s1, s2) => {
        return order === 'asc'
          ? +s1.married - +s2.married
          : +s2.married - +s1.married;
      });
    case SortType.AverageGrade:
      return sortedStudents.sort((s1, s2) => {
        return order === 'asc'
          ? getAverageGrade(s1) - getAverageGrade(s2)
          : getAverageGrade(s2) - getAverageGrade(s1);
      });
    default:
      return sortedStudents;
  }
}
