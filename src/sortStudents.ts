
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const copyOfStudents = [...students];

  if (sortBy === SortType.Name) {
    return (order === 'asc')
      ? copyOfStudents.sort((a, b) => a.name.localeCompare(b.name))
      : copyOfStudents.sort((a, b) => b.name.localeCompare(a.name));
  }

  if (sortBy === SortType.Age) {
    return (order === 'asc')
      ? copyOfStudents.sort((a, b) => a.age - b.age)
      : copyOfStudents.sort((a, b) => b.age - a.age);
  }

  if (sortBy === SortType.Surname) {
    return (order === 'asc')
      ? copyOfStudents.sort((a, b) => a.surname.localeCompare(b.surname))
      : copyOfStudents.sort((a, b) => b.surname.localeCompare(a.surname));
  }

  if (sortBy === SortType.Married) {
    return (order === 'asc')
      ? copyOfStudents.sort((a, b) => Number(a.married) - Number(b.married))
      : copyOfStudents.sort((a, b) => Number(b.married) - Number(a.married));
  }

  return (order === 'asc')
    ? copyOfStudents.sort((a, b) => a.grades
      .reduce((c, d) => c + d) / a.grades.length
        - b.grades.reduce((c, d) => c + d) / b.grades.length)
    : copyOfStudents.sort((a, b) => b.grades
      .reduce((c, d) => c + d) / b.grades.length
        - a.grades.reduce((c, d) => c + d) / a.grades.length);
}
