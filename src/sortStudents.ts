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
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  sortOrder: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];
  const sortDirection = (sortOrder === 'asc') ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:

      sortedStudents.sort(
        // eslint-disable-next-line max-len
        (firstStudent: Student, secondStudent: Student) => firstStudent.name.localeCompare(secondStudent.name),
      );
      break;

    case SortType.Surname:
      return sortedStudents.sort(
        // eslint-disable-next-line max-len
        (firstStudent: Student, secondStudent: Student) => firstStudent.surname.localeCompare(secondStudent.surname),
      );

    case SortType.Age:
      return sortedStudents.sort(
        // eslint-disable-next-line max-len
        (firstStudent: Student, secondStudent: Student) => sortDirection * (firstStudent.age - secondStudent.age),
      );

    case SortType.Married:
      sortedStudents.sort((firstStudent: Student, secondStudent: Student) => (
        // eslint-disable-next-line max-len
        firstStudent.married > secondStudent.married ? sortDirection : sortDirection * -1
      ));
      break;

    case SortType.AverageGrade:
      sortedStudents.sort((firstStudent: Student, secondStudent: Student) => {
        // eslint-disable-next-line max-len
        const avgFirstStudent = firstStudent.grades.reduce((acc, curr) => acc + curr, 0)
          / firstStudent.grades.length;
        // eslint-disable-next-line max-len
        const avgSecondStudent = secondStudent.grades.reduce((acc, curr) => acc + curr, 0)
          / secondStudent.grades.length;

        return sortDirection * (avgFirstStudent - avgSecondStudent);
      });
      break;

    default:
      throw new Error('Error');
  }

  return sortedStudents;
}
