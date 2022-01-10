export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: [],
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  function averageValue(person: Student): number {
    return person.grades.reduce((sum, item) => sum + item)
      / person.grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
      return (order === 'asc')
        ? copyStudents.sort((firstStudent, secondStudent) => firstStudent
          .name.localeCompare(secondStudent.name))

        : copyStudents.sort((firstStudent, secondStudent) => secondStudent
          .name.localeCompare(firstStudent.name));

    case SortType.Surname:
      return (order === 'asc')
        ? copyStudents.sort((firstStudent, secondStudent) => firstStudent
          .surname.localeCompare(secondStudent.surname))

        : copyStudents.sort((firstStudent, secondStudent) => secondStudent
          .surname.localeCompare(firstStudent.surname));

    case SortType.Age:
      return (order === 'asc')
        ? copyStudents.sort((firstStudent, secondStudent) => firstStudent
          .age - secondStudent.age)

        : copyStudents.sort((firstStudent, secondStudent) => secondStudent
          .age - firstStudent.age);

    case SortType.Married:
      return (order === 'asc')
        ? copyStudents.sort((firstStudent, secondStudent) => +firstStudent
          .married - +secondStudent.married)

        : copyStudents.sort((firstStudent, secondStudent) => +secondStudent
          .married - +firstStudent.married);

    case SortType.AverageGrade:
      return (order === 'asc')
        ? copyStudents.sort((firstStudent,
          secondStudent) => averageValue(firstStudent)
          - averageValue(secondStudent))

        : copyStudents.sort((firstStudent,
          secondStudent) => averageValue(secondStudent)
          - averageValue(firstStudent));

    default:
      return copyStudents;
  }
}
