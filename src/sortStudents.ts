
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
    order: SortOrder
  ): Student[] {
  const arrayForSorting = [...students];
  const orderForSorting: number = order === 'asc' ? 1 : -1;

  return arrayForSorting.sort((studentA: Student, studentB: Student) => {
    switch (sortBy) {
      case SortType.Name:
        return studentA.name.localeCompare(studentB.name)
          * orderForSorting;

      case SortType.Surname:
        return studentA.surname.localeCompare(studentB.surname)
          * orderForSorting;

      case SortType.Age:
        return (studentA.age - studentB.age) * orderForSorting;

      case SortType.Married:
        return (Number(studentA.married) - Number(studentB.married))
          * orderForSorting;

      case SortType.AverageGrade:
        return (getAverageGrade(studentA) - getAverageGrade(studentB))
          * orderForSorting;
    }
  });
}

function getAverageGrade(student: Student): number {
  const sum: number = student.grades.reduce((accumulator: number, currentValue: number) => {
    return accumulator + currentValue;
  }, 0)

  return sum / student.grades.length;
}
