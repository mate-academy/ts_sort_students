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
  const sortedStudent: Student[] = [...students];

  function averageGrade(studentGrades: number[]): number {
    if (studentGrades.length === 0) {
      return 0;
    }

    return studentGrades.reduce((sum, studentGrade) => sum + studentGrade, 0)
      / studentGrades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedStudent.sort((studentA: Student, studentB: Student) => {
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);
      });

    case SortType.Age:
      return sortedStudent.sort((studentA: Student, studentB: Student) => {
        return order === 'asc'
          ? (studentA.age - studentB.age)
          : (studentB.age - studentA.age);
      });

    case SortType.Married:
      return sortedStudent.sort((studentA: Student, studentB: Student) => {
        return order === 'asc'
          ? Number(studentA.married) - Number(studentB.married)
          : Number(studentB.married) - Number(studentA.married);
      });

    case SortType.AverageGrade:
      return sortedStudent.sort((studentA: Student, studentB: Student) => {
        return order === 'asc'
          ? averageGrade(studentA.grades) - averageGrade(studentB.grades)
          : averageGrade(studentB.grades) - averageGrade(studentA.grades);
      });

    default:
      return sortedStudent;
  }
}
