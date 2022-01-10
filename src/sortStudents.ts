
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
  const copyStudents = [...students];

  function getAverageGrade(student: Student): number {
    return student.grades.reduce((sum, marks) => sum + marks)
      / student.grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        return copyStudents.sort((firstStudent, secondStudent) => firstStudent
          .name.localeCompare(secondStudent.name));
      }

      return copyStudents.sort((firstStudent, secondStudent) => secondStudent
        .name.localeCompare(firstStudent.name));

    case SortType.Surname:
      if (order === 'asc') {
        return copyStudents.sort((firstStudent, secondStudent) => firstStudent
          .surname.localeCompare(secondStudent.surname));
      }

      return copyStudents.sort((firstStudent, secondStudent) => secondStudent
        .surname.localeCompare(firstStudent.surname));

    case SortType.Age:
      if (order === 'asc') {
        return copyStudents.sort((firstStudent, secondStudent) => firstStudent
          .age - secondStudent.age);
      }

      return copyStudents.sort((firstStudent, secondStudent) => secondStudent
        .age - firstStudent.age);

    case SortType.Married:
      if (order === 'asc') {
        return copyStudents.sort((firstStudent,
          secondStudent) => Number(firstStudent.married)
          - Number(secondStudent.married));
      }

      return copyStudents.sort((firstStudent,
        secondStudent) => Number(secondStudent.married)
        - Number(firstStudent.married));

    case SortType.AverageGrade:
      if (order === 'asc') {
        return copyStudents.sort((firstStudent,
          secondStudent) => getAverageGrade(firstStudent)
          - getAverageGrade(secondStudent));
      }

      return copyStudents.sort((firstStudent,
        secondStudent) => getAverageGrade(secondStudent)
        - getAverageGrade(firstStudent));

    default:
      return copyStudents;
  }
}
