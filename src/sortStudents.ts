
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents = [...students];

  function averageValue(person: Student): number {
    return person.grades.reduce((sum, item) => sum + item)
    / person.grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
      return (order === 'asc')
        ? copyOfStudents.sort((firstStudent, secondStudent) => firstStudent
          .name.localeCompare(secondStudent.name))

        : copyOfStudents.sort((firstStudent, secondStudent) => secondStudent
          .name.localeCompare(firstStudent.name));

    case SortType.Surname:
      return (order === 'asc')
        ? copyOfStudents.sort((firstStudent, secondStudent) => firstStudent
          .surname.localeCompare(secondStudent.surname))

        : copyOfStudents.sort((firstStudent, secondStudent) => secondStudent
          .surname.localeCompare(firstStudent.surname));

    case SortType.Age:
      return (order === 'asc')
        ? copyOfStudents.sort((firstStudent, secondStudent) => firstStudent
          .age - secondStudent.age)

        : copyOfStudents.sort((firstStudent, secondStudent) => secondStudent
          .age - firstStudent.age);

    case SortType.Married:
      return (order === 'asc')
        ? copyOfStudents.sort((firstStudent, secondStudent) => +firstStudent
          .married - +secondStudent.married)

        : copyOfStudents.sort((firstStudent, secondStudent) => +secondStudent
          .married - +firstStudent.married);

    case SortType.AverageGrade:
      return (order === 'asc')
        ? copyOfStudents.sort((firstStudent,
          secondStudent) => averageValue(firstStudent)
          - averageValue(secondStudent))

        : copyOfStudents.sort((firstStudent,
          secondStudent) => averageValue(secondStudent)
          - averageValue(firstStudent));

    default:
      return copyOfStudents;
  }
}
