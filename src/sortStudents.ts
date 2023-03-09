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

function averageGrade(totalGrades: number[]): number {
  const sum = totalGrades.reduce((prev, item) => prev + item, 0);

  return sum / totalGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents = [...students];
  const typeOfOrder = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
      return copyOfStudents.sort((firstStudent, secondStudent) => (
        typeOfOrder
          ? firstStudent.name.localeCompare(secondStudent.name)
          : secondStudent.name.localeCompare(firstStudent.name)
      ));

    case SortType.Surname:
      return copyOfStudents.sort((firstStudent, secondStudent) => (
        typeOfOrder
          ? firstStudent.surname.localeCompare(secondStudent.surname)
          : secondStudent.surname.localeCompare(firstStudent.surname)
      ));

    case SortType.Age:
      return copyOfStudents.sort((firstStudent, secondStudent) => (
        typeOfOrder
          ? firstStudent.age - secondStudent.age
          : secondStudent.age - firstStudent.age
      ));

    case SortType.Married:
      return copyOfStudents.sort((firstStudent, secondStudent) => (
        typeOfOrder
          ? +firstStudent.married - +secondStudent.married
          : +secondStudent.married - +firstStudent.married
      ));

    case SortType.AverageGrade:
      return copyOfStudents.sort((firstStudent, secondStudent) => (
        typeOfOrder
          ? averageGrade(
            firstStudent.grades,
          ) - averageGrade(secondStudent.grades)
          : averageGrade(
            secondStudent.grades,
          ) - averageGrade(firstStudent.grades)
      ));

    default:
      return students;
  }
}
