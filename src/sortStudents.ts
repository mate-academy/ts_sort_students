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
  AverageGrade = 'averageGrade' // required an initializer by lint
}

export type SortOrder = 'asc' | 'desc';

export function calculateAvgGrade(student: Student): number {
  const sum = student.grades.reduce(
    (prevGrade: number, nextGrade: number) => prevGrade + nextGrade, 0,
  );

  return sum / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return students.sort(
    (prevStudent: Student, nextStudent: Student): number => {
      let studentA: Student = prevStudent;
      let studentB: Student = nextStudent;

      if (order === 'desc') {
        [studentA, studentB] = [studentB, studentA];
      }

      const avgPrev = calculateAvgGrade(studentA);
      const avgNext = calculateAvgGrade(studentB);

      switch (sortBy) {
        case SortType.Name || SortType.Surname:
          return studentA[sortBy].localeCompare(studentB[sortBy]);

        case SortType.Age || SortType.Married:
          return +studentA[sortBy] - +studentB[sortBy];

        case SortType.AverageGrade:
          return avgPrev - avgNext;

        default: // default case required by linter
          throw new Error('ERROR');
      }
    },
  );
}
