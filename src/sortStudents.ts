
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const listOfStudents: Student[] = [...students];
  const averageValue = (values: number[]): number => values
    .reduce((sum: number, num: number) => sum + num, 0) / values.length;

  switch (sortBy) {
    case SortType.Name:
      listOfStudents.sort((studentA: Student, studentB: Student) => {
        return (order === 'asc')
          ? studentA.name.localeCompare(studentB.name)
          : studentB.name.localeCompare(studentA.name);
      });
      break;

    case SortType.Surname:
      listOfStudents.sort((studentA: Student, studentB: Student) => {
        return (order === 'asc')
          ? studentA.surname.localeCompare(studentB.surname)
          : studentB.surname.localeCompare(studentA.surname);
      });
      break;

    case SortType.Age:
      listOfStudents.sort((studentA: Student, studentB: Student) => {
        return (order === 'asc')
          ? studentA.age - studentB.age
          : studentB.age - studentA.age;
      });
      break;

    case SortType.Married:
      listOfStudents.sort((studentA: Student, studentB: Student) => {
        return (order === 'asc')
          ? +studentA.married - +studentB.married
          : +studentB.married - +studentA.married;
      });
      break;

    case SortType.AverageGrade:
    default:
      listOfStudents.sort((studentA: Student, studentB: Student) => {
        return (order === 'asc')
          ? averageValue(studentA.grades) - averageValue(studentB.grades)
          : averageValue(studentB.grades) - averageValue(studentA.grades);
      });
      break;
  }

  return listOfStudents;
}
