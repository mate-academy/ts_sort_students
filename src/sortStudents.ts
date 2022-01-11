
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

function averageGrade(person: Student): number {
  return person.grades.reduce((grade, result) => grade + result)
  / person.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return (order === 'asc')
        ? sortedStudents.sort((firstStudent, secondStudent) => firstStudent
          .name.localeCompare(secondStudent.name))

        : sortedStudents.sort((firstStudent, secondStudent) => secondStudent
          .name.localeCompare(firstStudent.name));

    case SortType.Surname:
      return (order === 'asc')
        ? sortedStudents.sort((firstStudent, secondStudent) => firstStudent
          .surname.localeCompare(secondStudent.surname))

        : sortedStudents.sort((firstStudent, secondStudent) => secondStudent
          .surname.localeCompare(firstStudent.surname));

    case SortType.Age:
      return (order === 'asc')
        ? sortedStudents.sort((firstStudent, secondStudent) => firstStudent
          .age - secondStudent.age)

        : sortedStudents.sort((firstStudent, secondStudent) => secondStudent
          .age - firstStudent.age);

    case SortType.Married:
      return (order === 'asc')
        ? sortedStudents.sort((firstStudent, secondStudent) => +firstStudent
          .married - +secondStudent.married)

        : sortedStudents.sort((firstStudent, secondStudent) => +secondStudent
          .married - +firstStudent.married);

    case SortType.AverageGrade:
      return (order === 'asc')
        ? sortedStudents.sort((firstStudent,
          secondStudent) => averageGrade(firstStudent)
          - averageGrade(secondStudent))

        : sortedStudents.sort((firstStudent,
          secondStudent) => averageGrade(secondStudent)
          - averageGrade(firstStudent));

    default:
      return sortedStudents;
  }
}
