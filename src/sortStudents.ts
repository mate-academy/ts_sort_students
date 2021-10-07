interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

type SortOrder = 'asc'|'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  let result: Student[];

  switch (sortBy) {
    case SortType.Name:
      result = (order === 'asc')
        ? [...students].sort((student1, student2) => (
          student1.name.localeCompare(student2.name)))
        : [...students].sort((student1, student2) => (
          student2.name.localeCompare(student1.name)));
      break;
    case SortType.Surname:
      result = (order === 'asc')
        ? [...students].sort((student1, student2) => (
          student1.surname.localeCompare(student2.surname)))
        : [...students].sort((student1, student2) => (
          student2.surname.localeCompare(student1.surname)));
      break;
    case SortType.Age:
      result = (order === 'asc')
        ? [...students].sort((student1, student2) => (
          student1.age - student2.age))
        : [...students].sort((student1, student2) => (
          student2.age - student1.age));
      break;
    case SortType.Married:
      result = (order === 'asc')
        ? [...students].sort((student1, student2) => (
          Number(student1.married) - Number(student2.married)))
        : [...students].sort((student1, student2) => (
          Number(student2.married) - Number(student1.married)));
      break;
    case SortType.AverageGrade:
      result = (order === 'asc')
        ? [...students].sort((student1, student2) => (
          (student1.grades.reduce((grade1, grade2) => grade1 + grade2)
            / student1.grades.length))
         - (student2.grades.reduce((grade1, grade2) => grade1 + grade2)
            / student2.grades.length))
        : [...students].sort((student1, student2) => (
          (student2.grades.reduce((grade1, grade2) => grade1 + grade2)
            / student2.grades.length)
        - (student1.grades.reduce((grade1, grade2) => grade1 + grade2)
            / student1.grades.length)));
      break;
    default:
      break;
  }

  return result;
}
