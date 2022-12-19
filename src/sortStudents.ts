export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  averageGrade: number;
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';
export type SortFunc = (a: Student[], b: SortType, c: SortOrder) => Student[];

export const sortStudents: SortFunc = (students, sortBy, order) => {
  const sortCallback = (a: Student, b: Student): number => {
    const [studentA, studentB] = order === 'asc'
      ? [a, b]
      : [b, a];

    const getSum = (x: number, y: number): number => x + y;
    const getAverageGradeOf = (student: Student): number => (
      student.grades.reduce(getSum) / student.grades.length
    );

    studentA.averageGrade = getAverageGradeOf(studentA);
    studentB.averageGrade = getAverageGradeOf(studentB);

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return studentA[sortBy].localeCompare(studentB[sortBy]);

      case SortType.Age:
      case SortType.Married:
      case SortType.AverageGrade:
        return Number(studentA[sortBy]) - Number(studentB[sortBy]);

      default:
        return 0;
    }
  };

  return [...students].sort(sortCallback);
};
