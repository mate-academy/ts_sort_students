
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
  const sortedStudents = [...students];

  if (sortBy === SortType.Age) {
    sortedStudents.sort((prevS, student) => {
      return order === 'desc'
        ? student.age - prevS.age
        : prevS.age - student.age;
    });
  }

  if (sortBy === SortType.Surname) {
    sortedStudents.sort((prevS, student) => {
      return order === 'desc'
        ? student.surname.localeCompare(prevS.surname)
        : prevS.surname.localeCompare(student.surname);
    });
  }

  if (sortBy === SortType.Name) {
    sortedStudents.sort((prevS, student) => {
      return order === 'desc'
        ? student.name.localeCompare(prevS.name)
        : prevS.name.localeCompare(student.name);
    });
  }

  if (sortBy === SortType.Married) {
    sortedStudents.sort((prevS, student) => {
      return order === 'desc'
        ? Number(student.married) - Number(prevS.married)
        : Number(prevS.married) - Number(student.married);
    });
  }

  if (sortBy === SortType.AverageGrade) {
    sortedStudents
      .sort((prevS, student) => {
        const prevGrades = prevS.grades
          .reduce((acc, grade) => acc + grade) / prevS.grades.length;

        const currentGrades = student.grades
          .reduce((acc, grade) => acc + grade) / student.grades.length;

        return order === 'desc'
          ? currentGrades - prevGrades
          : prevGrades - currentGrades;
      });
  }

  return sortedStudents;
}
