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

function getAverageGrade(student: Student): number {
  return student.grades
    .reduce((a: number, b: number) => a + b) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  studentsCopy.sort((studentA: Student, studentB: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);
      case SortType.Age:
        return order === 'asc'
          ? studentA.age - studentB.age
          : studentB.age - studentA.age;
      case SortType.Married:
        return order === 'asc'
          ? +studentA.married - +studentB.married
          : +studentB.married - +studentA.married;
      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrade(studentA) - getAverageGrade(studentB)
          : getAverageGrade(studentB) - getAverageGrade(studentA);
      default:
        return 0;
    }
  });

  return studentsCopy;
}
