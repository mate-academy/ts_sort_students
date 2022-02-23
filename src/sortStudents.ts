export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: Array<number>;
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function getAverageAgeOf(student: Student): number {
  return student.grades.reduce(
    (accumulator, nextGrade) => accumulator + nextGrade,
  ) / student.grades.length;
}

export function sortStudents(
  students: Array<Student>, sortBy: SortType, order: SortOrder,
): Array<Student> {
  return [...students].sort((studentA, studentB) => {
    let studentARef: Student = studentA;
    let studentBRef: Student = studentB;

    if (order === 'desc') {
      [studentARef, studentBRef] = [studentBRef, studentARef];
    }

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return studentARef[sortBy].localeCompare(studentBRef[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return <number>studentARef[sortBy] - <number>studentBRef[sortBy];

      case SortType.AverageGrade:
        return getAverageAgeOf(studentARef) - getAverageAgeOf(studentBRef);

      default:
        return 0;
    }
  });
}
