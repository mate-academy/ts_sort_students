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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  if (sortBy === SortType.AverageGrade) {
    return studentsCopy.sort((studentA: Student, studentB: Student) => {
      const averageGradeA = studentA.grades
        .reduce((acc, grade) => acc + grade, 0) / studentA.grades.length;
      const averageGradeB = studentB.grades
        .reduce((acc, grade) => acc + grade, 0) / studentB.grades.length;

      if (order === 'asc') {
        return averageGradeA - averageGradeB;
      }

      return averageGradeB - averageGradeA;
    });
  }

  if (sortBy === SortType.Age) {
    return studentsCopy.sort((studentA: Student, studentB: Student) => {
      if (order === 'asc') {
        return studentA[sortBy] - studentB[sortBy];
      }

      return studentB[sortBy] - studentA[sortBy];
    });
  }

  if (sortBy === SortType.Married) {
    return studentsCopy.sort((studentA: Student, studentB: Student) => {
      let isStudentAMarried = 0;
      let isStudentBMarried = 0;

      if (studentA[sortBy] === true) {
        isStudentAMarried = 1;
      } else {
        isStudentAMarried = -1;
      }

      if (studentB[sortBy] === true) {
        isStudentBMarried = 1;
      } else {
        isStudentBMarried = -1;
      }

      if (order === 'asc') {
        return isStudentAMarried - isStudentBMarried;
      }

      return isStudentBMarried - isStudentAMarried;
    });
  }

  return studentsCopy.sort((studentA: Student, studentB: Student) => {
    if (order === 'asc') {
      return studentA[sortBy].localeCompare(studentB[sortBy]);
    }

    return studentB[sortBy].localeCompare(studentA[sortBy]);
  });
}
