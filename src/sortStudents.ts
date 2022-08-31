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

const averageGrades = (grades: number[]): number => {
  return grades.reduce((sum, grade) => sum + grade) / grades.length;
};

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopyArr: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? studentsCopyArr.sort((studentA, studentB) => studentA.name
          .localeCompare(studentB.name))
        : studentsCopyArr.sort((studentA, studentB) => studentB.name
          .localeCompare(studentA.name));

    case SortType.Surname:
      return order === 'asc'
        ? studentsCopyArr.sort((studentA, studentB) => studentA.surname
          .localeCompare(studentB.surname))
        : studentsCopyArr.sort((studentA, studentB) => studentB.surname
          .localeCompare(studentA.surname));

    case SortType.Age:
      return order === 'asc'
        ? studentsCopyArr
          .sort((studentA, studentB) => studentA.age - studentB.age)
        : studentsCopyArr
          .sort((studentA, studentB) => studentB.age - studentA.age);

    case SortType.Married:
      return order === 'asc'
        ? studentsCopyArr.sort((studentA, studentB) => Number(studentA.married)
        - Number(studentB.married))
        : studentsCopyArr.sort((studentA, studentB) => Number(studentB.married)
        - Number(studentA.married));

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsCopyArr
          .sort((studentA, studentB) => averageGrades(studentA.grades)
        - averageGrades(studentB.grades))
        : studentsCopyArr
          .sort((studentA, studentB) => averageGrades(studentB.grades)
          - averageGrades(studentA.grades));

    default:
      return studentsCopyArr;
  }
}
