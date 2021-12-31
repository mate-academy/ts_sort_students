export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  const copiedStudents: Student[] = students
    .map((student: Student) => ({ ...student }));

  switch (sortBy) {
    case SortType.Name:
      copiedStudents.sort((student1: Student, student2: Student) => {
        return (order === 'asc')
          ? student1.name.localeCompare(student2.name)
          : student2.name.localeCompare(student1.name);
      });
      break;

    case SortType.Surname:
      copiedStudents.sort((student1: Student, student2: Student) => {
        return (order === 'asc')
          ? student1.surname.localeCompare(student2.surname)
          : student2.surname.localeCompare(student1.surname);
      });
      break;

    case SortType.Age:
      copiedStudents.sort((student1: Student, student2: Student) => {
        return (order === 'asc')
          ? student1.age - student2.age
          : student2.age - student1.age;
      });
      break;

    case SortType.Married:
      copiedStudents.sort((student1: Student, student2: Student) => {
        return (order === 'asc')
          ? +student1.married - +student2.married
          : +student2.married - +student1.married;
      });
      break;

    case SortType.AverageGrade:
      copiedStudents.sort((student1: Student, student2: Student) => {
        const student1AverageGrade: number = student1.grades
          .reduce((sum, grade) => sum + grade, 0) / student1.grades.length;

        const student2AverageGrade: number = student2.grades
          .reduce((sum, grade) => sum + grade, 0) / student2.grades.length;

        return (order === 'asc')
          ? student1AverageGrade - student2AverageGrade
          : student2AverageGrade - student1AverageGrade;
      });
      break;

    default:
      return [];
  }

  return copiedStudents;
}
